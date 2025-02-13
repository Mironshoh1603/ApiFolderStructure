let express = require("express");
const {
  getAllUsers,
  getUserById,
  updateUserDataById,
  addUser,
  deleleUserByid,
} = require("../controllers/user.controller");
const logger = require("../middlewares/log.middleware");
let router = express.Router();

router.get("/", logger, getAllUsers);
router.post("/", addUser);

router.get("/:id", getUserById);
router.put("/:id", updateUserDataById);
router.delete("/:id", deleleUserByid);
module.exports = router;
