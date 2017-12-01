$(document).ready(function() {
    console.log("this on pistRooms " + this.URL);
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
                console.log("Submit Room button was clicked!");
                console.log("checkoutDateInput: " + checkoutDateInput.val());
                e.preventDefault();

                var roomData = {
                    roomType: roomTypeInput.val(),
                    price: roomPriceInput.val().trim(),
                    aboutRoom: aboutRoomInput.val().trim(),
                    status: roomStatusInput.val().trim(),
                    closeDate: checkoutDateInput.val()
                };
                var isRoomData = true;
                for (var i in roomData) {
                    if (roomData[i] == null) {
                        isRoomData = false;
                    }
                }
                if (isRoomData) {
                    //include post here
                    postNewRoom(roomData);

                    roomTypeInput.val("");
                    roomPriceInput.val("");
                    aboutRoomInput.val("");
                    roomStatusInput.val("");
                    checkoutDateInput.val("");
                } else {
                    // alert("You left something blank!");
                }
            });

            function postNewRoom(roomData) {
                $.post("/api/rooms/" + lastSegment, roomData).then(function(data) {
                    window.location.replace(data);
                }).catch(handlePostRoomErr);
            }

            function handlePostRoomErr(err) {
                $("#alert.msg").text(err.responseJSON);
                $("#alert").fadeIn(500);
            }

});
