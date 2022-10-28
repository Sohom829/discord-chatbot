# djs-chatbot

A powerful JavaScript library to make discord chatbot!

## Installation

### Npm

```sh
npm i djs-chatbot@latest
```

### Yarn

```sh
yarn add djs-chatbot@latest
```

## Documentation

Follow all the documentions to make it right

### Constructors

```ts
ChatBot;
```

This ChatBot constructor have all the methods to work.

### Methods

```ts
chatBotVersion(param: null);
```

This "chatBotVersion" method returns the package version. And it has no parameters

```ts
chat(uid: any, message: string, callback: any)
```

This "chat" method is the main. It interacts with our API.

## Examples

```js
const { ChatBot } = require("djs-chatbot");

const chatbot = new ChatBot();

chatbot.chatBotVersion(); // current version of the package

chatbot.chat("1", "Hello", (response) => {
  console.log(response); // returns {"cnt":"Hi, my friend! Do you want me to tell you a story?"}
});
```

## Note

This is just a beta version. This not not stable with discord.js yet.
