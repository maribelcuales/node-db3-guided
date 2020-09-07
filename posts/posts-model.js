const db = require("../data/db-config.js");

module.exports = {
  all,
  findById,
  add, 
  update,
  remove,
};

function all() {
  /* 
  SELECT p.contents as quote, u.username as saidBy 
  FROM posts as p
  join users as u on p.user_id = u.id;
  */
 
  return db("posts as p")
    .join("users as u", "p.user_id", "=", "u.id")
    .select("p.contents as quote", "u.username as saidBy")
} 

function findById(id) {
  return db("posts").where("id", id).first(); 
}
// Other ways of writing .where(): 
// .where({ id })
// .where({ id: userId  })  => if userId was passed in as argument  
// .where("id", id)
// .where('id', '>', id)  

function add(post) {
  return db("posts")
  .insert(post, "id")
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
  return db("posts")
  .where({ id })
  .update(changes)
}

function remove(id) {
  return db("posts")
  .where({ id })
  .del()
}
