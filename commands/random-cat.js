const fetch = require('node-fetch');

module.exports = {
    name: 'catfact',
    description: 'gives random cat',

    async execute(message) {
        try {
            const rawResponse = await fetch(
              `https://catfact.ninja/fact`,
            );
            const data = await rawResponse.json();

            const formattedResponse = (data.fact).toLowerCase()
      
            message.channel.send(formattedResponse);
        } catch (error) {
            message.channel.send('oops, there was an error fetching the API');
            console.log(error);
        }
    },
};