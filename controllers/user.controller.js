const db = require("../models");
const User = db.users;
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;
// Create and Save a new User

exports.create = (req, res) => {
    // Validate request
    if (!req.body.age) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a User
    const user = {
        age: req.body.age,
        name: req.body.name,
       
    };
    // Save User in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    User.findAll({
        attributes: {
            exclude: ['name']
        }, where: {condition }})
        .then(data => {
            res.send(data);
        })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving users."
        });
    });
};
// Find a single User with an id
exports.findOne = (req, res) => {
    // const id = req.params.id;
    User.findAll({include:[{model:Tutorial}]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `fail to `
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "fail" + id
        });
      });
  };
exports.doCreate = async (req, res) => {
    const user1 = await User.create({ name: "cuong1", age: 12 })
    console.log(user1 instanceof User)
    console.log(user1.name)
}

exports.doUpdate = async (req, res) => {
    const jane = await User.create({ name: "Jane" });
    console.log(jane.name); // "Jane"
    await jane.destroy();
    console.log('destroy')
    // Now this entry was removed from the database
}