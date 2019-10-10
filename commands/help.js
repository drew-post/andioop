const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: 'sends guide',
    execute(message) {
        const exampleEmbed = new Discord.RichEmbed()
        .setColor('#AA4747')
        .setTitle('andioop commands')
        .setAuthor('drew')
        .setDescription('prefix is "*"')
        .addField('*avatar', "displays avatar \n- if no user is mentioned, the user who called the command's avatar is shown \n- if one user is mentioned, the mentioned user's avatar is shown \n- if multiple users are mentioned (up to 5),   all of their avatars are shown in reverse order from which they're mentioned")
        .addField('*time', "displays drew's local time (CST)")
        .addField('*vine', 'sends a random vine')
        .addField('*yeehaw', 'YEEHAW')
        .setTimestamp()
        .setFooter('<3');
    
    message.channel.send(exampleEmbed);

        
    },
};