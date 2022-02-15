const db = require("../database/db");
const conec = db.connection;
const mysql = require("mysql");

const user = {
  table: "users",
  conec: conec,

  getUserAll: function (callback) {
    this.conec.query("SELECT * FROM users", callback);
  },
};

const userSchema = mysql.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  create: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mysql.model("user", userSchema);
