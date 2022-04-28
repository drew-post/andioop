module.exports = {
    name: 'leo',
    description: 'sends leo pic',
    execute(message) {

        message.channel.send('benji 🥺', { file: "./pets/leo.jpg" });  
        message.react('🥺');  
    },
};