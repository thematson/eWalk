// *********************************************************************************
// LOGIN.JS - FUNCTIONS THAT ALLOW USERS TO SEARCH AND BOOK HOTEL(PROPERTY) ROOMS
// *********************************************************************************
//shorten document on ready code function
$(function() {

  var userNameInput = $("input#userName");
  var passwordInput = $("input#password");

  //when the form is submitted we validate there's a username and password entered
  $("#submit-Login").click(function(e) {
    e.preventDefault();

    var hotelLogin = {
      userName: userNameInput.val().trim(),
      password: passwordInput.val().trim()
    };
    // if userName or password isn't in the database
    if (!hotelLogin.userName || !hotelLogin.password) {
      $("#password").append("")
      userNameInput.val("");
      passwordInput.val("");
    }
    //If we have a userName and password we run the loginHotel function and clear the Form
    loginHotel(hotelLogin);
    userNameInput.val("");
    passwordInput.val("");
  });

  //loginHotel function does a post to our "/api/hotels/login" route and if successful, redirects us to the choice page
  function loginHotel(hotelLogin) {
    var logIn = hotelLogin.userName;
    $.post("/api/hotels/login/" + logIn, hotelLogin).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  };
  //logoutHotel does a post to "/api/hotels/logout" route and redirects to home page. `broken as of 11/30/17`
  function logoutHotel(hotelLogin) {
    $.get("/api/hotel/login", hotelLogin).then(function() {
      window.location.replace("*");
    }).catch(function(err) {
      console.log(err);
    })
  }

  $("#formValidate").validate({
    rules: {
      userName: {
        required: true,
        minlength: 4
      },
      password: {
        required: true,
        minlength: 4
      },
      //For custom messages
      messages: {
        userName: {
          required: "Incorrect credentials"
        },
        password: "Incorrect credentials"
      },
      //broken
      errorElement: 'div',
      errorPlacement: function(error, element) {
        var placement = $(element).data('error');
        if (placement) {
          $(placement).append(error)
        } else {
          error.insertAfter(element);
        }
      }
    }
  });
});
// *********************************************************************************
//                                END OF FILE
// *********************************************************************************