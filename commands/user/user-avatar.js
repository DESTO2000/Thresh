const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var embedpp = new Discord.MessageEmbed()
    .setColor('#2ac26d')
    .setTitle(`${message.author.tag} İsimli Kişinin Avatarı:`)
    .setThumbnail(message.author.avatarURL({ size:1024, dynamic:true, format: 'png' }))
    message.channel.send(embedpp)
};

exports.conf = {
    aliases: ['user', 'avatar', 'pp',],
    permLevel: 0
};

exports.help = {
    name: 'user-avatar',
    descripton: 'Kişinin avatarını gösterir',
    usage: 'user-avatar'
};