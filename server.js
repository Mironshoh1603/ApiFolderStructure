const express = require("express");
const env = require("dotenv").config();
let morgana = require("morgan");

let schoolRouter = require("./routes/user.route");
let staticRouter = require("./routes/static.route");
const bodyUpdater = require("./middlewares/body.updater");
const logger = require("./middlewares/log.middleware");

let app = express();

app.set("view engine", "ejs");
app.set("views", "./public/views");
app.use(express.static("public"));
app.use(express.json());
app.use(morgana("dev"));
app.use(bodyUpdater);

//middleware

app.use("/user", schoolRouter);
app.use("/", staticRouter);
// app.get("/users/:id")

app.get("*", (req, res, next) => {
  res.status(500).json({ message: "Server is not running" });
});
app.listen(process.env.PORT);
