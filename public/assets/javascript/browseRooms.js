$(document).ready(function() {
 
  // searchTable holds all of our rooms
  var searchTable = $("#tableBody");
  var roomZipCodeSelect = $("#zipSubmit");
  var rooms;

  // =======================================================
  //IN PROGRESS -->  CHOOSE ZIP CODE
/*function addZip () {
 
  $.get("/api/rooms", function(data){
    console.log(data);
  });
  // console.log(req.user);
}

addZip();*/

  // =======================================================
  //IN PROGRESS -->  BOOKING ROOM
  $(document).on("click", "#bookButton", bookRoom);

  function bookRoom() {
    var currentRoom = $(this)
      .parent()
      .parent()
      .data("room");
    bookingPost(currentRoom.id);
  }

  function bookingPost(id) {
    $.ajax({
      method: "POST",
      url: "/api/rooms/" + id
    })
    .done(function() {
      getRooms();
    });
  };
// =======================================================
  //IN PROGRESS -->  DISPLAY ROOMS
getRooms();

// This function grabs rooms from the database and updates the view
function getRooms() {
  /*var ZipCodeString = ZipCode || "";
  if (ZipCodeString) {
    ZipCodeString = "/ZipCode/" + ZipCodeString;
  }*/

  $.get("/api/rooms", function(data) {
    console.log("Rooms", data);
    rooms = data;
    if (!rooms || !rooms.length) {
      displayEmpty();
    }
    else {
      initializeRows();
    }
  });
}

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
    console.log([i]);
    console.log(room);
    searchTable.append(newTableRow);
    //========PROPERTY NAME ============================
      //APPEND TO ROW
      var NameCell = $("<td>");
      newTableRow.append(NameCell);
        //APPEND TO CELL
        var NameSpan = $("<span id=propName" + [i] + ">");
        NameSpan.text(room.hotel_name);
        NameCell.append(NameSpan);
    //========PROPERTY DETAILS MODAL START==============
      //APPEND TO ROW
      /*var DetailsCell = $("<td>");
      newTableRow.append(DetailsCell);
        //APPEND TO CELL
        var DetailsModalButton = $("<button id=viewProperty" + [i] + " " + "class='waves-effect waves-light btn modal-trigger indigo lighten-4' data-target=#details" + [i] + ">");
        DetailsModalButton.text("View");
        DetailsCell.append(DetailsModalButton);
        //APPEND TO CELL
        var DetailsDiv1 = $("<div id=details" + [i] + " " + "class='modal wordWrap'>");
        DetailsCell.append(DetailsDiv1);
          //APPEND TO DIV1
          var DetailsDiv2 = $("<div class='modal-content property-details left-align'>");
          DetailsDiv1.append(DetailsDiv2);
            //APPEND TO DIV2
            var webLabel = $("<p class='details wordWrap'>");
            webLabel.text("Web Address : ");
            DetailsDiv2.append(webLabel);
              //APPEND TO LABEL
  
              var webLink = $("<a href=" + this.url + " " + "style='cursor:pointer' target='_blank'>");
              webLink.text("Visit Property Site");
              webLabel.append(webLink);
              console.log("clicked");
  
            //APPEND TO DIV2
            var addressLabel = $("<p class='details wordWrap'>");
            addressLabel.text("Physical Address : ");
            DetailsDiv2.append(addressLabel);
              //APPEND TO LABEL
              var addressSpan = $("<span id=address" + [i] + ">");
              addressSpan.text(room.address);
              addressLabel.append(addressSpan);
            //APPEND TO DIV2
            var phoneLabel = $("<p class='details wordWrap'>");
            phoneLabel.text("Phone Number : ");
            DetailsDiv2.append(phoneLabel);
              //APPEND TO LABEL
              var phoneSpan = $("<span id=phone" + [i] + ">");
              phoneSpan.text(room.phone);
              phoneLabel.append(phoneSpan);*/
              
  
    //========ROOM TYPE =================================
      //APPEND TO ROW
      var RoomTypeCell = $("<td>");
      newTableRow.append(RoomTypeCell);
        //APPEND TO CELL
        var RoomTypeSpan = $("<span id=type" + [i] + ">");
        RoomTypeSpan.text(room.roomType);
        RoomTypeCell.append(RoomTypeSpan);
  
    //========ROOM DESCRIPTION MODAL START==============
      //APPEND TO ROW
      var DescriptionCell = $("<td>");
      newTableRow.append(DescriptionCell);
        //APPEND TO CELL
        var DescriptionModalButton = $("<a id=roomModal" + [i] + " " + "class='waves-effect waves-light btn modal-trigger indigo lighten-4' href=#room" + [i] + ">");
        DescriptionModalButton.text("View");
        DescriptionCell.append(DescriptionModalButton);
        //APPEND TO CELL
        var DescriptionDiv1 = $("<div id=room" + [i] + " " + " class='modal wordWrap'>");
        DescriptionCell.append(DescriptionDiv1);
          //APPEND TO DIV1
          var DescriptionDiv2 = $("<div class='modal-content room-details left-align'>");
          DescriptionDiv1.append(DescriptionDiv2);
            //APPEND TO DIV2
            var DescriptionLabel = $("<p class='roomDes wordWrap'>");
            DescriptionLabel.text("Room Description : ");
            DescriptionDiv2.append(DescriptionLabel);
              //APPEND TO LABEL
              var DescriptionSpan = $("<span id='descr" + [i] + " " + "class='wordWrap'>");
              DescriptionSpan.text(room.aboutRoom);
              DescriptionLabel.append(DescriptionSpan);
  
    //========ROOM TYPE =================================
      //APPEND TO ROW
      var PriceCell = $("<td>");
      newTableRow.append(PriceCell);
        //APPEND TO CELL
        var PriceSpan = $("<span id=price" + [i] + ">");
        PriceSpan.text(room.price);
        PriceCell.append(PriceSpan);

    //========PHONE NUMBER ==============================
      //APPEND TO ROW
      var phoneCell = $("<td>");
      newTableRow.append(phoneCell);

          //APPEND TO LABEL
          var phoneSpan = $("<span id=phone" + [i] + ">");
          phoneSpan.text(room.Hotel);
          console.log(room.Hotel);
          phoneCell.append(phoneSpan);
    
    //========BOOK ROOM MODAL START==============
      //APPEND TO ROW
      var BookCell = $("<td>");
      newTableRow.append(BookCell);
        //APPEND TO CELL
        var ConfirmModalButton = $("<a id=bookRoom" + [i] + " " + "class='bookButton waves-effect waves-light btn modal-trigger indigo lighten-4'>");
        ConfirmModalButton.text("Book");
        BookCell.append(ConfirmModalButton);
        //APPEND TO CELL
        /*var ConfirmDiv1 = $("<div id=modalConfirm" + [i] + " " + "class='modal wordWrap'>");
        BookCell.append(ConfirmDiv1);
          //APPEND TO DIV1
          var ConfirmDiv2 = $("<div class='modal-content confirmContent wordWrap'>");
          ConfirmDiv1.append(ConfirmDiv2);
            //APPEND TO DIV2
            var ConfirmHeader = $("<h4 class='wordWrap'>");
            ConfirmDiv2.text("Are you sure you would like to book this room?");
            ConfirmDiv2.append(ConfirmHeader);
            //APPEND TO DIV2
            var ConfirmDiv3 = $("<div class='modal-footer'>");
            ConfirmDiv2.append(ConfirmDiv3);
              //APPEND TO DIV3
              var YesButton = $(" <button class='modal-action btn waves-effect waves-light indigo lighten-4' type='submit' form='formId' id='yes' 'action'>");
              YesButton.text("Yes");
              ConfirmDiv3.append(YesButton);
                //APPEND TO BUTTON
                var YesIcon = $("<i class='material-icons'>");
                YesButton.append(YesIcon);
              //APPEND TO DIV3
              var NoButton = $(" <button class='modal-action btn waves-effect waves-light indigo darken-3' type='submit' form='formId' id='no' 'action'>");
              NoButton.text("No");
              ConfirmDiv3.append(NoButton);
                //APPEND TO BUTTON
                var NoIcon = $("<i class='material-icons'>");
                NoButton.append(NoIcon);*/
        
      newTableRow.data("room", room);
      return newTableRow;
  }
}

  // This function displays a messgae when there are no rooms
  function displayEmpty() {
    searchTable.empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("No rooms yet for this ZipCode, navigate <a href='/postRooms'>here</a> in order to create a new room.");
    searchTable.append(messageh2);
  }





})