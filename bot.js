const dotenv = require('dotenv').config();

const { Client, Intents, GuildMemberRoleManager } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS] });

const prefix = process.env.PREFIX;

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in...`);
});

client.on('messageDelete', message => {
    console.log(`A message was deleted: ${message}`);
});

/** Problem: This code only reacts to messages that have been cached. This might work for dealing with the problems relating to reaction voting,
 * but I'd like to deal with the raw packet data in the meantime and see if we can't make this more elegant. 
 * 
 *  */ 
client.on('messageReactionAdd', reaction => {
    
    console.log(`We've got a new reaction: ${reaction}!`);
    // if(reaction._emoji.name === '❤️'){
    //     console.log("Awww, such love!!! NOT TODAY");
    //     reaction.message.channel.send(`Aww, such love ${reaction.message.author}!!! NOT ON MY WATCH. 👀`)
    //     reaction.message.reactions.removeAll();
    // }
});

/** 
client.on('raw', packet => {
    console.log(packet);

    // clever alternative for multiple options.
    // if( ['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t) ){
    if (packet.t == "MESSAGE_REACTION_ADD"){
        if (packet.d.message_id == '707335882889494578'){
            const theGuild = client.guilds.cache.get(packet.d.guild_id)
            console.log("/////The Guild/////")
            console.log(theGuild)
            const theMember = client.users.cache.get(packet.d.user_id)
            const theChannel = client.channels.cache.get(packet.d.channel_id);
            const theMessage = client.channel.
            const theMessage = theChannel.messages.fetch(packet.d.message_id).then( message => {
                    
                console.log("/////MESSAGE/////")
                console.log(theMessage)
                console.log("/////USER/////")
                console.log(theMember)

                if(packet.d.emoji.name == "001tank"){
                    //raiding
                    var newRole = "676489600361037824"
                    console.log("-----RAIDING-----")
                    //theMember.send("You can now access raid content.")
                } else if (packet.d.emoji.name == "dote"){
                    //crafting
                    var newRole = "709461046833971291"
                    console.log("-----CRAFTING-----")
                    //theMember.send("You can now access crafting content.")
                } else if (packet.d.emoji.name == "cheer_on"){
                    //minecraft
                    var newRole = "770200636464824330"
                    console.log("-----MINECRAFT-----")
                    //theMember.send("You can now access minecraft content.")
                } else if (packet.d.emoji.name == "manderville"){
                    //playdead
                    var newRole = "840315068692693014"
                    console.log("-----MGP GANG-----")
                    //theMember.send("You will now receive MGP Gang notifications!")
                } else if (packet.d.emoji.name == "playdead"){
                    //playdead
                    var newRole = "824788246886219796"
                    console.log("-----WOW-----")
                    //theMember.send("You can now access WoW content.")
                }

                //theMember.addRole(theGuild.roles.get(newRole)).catch(console.error);
                //theMessage.reactions.removeAll()
                
            })
        }
    }
})*/

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

    // Commands
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === `ping`){
        message.channel.send('Pong!');
    } else if (command === `beep`){
        message.channel.send('Boop.');
    } else if (command === `server`){
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if (command === `args-info`){
        if (!args.length){
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    } else if (command === `args-first`) {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        message.channel.send(`Command name: ${command}\nFirst argument: ${args[0]}`);
    } else if (command === `dice` || command === `roll`) {
        if (!args.length){
            message.reply("rolled " + dice());
        } else {
            args.forEach(name => message.channel.send(`${name} rolled ${dice()}.`))
        }
    } else if (command === `role`) {
        if(!args.length){
            return message.channel.send(`${message.member.
                nickname}, you didn't provide a role...\nPlease use one of the following: \`worldnews\`, \`raiders\`, \`crafters\`.`);
        } else {
            if(args[0] === `raiders`){
                message.member.roles.add('676489600361037824')
                    .then(member => message.author.send("You can now access raid content."))
                    .catch(err => {
                        console.log(err);
                        message.author.send("Something went wrong when we tried to apply your role...");
                    });
                    message.delete();
            }
            if(args[0] === `crafters`){
                message.member.roles.add('709461046833971291')
                    .then(member => message.author.send("You can now access crafters content."))
                    .catch(err => {
                        console.log(err);
                        message.author.send("Something went wrong when we tried to apply your role...");
                    });
                    message.delete();
            }
            if (args[0] === `worldnews`) {
                message.member.roles.add('707336844202868776')
                    .then(member => message.author.send("You can now access world news content."))
                    .catch(err => {
                        console.log(err);
                        message.author.send("Something went wrong when we tried to apply your role...");
                    });
                message.delete();
            }
        }
    }
});

const dice = () => Math.floor(Math.random() * 100);

