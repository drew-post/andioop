const fetch = require('node-fetch');

module.exports = {
    name: 'lyrics',
    description: 'gives lyrics to requested song',

    async execute(message, args) {
        try {
            let artist; 
            artist = args[0].split("/");

            
            let title; 
            title = args[1].split("/");


            const rawResponse = await fetch(
              `https://api.lyrics.ovh/v1/${artist}/${title}`,
            );
            const response = await rawResponse.json();
            
            if ((response.lyrics).length > 2000) {
                message.channel.send("BOOO the song was too long - sorry about that")
            } else if(response.lyrics !== undefined) {
                message.channel.send((response.lyrics).toLowerCase()); 
            } else {
                message.channel.send((response.error).toLowerCase());
            }
            
        } catch (error) {
            message.channel.send('oop, there was an error fetching the API');
            console.log(error);
        }
    },
};