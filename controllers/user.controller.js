let getAllUsers = (req, res, next) => {
  res.status(200).json({ mesage: "Message from school Controller" });
};
let getUserById = (req, res, next) => {
  res.status(200).json({ mesage: "By id Controller " + req.params.id });
};

module.exports = { getAllUsers, getUserById };
