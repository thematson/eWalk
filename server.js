var express = require("express");
var bodyParser = require("body-parser");
var db = require(".models");

var PORT = process.env.PORT || 3000;
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));
//this guarantees our server won't start before our database is ready or if
//there is an error
// Routes
// =============================================================
//html routes
require("./routes/html-routes.js")(app);
//api routes
require("./controllers/hotel.js")(app);
require("./controllers/room.js")(app);

db.sequelize.sync({force: true }).then(function(){
  //syncing our database.  creates tables using the models described
  app.listen(PORT, function(){
    console.log("Listening on port %s", PORT);
  });
});
