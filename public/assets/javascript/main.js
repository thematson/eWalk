// hotels
$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  var $nameInput = $("input#property_name");
  var $urlInput = $("input#property_url");
  var $addressInput = $("input#property_address");
  var $zipCode = $("input#property_zip");
  var $phoneInput = $("input#property_phone");
  var $aboutUsInput = $("textarea#textarea1");
  var $routingInput = $("input#property_routing");


  $(document).on("submit", "#modal2", addHotel);
  

 var hotel = [];

 function addHotel(event) {
    event.preventDefault();
    console.log("clicked");
    var hotel = {
      hotel_name: $nameInput.val().trim(),
      url: $urlInput.val().trim(),
      address: $addressInput.val().trim(),
      zipCode: $zipCode.val().trim(),
      phone: $phoneInput.val().trim(),
      aboutUs: $aboutUsInput.val().trim(),
      routingNumber: $routingInput.val().trim(),
      balance: 0,
      complete: false
    };
  }

  function proceed() {
    window.location.replace("/choice/" + hotel.Id);

  }

 

});
