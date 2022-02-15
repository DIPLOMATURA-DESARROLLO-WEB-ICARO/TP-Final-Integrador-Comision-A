const express = require("express");
const messageRouter = express.Router();
const messageController = require("../controllers/messageController");

messageRouter.delete("/api/messages/:id", messageController.deleteMessage);
messageRouter.put("/api/messages/read/:id", messageController.readMessage);

module.exports = messageRouter;