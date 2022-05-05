const router = require("express").Router();
const User = require("../models/User");

//register
router.get("/register", (req, res) => {
  const user = new User({
    username: "andrea",
    email: "andrea@email.com",
    password: "12345678",
  });
  user.save();
  res.send("all ok");
});

module.exports = router;
