const express = require("express");
const env = require("dotenv").config();

let schoolRouter = require("./routes/user.route");

let app = express();

app.use(express.json());

app.use("/user", schoolRouter);
// app.get("/users/:id")

app.get("*", (req, res, next) => {
  res.status(200).json({ message: "Succces" });
});
app.listen(process.env.PORT);
