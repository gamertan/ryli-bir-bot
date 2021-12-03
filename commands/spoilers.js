const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spoilers')
		.setDescription('Gives you access to the spoiler channel based on the selection of your choice!')
        .addStringOption(option => 
            option.setName('spoilers')
            .setDescription("select an expansion")
            .setRequired(true)
            .addChoice('arr', 'arr')
            .addChoice('hw','hw')
            .addChoice('sb','sb')
            .addChoice('shb','shb')
            .addChoice('ew','ew')
            .addChoice('live','live')
        ),
	async execute(interaction) {
        const spoilers = interaction.options.getString('spoilers');
        switch (spoilers){
            case 'arr':
                await interaction.member.roles.add('916204842987425852')
                .then(await interaction.reply({content:`You can now access A Realm Reborn spoilers!`, ephemeral: true}))
                .catch(err => {
                    console.log(err);
                    interaction.reply({content:"Something went wrong when we tried to give you access to spoilers... Please try again.", ephemeral: true});
                });
                break;
            case 'hw':
                await interaction.member.roles.add('916205415547699271')
                .then(await interaction.reply({content:`You can now access Heavensward spoilers!`, ephemeral: true}))
                .catch(err => {
                    console.log(err);
                    interaction.reply({content:"Something went wrong when we tried to give you access to spoilers... Please try again.", ephemeral: true});
                });
                break;
            case 'sb':
                await interaction.member.roles.add('916205539921379389')
                .then(await interaction.reply({content:`You can now access Stormblood spoilers!`, ephemeral: true}))
                .catch(err => {
                    console.log(err);
                    interaction.reply({content:"Something went wrong when we tried to give you access to spoilers... Please try again.", ephemeral: true});
                });
                break;
            case 'shb':
                await interaction.member.roles.add('916205603062444053')
                .then(await interaction.reply({content:`You can now access Shadowbringers spoilers!`, ephemeral: true}))
                .catch(err => {
                    console.log(err);
                    interaction.reply({content:"Something went wrong when we tried to give you access to spoilers... Please try again.", ephemeral: true});
                });
                break;
            case 'ew':
                await interaction.member.roles.add('916208243938824273')
                .then(await interaction.reply({content:`You can now access End Walker spoilers!`, ephemeral: true}))
                .catch(err => {
                    console.log(err);
                    interaction.reply({content:"Something went wrong when we tried to give you access to spoilers... Please try again.", ephemeral: true});
                });
                break;
            case 'live':
                await interaction.member.roles.add('916206796778139668')
                .then(await interaction.reply({content:`You can now access Live Letters spoilers!`, ephemeral: true}))
                .catch(err => {
                    console.log(err);
                    interaction.reply({content:"Something went wrong when we tried to give you access to spoilers... Please try again.", ephemeral: true});
                });
                break;
            default:
                console.log("spoilers not appropriately formed...")
                interaction.reply({content:`Something went wrong when assigning your spoilers...`, ephemeral: true})
        }

	},
};