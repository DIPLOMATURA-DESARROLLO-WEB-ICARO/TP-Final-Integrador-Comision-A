const errorAppMiddleware = function (err, req, res, next) {
  
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // let enviroment = 'prod';
  let enviroment = "dev";

  if (enviroment == "prod") {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else if (enviroment == "dev") {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
    });
  }
  // console.log("---------ERROR-------");
  // res.status(500).send("Se rompio el servidor");
};

module.exports = errorAppMiddleware;
