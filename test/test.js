var expect = require("chai").expect;
var login = require("../login");

describe("login", function() {
  it("to login a user when the provided username exist and the correct password was provided", function() {
    expect(loginHotel("ExistingUsername, CorrectPassword")).to.equal("return done(null, dbHotel)");
  });

  it("to prevent logging in when the username entered does not exist", function() {
    expect(loginHotel("NonExistingUsername, EnteredPassword")).to.equal("return done(null, false, {message: 'Incorrect login.'});");
  });

  it("to prevent logging in when the username exist, but the provided password was incorrect", function() {
    expect(loginHotel("ExistingUsername, IncorrectPassword")).to.equal("return done(null, false, {message: 'Incorrect login.'});");
  });

});
