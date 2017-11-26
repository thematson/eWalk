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
// index.html loads the welcome page and contains login and registration
  // this route is the page where users can either add a room or explore vacant rooms
  app.get("/postRooms", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/postRooms.html"));
  });
  app.get("/browseRooms", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/browseRooms.html"));
  });
  app.get("/choice", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/choice.html"));
  });

  app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/index.html"));
  });
};
