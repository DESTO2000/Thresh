const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
      } else {
        message.reply('Bu komutu kullanabilmen için herhangi bir sesli odaya girmen gerekmekte');
      }
};

exports.conf = {
    aliases: ['sesliye gel', 'voice bot', 'sesliye çağır'],
    permLevel: 4
};

exports.help = {
    name: 'sesliye-gel',
    descripton: 'Komutu kullanan kullanıcının bulunduğu sesli odaya katılır',
    usage: 'sesliye-gel'
};