const TelegramBot = require('node-telegram-bot-api');
const { Token, Prefix } = require("./config.json");

const Client = new TelegramBot(Token, {polling: true});

Client.on('message', (message) => {
  const content = message.text
  const chatID  = message.chat.id
  const args    = content.slice(0).join(" ");

  if (content == `${Prefix}ping`) {
    Client.sendMessage(chatID, `Pong!`);
  }else {
    return;
  }
});
