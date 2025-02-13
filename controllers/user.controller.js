const { readUserFile, writeUserFile } = require("../services/user.service");

let getAllUsers = (req, res, next) => {
  let data = readUserFile();
  res.status(200).json({ mesage: "Message from school Controller", data });
};
let getUserById = (req, res, next) => {
  console.log(typeof req.params.id);

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

let addUser = (req, res, next) => {
  let { name, lastname, email } = req.body; // -45 96  141
  console.log(req.body);
  if (!name || !email || !lastname)
    throw new Error("Foydanuvci ma'lumotlari to'gri kirit");
  let user = {
    id: Math.floor(Math.random() * 100 + 100),
    name,
    lastname,
    email,
  };
  let users = readUserFile();
  users.push(user);
  writeUserFile(users);
  res.status(201).json({ status: "Succes", user });
};
let deleleUserByid = (req, res, next) => {
  let user = readUserFile(req.params.id);
  console.log(user);

  if (user == "No data") throw new Error("User topilmadi");
  let users = readUserFile().filter((item) => item.id !== +req.params.id);
  writeUserFile(users);
  res.status(204).json({ message: "Ochirildi" });
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserDataById,
  addUser,
  deleleUserByid,
};
