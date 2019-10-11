const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, uniqe: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: String,
  phone: Number,
  location: String,
  rating: Number
});

const User = mongoose.model("User", userSchema);

module.exports = User;
