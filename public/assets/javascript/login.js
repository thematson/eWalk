//shorten document on ready code function
$(function(){

  var loginModal = $("formId#submit-Login");
  var userNameInput = $("input#userName");
  var passwordInput = $("input#password");

  //when the form is submitted we validate there's a property id and password entered
 $("#submit-Login").click(function(e){
  console.log("button was clicked");
   e.preventDefault();

   var hotelLogin = {
     property_id: userNameInput.val().trim(),
     password: passwordInput.val().trim()
   };

   if (!hotelLogin.property_id || !hotelLogin.password){
      return;
   }

   //If we have a property_id and password we run the loginHotel function and clear the Form
   loginHotel(hotelLogin.property_id, hotelLogin.password);
   propertyIdInput.val("");
   passwordInput.val("");
});


//loginHotel function does a post to our "/api/hotels/login" route and if successful, redirects us to the choice page
function loginHotel(porperty_id, password){
  $.post("/api/hotels/login", {
    property_id: property_id,
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
            property_id: {
                required: true,
                minlength: 1
            },
            password: {
                required: true,
                minlength: 4
            },
        //For custom messages
        messages: {
            property_id:{
                required: "Enter a Property Id"
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
