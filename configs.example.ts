export const configs = {
  token: "",
  prefix: "",
  server: "",
  env: "",

  botListTokens: {
    DISCORD_BOTS_CO: "",
    DISCORD_BOT_ORG: "",
    BOTS_ON_DISCORD: "",
    DISCORD_BOT_LIST: "",
    BOTS_FOR_DISCORD: "",
    DISCORD_BOATS: "",
    DISCORD_BOTS_GG: "",
    DISCORD_BOTS_GROUP: "",
  },

  users: {
    // You can delete the `as string[]` when you add atleast 1 id in them.
    // The user ids for the support team
    supporters: [] as string[],
    // The user ids for the other devs on your team
    devs: [] as string[],
    // The user ids who have complete 100% access to your bot
    owners: [] as string[],
  },

  database: {
    host: "",
    port: 5432,
    user: "",
    password: "",
    database: "",
  },

  webhooks: {
    // the webhook to use when the bot finds a missing translation
    missingTranslation: {
      id: "",
      token: "",
    },
  },
};

export default configs;
