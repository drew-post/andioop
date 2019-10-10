const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: 'sends guide',
    execute(message) {
        const exampleEmbed = new Discord.RichEmbed()
        .setColor('#AA4747')
        .setTitle('andioop commands')
        .setAuthor('drew')
        .setDescription('prefix: "*"')
        .addField('*avatar', "displays avatar. if no user is mentioned, the user who called the command's avatar is shown, if one user is mentioned, the mentioned user's avatar is shown, and if multiple users are mentioned (up to 5), all of their avatars are shown in reverse order from which their mentioned")
        .addField('*time', "displays drew's local time")
        .addField('*vine', 'sends a vine')
        .addField('*yeehaw', 'YEEHAW')
        .setTimestamp()
        .setFooter('<3');
    
    message.channel.send(exampleEmbed);

        
    },
};