const Discord = require('discord.js');
const moment = require('moment');
const os = require('os');
require("moment-duration-format");

exports.run = (client, message, args) => {
    var embedistatistik = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setAuthor(message.author.tag)
    .setDescription('İstatistikler:')
    .addField(`Pingim: ${client.ws.ping}`)
    .addField("Bellek kullanımı: ", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)
    .addField("Node.js Sürümü: ", `${process.version}`, true)
    .addField("Discord.js: ", "v"+Discord.version, true)
    .addField("İşletim sistemi: ", `\`\`${os.platform}\`\``)
    .addField("CPU: ", `\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\``)
    .addField("Bit: ", `\`${os.arch()}\``, true)
    return message.channel.send(embedistatistik);
};

exports.conf = {
    aliases: ['i', 'istatisik', 'ping'],
    permLevel: 0
};

exports.help = {
    name: 'istatistik',
    descripton: 'Botun durumunu gösterir',
    usage: 'istatistik'
};