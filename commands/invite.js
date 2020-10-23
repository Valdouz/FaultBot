const Discord = require('discord.js')
module.exports = {
    run: message => message.channel.send(new Discord.MessageEmbed()
        .addField("<:cursor:753722594171027576>__**Lien d'invitation :**__", "[**Cliquez ici**](https://discordapp.com/oauth2/authorize?client_id=739176121978847273&scope=bot&permissions=8)")
        .addField("<:cursor:753722594171027576>__**Support :**__", "[**Cliquez ici**](https://discord.gg/bmMhtjb)")
        .setThumbnail("https://cdn.discordapp.com/attachments/735249495344021506/753723343013806110/FaultBot.png")
        .setImage("https://cdn.discordapp.com/attachments/735249495344021506/753727663700443266/120060.gif")
        .setColor("RANDOM")

    ),
    name: 'invite'
}