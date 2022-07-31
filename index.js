const express = require("express");
const cors = require("cors");
const app = express();
const routeTutorial = require('./routes/tutorial.route')
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
const db = require("./models");
db.sequelize.sync();
require("./routes/tutorial.route")(app);
require("./routes/user.route")(app);

// app.use('./api/tutorial',routeTutorial)
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});