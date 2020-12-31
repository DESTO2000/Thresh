/*const Discord = require('discord.js');
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
    var channel = `firewall-log_${member.guild.id}`;
    var channelcık = member.guild.channels.cache.get(channel);
    if (!channel) return message.channel.send('**firewall-log** isimli bir kanal oluşturmalısın');
    var kuruluş = new Date().getTime() - member.user.createdAt.getTime()
    if(kuruluş > 2629800000) {
        var embedguard = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setAuthor(member.user.username)
    .addField("Katılan kişinin detayları", `Katılan kişi: **${member}**\nSunucuya giriş tarihi: **${tarih}**\nGüvenlik seviyesi: Güvenli`)
        return channelcık.send(embedguard);
    }
    if(kuruluş < 2629800000) {
        var embedguard2 = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(member.user.username)
    .addField("Katılan kişinin detayları", `Katılan kişi: **${member}**\nSunucuya giriş tarihi: **${tarih}**\nGüvenlik seviyesi: Tehlikeli`)
        return channelcık.send(embedguard2);
    }
}*/