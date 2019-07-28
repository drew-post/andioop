module.exports = {
    name: 'args-info',
    description: 'returns command/args',
    execute(message, args) {
        if(!args.length) {
            message.channel.send('no arguments provided');
        }

        message.channel.send(`command: args-info\narguments ${args}`);
    },
};
