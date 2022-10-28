require("dotenv").config();
const chalk = require("chalk");
const aquamarine = chalk.hex("#42f5b0");
const request = require("request");
const cbVersion = "0.0.1";

class ChatBot {
  methods: any;
  version: any;

  constructor() {
    this.methods = ["chatBotVersion", "chat"];
  }
  async chatBotVersion() {
    console.log(aquamarine(`${cbVersion}`));
  }
  async chat(uid: any, message: string, callback: any) {
    request(
      `http://api.brainshop.ai/get?bid=${process.env.APIBid}&key=${process.env.APIKey}&uid=${uid}&msg=${message}`,
      function (error: any, response: any, body: any) {
        if (error) throw new Error(error);

        return callback(body);
      }
    );
  }
}

export { ChatBot };
