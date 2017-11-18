// Requiring our models
var db = require("../models");

module.exports = function(app){
//GET route for getting all of the posts
app.get("/api/posts/", function(req, res) {
  db.Post.findAll({})
  .then(function(dbPost) {
    res.json(dbPost);
  });
});

// POST route for saving a new post
app.post("/api/posts", function(req, res) {
  console.log(req.body);
  db.Post.create({
    beds: req.body.beds,
    status: req.body.status,
    createDate: req.body.createDate,
    price: req.body.price,
    aboutRoom: req.body.aboutRoom
  })
  .then(function(dbPost) {
    res.json(dbPost);
  });
});

app.put("/api/posts", function(req, res) {
  db.Post.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
});

}
