const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beep')
		.setDescription('Replies with Boop!'),
	async execute(interaction) {
		await interaction.reply({content:`Here's a boop for you!`, ephemeral: true});
	},
};