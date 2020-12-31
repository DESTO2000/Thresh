const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk')
const Thresh = require("../Thresh.json");
const Caller = Thresh.threshCallingText;
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./database/db.json')
const db = low(adapter)
let tarih = new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul"});

module.exports = member => {
    var channel = db.get('sunucu')
    .push({ kanalid: `${member.guild.id}`})
    .write()
    var channelcık = member.guild.channels.cache.get(channel);
    if (!channelcık) return;
    var randomMesajlar = [
        "Hoşgeldin! Gelmene Sevindim Gel bize Katıl. ",
        "Hoşgeldin! Pizza getiridinmi? ",
        "Hoşgeldin! Gel otur. "
    ]
    var randomMesajlar = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.lenght))]
    var embedjoin = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setAuthor(member.user.username, member.user.displayAavatarUrl({dynamic: true, format: "png", size: 1024}))
    .setDescription(randomMesajlar + member)
    .addField("Katılan kişinin detayları", `Katılan kişi: **${member}**\nSunucuya giriş tarihi: **${tarih}**`)
    return channelcık.send(embedjoin);
}