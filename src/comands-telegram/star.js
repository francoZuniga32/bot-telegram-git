const star = {};

star.star = (contexto) =>{
    console.log(contexto.message);
    contexto.reply(`buenas soy el git supervisador`);
    
};

module.exports = star;