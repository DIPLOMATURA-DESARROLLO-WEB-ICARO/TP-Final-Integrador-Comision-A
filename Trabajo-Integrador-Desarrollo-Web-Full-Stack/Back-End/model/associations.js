require("dotenv").config();
const sequelize = require("../database/integradorConnection");
const User = require("./user-model");
const Message = require("./message-model");


User.hasMany(Message, { as: "sender", foreignKey: "id_user" });
Message.belongsTo(User, { as: "sender", foreignKey: "id_user" });

User.hasMany(Message, {  as: "receiver", foreignKey: "id_user" });
Message.belongsTo(User, { as: "receiver", foreignKey: "id_receiver" });

sequelize.sync({ alter: true });
