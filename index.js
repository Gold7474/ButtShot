const {Client, Attachment} = require('discord.js');
const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('Bot Online');
    bot.user.setActivity('ButtShot', { type: 'LISTENING'})
})

bot.on("guildMemberUpdate",(old,member) => {
    if(member.roles.find(r => r.name == "ButtShot")) {
        try {
            member.setNickname("ButtShot");
        } catch (error) {
            console.log(error);
        }
    }
});

bot.on("guildMemberUpdate",(old,member) => {
    if(member.roles.find(r => r.name == "DARK BOYFRRRREDDNDNN")) {
        try {
            member.setNickname("I am DarkShot's boyfriend");
        } catch (error) {
            console.log(error);
        }
    }
});

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
            break;
        case 'spambutt':
            message.channel.send('https://media.discordapp.net/attachments/724009203072761876/725760863335874580/image0-35.gif');
            message.channel.send('https://media.discordapp.net/attachments/724009203072761876/725760863335874580/image0-35.gif');
            message.channel.send('https://media.discordapp.net/attachments/724009203072761876/725760863335874580/image0-35.gif');
            message.channel.send('https://media.discordapp.net/attachments/724009203072761876/725760863335874580/image0-35.gif');
            message.channel.send('https://media.discordapp.net/attachments/724009203072761876/725760863335874580/image0-35.gif');
            message.channel.send('https://media.discordapp.net/attachments/724009203072761876/725760863335874580/image0-35.gif');
            message.channel.send('https://media.discordapp.net/attachments/724009203072761876/725760863335874580/image0-35.gif');
            message.channel.send('https://media.discordapp.net/attachments/724009203072761876/725760863335874580/image0-35.gif');
            message.channel.send('https://media.discordapp.net/attachments/724009203072761876/725760863335874580/image0-35.gif');
            message.channel.send('https://media.discordapp.net/attachments/724009203072761876/725760863335874580/image0-35.gif');
            break;
        }
    }
)

bot.login(process.env.token);
