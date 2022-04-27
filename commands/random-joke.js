const fetch = require('node-fetch');

module.exports = {
    name: 'randomjoke',
    description: 'gives random joke',

    async execute(message) {
        try {
            const rawResponse = await fetch(
              `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`,
            );
            const response = await rawResponse.json();

            const formattedResponse = (response.joke).toLowerCase()
      
            message.channel.send(formattedResponse);
        } catch (error) {
            message.channel.send('oops, there was an error fetching the API');
            console.log(error);
        }
    },
};