const env = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[env];
const knex = require("knex")(config);

module.exports = knex;

//TLDR calling knex function with knexfile config to establish DB connection
//exporting it so whatever file needs to connect to DB can

