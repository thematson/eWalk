//~function to display hotels based on zipcode ~~not currently being used but reserved for future versions
$(document).ready(function() {
  var db = require("../models");

  db.Hotel.findAll({
    attributes: ["routingNumber"]
  }).then(function(result) {
    var markerArray = result.map(function(item) {
      return item.routingNumber;
    });
    console.log(markerArray);
  });
});