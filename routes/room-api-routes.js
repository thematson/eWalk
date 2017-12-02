// Requiring our models
var db = require("../models");

module.exports = function(app){
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
  app.get("/api/rooms/status/:status", function(req, res) {
    db.Room.findAll({
      where: {
        status: req.params.status
      }
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
function createRoom(){
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
   console.log("LS= " + lastSegment);
  db.Hotel.findAll({
    where: {
      userName : lastSegment
    }
  }).then(dbHotel=>{
    thisId = dbHotel[0].id;
   
    createRoom();
  }
   
  );
  console.log("Api-room: " + req.body);
  console.log('this id is ' + thisId);
  // db.Room.create({
  //     room_id: req.body.room_id,
  //     property_id: req.body.property_id,
  //     price: req.body.price,
  //     roomType: req.body.roomType,
  //     aboutRoom: req.body.aboutRoom,
  //     status: req.body.status,
  //     closeDate: req.body.closeDate,
  //     HotelId: thisId
  //   })
  //   .then(function() {
  //     res.send("/choice/" + lastSegment);
  //   }).catch(function(err){
  //     console.log(err);
  //     res.json(err);
  //   });
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
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function(dbRoom) {
      res.json(dbRoom);
    });
});

};
