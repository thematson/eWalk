module.exports = function(sequelize, DataTypes) {
  var Room = sequelize.define("Room", {
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

  Room.associate = function(models){
    Room.belongsTo(models.Hotel, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Room;
};
