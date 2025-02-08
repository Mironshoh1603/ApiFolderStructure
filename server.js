const express = require("express");
const env = require("dotenv").config();

let schoolRouter = require("./routes/school.route");

let app = express();

app.use("/school", schoolRouter);

app.get("*", (req, res, next) => {
  res.status(200).json({ message: "Succces" });
});
app.listen(process.env.PORT);
