//shorten document on ready code function
$(function(){

  var loginModal = $("formId#submit-Login");
  var userNameInput = $("input#userName");
  var passwordInput = $("input#password");

  //when the form is submitted we validate there's a property id and password entered
 $("#submit-Login").click(function(e){

   e.preventDefault();

   var hotelLogin = {
     userName: userNameInput.val().trim(),
     password: passwordInput.val().trim()
   };
   console.log(hotelLogin);
//need to include if userName or password isn't in the database
   if (!hotelLogin.userName || !hotelLogin.password ){
      alert("you must enter a valid username and/or password");
      res.redirect("/");
   }

   //If we have a userName and password we run the loginHotel function and clear the Form
   loginHotel(hotelLogin.userName, hotelLogin.password);
     userNameInput.val("");
     passwordInput.val("");
});


//loginHotel function does a post to our "/api/hotels/login" route and if successful, redirects us to the choice page
function loginHotel(userName, password){
  $.post("/api/hotels/login", {
    userName: userName,
    password: password
  }).then(function(data){
    window.location.replace(data);
  }).catch(function(err){
    console.log(err);
  });
 };
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
            property_id:{
                required: "Enter a UserName"
            },
            password: "Your password must be at least 4 characters",
        },
      //might need to change this later
        errorElement : 'div',
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
