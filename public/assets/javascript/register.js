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
         name: nameInput.val().trim(),
         url: urlInput.val().trim(),
         address: addressInput.val().trim(),
         phone: phoneInput.val().trim(),
         aboutUs: aboutUsInput.val().trim(),
         routing: routingInput.val().trim(),
         userName: userNameInput.val().trim(),
         password: passwordInput.val().trim()
       };

       if (!hotelData.userName || !hotelData.password){
          return;
       }

       //If we have a userName and password we run the registerNewHotel function and clear the Form
       registerNewHotel(hotelData.nameInput,
                        hotelData.urlInput,
                        hotelData.addressInput,
                        hotelData.phoneInput,
                        hotelData.aboutUsInput,
                        hotelData.routingInput,
                        hotelData.userName,
                        hotelData.password);

           nameInput.val("");
           urlInput.val("");
           addressInput.val("");
           phoneInput.val("");
           aboutUsInput.val("");
           routingInput.val("");
           userNameInput.val("");
           passwordInput.val("");
        });


  function registerNewHotel(name, url, address, phone, aboutUs, routing, userName, password){
    $.post("/api/hotels/register", {
      hotel_name: hotel_name,
      url: url,
      address: address,
      phone: phone,
      property_id: property_id,
      aboutUs: aboutUs,
      routing: routing,
      userName: userName,
      password: password
    }).then(function(data){
      window.location.replace(data);
    }).catch(handleLoginErr);
  }
  //not really sure this function is necessary, or if it will work 
  function handleLoginErr(err){
    $("#alert.msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  }
});
