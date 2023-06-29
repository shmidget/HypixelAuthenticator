
var Register = require("./commands/register")

require("dotenv").config()
const { Client, Events, GatewayIntentBits } = require('discord.js');

var client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
] });

var COMMAND_PREFIX = "!";

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});





client.on(Events.MessageCreate, (message) => {
    if (message.content[0] == COMMAND_PREFIX) {

        let command = message.content.slice(1);
        let cmdName = command.split(" ")[0];
        let cmdArguments = command.split(" ").slice(1);

        switch (cmdName){
            case "register":
                Register.HandleCommand(client, message, cmdArguments)
        }

    }
});

client.login(process.env.TOKEN);
