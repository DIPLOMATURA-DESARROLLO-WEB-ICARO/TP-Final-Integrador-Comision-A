const Message = require("../model/message-model");
const http = require("http-status-codes");

// -----------------------------------------------------------------------------------------------------------------------//

const deleteMessage = async (req, res) => {
  const { id: id_message } = req.params;
  const message = await Message.findOne({where: {id_message}})
  await message.destroy()
  // verificar que el mensaje pertenece al usuario
  // verificar que el mensaje existe
  res.json({ status: http.StatusCodes.OK, data: "Message deleted successfully"});
};

const readMessage = async (req, res) => {
  console.log(req.body);
  const body =  req.body;
  const { id: id_message } = req.params;
  let message = await Message.findOne({where: {id_message}})
  message = await message.update(body)

  console.log("Entro en el read")
  res.json({ status: http.StatusCodes.OK, data: "Message update successfully", message: message});
};

// -----------------------------------------------------------------------------------------------------------------------//

module.exports = {
  deleteMessage,
  readMessage
};