const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require('../model/userSchema');
const { emit } = require('nodemon');



router.post("/register", async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      const user = new User({
        firstName: req.body.fname,
        lastName: req.body.lname,
        email: req.body.email,
        password: hashedPassword,
        country: req.body.country,
        city: req.body.city,
        province: req.body.province,
      });
  
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ status: "Account has been created!! Please Login" });
        }
      });
  
      res.send({ token });
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
router.post("/login", async (req, res) => {
    const { email , password } = req.body;
     
    const user = await User.findOne({email:req.body.email})
    if(!user){
     return res.send("User Not Found");
    }
  
    if(await bcrypt.compare(password, user.password)){
      res.send(email);
    }else{
      res.send("Password is incorrect")
    }
  });

  module.exports = router;