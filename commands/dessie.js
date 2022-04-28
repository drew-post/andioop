module.exports = {
    name: 'dessie',
    description: 'sends dessie pic',
    execute(message) {

        message.channel.send('dessie 🥺', { file: "./pets/dessie.jpg" });  
        message.react('🥺');  
    },
};