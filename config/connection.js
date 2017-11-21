// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
//
// Dependencies
var Sequelize = require("sequelize");
var config = require('./config/config.json');

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(config.development.database, "root", "password", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
