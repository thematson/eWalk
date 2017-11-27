var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

passport.use(new LocalStrategy(
//Our user will log in using an email addressInput
{
  usernameField: "userName"
},
function(id, password, done){
  //When a user logs in
  db.Hotel.findOne({
    where: {
      userName: id
    }
  }).then(function(dbHotel){
    //If no user with given email
    console.log("console log in passport");
    console.log(dbHotel);
    if(!dbHotel || !dbHotel.validPassword(password)){

      return done(null, false, {
        message: "Incorrect login."
      });
    }
    //If none of the above, return the user
    return done(null, dbHotel);
  });
}
));

passport.serializeUser(function(hotel, cb){
  cb (null, hotel);
});

passport.deserializeUser(function(obj, cb){
  cb(null, obj);
});

module.exports = passport;
