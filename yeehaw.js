module.exports = {
    name: 'yeehaw',
    description: 'says yeehaw',
    execute(message) {
        message.channel.send('YEEHAW 🤠');
        message.react('🤠');
    },
};