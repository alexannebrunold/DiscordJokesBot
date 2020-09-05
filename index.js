const Discord = require("discord.js");
const bot = new Discord.Client();
var https = require("https");
const fetch = require("node-fetch");

// const { test } =

bot.on("message", function (message) {
  if (message.content === "!hey") {
    fetch("https://www.blagues-api.fr/api/random", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjE1ODk1NjIyNzUwNDM3NDE3IiwibGltaXQiOjEwMCwia2V5IjoibXhxRlNINHdIUkJBN1NtbWFSNWN5RUNqOHJpZE9hQXBBVVAxZm9TUjViNE1OdHFkT0siLCJjcmVhdGVkX2F0IjoiMjAyMC0wOS0wNVQyMjo0NTozMSswMjowMCIsImlhdCI6MTU5OTMzODczMX0.RU2ZDf7dHUAZ-vTfAA6puz7gE1WyrJyVzx3x89SggKU`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        message.reply(data.joke);
        if (message.content === "!send") {
          message.reply(data.answer);}
      });
      // if (message.content === "!send") {
    // fetch("https://www.blagues-api.fr/api/random", {
    //   headers: {
    //     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjE1ODk1NjIyNzUwNDM3NDE3IiwibGltaXQiOjEwMCwia2V5IjoibXhxRlNINHdIUkJBN1NtbWFSNWN5RUNqOHJpZE9hQXBBVVAxZm9TUjViNE1OdHFkT0siLCJjcmVhdGVkX2F0IjoiMjAyMC0wOS0wNVQyMjo0NTozMSswMjowMCIsImlhdCI6MTU5OTMzODczMX0.RU2ZDf7dHUAZ-vTfAA6puz7gE1WyrJyVzx3x89SggKU`,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     message.reply(data.answer);
    //     console.log(data);
    //   });
  // }
  }
  
});

bot.login("NzUxOTA2MTI5MzA2NzE0MTEz.X1P5Jg.jN3OiQ2-aHoQ03fOfjdvU2QH7Ag");
