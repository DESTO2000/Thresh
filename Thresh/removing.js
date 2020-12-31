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
    var channel2 = db.get('sunucu')
    .push({ kanalid2: `${member.guild.id}`})
    .write()
    var channelcık2 = member.guild.channels.cache.get(channel2);
    if (!channelcık2) return;
    var randomMesajlar2 = [
        "Baybay. Keşke gitmeseydin be. ",
        "Baybay. Görüşürüz gitmene üzüldük ",
        "Baybay. Keşke birazdaha kalsaydın "
    ]
    var randomMesajlar = randomMesajlar2[Math.floor(Math.random() * (randomMesajlar.lenght))]
    var embedjoin = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setAuthor(member.user.username, member.user.displayAavatarUrl({dynamic: true, format: "png", size: 1024}))
    .setDescription(randomMesajlar + member)
    .addField("Çıkan kişinin detayları", `Çıkan kişi: **${member}**\nSunucu dan çıkış tarihi: **${tarih}**`)
    return channelcık2.send(embedjoin);
}