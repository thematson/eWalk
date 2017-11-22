// *********************************************************************************
// hotel.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Hotel = require("../models/hotel.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all vacant hotels
  app.get("/????", function(req, res) {
    Hotel.findAll({}).then(function(results) {
      res.json(results);
    });
  });


  // Add a hotel
  app.post("/api/new", function(req, res) {
    console.log("Book Data:");
    console.log(req.body);
    Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      pages: req.body.pages
    });
  });

  // Delete a hotel
  app.post("/???", function(req, res) {
    console.log("Hotel Data:");
    console.log(req.body);
    Hotel.destroy({
      where: {
        id: req.body.id
      }
    });
  });
};
