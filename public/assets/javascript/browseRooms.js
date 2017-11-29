$(document).ready(function() {
 
  // searchContainer holds all of our posts
  var searchContainer = $(".searchContainer");
  var postZipCodeSelect = $("#zipSubmit");

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
      getPosts(postCategorySelect.val());
    });
  };
// =======================================================

getRooms();

// This function grabs posts from the database and updates the view
function getRooms(category) {
  var categoryString = category || "";
  if (categoryString) {
    categoryString = "/category/" + categoryString;
  }
  $.get("/api/posts" + categoryString, function(data) {
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
  blogContainer.empty();
  var postsToAdd = [];
  for (var i = 0; i < posts.length; i++) {
    postsToAdd.push(createNewRow(posts[i]));
  }
  blogContainer.append(postsToAdd);
}

// This function constructs a post's HTML
function createNewRow(post) {
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
  var newPostCategory = $("<h5>");
  newPostCategory.text(post.category);
  newPostCategory.css({
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
  newPostPanelHeading.append(newPostCategory);
  newPostPanelBody.append(newPostBody);
  newPostPanel.append(newPostPanelHeading);
  newPostPanel.append(newPostPanelBody);
  newPostPanel.data("post", post);
  return newPostPanel;
}

  // This function displays a messgae when there are no posts
  function displayEmpty() {
    blogContainer.empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("No posts yet for this category, navigate <a href='/cms'>here</a> in order to create a new post.");
    blogContainer.append(messageh2);
  }





})