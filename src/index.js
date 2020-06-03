const Telegraf = require('telegraf');
var os = require("os");
const drivelist = require('drivelist');

let TOKEN = require('./configuration');


const bot = new Telegraf(TOKEN.token);

//comandos comunes
bot.start((contexto) => {
    contexto.reply("hola wacho!!");
});

bot.help((contexto) => {
    contexto.reply("en que te puedo ayudar??");
});

bot.settings((contexto) => {
    contexto.reply("a configurar el bot!!");
});

//comandos pesonalizados
bot.command('git', (contexto)=>{
    contexto.reply("a trabajar");
});

bot.command('os', (contexto)=>{
    console.log(os.cpus());
    contexto.reply(`Cpus: ${os.cpus().model} , Memoria (Kb): ${os.totalmem()}, Memoria libre (Kb) ${os.freemem()}`);
});


//eventos de escucha y demas
bot.hears('computer', (contexto) => {
    contexto.reply('ha escrito coputer');
});

//cosas especiales de contexto

bot.command('nickuser', (contexto) => {
    console.log(contexto.from);
    console.log(contexto.chat);
    console.log(contexto.message);
    contexto.reply('buenas '+contexto.from.first_name);
});

/*bot.context.db = {
  getScores: () => { return 42 }
}

bot.on('text', (ctx) => {
  const scores = ctx.db.getScores(ctx.message.from.username)
  return ctx.reply(`${ctx.message.from.username}: ${scores}`)
})*/

bot.launch();