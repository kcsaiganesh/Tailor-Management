<<<<<<< HEAD
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const app = express();

dotenv.config({ path: './config.env' });
=======
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);
>>>>>>> 9ecb9e1d1da37c16b8640fe0d048b0b8c7237955


<<<<<<< HEAD

// Connect to the database
require('./db/conn');

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  })
);

app.use(express.json())

// Mount the auth router
app.use('/', require('./router/auth'));

// Define some routes
app.get('/about', (req, res) => {
  console.log('Hello my About');
  res.send('Hello About world from the server');
});

app.get('/contact', (req, res) => {
  res.send('Hello Contact world from the server');
});

app.get('/signin', (req, res) => {
  res.send('Hello Login world from the server');
});

app.get('/signup', (req, res) => {
  res.send('Hello Registration world from the server');
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
=======
mongoose.connect(
  "mongodb+srv://thagoo:stud@cluster0.213u1iw.mongodb.net/Tailor?retryWrites=true&w=majority"
);
mongoose.connection.on("connected", () => {
  console.log("MongoDB is connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB is disconnected");
});

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  country: String,
  city: String,
  province: String,
});

const User = mongoose.model("User", UserSchema);

app.post("/register", async (req, res) => {
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

    await user.save();

    const token = jwt.sign({ userId: user._id }, "mysecretkey");

    res.send({ token });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send("Email or password is incorrect");
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(401).send("Email or password is incorrect");
    }

    const token = jwt.sign({ userId: user._id }, "mysecretkey");

    res.send({ token });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/protected", (req, res) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];

    const decoded = jwt.verify(token, "mysecretkey");

    User.findById(decoded.userId, (error, user) => {
      if (error) {
        return res.status(500).send(error);
      }
      if (!user) {
        return res.status(401).send("Unauthorized");
      }
      res.send(user.fname);
    });
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
});

app.listen(8000, () => console.log("Server listening on port 8000"));
>>>>>>> 9ecb9e1d1da37c16b8640fe0d048b0b8c7237955
