const TelegramBot = require('node-telegram-bot-api')

const {
  TELEGRAM_TOKEN,
  PORT,
  VERCEL_URL,
} = require('../config')

const telegramOptions = {
  polling: !(VERCEL_URL), // Locally use polling for development
}

if (!!(VERCEL_URL)) {
  telegramOptions.webHook = {
    port: PORT,
  }
}

const Telegram = new TelegramBot(TELEGRAM_TOKEN, telegramOptions)

Telegram.on('message', function onMessage(msg) {
  const {
    chat: {
      id: chatId,
    },
    from: {
      id = '',
      first_name = null,
    }
  } = msg

  Telegram.sendMessage(chatId,
`Hello ${first_name}
Your Chat ID = ${id}`
  )

})

module.exports = async (req, res) => {
  Telegram.processUpdate(req.body)
  res.statusCode = 200
  res.end('OK')
}
