// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// the dotenv line is what makes the variables in .env available inside of process.env
require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
  },
};
