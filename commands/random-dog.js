const fetch = require('node-fetch');

module.exports = {
    name: 'randomdog',
    description: 'gives random dog',

    async execute(message) {
        try {
            const rawResponse = await fetch(
              `https://dog.ceo/api/breeds/image/random`,
            );
            const image = await rawResponse.json();
      
            message.channel.send(image.message);
        } catch (error) {
            message.channel.send('oops, there was an error fetching the API');
            console.log(error);
        }
    },
};