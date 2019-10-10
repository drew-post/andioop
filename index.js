// requires node.js file system module
const fs = require('fs');

// requires discord.js module
const Discord = require('discord.js');

// requires config file
 const botconfig = require('./botconfig.json');

// create new discord client
const client = new Discord.Client();

// collections extend map class
client.commands = new Discord.Collection();

// puts js files into an array, allows us to dynamically add to collection
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// adds to collection
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

// when the client is ready, run code one time
client.once('ready', () => {
	console.log('Ready!');
});

// welcome message if someone joins
client.on('guildMemberAdd', member => {
    // find welcome channel
    const channel = member.guild.channels.find(channel => channel.name === 'welcome');

    // if there's no welcome channel
    if(!channel) return;

    channel.send(`sup, ${member}`);
});

client.on('message', message => {
    // if message includes 'and i oop' and the author isn't the bot, write 'and i oop!'
    if ((message.content.includes('and i oop') || message.content.includes('and I oop') || message.content.includes('AND I OOP') || message.content.includes('And I oop') || message.content.includes('And i oop')) && !message.author.bot) {
        message.channel.send('and i oop!');
    }

    // if the bot wrote the message or it doesn't start w the prefix, return
    if(!message.content.startsWith('*') || message.author.bot) return;

    // create an args variable that slices off the prefix entirely and then splits it into an array by spaces
    const args = message.content.slice('*'.length).split(/ +/);

    // create a command variable by calling args.shift(), which will take the first element in array and return it while also removing it from the original array (so that you don't have the command name string inside the args array).
    const command = args.shift().toLowerCase();
    
    // if the command isn't there
    if (!client.commands.has(command)) return;

    // if it is, try to run it and catch errors
    try {
        client.commands.get(command).execute(message, args);
    } 
    catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

// log into discord with token
client.login(botconfig.token);