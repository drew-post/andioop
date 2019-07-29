module.exports = {
    name: 'time',
    description: 'gives time',

    execute(message) {
        const date = new Date();
        let hour = date.getHours();
        const minutes = date.getMinutes();
        let amOrPm = 'AM';

        if(hour > 12) {
            hour = hour - 12;
            amOrPm = 'PM';
        }

        message.channel.send("drew's local time is: " + hour + ':' + minutes + ' ' + amOrPm);
    },
};
