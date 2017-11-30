$(document).ready(function() {
 
  // searchTable holds all of our posts
  var searchTable = $(".tbody");
  var postZipCodeSelect = $("#zipSubmit");
  var posts;

  // =======================================================
  //IN PROGRESS -->  CHOOSE ZIP CODE




  // =======================================================
  //IN PROGRESS -->  BOOKING ROOM
  $(document).on("click", "#yes", bookRoom);

  function bookRoom() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    bookingPost(currentPost.id);
  }

  function bookingPost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + id
    })
    .done(function() {
      getPosts(postZipCodeSelect.val());
    });
  };
// =======================================================
  //IN PROGRESS -->  DISPLAY ROOMS
getRooms();

// This function grabs posts from the database and updates the view
function getRooms(ZipCode) {
  var ZipCodeString = ZipCode || "";
  if (ZipCodeString) {
    ZipCodeString = "/ZipCode/" + ZipCodeString;
  }
  $.get("/api/posts" + ZipCodeString, function(data) {
    console.log("Posts", data);
    posts = data;
    if (!posts || !posts.length) {
      displayEmpty();
    }
    else {
      initializeRows();
    }
  });
}

function initializeRows() {
  searchTable.empty();
  var postsToAdd = [];
  for (var i = 0; i < posts.length; i++) {
    postsToAdd.push(createNewRow(posts[i]));
  }
  searchTable.append(postsToAdd);
}

// This function constructs a post's HTML
function createNewRow(post) {
  //========TABLE START ==============================
  var newTableRow = $("<tr>");

  //========PROPERTY NAME ============================
    //APPEND TO ROW
    var NameCell = $("<td>");
      //APPEND TO CELL
      var NameSpan = $("<span id=propName>");

  //========PROPERTY DETAILS MODAL START==============
    //APPEND TO ROW
    var DetailsCell = $("<td>");
      //APPEND TO CELL
      var DetailsModalButton = $("<a id='viewProperty' class='waves-effect waves-light btn modal-trigger red lighten-2' href='#details'>");
      //APPEND TO CELL
      var DetailsDiv1 = $("<div id='details' class='modal wordWrap'>");
        //APPEND TO DIV1
        var DetailsDiv2 = $("<div class='modal-content property-details left-align'>");
          //APPEND TO DIV2
          var webLabel = $("<p class='details wordWrap'>");
            //APPEND TO LABEL
            var webLink = $("<a href=" + !!!URLLINK!!!MUST!!CHANGE + "style='cursor:pointer' target='_blank'>");
          //APPEND TO DIV2
          var addressLabel = $("<p class='details wordWrap'>");
            //APPEND TO LABEL
            var addressSpan = $("<span id=address>");
          //APPEND TO DIV2
          var phoneLabel = $("<p class='details wordWrap'>");
            //APPEND TO LABEL
            var phoneSpan = $("<span id=phone>");

  //========ROOM TYPE =================================
    //APPEND TO ROW
    var RoomTypeCell = $("<td>");
      //APPEND TO CELL
      var RoomTypeSpan = $("<span id=type>");

  //========ROOM DESCRIPTION MODAL START==============
    //APPEND TO ROW
    var DescriptionCell = $("<td>");
      //APPEND TO CELL
      var DescriptionModalButton = $("<a id='roomModal' class='waves-effect waves-light btn modal-trigger red lighten-2' href='#room'>");
      //APPEND TO CELL
      var DescriptionDiv1 = $("<div id='room' class='modal wordWrap'>");
        //APPEND TO DIV1
        var DescriptionDiv2 = $("<div class='modal-content room-details left-align'>");
          //APPEND TO DIV2
          var DescriptionLabel = $("<p class='roomDes wordWrap'>");
            //APPEND TO LABEL
            var DescriptionSpan = $("<span id='descr' class='wordWrap'>");

  //========ROOM TYPE =================================
    //APPEND TO ROW
    var PriceCell = $("<td>");
      //APPEND TO CELL
      var PriceSpan = $("<span id=price>");
  
  //========BOOK ROOM MODAL START==============
    //APPEND TO ROW
    var BookCell = $("<td>");
      //APPEND TO CELL
      var ConfirmButton = $("<a id='bookRoom' class='waves-effect waves-light btn modal-trigger red lighten-2' href='#modalConfirm'>");
      //APPEND TO CELL
      var ConfirmDiv1 = $("<div id='modalConfirm' class='modal wordWrap'>");
        //APPEND TO DIV1
        var ConfirmDiv2 = $("<div class='modal-content confirmContent wordWrap'>");
          //APPEND TO DIV2
          var ConfirmHeader = $("<h4 class='wordWrap'>");
          //APPEND TO DIV2
          var addressLabel = $("<p class='details wordWrap'>");
            //APPEND TO LABEL
            var addressSpan = $("<span id=address>");
          //APPEND TO DIV2
          var phoneLabel = $("<p class='details wordWrap'>");
            //APPEND TO LABEL
            var phoneSpan = $("<span id=phone>"); 
      



  
  var newPostPanel = $("<div>");
  newPostPanel.addClass("panel panel-default");
  var newPostPanelHeading = $("<div>");
  newPostPanelHeading.addClass("panel-heading");
  var deleteBtn = $("<button>");
  deleteBtn.text("x");
  deleteBtn.addClass("delete btn btn-danger");
  var editBtn = $("<button>");
  editBtn.text("EDIT");
  editBtn.addClass("edit btn btn-default");
  var newPostTitle = $("<h2>");
  var newPostDate = $("<small>");
  var newPostZipCode = $("<h5>");
  newPostZipCode.text(post.ZipCode);
  newPostZipCode.css({
    float: "right",
    "font-weight": "700",
    "margin-top":
    "-15px"
  });
  var newPostPanelBody = $("<div>");
  newPostPanelBody.addClass("panel-body");
  var newPostBody = $("<p>");
  newPostTitle.text(post.title + " ");
  newPostBody.text(post.body);
  var formattedDate = new Date(post.createdAt);
  formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
  newPostDate.text(formattedDate);
  newPostTitle.append(newPostDate);
  newPostPanelHeading.append(deleteBtn);
  newPostPanelHeading.append(editBtn);
  newPostPanelHeading.append(newPostTitle);
  newPostPanelHeading.append(newPostZipCode);
  newPostPanelBody.append(newPostBody);
  newPostPanel.append(newPostPanelHeading);
  newPostPanel.append(newPostPanelBody);
  newPostPanel.data("post", post);
  return newPostPanel;
}

  // This function displays a messgae when there are no posts
  function displayEmpty() {
    searchTable.empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("No posts yet for this ZipCode, navigate <a href='/cms'>here</a> in order to create a new post.");
    searchTable.append(messageh2);
  }





})