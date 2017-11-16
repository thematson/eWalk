var express = require("express");
var db = require(".models");

var PORT = process.env.PORT || 3000;
var app = express();
//this guarantees our server won't start before our database is ready or if
//there is an error
db.sequelize.sync().then(function(){
  //syncing our database.  creates tables using the models described
  app.listen(PORT, function(){
    console.log("Listening on port %s", PORT);
  });
});
