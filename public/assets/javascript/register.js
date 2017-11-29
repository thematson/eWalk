$(function() {
    var registerModal = $("formId#submit-Register");
    var nameInput = $("#property_name");
    var urlInput = $("#property_url");
    var addressInput = $("#property_address");
    var phoneInput = $("#property_phone");
    var aboutUsInput = $("#textarea1");
    var routingInput = $("#property_routing");
    var userNameInput = $("#registerUserName");
    var passwordInput = $("#registerPassword");

    $("#submit-Register").click(function(e) {
        console.log("Register button was clicked!");
        e.preventDefault();

        var hotelData = {
            hotel_name: nameInput.val().trim(),
            url: urlInput.val().trim(),
            address: addressInput.val().trim(),
            phone: phoneInput.val().trim(),
            aboutUs: aboutUsInput.val().trim(),
            routingNumber: routingInput.val().trim(),
            userName: userNameInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!hotelData.userName || !hotelData.password) {
            return;
        }

        //If we have a userName and password we run the registerNewHotel function and clear the Form
        registerNewHotel(hotelData);

        nameInput.val("");
        urlInput.val("");
        addressInput.val("");
        phoneInput.val("");
        aboutUsInput.val("");
        routingInput.val("");
        userNameInput.val("");
        passwordInput.val("");
    });


    function registerNewHotel(hotelData) {
            $.post("/api/hotels/register", hotelData
            ).then(function(data) {
                window.location.replace(data);
            }).catch(handleLoginErr);
        }
        //not really sure this function is necessary, or if it will work--if deleted be sure to delete from index.html
        //as well
    function handleLoginErr(err) {
        $("#alert.msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }

});
