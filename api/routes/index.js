var express = require("express");
var router = express.Router();

const home = require("./home");

router.get("/", home.getHomeDatas);

module.exports = router;