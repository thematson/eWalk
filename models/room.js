// ROOMS
// room_ID	price	beds	roomType	aboutRoom	quantity	createDate	status	closeDate	ewalk_ID

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var Room = sequelize.define("Room", {
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    ewalk_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    price: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      len: [1]
    },
    roomType: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    aboutRoom: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,

    },
    closeDate: {
      type: DataTypes.DATE,
      allowNull: false,

    }
  });
  return Room;
};

// Syncs with DB
// Room.sync();

// Makes the Character Model available for other files (will also create a table)
// module.exports = Room;
