
let Bot = require("../index.js");
var requestify = require('requestify');
const {MessageEmbed} = require('discord.js')

// Register.HandleCommand(client, message.channelId, message.author, message.guildId, message.member, message, cmdArguments)

function HandleCommand(client, message, arguments) {


	  let channelID = message.channelId;
	  let sender = message.author;
	  let member = message.member;
	  let guild = message.guild;
	  let role = guild.roles.cache.find(x => x.name === "HypixelAuthenticator Verified");
	  let name = arguments[0];
	  
	  if (role == undefined) {
		  console.log("here");
		  guild.roles.create({
			  color: 0xeed9c4,
			  name: "HypixelAuthenticator Verified",
			})
			  .then(console.log)
			  .catch(console.error);
		}


	  requestify.get('https://api.slothpixel.me/api/players/' + name)
	  .then(function(response) {
		response.getBody();

		let jsonValue = JSON.parse(response.body);
		let playerDiscordUsername = jsonValue['links']['DISCORD'];
		let commandDiscordUsername = sender['username'] + sender['discriminator'];
		let correctInformation = commandDiscordUsername === playerDiscordUsername;

		if (correctInformation == true){

			client.channels.fetch(channelID).then(channel => {
				channel.send({
					embeds: [{
					  title: 'Hypixel Authenticator',
					  description: `Sucessfully linked your discord to the account ${name}!`,
					  color: 0x00FF00
					}]	
				  })

				  member.roles.add(role);

			});
			  
		} else {

			client.channels.fetch(channelID).then(channel => {

				channel.send({
					embeds: [{
					  title: 'Hypixel Authenticator',
					  description: `Failed to link account, the discord information provided on ${name}'s profile does not match your discord information.`,
					  color: 0xFF0000
					}]	
				  })

			});

		}


	});

}

module.exports = { HandleCommand };