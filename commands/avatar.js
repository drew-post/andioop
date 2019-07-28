module.exports = {
    name: 'avatar',
    description: 'returns user avatar(s)',
    execute(message) {
        // if no users are mentioned, send back author avatar
        if(!message.mentions.users.size) {
            return message.channel.send(`your avatar: ${message.author.avatarURL}`);
        }

        // if up to 5 users are mentioned put all mentioned users into an array and return message w avatar URL
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL}`;
        });
    
        const sizeLimit = 6;

        // send the entire array of strings as messages w for loop
        for(let i = 0; i < sizeLimit; i++) {
            if(!avatarList[i]) return;
            message.channel.send(avatarList[i]);

        }
    },
};
