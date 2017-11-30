// *********************************************************************************
// hotel.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
var passport = require("../config/passport");

// Routes
// =============================================================
module.exports = function(app) {

  //log in
  app.post("/api/hotels/login", passport.authenticate("local"), function(req, res){
    res.send("/choice");

  });

  // Get all vacant hotels
  app.get("/api/hotels", function(req, res) {
    db.Hotel.findAll({}).then(function(dbHotel) {
      res.json(dbHotel);
    });
  });

  // Register/Add a hotel
  app.post("/api/hotels/register", function(req, res) {

    console.log(req.body);
    db.Hotel.create({
      hotel_name: req.body.hotel_name,
      property_id: req.body.property_id,
      userName: req.body.userName,
      password: req.body.password,
      url: req.body.url,
      address: req.body.address,
      zipCode: req.body.zip,
      phone: req.body.phone,
      aboutUs: req.body.aboutUs,
      routingNumber: req.body.routingNumber,
      balance: req.body.balance,
      api_id: req.body.api_id
    }).then(function(){
      res.redirect(307, "/api/hotels/login");
    }).catch(function(err){
      console.log(err);
      res.json(err);
    });
  });

  // Delete a hotel
  app.delete("/api/hotels/:id", function(req, res) {
     db.Hotel.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbHotel) {
      res.json(dbHotel);
    });
  });

  // PUT route for updating posts
  app.put("/api/hotels", function(req, res) {
    db.Hotel.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbHotel) {
      res.json(dbHotel);
    });
  });
};
