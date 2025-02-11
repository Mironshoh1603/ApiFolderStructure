const fs = require("fs");
const path = require("path");
let readUserFile = (id) => {
  let users = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../config", "user.json"), "utf-8")
  );
  if (!id) return users;
  let user = users.filter((item) => item.id == id);
  return user[0] ? user[0] : "No data";
};

let writeUserFile = (data) => {
  fs.writeFileSync(
    path.join(__dirname, "../config", "user.json"),
    JSON.stringify(data),
    "utf-8"
  );
};
module.exports = { readUserFile, writeUserFile };
