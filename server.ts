import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import {
  LEAD_DUPLICATE_COOLDOWN_MS,
  LEAD_JSON_LIMIT,
  RateState,
  checkRateLimit,
  cleanupOldEntries,
  isPlainObject,
  normalizePhone,
} from './lead-utils.ts';

dotenv.config({ path: '.env.local' });
dotenv.config();

const TRUST_PROXY = process.env.TRUST_PROXY === 'true';

const leadRateByIp = new Map<string, RateState>();
const recentLeadByIpPhone = new Map<string, number>();

function getClientIp(req: express.Request) {
  return req.ip || req.socket.remoteAddress || 'unknown';
}

function isAllowedSource(req: express.Request) {
  if (process.env.NODE_ENV !== 'production') {
    return true;
  }

  const host = req.get('host');
  if (!host) {
    return false;
  }

  const allowedHosts = new Set(
    [host, process.env.ALLOWED_LEAD_HOSTS ?? '']
      .flatMap((item) => item.split(','))
      .map((item) => item.trim())
      .filter(Boolean),
  );

  const origin = req.get('origin');
  const referer = req.get('referer');

  // Some browsers and proxy layers strip Origin/Referer.
  // If both are absent, do not block a potentially valid lead.
  if (!origin && !referer) {
    return true;
  }

  if (origin) {
    try {
      const originHost = new URL(origin).host;
      if (allowedHosts.has(originHost)) {
        return true;
      }
    } catch {
      // Ignore malformed origin and continue with referer validation.
    }
  }

  if (referer) {
    try {
      const refererHost = new URL(referer).host;
      if (allowedHosts.has(refererHost)) {
        return true;
      }
    } catch {
      // Malformed referer cannot be trusted.
    }
  }

  return false;
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const isProduction = process.env.NODE_ENV === 'production';
  app.set('trust proxy', TRUST_PROXY);
  app.disable('x-powered-by');

  app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
    next();
  });

  app.use('/api', (_req, res, next) => {
    res.setHeader('Cache-Control', 'no-store');
    next();
  });

  app.post('/api/leads', express.json({ limit: LEAD_JSON_LIMIT, strict: true }), async (req, res) => {
    const now = Date.now();
    cleanupOldEntries(leadRateByIp, recentLeadByIpPhone, now);

    if (!isAllowedSource(req)) {
      return res.status(403).json({ success: false, error: 'Forbidden' });
    }

    if (!isPlainObject(req.body)) {
      return res.status(400).json({ success: false, error: 'Invalid request body' });
    }

    const honeypot = typeof req.body.website === 'string' ? req.body.website.trim() : '';
    if (honeypot) {
      return res.status(400).json({ success: false, error: 'Invalid request' });
    }

    const normalizedPhone = normalizePhone(req.body.phone);
    if (!normalizedPhone.ok) {
      return res.status(400).json({ success: false, error: 'Invalid phone number' });
    }

    const clientIp = getClientIp(req);
    const rateLimitResult = checkRateLimit(leadRateByIp, clientIp, now);
    if (!rateLimitResult.allowed) {
      return res.status(429).json({ success: false, error: 'Too many requests' });
    }

    const leadSignature = `${clientIp}:${normalizedPhone.value}`;
    const duplicateTimestamp = recentLeadByIpPhone.get(leadSignature);
    if (duplicateTimestamp && now - duplicateTimestamp < LEAD_DUPLICATE_COOLDOWN_MS) {
      return res.status(429).json({ success: false, error: 'Too many repeated requests' });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Telegram credentials missing in environment variables');
      return res.status(500).json({ success: false, error: 'Server configuration error' });
    }

    const formattedDate = new Date().toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Moscow',
    });

    const message = [
      '🔥 <b>Новая заявка</b>',
      '━━━━━━━━━━━━━━',
      `📞 <b>Телефон:</b> <code>+7${normalizedPhone.value}</code>`,
      '📌 <b>Источник:</b> Hero-блок',
      `🕒 <b>Время:</b> ${formattedDate}`,
    ].join('\n');

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      if (!response.ok) {
        throw new Error('Telegram API request failed');
      }

      const data = await response.json();
      if (!data.ok) {
        throw new Error('Telegram API returned error');
      }

      recentLeadByIpPhone.set(leadSignature, now);
      return res.json({ success: true });
    } catch (error) {
      console.error('Lead delivery failed:', error);
      return res.status(502).json({ success: false, error: 'Unable to process request' });
    }
  });

  app.use('/api/leads', (err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    if (err instanceof SyntaxError) {
      return res.status(400).json({ success: false, error: 'Invalid JSON' });
    }

    const withType = err as { type?: string };
    if (withType.type === 'entity.too.large') {
      return res.status(413).json({ success: false, error: 'Payload too large' });
    }

    return res.status(400).json({ success: false, error: 'Bad request' });
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    const assetsPath = path.join(distPath, 'assets');

    app.use(
      '/assets',
      express.static(assetsPath, {
        immutable: true,
        index: false,
        maxAge: '1y',
        setHeaders: (res) => {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        },
      }),
    );

    app.use(
      express.static(distPath, {
        index: false,
        maxAge: '7d',
        setHeaders: (res, filePath) => {
          const normalizedPath = filePath.toLowerCase();

          if (normalizedPath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
            return;
          }

          if (normalizedPath.endsWith('.xml') || normalizedPath.endsWith('.txt')) {
            res.setHeader('Cache-Control', 'public, max-age=3600');
            return;
          }

          if (/\.(?:png|jpe?g|webp|svg|ico|css|js|woff2?)$/.test(normalizedPath)) {
            res.setHeader('Cache-Control', 'public, max-age=604800');
          }
        },
      }),
    );

    app.get('*', (_req, res) => {
      res.setHeader('Cache-Control', 'no-store');
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
