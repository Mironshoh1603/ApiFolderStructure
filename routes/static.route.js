const express = require("express");
let router = express.Router();
let staticController = require("../controllers/static.controller");

router.get("/", staticController.index);

module.exports = router;
