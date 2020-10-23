const Discord = require ('discord.js')

module.exports = {
    run: async (message, args) => { 
        message.delete();
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        message.channel.send(new Discord.MessageEmbed()
            .setTitle(`<a:flech:768071347237552158> __**${user.user.username} Avatar**__`)
            .setColor(`RAMDOM`)
            .setImage(user.user.displayAvatarURL({dynamic : true}))


 )
                
    },
    name: 'pp',

}