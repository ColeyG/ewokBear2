// import { REST } from '@discordjs/rest';
// import { Routes } from 'discord-api-types/v9';
import { Client, Intents } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

// const commands = [{
//     name: 'ping',
//     description: 'Replies with Pong!'
// }];

// const rest = new REST({ version: '9' }).setToken('token');

// (async () => {
//     try {
//         console.log('Started refreshing application (/) commands.');

//         await rest.put(
//             Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
//             { body: commands },
//         );

//         console.log('Successfully reloaded application (/) commands.');
//     } catch (error) {
//         console.error(error);
//     }
// })();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// client.on('interactionCreate', async interaction => {
//     if (!interaction.isCommand()) return;

//     if (interaction.commandName === 'ping') {
//         await interaction.reply('Pong!');
//     }
// });

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        // message.reply({
        //     content: 'pong',
        // });
    }
});

client.login(process.env.TOKEN);
