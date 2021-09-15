const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice')
		.setDescription('Test your luck with a dice roll!'),
	async execute(interaction) {
		await interaction.reply(`You rolled a ${dice()}`);
	},
};

const dice = () => Math.floor(Math.random() * 100);