# Get Telegram Chat ID

This is a simple bot that returns your Telegram Chat ID when you send a message to the bot.

It is also a simple proof of concept to deploy serverless Telegram Bot to Vercel's Now. 

### Local development

For local development polling mechaninsm is used to get Telegram messages.

1. Create `.env` file with your `TELEGRAM_TOKEN`. (TIP: Make sure to create a development bot, so you don't override production)

2. Install dependencies with `npm i`

3. Run with `npm start` or `npm run dev` for watching (`nodemon` is required, if you don't have it installed simple `npm i -g nodemon`)

4. Talk to your bot

### Production deployment (with Vercel)

Once you have a [Vercel account](https://vercel.com/signup) and [Vercel CLI](https://vercel.com/download) installed, simple deploy with `now` command. (Make sure to have setted up `TELEGRAM_TOKEN` as Environment Variable).

During build phase, Vercel will run `npm run now-build`, which will execute `build.js` and configure Telegram Bot using webhook.
