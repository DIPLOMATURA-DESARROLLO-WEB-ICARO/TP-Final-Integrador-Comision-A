var moment = require("moment");
const notFoundMiddleware = function (req, res, next) {
    // console.log('err: ', err.stack);
    // console.log("---------ERROR-------");
    res.status(404).json({ message: "La ruta no existe " + req.originalUrl });
  }

module.exports = { notFoundMiddleware };
