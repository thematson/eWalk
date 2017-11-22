var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

passport.use(new LocalStrategy(
//Our user will log in using an email addressInput
{
  usernameField: "email"
},
function(email, password, done){
  //When a user logs in
  db.User.findOne({
    where: {
      email: email
    }
  }).then(function(dbUser){
    //If no user with given email
    if(!dbUser){
      return done(null, false, {
        message: "Incorrect email."
      });
    }
    //If none of the above, return the user
    return done(null, dbUser);
  });
}
));

passport.serializeUser(function(user, cb){
  cb (null, user);
});

passport.deserializeUser(function(obj, cb){
  cb(null, obj);
});

module.exports = passport;


))
