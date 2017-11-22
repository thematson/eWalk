$(document).ready(function() {
 
  // Getting the intiial list of Authors
  getRooms();

 

  // Function for creating a new list row for authors
  function createAuthorRow(authorData) {
    console.log(authorData);
    var newTr = $("<tr>");
    newTr.data("author", authorData);
    newTr.append("<td>" + authorData.name + "</td>");
    newTr.append(
      "<td># of posts will display when we learn joins in the next activity!</td>"
    );
    newTr.append(
      "<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>"
    );
    newTr.append(
      "<td><a href='/cms?author_id=" +
        authorData.id +
        "'>Create a Post</a></td>"
    );
    newTr.append(
      "<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>"
    );
    return newTr;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getAuthors() {
    $.get("/api/authors", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      renderAuthorList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderAuthorList(rows) {
    authorList
      .children()
      .not(":last")
      .remove();
    authorContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      authorList.prepend(rows);
    } else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Author before you can create a Post.");
    authorContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this)
      .parent("td")
      .parent("tr")
      .data("author");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/authors/" + id
    }).done(getAuthors);
  }
});
