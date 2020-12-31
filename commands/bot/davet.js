const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var embeddavet = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setAuthor(`${message.author.tag}`)
    .setDescription('Thresh in devat linki:')
    .addField('https://discord.com/oauth2/authorize?client_id=791384069174198285&scope=bot&permissions=2147483647')
    message.channel.send(embeddavet);
    message.channel.send('İstediğiniz herhangi bir özellik veya düzeltilmesini istediğiniz bir hata varsa: https://discord.gg/CxbEn6fBrG');
}
exports.conf = {
    aliases: ['davet', 'd', 'bot_link'],
    permLevel: 0
};

exports.help = {
    name: 'davet',
    descripton: 'Botun davet linkini atar',
    usage: 'davet'
};