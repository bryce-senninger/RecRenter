const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  title: { type: String, required: true },
  feedback: String,
  rating: Number,
  reviewerId: { type: Schema.Types.ObjectId, ref: "User" }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
