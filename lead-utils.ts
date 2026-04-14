export const LEAD_JSON_LIMIT = '4kb';
export const LEAD_WINDOW_MS = 10 * 60_000;
export const LEAD_MAX_REQUESTS_PER_WINDOW = 5;
export const LEAD_MIN_INTERVAL_MS = 10_000;
export const LEAD_DUPLICATE_COOLDOWN_MS = 2 * 60_000;

export type RateState = {
  windowStart: number;
  count: number;
  lastRequestAt: number;
};

export function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function normalizePhone(rawPhone: unknown): { ok: true; value: string } | { ok: false } {
  if (typeof rawPhone !== 'string') {
    return { ok: false };
  }

  const trimmed = rawPhone.trim();
  if (!trimmed) {
    return { ok: false };
  }

  const digits = trimmed.replace(/\D/g, '');
  if (!digits) {
    return { ok: false };
  }

  let normalized = digits;
  if (normalized.length === 11 && (normalized.startsWith('7') || normalized.startsWith('8'))) {
    normalized = normalized.slice(1);
  }

  if (normalized.length !== 10) {
    return { ok: false };
  }

  if (/^(\d)\1{9}$/.test(normalized)) {
    return { ok: false };
  }

  if (normalized === '1234567890' || normalized === '0987654321') {
    return { ok: false };
  }

  if (normalized.startsWith('000')) {
    return { ok: false };
  }

  return { ok: true, value: normalized };
}

export function cleanupOldEntries(
  leadRateByIp: Map<string, RateState>,
  recentLeadByIpPhone: Map<string, number>,
  now: number,
) {
  for (const [ip, state] of leadRateByIp.entries()) {
    if (now - state.windowStart > LEAD_WINDOW_MS * 2) {
      leadRateByIp.delete(ip);
    }
  }

  for (const [key, timestamp] of recentLeadByIpPhone.entries()) {
    if (now - timestamp > LEAD_DUPLICATE_COOLDOWN_MS) {
      recentLeadByIpPhone.delete(key);
    }
  }
}

export function checkRateLimit(
  leadRateByIp: Map<string, RateState>,
  clientIp: string,
  now: number,
) {
  const current = leadRateByIp.get(clientIp);
  if (!current) {
    leadRateByIp.set(clientIp, {
      windowStart: now,
      count: 1,
      lastRequestAt: now,
    });
    return { allowed: true };
  }

  if (now - current.lastRequestAt < LEAD_MIN_INTERVAL_MS) {
    current.lastRequestAt = now;
    leadRateByIp.set(clientIp, current);
    return { allowed: false };
  }

  if (now - current.windowStart > LEAD_WINDOW_MS) {
    leadRateByIp.set(clientIp, {
      windowStart: now,
      count: 1,
      lastRequestAt: now,
    });
    return { allowed: true };
  }

  if (current.count >= LEAD_MAX_REQUESTS_PER_WINDOW) {
    current.lastRequestAt = now;
    leadRateByIp.set(clientIp, current);
    return { allowed: false };
  }

  current.count += 1;
  current.lastRequestAt = now;
  leadRateByIp.set(clientIp, current);

  return { allowed: true };
}
