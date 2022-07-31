const { Router } = require("express");
const CustomError = require("../helpers/Error.class");
const router = Router();

router.use("/v1", require("./v1"));

module.exports = router;
