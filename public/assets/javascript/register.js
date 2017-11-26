$(function(){
  var registerModal = $("formId#submit-Register");
  var nameInput = $("#property_name");
  var urlInput = $("#property_url");
  var addressInput = $("#property_address");
  var phoneInput = $("#property_phone");
  var aboutUsInput = $("#textarea1");
  var routingInput = $("#property_routing");
  var userNameInput =$("#userName");
  var passwordInput = $("#password");

  registerModal.click(function(e){
    e.preventDefault();

       var hotelData = {
         userName: userNameInput.val().trim(),
         password: passwordInput.val().trim()
       };

       if (!hotelData.userName || !hotelData.password){
          return;
       }

       //If we have a userName and password we run the registerNewHotel function and clear the Form
       registerNewHotel(hotelData.userName, hotelData.password);
         nameInput.val("");
         urlInput.val("");
         addressInput.val("");
         phoneInput.val("");
         aboutUsInput.val("");
         routingInput.val("");
         userNameInput.val("");
         passwordInput.val("");
  });
});

function registerNewHotel(){


}
