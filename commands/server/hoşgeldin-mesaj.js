const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./database/db.json')
const db = low(adapter)

exports.run = (client, message, args) => {
    var channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
    if(!args[0]) return message.reply('Bir seçenek belirtiniz **ayarla / sıfırla**')
    if(args[0] == "ayarla" || args[0] == "aç") {
        if(!channel) return message.reply('Bir kanal belirtiniz')
        db.set('sunucu.kanalid', `${message.guild.id}` + channel.id)
         .write()
        return message.channel.send("✔️ Kanal başarıyla ayarlandı")
    }
    if(args[0] == "sıfırla" || args[0] == "kapat") {
        db.unset('sunucu.kanalid')
        .write()
        message.channel.send("Hoşgeldin mesajı artık atılmayacak")
    }
};

exports.conf = {
    aliases: ['hg mesaj', 'mesaj', 'hoşgeldin mesaj'],
    permLevel: 4
};

exports.help = {
    name: 'hoşgeldin-mesaj',
    descripton: 'Biri sunucuya katıldığında mesaj atar',
    usage: 'hoşgeldin-mesaj'
};