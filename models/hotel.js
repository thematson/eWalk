module.exports = function(sequelize, DataTypes) {
  var Hotel = sequelize.define("Hotel", {
    hotel_name: {
      type: DataTypes.STRING,
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
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    phone: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      
      validate: {
        len: [1]
      }
    },
    aboutUs: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    routingNumber: {
      type: DataTypes.TINYINT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    balance: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      validate: {
        len: [1]
      }
    },
    api_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Hotel;
};

// Syncs with DB
// Hotel.sync();

// Makes the Character Model available for other files (will also create a table)
// module.exports = Hotel;
