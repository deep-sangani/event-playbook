const express = require("express");
// const auth = require("../middlewares/auth");
const userController = require("../controllers/user");

const router = express.Router();

router.post("/register", userController.registerUser);
// router.post("/login", userController.login);
router.get("/userDetails", userController.getUserDetails);

module.exports = router;
