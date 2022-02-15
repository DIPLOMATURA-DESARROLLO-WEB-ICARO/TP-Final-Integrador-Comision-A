const express = require("express");
const userRouter = express.Router();
const {
  appRoutePostTimestampMiddleware,
} = require("../middleware/appMiddleware");

const userController = require("../controllers/userController");

userRouter.get("/api/users", userController.getUserAll);

userRouter.get(
  "/api/users/:username/messages/inbox",
  userController.receivedMessagesById
);
userRouter.get(
  "/api/users/:username/messages/sent",
  userController.sentMessagesById
);
userRouter.post(
  "/api/users/:username/messages",
  userController.SendMessageToId
);

module.exports = userRouter;
