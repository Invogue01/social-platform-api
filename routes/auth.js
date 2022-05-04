const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("its authentication routes");
});

module.exports = router;
