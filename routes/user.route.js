module.exports = app => {
    const users = require("../controllers/user.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", users.create);
    // Retrieve all Tutorials
    router.get("/", users.findAll);
    router.get("/findOne", users.findOne);
    // Retrieve all published Tutorials
    router.get("/doCreate",users.doCreate)
    router.get("/doUpdate",users.doUpdate)

    app.use('/api/users', router);
    
  };