const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var kişi = message.mentions.users.first() || message.guild.members.cache.get(args[0])
    if(!kişi) return message.reply("Lütfen sunucudan atacağım kişiyi belirtiniz");
    if(!message.guild.members(kişi).kickable) return message.reply("Bukişiyi banlayamam");
    var reason = args.slice(1).join(' ')
    message.guild.member(kişi).kick(reason);
    var reason2 = reason ? reason : "Neden belirtimemiş";
    var embedkick = new Discord.MessageEmbed()
    .setColor('RED')
    .setAuthor(message.author.username)
    .addField('Atılan kullanıcı ve sebebi', `Atılan kullanıcı: **${kişi}**\nAtılma Nedeni: **${reason2}**`)
    return message.channel.send(embedkick);
};

exports.conf = {
    aliases: ['kick', 'atmak', 'tekmelemek'],
    permLevel: 3
};

exports.help = {
    name: 'kick',
    descripton: 'Belirtilen kullanıcıyı sunucudan atar',
    usage: 'kick {user} {reason}'
};