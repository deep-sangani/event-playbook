const { Router } = require("express");
const router = Router();
//test router

router.get("/test", (req, res, next) => {
  res.send("test");
});

router.use("/auth", require("./auth"));
router.use("/home", require("./home"));
router.use("/search", require("./search"));

module.exports = router;
