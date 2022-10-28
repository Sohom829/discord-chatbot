const { ChatBot } = require("../dist/bot");

const chatbot = new ChatBot();

chatbot.chatBotVersion();

chatbot.chat(`1`, `Hi`, (response) => {
  console.log(response);
});
