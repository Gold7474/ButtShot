const {Client, Attachment} = require('discord.js');
const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzI0OTc5MDY4MjA2MDU1NTU0.XvIE5g.HPmO70_hUrmWQMT0UzZ5mVzE2hU';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('Bot Online');
    bot.user.setActivity('ButtShot', { type: 'LISTENING'})
})

bot.on('message', message=>{

    if(!message.content.startsWith(PREFIX)) return;

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]){
        case 'localfile':
            const attachment2 = new Attachment('./test.png');
            message.channel.send(message.author, attachment2)
            break;
        case 'buttshot':   
            message.guild.members.get('268856992464896000').setNickname("ButtShot");
            message.channel.send('DarkShot? More like ButtShot!');
            message.channel.send('!buttshot');
            break;
        }
    }
)
bot.login(process.env.token);
