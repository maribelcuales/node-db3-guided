const express = require("express");

// const db = require("../data/db-config.js");
const Users = require("./user-model.js"); 

const router = express.Router();

router.get("/", (req, res) => {
  Users.all()
  // db("users")
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log('error', err);
      res.status(500).json({ message: "Failed to get users" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Users.findById(id)
  // db("users")
  //   .where({ id })
    .then(users => {
      // const user = users[0];
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "Could not find user with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get user" });
    });
});

// function calculateTaxAndPrintSheet(employeeId) {
// 	// orchestrator/ algorithm 
// 	const employeeData = getEmployeeData(employeeId); 
// }

// function calculateTax(employee) {
// }

// function printEmployeeTaxSheet(taxSheet) {
// }


router.post("/", (req, res) => {
  const userData = req.body;

  Users.add(userData)
  // db("users")
  //   .insert(userData, "id")
    .then(user => {
      res.status(201).json({ created: user });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new user" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.update(id, changes)
  // db("users")
  //   .where({ id })
  //   .update(changes)
    .then(count => {
      if (count) {
        res.json({ update: count });
      } else {
        res.status(404).json({ message: "Could not find user with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update user" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Users.remove(id)
  // db("users")
  //   .where({ id })
  //   .del()
    .then(count => {
      if (count) {
        res.json({ removed: count });
      } else {
        res.status(404).json({ message: "Could not find user with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete user" });
    });
});

module.exports = router;

