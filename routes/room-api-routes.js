// Requiring our models
var db = require("../models");

module.exports = function(app){
//GET route for getting all of the rooms
app.get("/api/rooms/", function(req, res) {
  db.Room.findAll({})
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
app.post("/api/rooms", function(req, res) {
  console.log("Api-room: " + req.body);
  db.Room.create({
      room_id: req.body.room_id,
      property_id: req.body.property_id,
      price: req.body.price,
      roomType: req.body.roomType,
      aboutRoom: req.body.aboutRoom,
      status: req.body.status,
      closeDate: req.body.closeDate
    })
    .then(function() {
      res.send("/choice");
    }).catch(function(err){
      console.log(err);
      res.json(err);
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

}
