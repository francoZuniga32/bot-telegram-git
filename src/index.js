const Telegraf = require('telegraf');
let TOKEN = require('./configuration');


const bot = new Telegraf(TOKEN.token);

bot.start((contexto) => {
    contexto.reply("hola wacho!!");
});

bot.help((contexto) => {
    contexto.reply("en que te puedo ayudar??");
});

bot.settings((contexto) => {
    contexto.reply("a configurar el bot!!");
});

bot.command('git', (contexto)=>{
    contexto.reply("a trabajar");
});



bot.launch();