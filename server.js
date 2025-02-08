const express = require("express");
const env = require("dotenv").config();

let app = express();

app.get("*", (req, res, next) => {
  res.status(200).json({ message: "Succces" });
});

app.listen(process.env.PORT);
