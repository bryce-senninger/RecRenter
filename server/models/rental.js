const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
  title: String,
  category: { type: String, unique: true },
  subCategory: String,
  keyword: Array,
  description: String,
  location: String,
  image: String,
  price: Number,
  phoneNumber: Number,
  created_at: { type: Date, required: true, default: Date.now },
  user: { type: Schema.ObjectId, ref: "User" }
});

const Rental = mongoose.model("Rental", rentalSchema);

module.exports = Rental;
