// *********************************************************************************
// POSTROMS.JS - FUNCTIONS FOR ROOM CHECKOUT CALENDER AND POSTING A VACANT ROOM TO ROOMS/API/ROUTES
// *********************************************************************************

$(document).ready(function() {

  var parts = this.URL.split("/");
  var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash

  $("select").material_select();

  $(".datepicker").pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: "Today",
    clear: "Clear",
    close: "Ok",
    closeOnSelect: false // Close upon selecting a date,
  });

  var roomTypeInput = $("#roomSelected");
  var roomPriceInput = $("#roomPrice");
  var roomStatusInput = $("#disabled");
  var checkoutDateInput = $(".datepicker");
  var aboutRoomInput = $("#aboutRoom");

  $("#submit-Room").click(function(e) {
    e.preventDefault();

    var roomData = {
      roomType: roomTypeInput.val(),
      price: roomPriceInput.val().trim(),
      aboutRoom: aboutRoomInput.val().trim(),
      status: 1,
      closeDate: checkoutDateInput.val()
    };
    //validation ~ all input fields must be completed
    var isRoomData = true;
    for (var i in roomData) {
      if (roomData[i] == null) {
        isRoomData = false;
      };
    };

    if (isRoomData) {
      postNewRoom(roomData);
      //reset room input to blank
      roomTypeInput.val("");
      roomPriceInput.val("");
      aboutRoomInput.val("");
      roomStatusInput.val("");
      checkoutDateInput.val("");
    };
  });
  //posting the room data to the db
  function postNewRoom(roomData) {
    $.post("/api/rooms/" + lastSegment, roomData).then(function(data) {
      window.location.replace(data);
    }).catch(handlePostRoomErr);
  }
  //~broken function
  function handlePostRoomErr(err) {
    $("#alert.msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

});
// *********************************************************************************
//                                END OF FILE
// *********************************************************************************