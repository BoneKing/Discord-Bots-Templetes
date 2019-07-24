var Discord = require("discord.js");
var logger = require("winston");
var auth = require("./auth.json");

//Logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
  colorize : true
});
logger.level = "debug";
//Robot time
var bot = new Discord.Client();
//WARNING: SOME CONTENT IS OFFENSIVE, NO CONTRIBUTOR SUPPORTS TERRY DAVIS' POLITICAL VIEWS (we do find it funny and iconic to his character though)
var quotes = ["list of things to say","in comma seperated lists","of arbitary length"];
var len = quotes.length;
//var counter = 0;

bot.on("ready",() => {
  logger.info("Connected");
});
bot.on("message",msg => {	
	if(msg.author == bot.user){
		//future work maybe?
	}
	
	else{
		if (msg.content.includes(" Trigger ") || msg.content.includes("Variation") || msg.content.includes("variation")){
			msg.channel.send(quotes[getRandomInt(len)]); //sends random quote from list
		}
	} 
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


bot.login(auth.token)
