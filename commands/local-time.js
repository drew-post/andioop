module.exports = {
    name: 'time',
    description: 'gives time',

    execute(message) {
        const date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let amOrPm = 'AM';
        
        if(hour == 0) hour = 12;

        if(hour > 12) {
            hour = hour - 12;
            amOrPm = 'PM';
        }

        if(minutes < 10) {
            minutes = '0' + minutes;
        }

        message.channel.send("drew's local time is: " + hour + ':' + minutes + ' ' + amOrPm);
    },
};