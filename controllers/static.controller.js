const { readUserFile } = require("../services/user.service");

let index = (req, res, next) => {
  let users = readUserFile();
  res.render("index", { data: "salom", users });
};

module.exports = { index };
