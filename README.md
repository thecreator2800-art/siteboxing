<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# BOXING VRN

Лендинг для записи на тренировки по боксу в Воронеже.

## Локальный запуск

Требуется `Node.js`.

1. Установите зависимости:
   `npm install`
2. Создайте `.env.local` на основе `.env.example` и укажите:
   `TELEGRAM_BOT_TOKEN`
   `TELEGRAM_CHAT_ID`
   `.env.local` нужен только для локальной конфигурации и не должен попадать в репозиторий.
3. Запустите проект:
   `npm run dev`

## Проверка проекта

- Проверка типов: `npm run lint`
- Проверка серверной валидации и rate limit: `npm test`
- Production-сборка: `npm run build`

Сайт откроется на [http://localhost:3000](http://localhost:3000).
