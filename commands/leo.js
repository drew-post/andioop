module.exports = {
    name: 'leo',
    description: 'sends leo pic',
    execute(message) {

        message.channel.send('leo 🥺', { file: "./pets/leo.jpg" });  
        message.react('🥺');  
    },
};