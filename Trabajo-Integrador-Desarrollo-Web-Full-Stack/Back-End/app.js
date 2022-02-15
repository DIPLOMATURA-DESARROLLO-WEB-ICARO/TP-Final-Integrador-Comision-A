require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.APP_PORT;
const path = require("path");
const cors = require("cors");

app.use(cors())
const userRouter = require("./routes/user-routes");
const authRouter = require("./routes/auth-routes");
const messageRouter = require("./routes/message-routes");

const errorAppMiddleware = require("./middleware/errorAppMiddleware");
const { notFoundMiddleware } = require("./middleware/notFoundMiddleware");
const authMiddleware = require("./middleware/authMiddleware");

const {
  RegistrationDev,
  RegistrationArchive,
} = require("./middleware/registrationMiddleware");

const { appTimestampMiddleware } = require("./middleware/appMiddleware");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sequelize = require("./database/integradorConnection");

app.use([RegistrationDev, RegistrationArchive]);

app.use(appTimestampMiddleware);

app.use(authRouter);
app.use(authMiddleware.authRoutesMiddleware, userRouter);
app.use(authMiddleware.authRoutesMiddleware, messageRouter);

app.all("*", notFoundMiddleware);

app.use(errorAppMiddleware);

app.listen(port, "localhost", () => {
  console.log("app corriendo en el puerto " + port);
});
