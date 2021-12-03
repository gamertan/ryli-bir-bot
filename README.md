# ryli-bir-bot

The Ryli Bir bot used in the 14th Shard FFXIV Free Company

## Installation

Installing and managing Ryli Bir on your discord server. 

- `git clone` Ryli Bir onto your Node.js equipped Ubuntu server.
- Copy `config.json.example` to `config.json` and enter your Discord server's information. This information can be generated / found in your Discord applications. 
- Install the slash-commands on your Discord server using `node ./deploy-commands.js`
- Run `node ./bot.js` (or by using PM2) and profit!

## Running Ryli Bir in Production

I recommend using PM2 as a process manager for Node.js applications. You can install PM2 on an Ubuntu server with Node.js installed by running the command `sudo npm install -g pm2`.

You can start Ryli Bir in a managed way by running `pm2 start bot.js`.

To have PM2 automatically start Ryli Bir on startup, you can run the `pm2 startup systemd` command to generate a command you must run with superuser privileges. (The last line is the command)

Other useful PM2 commands: 
- `pm2 stop app_name`
- `pm2 restart app_name`
- `pm2 list`
- `pm2 info app_name`
- `pm2 monit`