module.exports = {
    name: 'benji',
    description: 'sends benji pic',
    execute(message) {

        message.channel.send('benji 🥺', { file: "./pets/benji.jpg" });  
        message.react('🥺');  
    },
};