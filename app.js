const express = require("express");
const logger = require("morgan");
require("dotenv").config();
const db = require("./db/db");
const userController = require("./controllers/user.controller");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const shopsRouter = require("./routes/shops");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Added authentication in all routes
app.use("*", userController.isAuthenticated);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/shops", shopsRouter);

module.exports = app;
