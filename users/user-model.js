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
  return db("users")
  .insert(userData, "id");
} 

function update(id, changes) {
  return db("users")
  .where({ id })
  .update(changes)

}

function remove(id) {

}
