//shorten document on ready code function
$(function() {

    var loginModal = $("formId#submit-Login");
    var userNameInput = $("input#userName");
    var passwordInput = $("input#password");

    //when the form is submitted we validate there's a property id and password entered
    $("#submit-Login").click(function(e) {

        e.preventDefault();

        var hotelLogin = {
            userName: userNameInput.val().trim(),
            password: passwordInput.val().trim()
        };
        //need to include if userName or password isn't in the database
        if (!hotelLogin.userName || !hotelLogin.password) {
            $("#password").append("")
            // alert("you must enter a valid username and/or password");
            userNameInput.val("");
            passwordInput.val("");
        }

        //If we have a userName and password we run the loginHotel function and clear the Form
        loginHotel(hotelLogin);
        userNameInput.val("");
        passwordInput.val("");
    });
    //need to create an onclick event for log out

    //loginHotel function does a post to our "/api/hotels/login" route and if successful, redirects us to the choice page
    function loginHotel(hotelLogin) {
        $.post("/api/hotels/login", hotelLogin).then(function(data) {
            window.location.replace(data);
        }).catch(function(err) {
            // alert("Login incorrect.");
        });
    };
    //logoutHotel does a post to "" route and redirects to home page.
    function logoutHotel(hotelLogin){
      $.get("/api/hotel/login", hotelLogin).then(function(){
        window.location.replace("*");
      }).catch(function(err){
        console.log(err);
      })
    }
});

//form validation
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
            property_id: {
                required: ""
            },
            password: "",
        },
        //might need to change this later
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
