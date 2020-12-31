const Discord = require('discord.js');
const client = new Discord.Client();
const Thresh = require("./Thresh.json");
const Caller = Thresh.threshCallingText;
const AsciiTable = require('ascii-table');
const fs = require('fs');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./database/db.json')
const db = low(adapter)
const nodemailer = require('nodemailer');
const chalk = require('chalk');
require('./util/eventHandler.js')(client);

console.log("Komutlar yükleniyor...");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdirSync('./commands').forEach(dir => {
const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const Ruhcuklar = require(`./commands/${dir}/${file}`);
    if (Ruhcuklar.help.name) {
        client.commands.set(Ruhcuklar.help.name, Ruhcuklar);
        console.log("| ", Ruhcuklar.help.name, "✔️ ", Ruhcuklar.conf.aliases);
    } else {
        console.log("| ", Ruhcuklar.help.name, "❌ ");
        console.log(Ruhcuklar.help.name, chalk.red('İsimli komutta hata var'))
        continue;
    }



    Ruhcuklar.conf.aliases.forEach(alias => {
        client.aliases.set(alias, Ruhcuklar.help.name);
    });
}
});

client.elevation = message => {
    if(!message.guild) {
    return; }
    let perm1v1 = 0;
    if (message.member.hasPermission("MANAGE_MESSAGES")) perm1v1 = 2;
    if (message.member.hasPermission("BAN_MEMBERS")) perm1v1 = 3;
    if (message.member.hasPermission("ADMINISTRATOR")) perm1v1 = 4;
    if (message.author.id === "threshAuthorİd") perm1v1 = 5;
    return perm1v1;
};

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'thresh.lelang@gmail.com',
        pass: 'thres_bot_2020_2010_09024_THRESH'
    }
})

var mailOptions = {
    from: 'thresh.lelang@gmail.com',
    to: 'castleng.games@gmail.com',
    subject: 'Thresh',
    text: 'Thresh bot açıldı'
};

transporter.sendMail(mailOptions, function(eror, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Mail gönderildi: ' + info.response);
    }   
});

db.defaults({ genel: [], sunucu: [], user: []}).write()

client.login(Thresh.threshToken); 