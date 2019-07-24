var Discord = require("discord.js");
var logger = require("winston");
var auth = require("./auth.json");
var opus = require('opusscript');

//Logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
  colorize : true
});
logger.level = "debug";
//Robot time
var bot = new Discord.Client();
var client = new Discord.Client();
var counter = 0;
var isReady = true;

bot.on("ready",() => {
  logger.info("Connected");
  voiceC = client.channels.find('name', 'General'); //finds voice channel for audio playback
});
bot.on("message",msg => {	
	if(msg.author == bot.user){
		//msg.react('OwO')
		//msg.channel.send("UwU");
	}
	
	else{
		if(msg.content.includes("trigger") || msg.content.includes("variation")|| msg.content.includes("variation")){
			msg.channel.send("response");
		}
		else if(msg.content.includes("UwUify")||msg.content.includes(" UwUify ")){//||msg.content.includes(" ")){
			var cont = msg.content;
			var uwu1 = cont.replace("l","w");
			//var uwu2 = uwu1.replace("L","W");
			//msg.channel.send(uwu2);
			for(var i=0;i<cont.length;i++){
				uwu1=uwu1.replace("l","w");
				uwu1=uwu1.replace("L","W");
				uwu1=uwu1.replace("er","a");
				uwu1=uwu1.replace("er","a");
				uwu1=uwu1.replace("r","w");
				uwu1=uwu1.replace("R","W");
			}
			msg.channel.send(uwu1+" UwU");
		}
		else if(msg.content.includes("trigger-word-here")){
			msg.channel.send("Pwease go to tha Genewaw woice chat. UwU");
			var voiceChannel = msg.member.voiceChannel;
			voiceChannel.join().then(connection =>
			{
				const dispatcher = connection.playFile('path-to-mp3');
				dispatcher.on("end", end => {
					voiceChannel.leave();
				});
			}).catch(err => console.log(err));
			isReady = true;
		}
		else if(msg.content.includes("UwU Bot what are your voice options?")){
			msg.channel.send("list of voice options");
			msg.channel.send("UwU");
		}
		else if (randint(13) == 2){
			msg.channel.send("somewhat infrequent message here");
		}
		else if(randint(25) == 2){
			msg.channel.send("rare message here");
			msg.channel.send("UwU");
		}
		else if(msg.content.includes("UwU Bot") || msg.content.includes(" UwU Bot ")){
                        msg.channel.send("*Is nervous* H-Hewwo UwU");
			//sleep(5000);
                }
		else if(msg.content.includes(" anime ") || msg.content.includes(" anime's ")){
		//	msg.react('UwU')
			msg.channel.send("OwO what's this? "+msg.author);
			//sleep(5000);
			if(counter == 0){ counter = randint(10)+5;}
		}
		else if(msg.content.includes(" UwU ") || msg.content.includes("UwU")){
	//		msg.react('UwU')
			msg.channel.send("Uwufu desu "+msg.author);
			//sleep(5000);
			if(counter == 0){ counter = randint(10)+5;}	
		}
		else if(msg.author.username === "Isabelle"){
			msg.channel.send("H-Hewwo IsaBewwe UwU");
			//sleep(5000);
		}
		else {
			counter--;
		}
		
	} 
});

function randint(bound) {
	return Math.round(Math.random()*bound);
}
/*
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
*/


bot.login(auth.token)
