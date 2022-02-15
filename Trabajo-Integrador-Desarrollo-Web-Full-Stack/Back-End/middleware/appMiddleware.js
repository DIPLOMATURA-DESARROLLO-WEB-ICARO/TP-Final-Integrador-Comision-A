var moment = require("moment");

const appTimestampMiddleware = function (req, res, next) {
  console.log(
    "Middleware de apliacion -- REQUEST ENTRANTE --" +
      moment(new Date(), "DD-MM-YYYY").format("DD-MM-YYYY hh:mm:ss")
  );
  next();
};

const appRoutePostTimestampMiddleware = function (req, res, next) {
  console.log(
    "Middleware de apliacion asociado a ruta post " +
      moment(new Date(), "DD-MM-YYYY").format("DD-MM-YYYY hh:mm:ss")
  );
  next();
};

module.exports = { appTimestampMiddleware, appRoutePostTimestampMiddleware };
