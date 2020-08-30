const db = require("../data/db-config.js");

module.exports = {
  all,
  findById,
  add, 
  update,
  remove,
};

function all() {
  return db("users");
} 

function findById(id) {
  return db("users").where({ id }).first();
}

function add(user) {

}

function update(id, changes) {

}

function remove(id) {
  
}
