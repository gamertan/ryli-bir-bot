require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const prefix = process.env.PREFIX;

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
    //Role selection channel
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
            message.member.roles.add('707336844202868776')
                .then(member => message.author.send("You can now access world news content."))
                .catch(err => {
                    console.log(err);
                    message.author.send("Something went wrong when we tried to apply your role...");
                });
            message.delete();
        } else if (message.content === 'wow') {
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
            if (message.author.tag === "TexanJoe#6165") {
                return message.reply("rolled 99");
            }
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


client.on('ready', () => {
    console.log(`${client.user.tag} has logged in...`);
});

const dice = () => Math.floor(Math.random() * 100);

