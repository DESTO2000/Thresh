const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(args[0] == "Moderasyon") {
        var embedhelp1 = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Moderasyon komutları:')
    .addFields(
        { name: 'Komutlar:', value: 'T.ban (kişi),\nT.kick (kişi),\nT.unban (kişinin id si)'}
    )
    message.channel.send(embedhelp1);
    }
    if(args[0] == "sunucu") {
        var embedhelp2 = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Sunucu komutları:')
    .addFields(
        { name: 'Sunucu:', value: 'T.sesliye-gel (herhangi bir sesli kanala girmeniz gerekir), T.çıkış-mesaj (ayarla/aç/sıfırla/kapat) (kanal etiketi), T.giriş-mesaj (ayarla/aç/sıfırla/kapat) (kanal etiketi)'}
    )
    message.channel.send(embedhelp2);
    }
    if(args[0] == "kullanıcı") {
        var embedhelp3 = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Kullanıcı komutları:')
    .addFields(
        { name: 'Komutlar:', value: 'T.user-avatar'}
    )
    message.channel.send(embedhelp3);
    }
    if(args[0] == "bot") {
        var embedhelp4 = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Bot ile ilgili komutlar:')
    .addFields(
        { name: 'Komutlar:', value: 'T.davet, T.istatistik, T.yapımcılar'}
    )
    message.channel.send(embedhelp4);
    }
    if(!args[0]) {
    var embedhelp = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Yardım/Help komutları:')
    .addFields(
        { name: 'Bot:', value: 'T.help bot', inline: true },
        { name: 'Sunucu:', value: 'T.help sunucu', inline: true },
        { name: 'Kullanıcı:', value: 'T.help kullanıcı', inline: true },
        { name: 'Moderasyon:', value: 'T.help moderasyon', inline: true }
    )
    message.channel.send(embedhelp);
    }
};

exports.conf = {
    aliases: ['yardım', 'commands', 'komutlar', 'Thresh'],
    permLevel: 0
};

exports.help = {
    name: 'help',
    descripton: 'Botun komutlarını sıralar',
    usage: 'help'
};