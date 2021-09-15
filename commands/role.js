const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role')
		.setDescription('Gives you access to the role based content of your choice!')
        .addStringOption(option => 
            option.setName('role')
            .setDescription("select a role to assign")
            .setRequired(true)
            .addChoice('Raid', 'raid')
            .addChoice('Crafting','crafting')
            .addChoice('Minecraft','minecraft')
            .addChoice('MGP Gang','mgp-gang')
            .addChoice('WoW','wow')
        ),
	async execute(interaction) {
        const role = interaction.options.getString('role');
        switch (role){
            case 'raid':
                await interaction.member.roles.add('676489600361037824')
                .then(await interaction.reply({content:`You've been assigned the Raiders role!`, ephemeral: true}))
                .catch(err => {
                    console.log(err);
                    await interaction.reply({content:"Something went wrong when we tried to apply your role...", ephemeral: true});
                });
                break;
            case 'crafting':
                await interaction.member.roles.add('709461046833971291')
                .then(await interaction.reply({content:`You've been assigned the Crafting role!`, ephemeral: true}))
                .catch(err => {
                    console.log(err);
                    await interaction.reply({content:"Something went wrong when we tried to apply your role...", ephemeral: true});
                });
                break;
            case 'minecraft':
                await interaction.member.roles.add('770200636464824330')
                .then(await interaction.reply({content:`You've been assigned the Minecraft role!`, ephemeral: true}))
                .catch(err => {
                    console.log(err);
                    await interaction.reply({content:"Something went wrong when we tried to apply your role...", ephemeral: true});
                });
                break;
            case 'mgp-gang':
                await interaction.member.roles.add('840315068692693014')
                .then(await interaction.reply({content:`You've been assigned the MGP Gang role!`, ephemeral: true}))
                .catch(err => {
                    console.log(err);
                    await interaction.reply({content:"Something went wrong when we tried to apply your role...", ephemeral: true});
                });
                break;
            case 'wow':
                await interaction.member.roles.add('824788246886219796')
                .then(await interaction.reply({content:`You've been assigned the WoW role!`, ephemeral: true}))
                .catch(err => {
                    console.log(err);
                    await interaction.reply({content:"Something went wrong when we tried to apply your role...", ephemeral: true});
                });
                break;
            default:
                console.log("Roles not appropriately formed...")
                await interaction.reply({content:`Something went wrong when assigning your roles...`, ephemeral: true})
        }

	},
};