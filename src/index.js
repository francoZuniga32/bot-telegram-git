const Telegraf = require("telegraf");
const os = require("os");
let TOKEN = require("./configuration");

const bot = new Telegraf(TOKEN.token);

//comandos comunes
//comando star los vamos a usar mas adelante
bot.start((contexto) => {
  contexto.reply("Hola soy el bot git es un placer");
});

//este comando es el de ayuda lo vamos a usar para dar la lista de comandos a usar
bot.help((contexto) => {
  contexto.reply(`
   Necesitas ayuda, bien te doy una mano \n
   iniciar: /star damos la bienvenida y nos ponemos a trabajar\n
   configurar: /settings \n
   git: /git inicializamos git \n
   os: /os mostramos los núcleos del procesador`);
});

//este servirá para poder configurar algunas cosas del bot
bot.settings((contexto) => {
  contexto.reply("Bien que vamos a cambiar");
});

//comandos personalizados que podemos agregar
bot.command("git", (contexto) => {
  contexto.reply("A trabajar!!");
});

bot.command("os", (contexto) => {
  var cpus = os.cpus();
  var salidaCpu = "";
  for (let i = 0; i < cpus.length; i++) {
    salidaCpu += `Cpu ${i + 1}: ${cpus[i].model} \n`;
  }
  contexto.reply(salidaCpu);
});

//eventos donde el bot va a escuchar alguna palabra en específico
bot.hears("computer", (contexto) => {
  contexto.reply("ha escrito computer");
});

//cosas especiales de contexto
bot.command("nickuser", (contexto) => {
  console.log(contexto.from);
  console.log(contexto.chat);
  console.log(contexto.message);
  contexto.reply("buenas " + contexto.from.first_name);
});

//pon
bot.launch();
