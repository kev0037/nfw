const Discord = require('discord.js');

const bot = new Discord.Client({
  allowedMentions: { repliedUser: false },
  intents: 3276799,
  partials: [
    Discord.Partials.Channel,
    Discord.Partials.Message,
    Discord.Partials.User,
    Discord.Partials.GuildMember,
    Discord.Partials.Reaction,
    Discord.Partials.ThreadMember,
    Discord.Partials.GuildScheduledEvent
  ]
});

bot.commands = new Discord.Collection();
bot.setMaxListeners(70);

// ✅ Use environment variable instead of config.json
const token = process.env.DISCORD_TOKEN;

bot.login(token)
  .then(() => {
    console.log(`[!] — Logged in as ${bot.user.tag} (${bot.user.id})`);
  })
  .catch(() => {
    console.log('\x1b[31m[!] — Please configure a valid bot token (via DISCORD_TOKEN env variable)\x1b[0m');
  });

// Load handlers
const commandHandler = require('./Handler/Commands.js')(bot);
const eventHandler = require('./Handler/Events')(bot);
const anticrashHandler = require('./Handler/anticrash');
anticrashHandler(bot);
