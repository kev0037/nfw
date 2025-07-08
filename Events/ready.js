module.exports = {
  name: 'ready',
  async execute(bot) {
    await bot.user.setPresence({ activities: [{ name: 'by ray.', type: 5 }], status: 'idle' });
  },
};