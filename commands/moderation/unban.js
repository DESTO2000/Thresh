const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var guild = message.guild;
    var banlayan = message.author.tag;
    if (!args[0]) return message.reply("Banını açacağım kişinin id sini yazman gerek")
    var kişi = args[0];
    var neden = args.slice(1).join(' ') ? args.slice(1).join(' ') : "Neden belirtilmemiş"
    guild.members.unban(kişi, neden);
    if (!kişi) return message.reply("Kişi bulunamadı! Lütfen id yi doğru giriniz!")
    var banembed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`✔️  Ban kaldırma başarılı`)
    .setDescription(`Banı açan: ${banlayan} Banı açma nedeni: ${neden} Banı açılan kişi: ${kişi}`)
    message.channel.send(banembed)
};

exports.conf = {
    aliases: ['unban', 'geri alma', 'engellemeyi kaldırma'],
    permLevel: 3
};

exports.help = {
    name: 'unban',
    descripton: 'Belirtilen kişiyi banını açar',
    usage: 'unban'
};