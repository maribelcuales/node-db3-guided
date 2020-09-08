const knex = require('knex');

const config = require('../knexfile.js');

// by default dbconfig uses development 
// module.exports = knex(config.development);

// manually setting dbconfig/ knex file  to use production
module.exports = knex(config.production); 
