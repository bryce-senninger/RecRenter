const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  name: String,
  feedback: String,
  rating: Number,
  user: { type: Schema.ObjectId, ref: "User" }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
