module.exports = {
    name: 'clowncheck',
    description: 'CLOWN CHECK',
    execute(message) {
        const number = 5;
        const randomNum = Math.floor(Math.random() * number);

        let fileEnd = '.jpg';

        if(randomNum == 0) fileEnd = '.mp4';

        message.channel.send('CLOWN CHECK 🤡', { file: './clown/clowncheck' + randomNum + fileEnd });
        message.react('🤡');

    },
};