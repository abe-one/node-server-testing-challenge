const knex = require("knex");
const config = require("../knexfile");
const { NODE_ENV } = require("../utils/envVariables");

module.exports = knex(config[NODE_ENV]);
