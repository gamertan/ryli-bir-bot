const dotenv = require('dotenv').config();
const fs = require('fs');
const { Client, Collection, Intents, GuildMemberRoleManager } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS] });

const prefix = process.env.PREFIX;

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.on('messageCreate', message => {
    //Role selection channel
    console.log(message);

    if (message.channel.id === '707334497414414407') {
        if (isNaN(message.content)) {
            message.author.send(`Your attempt to join a role failed. Please enter only the number of the channel you'd like to join in the text input.`);
            message.delete();
        } else if (message.content === '1') {
            message.member.roles.add('676489600361037824')
                .then(member => message.author.send("You can now access raid content."))
                .catch(err => {
                    console.log(err);
                    message.author.send("Something went wrong when we tried to apply your role...");
                });
            message.delete();
        } else if (message.content === '2') {
            message.member.roles.add('709461046833971291')
                .then(member => message.author.send("You can now access crafting content."))
                .catch(err => {
                    console.log(err);
                    message.author.send("Something went wrong when we tried to apply your role...");
                });
            message.delete();
        } else if (message.content === '3') {
            message.member.roles.add('770200636464824330')
                .then(member => message.author.send("You can now access Minecraft content."))
                .catch(err => {
                    console.log(err);
                    message.author.send("Something went wrong when we tried to apply your role...");
                });
            message.delete();
        } else if (message.content === '4') {
            message.member.roles.add('840315068692693014')
                .then(member => message.author.send("You will now receive MGP Gang notifications!"))
                .catch(err => {
                    console.log(err);
                    message.author.send("Something went wrong when we tried to apply your role...");
                });
            message.delete();
        } else if (message.content === '5') {
            message.member.roles.add('824788246886219796')
                .then(member => message.author.send("You can now access World of Warcraft content."))
                .catch(err => {
                    console.log(err);
                    message.author.send("Something went wrong when we tried to apply your role...");
                });
            message.delete();
        }
    }
});

client.login(process.env.BOT_TOKEN);