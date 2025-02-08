let express = require("express");
const { getAllUsers, getUserById } = require("../controllers/user.controller");
let router = express.Router();

router.get("/", getAllUsers);
router.get("/class", (req, res, next) => {
  res.status(200).json({ mesage: "Message from school Router 5G class" });
});
router.post("/", (req, res, next) => {
  res.status(201).json({ mesage: "SChoolCreateed" });
});

router.get("/:id", getUserById);

module.exports = router;
