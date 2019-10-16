module.exports = {
    name: 'yeehaw',
    description: 'says yeehaw/sends attachment',
    execute(message) {
        const number = 8;
        const randomNum = Math.floor(Math.random() * number);

        message.channel.send('YEEHAW 🤠', { file: "./yeehaw/yeehaw" + randomNum + ".jpg" });  
        message.react('🤠');

        
    },
};