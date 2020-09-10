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
  return db("users").where("id", id).first(); 
}
// Other ways of writing .where(): 
// .where({ id })
// .where({ id: userId  })  => if userId was passed in as argument  
// .where("id", id)
// .where('id', '>', id)  

function add(userData) {
  return db("users")
    .insert(userData, "id")
    .then(ids => {
      return findById(ids[0]); 
    });
} 

/* 
/// like a stack of plates  /// 
db('users') => a promise that resolves to a user 
findById => a promise that resolves to a user 
add => a promise that resolves to a user 
post 
*/

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes)
}

function remove(id) {
  return db("users")
    .where({ id })
    .del()
}
