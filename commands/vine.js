module.exports = {
    name: 'vine',
    description: 'sends random vine',
    execute(message) {

        const number = 10;

        const random = Math.floor(Math.random() * number);
        console.log(random);

        switch(random) {
            case 0: 
                message.channel.send('hE oN X gAmEs MoDe \nhttps://youtu.be/OWl_HlyHeVc');
                break;

            case 1: 
                message.channel.send('hE nEEdS SoMe MiLK \nhttps://youtu.be/gQbHOGF-Wms');
                break;

            case 2: 
                message.channel.send('iS tHaT aLLoWeD \nhttps://youtu.be/ycJrIjDwg1Y');
                break;

            case 3:
                message.channel.send('loOk aT aLl ThOsE chICkeNs \nhttps://youtu.be/RUTyw9tIc-M');
                break;
            
            case 4:
                message.channel.send("benefits of putting my brother down: i'd get pushed way less \nhttps://youtu.be/r4tOIFPwyUo");
                break;
            
            case 5:
                message.channel.send("I DIDNT GET NO SLEEP CAUSE OF Y'ALL, Y'ALL NOT GONNA GET NO SLEEP CAUSE OF ME \nhttps://youtu.be/mZgZjbcwhiY");
                break;

            case 6:
                message.channel.send('ADAM \nhttps://youtu.be/K0qbv8AatAU');
                break;

            case 7:
                message.channel.send('mother trucker dude, that hurt like a buttcheek on a stick \nhttps://youtu.be/U1iiRUU4IAg');
                break;

            case 8:
                message.channel.send('road work ahead? uh, yeah! i sure hope it does! \nhttps://youtu.be/9sPthPleEKo');
                break;

            case 9:
                message.channel.send('i wanna be a COWBOY BABYYY \nhttps://youtu.be/feMwFuihX2o');
                break;


        }
    },
};