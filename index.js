// requires discord.js module
const Discord = require('discord.js');

// requires config file
const config = require('./config.json');

// create new discord client
const client = new Discord.Client();

// when the client is ready, run code one time
client.once('ready', () => {
	console.log('Ready!');
});

// logs message content
client.on('message', message => {
    if(message.content === '!ping') {
        message.channel.send('pong');
    }
});

// log into discord with token
client.login('config.token');