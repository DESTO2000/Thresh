const Discord = require('discord.js');

exports.run = (client, message, args) => {
    
    var guild = message.guild;
    var banlayan = message.author.tag;
    if (!args[0]) return message.reply("Banlayacağım kişiyi etiketlemen gerek")
    var kişi = message.mentions.users.first() || guild.members.cache.find(u => u.username === args[0]) || guild.members.cache.get(args[0]);
    var neden = args.slice(1).join(' ') ? args.slice(1).join(' ') : "Neden belirtilmemiş"
    guild.members.ban(kişi , { reason: neden });
    var banembed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`✔️  Banlama başarılı`)
    .setDescription(`Banlayan: ${banlayan} Neden: ${neden} Banlanan: ${kişi}`)
    message.channel.send(banembed)
};

exports.conf = {
    aliases: ['ban', 'engelleme', 'permaban'],
    permLevel: 3
};

exports.help = {
    name: 'ban',
    descripton: 'Belirtilen kişiyi banlar',
    usage: 'ban {user} {neden}'
};