// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // landing route loads the welcome page and contains login and registration
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/welcome.html"));
  });

  // rooms route is the page where users can either add a room or explore vacant rooms
  app.get("/rooms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/rooms.html"));
  });


};
