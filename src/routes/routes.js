const { Router } = require("express");
const CustomError = require("../helpers/Error.class");
const router = Router();
const userRoutes = require("./userRoutes");

router.use("/user", userRoutes);

module.exports = router;
