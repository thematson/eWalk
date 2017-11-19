// PROPERTY
// ewalk_id	property_name	url	address	phone	aboutUs	routingNumber	balance	api_id


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
      defaultValue: "123456789",
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
