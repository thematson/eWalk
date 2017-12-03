//~functions for browseRooms.html where users can search and book hotel rooms
$(document).ready(function() {
  // searchTable holds all of our rooms
  var searchTable = $("#tableBody");
  var roomZipCodeSelect = $("#zipSubmit");
  var rooms;

  $(document).on("click", ".bookButton", bookRoom);

  function bookRoom() {
    var currentRoom = $(this)
      .parent()
      .parent()
      .data("room");

    bookingRoom(currentRoom.id);
  }

  function bookingRoom(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/rooms/" + id
    });
  }
  getRooms();

  function initializeRows() {
    searchTable.empty();
    var roomsToAdd = [];
    for (var i = 0; i < rooms.length; i++) {
      roomsToAdd.push(createNewRow(rooms[i]));
    }
    searchTable.append(roomsToAdd);

    // This function constructs a room's HTML
    function createNewRow(room) {

      //========TABLE START ==============================
      var newTableRow = $("<tr>");
      searchTable.append(newTableRow);

      //========PROPERTY NAME ============================
      //APPEND TO ROW
      var NameCell = $("<td>");
      newTableRow.append(NameCell);
      //APPEND TO CELL
      var NameSpan = $("<span id=propName" + [i] + ">");
      NameSpan.text(room.Hotel.hotel_name);
      NameCell.append(NameSpan);

      //========ROOM TYPE =================================
      //APPEND TO ROW
      var RoomTypeCell = $("<td>");
      newTableRow.append(RoomTypeCell);
      //APPEND TO CELL
      var RoomTypeSpan = $("<span id=type" + [i] + ">");
      RoomTypeSpan.text(room.roomType);
      RoomTypeCell.append(RoomTypeSpan);

      //========ROOM TYPE =================================
      //APPEND TO ROW
      var RoomTypeCell = $("<td>");
      newTableRow.append(RoomTypeCell);
      //APPEND TO CELL
      var RoomTypeSpan = $("<span id=type" + [i] + ">");
      RoomTypeSpan.text(room.price);
      RoomTypeCell.append(RoomTypeSpan);

      //========ROOM TYPE =================================
      //APPEND TO ROW
      var PriceCell = $("<td>");
      newTableRow.append(PriceCell);
      //APPEND TO CELL
      var PriceSpan = $("<span id=price" + [i] + ">");
      PriceSpan.text(room.aboutRoom);
      PriceCell.append(PriceSpan);

      //========ROOM TYPE =================================
      //APPEND TO ROW
      var PriceCell = $("<td>");
      newTableRow.append(PriceCell);
      //APPEND TO CELL
      var PriceSpan = $("<span id=price" + [i] + ">");
      PriceSpan.text(room.Hotel.phone);
      PriceCell.append(PriceSpan);


      //========BOOK ROOM MODAL START==============
      //APPEND TO ROW
      var BookCell = $("<td>");
      newTableRow.append(BookCell);

      var ConfirmModalButton = $("<a id=bookRoom" + [i] + " " + "class='bookButton waves-effect waves-light btn modal-trigger indigo lighten-4' href='#modal1'></a>");

      ConfirmModalButton.text("Book");
      BookCell.append(ConfirmModalButton);
      newTableRow.data("room", room);
      return newTableRow;
    }
  }


  // This function grabs rooms from the database and updates the view
  function getRooms() {
    $.get("/api/rooms", function(data) {
      rooms = data;
      if (!rooms || !rooms.length) {
        displayEmpty();
      } else {
        initializeRows();
      }
    });
  }



  // This function displays a messgae when there are no rooms
  function displayEmpty() {
    searchTable.empty();
    var messageh2 = $("<h2>");
    messageh2.css({
      "text-align": "center",
      "margin-top": "50px",
      "font-size": "18px"
    });

    messageh2.html(
      "Sorry! Come back later. There aren't any rooms available at this time, navigate <a href='/'>here</a> to exit."
    );

    searchTable.append(messageh2);
  }
});