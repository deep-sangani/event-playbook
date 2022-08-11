const express = require('express')
// const auth = require("../middlewares/auth");
const userController = require('../controllers/user')

const router = express.Router()

router.post('/manual-register', userController.registerUser)
router.get('/:id', userController.getUserById)
router.get('/get-all-users', userController.getAllUsers)
// router.post("/login", userController.login);

module.exports = router
