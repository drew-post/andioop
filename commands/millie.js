module.exports = {
    name: 'millie',
    description: 'sends millie pic',
    execute(message) {

        message.channel.send('millie 🥺', { file: "./pets/millie.jpg" });  
        message.react('🥺');  
    },
};