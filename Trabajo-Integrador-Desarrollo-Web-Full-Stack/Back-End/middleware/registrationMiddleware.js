var Registration = require("morgan");
const path = require("path");
const fs = require("fs");

const RegistrationDev = Registration("dev");

const RegistrationArchive = Registration("combined", {
  stream: fs.createWriteStream(path.join(__dirname, "../access.log"), {
    flags: "a",
  }),
});

module.exports = {
  RegistrationDev,
  RegistrationArchive,
};
