# HypixelAuthenticator
 A Discord Bot written in discord,js to authenticate your Hypixel account with discord.

# Steps to link your account:
- Log onto Hypixel, provide your discord name and tag for your discord account via the Social settings.
- Make sure the bot is on the server.
- Type !register (username) 
- The Bot will tell provide you with an embed to tell you if the authentication was successful.
- If the authentication was successful, the Bot will give you a Beige Colored role name "HypixelAuthenticator Verified".

# Ensure the following for the bot to work as intended:
- You have correctly put your Bot Token into the .env file.
- You have given the bot sufficient permissions.

# Adjust the HypixelAuthenticator Verified role:
- By doing this you can for example, create a system where unverified are in a locked channel awaiting to be verified, hence the rest of the discord users are properly authenticated.

# Supported Commands:
- !register (username) -> Authenticates you with the bot, under the username you have provided.

# Dependencies:
- discord.js (14.11.0)
- dotenv (16.3.1)
- requestify (0.2.5)