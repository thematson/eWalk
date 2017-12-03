// *********************************************************************************
// HOTEL API ROUTES: ROUTES FOR DISPLAYING AND SAVING HOTEL DATA TO THE DB 
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
var passport = require("../config/passport");

// =============================================================
module.exports = function(app) {

  //log in
  app.post("/api/hotels/login/:userName", passport.authenticate("local"), function(req, res) {
    var parts = req.url.split("/");
    var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash

    res.send("/choice/" + lastSegment);
  });

  //log Out
  app.get('/api/hotels/login',
    function(req, res) {
      req.logout();
      res.send('/');
    });

  // Get all vacant rooms in a zipcode
  app.get("/api/hotels/:zipCode", function(req, res) {
    db.Hotel.findAll({
      where: {
        zipCode: req.params.zipCode
      },
      include: [{
        model: Room,
        where: status === 1
      }]
    }).then(function(dbHotel) {
      res.json(dbHotel);
    });
  });

  // Register/Add a hotel
  app.post("/api/hotels/register", function(req, res) {
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
      }

    ).then(function() {
      var logIn = req.body.userName;
      res.redirect(307, "/api/hotels/login/" + logIn);
    }).catch(function(err) {
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
    db.Hotel.update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbHotel) {
        res.json(dbHotel);
      });
  });

}
// *********************************************************************************
//                                   END OF FILE
// *********************************************************************************