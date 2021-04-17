const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });

client.on('ready', () => {
  client.request('SET_ACTIVITY', {
    pid: process.pid,
    activity : {
      details : "alianzas md 3k", //acá puedes escribir lo que quieras :3
      assets : {
        large_image : "05f9a", //el código de una de las imágenes de tu app 
        large_text : "miau"  // texto que aparece en la imagen 
         
      },
      buttons : [{label : "discord" , url : "https://discord.gg/97uKN2N2hQ"} , {label : "website" , url : "https://mishisquad.carrd.co/"}] // si acá solo quieres un botón, borra las llaves y la coma >w< (entre las comillas pon lo que gustes)
      
    }
  });
  
});

client.login({ clientId : "802356924523479062" }).catch(console.error);  // en donde dice client ID, pones la id de tu app