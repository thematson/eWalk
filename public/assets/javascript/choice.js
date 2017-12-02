$(document).ready(function() {
     var parts = this.URL.split("/");
     var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash

     console.log(lastSegment);
    

    $("#searchLogo").click(function() {
      location.href = "/browseRooms";
    });

    $("#postLogo").click(function () {
        location.href = "/postRooms/" + lastSegment;        

    });

});
