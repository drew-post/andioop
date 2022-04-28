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
        .addField('*catfact', "fetches random cat fact from: https://catfact.ninja/fact")
        .addField('*clowncheck', "we all do it")
        .addField('*joke', "fetches random joke from: https://sv443.net/jokeapi/v2/?ref=apilist.fun")
        .addField('*lyrics {artist} {title}', "shows lyrics to a specified song \n- songs and artists with more than one word in them MUST be separated with a '/' (EX: 'harry/styles as/it/was', 'SZA, 20/something', 'the/band/camino berenstein', 'queen bicycle'). \n- unfortunately, messages in discord can only be 2000 characters or fewer, so some songs may not show up correctly.")
        .addField('*randomdog', 'fetches random dog image from: https://dog.ceo/api/breeds/image/random')
        .addField('*time', "displays drew's local time (CST)")
        .addField('*vine', 'sends a random vine')
        .addField('*yeehaw', 'YEEHAW')
        .setTimestamp()
        .setFooter('<3');
    
    message.channel.send(exampleEmbed);

        
    },
};