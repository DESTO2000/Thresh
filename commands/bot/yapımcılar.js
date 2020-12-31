const Discord = require('discord.js');
const AsciiTable = require('ascii-table');

exports.run = (client, message, args) => {
    var table = new AsciiTable('Yapımcılar')
table
  .setHeading('', 'Takma isim', 'Yaptığı kısım')
  .addRow('1', 'Desto2000', '%100')
 
message.channel.send(table.toString());
};

exports.conf = {
    aliases: ['yapımcılar', 'bot_yapımcıları', 'botun_yapımcıları'],
    permLevel: 0
};

exports.help = {
    name: 'yapımcılar',
    descripton: 'Thresh in yapımcılarını gösterir',
    usage: 'yapımcılar'
};