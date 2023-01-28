const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const middlewares = require("./middlewares");

const usersRout = require("./routes/api/users");
const contactsRouter = require("./routes/api/contacts");
const noticesRouter = require("./routes/api/notices");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", usersRout);
app.use("/api/contacts", middlewares.auth, contactsRouter);
app.use("/api/notices", noticesRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
