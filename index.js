const keep_alive = require('./keep_alive.js')
const esrever = require('esrever'); 
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  // Here is where you need to code
  if (message.content == "Hey Goldie!") {
    message.channel.send("Meow! Meow!!");
  }
});

client.on('message', message => {
  // Here is where you need to code
  if (message.content == "Hi Goldie!") {
    message.channel.send("Meow!");
  }
});

client.on('message', message => {
  // Here is where you need to code
  if (message.content == "Goldie!") {
    message.channel.send("Meow??");
  }
});

client.on('message', message => {
  // Here is where you need to code
  if (message.content == "Goldie?") {
    message.channel.send("Meow!");
  }
});


client.on('message', message => {
  // Here is where you need to code
  if (message.content == "I love you Goldie!") {
    message.channel.send("*purr*");
  }
});


client.on('message', message => {
  // Here is where you need to code
  if (message.content == "How are you Goldie?") {
    message.channel.send("Meow!");
  }
});

client.on('message', message => {
  // Here is where you need to code
  if (message.content == "chat spam") {
    message.channel.send("GOLDIE SPAM!");
  }
});

client.on('message', message => {
  // Here is where you need to code
  if (message.content == "GOLDIE SPAM!") {
    message.channel.send("GOLDIE SPAM!");
  }
});

client.on('message', message => {
  // Here is where you need to code
  if (message.content == "goldie spam happening") {
    message.channel.send("A goldie spam is happening soon @everyone! While Sparky and i get ready, Owen will be keeping you updated! Thank you!");
  }
});

client.on('message', message => {
  // Here is where you need to code
  if (message.content == "goldie spam done") {
    message.channel.send("Thank you for participating in the Goldie spam @everyone!");
  }
});


client.login(process.env.token);