const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk')
const Thresh = require("../Thresh.json");
const Caller = Thresh.threshCallingText;
const threshName = Thresh.threshName;

module.exports = client => {
    var activities_list = ["İstediğin kadar bağır, Bana müzik gibi geliyor", "T.help | T.yardım", "Thresh insanların ruhunu emmeye hazır", "Zincirli gardiyan dan kaçamazsın", "Gülleri severmisin"];
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 10000);
    client.user.setStatus('dnd');
    console.log('| ', chalk.black.bgWhite('Bot hazır | ' + `${client.user.tag} ismi ile giriş yapıldı`));
    client.user.setUsername(threshName);
    console.log('| ', chalk.black.bgWhite('Bot ismi ayarlandı'));
}