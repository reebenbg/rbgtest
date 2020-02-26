const Discord = require('discord.js');
const bot = new Discord.Client()

const token = process.env.TOKEN;

const prefix = 'r!';
require('dotenv/config')
const http = require('http');
const port = process.env.PORT || 3000;
http.createServer().listen(port);

var season = '1'
var version = '0.0.3'

bot.on('ready', () =>{
    console.log('The bot is online');
    bot.user.setActivity('in development |Bot by ReebenBG#7277', {type: 'WATCHING'}).catch(console.error)
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "👦🏻new-peoples👦🏻");
    if(!channel) return;

    channel.send(`Хей ${member}, Добре дошъл във Reeben's World 🎉🤗 !`)
})

bot.on('message', msg=>{
    if(msg.content === "Здравей"){
        msg.reply('Здрасти')
    }
})

bot.on('message', msg=>{
    if(msg.content === "Еба"){
        msg.reply('Не псувай, педерасТ!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "r!ip"){
        msg.reply('Все още сървъра не е завършен! Скоро! ')
    }
})

bot.on('message', message=>{

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]){
        case 'status':
            message.channel.sendMessage('`Сървъра е офлайн!`')
            break;
        case 'creator':
            message.channel.sendMessage('`@ReebenBG е създателя на този бот`')
            break;
        case 'botupdatess':
            message.channel.sendMessage('v0.0.3: [+]Добавени Patch Notes, [+]Добавена команда `r!help`')
            break;
        case 'info':
            if(args[1] === 'season'){
                message.channel.sendMessage('Все още няма сървър, иначе сезон ' + season);
            
            }else{
                message.channel.sendMessage('(r!info) <команда> команди:')
                message.channel.sendMessage(' season - показва кой сезон сме')
            }

        break;
        case 'clear':
        if(!args[1]) return message.reply('Грешка')
        message.channel.bulkDelete(args[1])
        break;
    }

    switch(args[0]){
        case 'help':
            const embed = new Discord.RichEmbed()
            .setTitle('Помощ')
            .setAuthor("ReebenBG's World", 'https://i.imgur.com/dsE2ktf.png')
            .addField('Извикал ме', message.author.username, true)
            .addField('Команди', '`r!commands`', true)
            .addField('Сървър IP', '`r!ip`', true)
            .setColor(0x59D0BD)
            .setThumbnail('https://i.imgur.com/dsE2ktf.png')
            .setFooter('Bot v0.0.3, ако искате да видите patch notes r!botupdates', 'https://i.imgur.com/dsE2ktf.png' )
            .setTimestamp()
            message.channel.sendEmbed(embed);
        break;   
    }

    switch(args[0]){
        case 'botupdates':
            const embed = new Discord.RichEmbed()
            .setTitle('Bot Patch Notes')
            .setAuthor("ReebenBG's World", 'https://i.imgur.com/dsE2ktf.png')
            .addField('Версия', 'v' + version)
            .addField('[+]Добавени', 'Patch Notes', true)
            .addField('.', '.',true)
            .addField('[-]Премахнати', 'Няма', true)
            .addField('Команда `r!help`', '.',true)
            .addField('.', '.',true)
            .addField('.', '.',true)
            .setColor(0x59D0BD)
            .setThumbnail('https://i.imgur.com/dsE2ktf.png')
            .setFooter("ReebenBG's World", 'https://i.imgur.com/dsE2ktf.png' )
            .setTimestamp()
            message.channel.sendEmbed(embed);
        break;   
    }
})

bot.on('error', err =>{
    console.log(err);
})

bot.login(process.env.TOKEN);
