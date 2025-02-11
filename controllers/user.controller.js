const { readUserFile, writeUserFile } = require("../services/user.service");

let getAllUsers = (req, res, next) => {
  let data = readUserFile();
  res.status(200).json({ mesage: "Message from school Controller", data });
};
let getUserById = (req, res, next) => {
  let data = readUserFile(req.params.id);
  res.status(200).json({ mesage: "By id Controller " + req.params.id, data });
};
let updateUserDataById = (req, res, next) => {
  let id = req.params.id;
  let data = req.body;

  let users = readUserFile();
  let byUserdata;
  users = users.map((user) => {
    if (user.id == id) {
      user.name = data.name ? data.name : user.name;
      user.age = data.age ? data.age : user.age;
      byUserdata = user;
    }
    return user;
  });
  writeUserFile(users);
  res
    .status(200)
    .json({ mesage: "By id Controller " + req.params.id, user: byUserdata });
};

module.exports = { getAllUsers, getUserById, updateUserDataById };
