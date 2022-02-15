const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/integradorConnection");

class Message extends Model {}

Message.init(
  {
    id_message: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    message: {
      type: DataTypes.STRING(144),
      allowNull: false,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_receiver: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isRead: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "messages",
    sequelize,
  }
);

module.exports = Message;
