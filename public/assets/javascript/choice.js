// *********************************************************************************
// CHOICE.JS - ON CLICK FUNCTIONS WHICH DIRECT USERS TO EITHER POST A ROOM OR SEARCH FOR ROOMS
// *********************************************************************************

$(document).ready(function() {
  var parts = this.URL.split("/");
  var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash


  $("#searchLogo").click(function() {
    location.href = "/browseRooms/";
  });

  $("#postLogo").click(function() {
    location.href = "/postRooms/" + lastSegment;

  });

});
// *********************************************************************************
//                                END OF FILE
// *********************************************************************************