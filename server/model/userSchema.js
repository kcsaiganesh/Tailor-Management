const mongoose = require("mongoose");
const orderSchema = require("./orderSchema");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  country: String,
  city: String,
  province: String,
  orders: [orderSchema],
});


const User = mongoose.model("User", UserSchema);
console.log(User);
module.exports = User;