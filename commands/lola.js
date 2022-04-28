module.exports = {
    name: 'lola',
    description: 'sends lola pic',
    execute(message) {

        message.channel.send('lola 🥺', { file: "./pets/lola.jpg" });  
        message.react('🥺');  
    },
};