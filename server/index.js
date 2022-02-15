const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const port = 4000;
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json("Server On");
});
app.listen(port, () => {
  connection.connect(function (err) {
    if (err) throw err;
    console.log("connected to DB");
  });
});

app.get("/api/users", (req, res) => {
  connection.query("SELECT * FROM users", function (err, rows, fields) {
    if (err) {
      res.send("Connection Failed");
      console.log(err);
    }
    res.send(rows);
    console.log("results: ", rows);
  });
});

app.post("/api/users", (req, res) => {
  let query = `INSERT into users
    (username, password,firstname,lastname,country,city)
    VALUE(?,?,?,?,?,?)`;
  let values = [
    req.body["username"],
    req.body["password"],
    req.body["firstname"],
    req.body["lastname"],
    req.body["country"],
    req.body["city"],
  ];

  connection.query(query, values, function (err, rows, fields) {
    if (err) {
      res.send("Connection Failed");
      console.log(err);
    }
    res.json("Added successfully");
    console.log("results: ", rows);
  });
});

app.put("/api/users", (req, res) => {
  let query = `UPDATE users set username=?, password=?, firstname=?, lastname=?, country=?,city=? where userId=? `;
  let values = [
    req.body["username"],
    req.body["password"],
    req.body["firstname"],
    req.body["lastname"],
    req.body["country"],
    req.body["city"],
  ];

  connection.query(query, values, function (err, rows, fields) {
    if (err) {
      res.send("Connection Failed");
      console.log(err);
    }
    res.json("Updated successfully");
    console.log("results: ", rows);
  });
});

app.delete("/api/users/:id", (req, res) => {
  let query = `DELETE from users where userId=?`;
  let values = [parseInt(req.params.id)];

  connection.query(query, values, function (err, rows, fields) {
    if (err) {
      res.send("Connection Failed");
      console.log(err);
    }
    res.json("Deleted successfully");
    console.log("results: ", rows);
  });
});

app.get("/api/users/:username/messages/inbox", (req, res) => {
  connection.query(
    "SELECT * FROM messages where receiverId",
    function (err, rows, fields) {
      if (err) {
        res.send("Connection Failed");
        console.log(err);
      }
      res.send(rows);
      console.log("results: ", rows);
    }
  );
});
app.get("/api/users/:username/messages/sent", (req, res) => {
  connection.query(
    "SELECT * FROM messages where userId",
    function (err, rows, fields) {
      if (err) {
        res.send("Connection Failed");
        console.log(err);
      }
      res.send(rows);
      console.log("results: ", rows);
    }
  );
});

app.post("/api/users/:username/messages", (req, res) => {
  let query = `INSERT into messages
    (message,userId,receiverId,create, update)
    VALUE(?,?,?,?,?)`;
  let values = [
    req.body["message"],
    req.body["userId"],
    req.body["receiverId"],
    req.body["create"],
    req.body["update"],
  ];

  connection.query(query, values, function (err, rows, fields) {
    if (err) {
      res.send("Connection Failed");
      console.log(err);
    }
    res.json("Added successfully");
    console.log("results: ", rows);
  });
});

app.delete("/api/users/:username/messages/:id", (req, res) => {
  let query = `DELETE from message where messageId=?`;
  let values = [parseInt(req.params.id)];

  connection.query(query, values, function (err, rows, fields) {
    if (err) {
      res.send("Connection Failed");
      console.log(err);
    }
    res.json("Deleted successfully");
    console.log("results: ", rows);
  });
});
