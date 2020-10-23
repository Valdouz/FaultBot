const Discord = require('discord.js')
module.exports = {
    run: message => {
        message.delete();
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('<:faultbot:753720260775116930> **Liste des commandes** <:faultbot:753720260775116930>')

            .addField("<a:moderation:768071676625551372> ┋ __Modération__ <a:flech:768071347237552158>", "`ban`, `kick`, `tempban`,`clear`, `unban`, `mute`, `unmute`, `tempmute`, `slowmode`")

            .addField("<a:fun:768072533773647875> ┋ __Divertissement__ <a:flech:768071347237552158>", "`anonymous`, `fbi`, `poutine`, `trump`, `macron`, `cheh`, `meme`, `coinflip`, `issou`, `covid`, `8ball`, `nitro`, `panda`, `koala`, `fox`, `cat`, `dog`")

            .addField("<:nsfw:768073097395044382> ┋ __NSFW__ <a:flech:768071347237552158>", "`hentai`, `boobs`, `hentai2`, `waifu`, `ass`, `wallpaper`")

            .addField("<:king:768073681942872105> ┋ __Général__ <a:flech:768071347237552158>", "`help`, `invite`, `embed`,  `img`,  `ui`, `serv-info`, `sondage`, `about`,`ascii`, `reversetext`, `pp`, `fortnite`, `rdm-number`")

            .setThumbnail("https://cdn.discordapp.com/attachments/735249495344021506/768074076933455882/019-spy.png")
            .setTimestamp()
         )
    },
    name: 'help'
    
}