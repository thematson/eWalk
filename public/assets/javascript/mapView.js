$(document).ready(function() {
    var db = require("../models");

  db.Hotel.findAll({ attributes: ["routingNumber"] }).then(function(result) {
    var markerArray = result.map(function(item) {
      return item.routingNumber;
    });
    console.log(markerArray);
  });
});

