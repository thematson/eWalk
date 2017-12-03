/*----------------Hotel model (we often refer to it as 'property') -----------------*/
module.exports = function(sequelize, DataTypes) {
  var Hotel = sequelize.define("Hotel", {
    hotel_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
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
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    phone: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    balance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      validate: {
        len: [1]
      }
    }
  });
  //joining the hotel model with the room model so we can associate rooms with corresponding hotels
  Hotel.prototype.validPassword = function(password) {
    return password == this.password;
  };

  Hotel.associate = function(models) {
    Hotel.hasMany(models.Room, {
      onDelete: "cascade"
    });
  };

  return Hotel;
};
//end of hotel model