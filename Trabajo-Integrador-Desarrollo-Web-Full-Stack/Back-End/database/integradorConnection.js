var { Sequelize } = require("sequelize");

var integrador = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_CONNECTION,
  }
);

integrador
  .authenticate()
  .then(() => {
    console.log("Connected to database with sequelize");
  })
  .catch((err) => {
    console.log("err: ", err);
  });

module.exports = integrador;
