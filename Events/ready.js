module.exports = {
  name: 'ready',
  async execute(bot) {
    await bot.user.setPresence({
      activities: [{
        name: 'by Ray',
        type: 5, // 'PLAYING' activity type
        buttons: [
          { label: 'Add Bot', url: 'https://discord.com/oauth2/authorize?client_id=1391415226192105564&permissions=964220542016&integration_type=0&scope=bot' },
          { label: 'Join Game', url: 'https://discord.com/oauth2/authorize?client_id=1391415226192105564&permissions=964220542016&integration_type=0&scope=bot' }
        ]
      }],
      status: 'idle'
    });

    console.log(`${bot.user.tag} is online and presence set!`);
  },
};
