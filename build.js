const {
  TELEGRAM_TOKEN,
  VERCEL_URL,
} = require('./config')

/*
  This script is executing during Now's build step
  and calls Telegram API to set webhook URL to match
  deployed application url
*/

const TelegramBot = require('node-telegram-bot-api')
const webHookUrl = `https://${VERCEL_URL}/api/bot${TELEGRAM_TOKEN}`
const Telegram = new TelegramBot(TELEGRAM_TOKEN, {
  polling: false,
})

Telegram.setWebHook(webHookUrl).then(() => {
  console.log(`Webhook setted up`)
})
