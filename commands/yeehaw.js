const Discord = require('discord.js');

module.exports = {
    name: 'yeehaw',
    description: 'says yeehaw/sends attachment',
    execute(message) {
        const attachment = new Discord.Attachment('https://i.imgur.com/Bdp01cF.jpg');

        message.channel.send('YEEHAW 🤠', attachment);
        message.react('🤠');
    },
};
