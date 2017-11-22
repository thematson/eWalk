var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");
var app = express();
var passport = require("./config/passport");
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(passport.initialize());
app.use(passport.session());

// Static directory
app.use('/public', express.static("public"));
//this guarantees our server won't start before our database is ready or if
//there is an error
// Routes
// =============================================================
//html routes
require("./routes/html-routes.js")(app);
//api routes
require("./routes/hotel-api-routes.js")(app);
// require("./controllers/room.js")(app);

//false makes sure it doesn't drop all of the tables
//change it true only if I've had a change to the table
db.sequelize.sync({force: false }).then(function(){
  //syncing our database.  creates tables using the models described
  app.listen(PORT, function(){
    console.log("Listening on eWalk Friendly Port %s", PORT);
  });
});
