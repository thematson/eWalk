//*********************************************************************************
//ROOM-API-ROUTES: ROUTES FOR OUR ROOM POSTS, GETS, PUTS, AND DELETES TO AND FROM THE DB 
//*********************************************************************************

// Requiring our models
var db = require("../models");
var passport = require("passport");


module.exports = function(app) {
  //GET route for getting all of the rooms
  app.get("/api/rooms/", function(req, res) {
    db.Room.findAll({
        include: [db.Hotel]
      })
      .then(function(dbRoom) {
        res.json(dbRoom);
      });
  });

  // Get route for returning rooms of a specific status
  app.get("/api/rooms", function(req, res) {

    db.Room.findAll({
        where: status === 1,
        include: [{
          model: Hotel,
        }]
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });

  });

  // Add a Room

  app.post("/api/rooms/*", function(req, res) {
    var thisId;
    var parts = req.url.split("/");
    var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash

    function createRoom() {
      db.Room.create({
          room_id: req.body.room_id,
          property_id: req.body.property_id,
          price: req.body.price,
          roomType: req.body.roomType,
          aboutRoom: req.body.aboutRoom,
          status: req.body.status,
          closeDate: req.body.closeDate,
          HotelId: thisId
        })
        .then(function() {
          res.send("/choice/" + lastSegment);
        })
        .catch(function(err) {
          console.log(err);
          res.json(err);
        });
    }

    db.Hotel.findAll({
      where: {
        userName: lastSegment
      }
    }).then(dbHotel => {
        thisId = dbHotel[0].id;

        createRoom();
      }

    );

  });
  // DELETE route for deleting rooms
  app.delete("/api/rooms/:id", function(req, res) {
    db.Room.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.put("/api/rooms", function(req, res) {
    db.Room.update(
      req.body, {
        where: {
          id: req.body.id
        }
      }).then(function(dbRoom) {
      res.json(dbRoom);
    });
  });

};
// *********************************************************************************
//                                END OF FILE
// *********************************************************************************