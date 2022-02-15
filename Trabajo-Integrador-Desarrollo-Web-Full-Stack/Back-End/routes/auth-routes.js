const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController");

authRouter.post("/api/login", authController.login);
authRouter.post("/api/signup", authController.signUp);

module.exports = authRouter;
