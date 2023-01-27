const express = require('express');
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require('../model/userSchema');
const { emit } = require('nodemon');



userRouter.post("/register", async (req, res) => {

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  User.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      res.statusCode(502).json({ message: 'exist' });
    } else {

      const user = new User({
        firstName: req.body.fname,
        lastName: req.body.lname,
        email: req.body.email,
        password: hashedPassword,
        country: req.body.country,
        city: req.body.city,
        province: req.body.province,
        orders: [],
      });
      user.save((err) => {
        if (err) {
          res.status(500).json({ message: 'Something error occured ,Try again' });
        } else {
          res.status(200).json({ status: "Account has been created!! Please Login" });
        }
      });
    }
  });

  // user.save((err) => {

  // });
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: req.body.email })
  console.log(user)
  if (!user) {
    return res.send("User Not Found");
  }
  if (await bcrypt.compare(password, user.password)) {
    res.send(email);
  } else {
    res.send("Password is incorrect")
  }
});

module.exports = userRouter;