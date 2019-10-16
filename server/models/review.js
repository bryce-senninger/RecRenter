const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  name: { type: String, required: true },
  feedback: String,
  rating: Number,
  user: { type: Schema.ObjectId, ref: "User" }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
