const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: { type: String },
  keyword: Array,
  description: String,
  location: { type: String },
  imagePath: { data: Buffer, contentType: String },
  price: { type: Number },
  isRented: { type: Boolean, default: false },
  created_at: { type: Date, default: null },
  ownerId: { type: Schema.Types.ObjectId, ref: "User" },
  renterId: { type: Schema.Types.ObjectId, ref: "User", default: null },
  reviewId: { type: Schema.Types.ObjectId, ref: "Review" },
  subcategoryId: { type: Schema.Types.ObjectId, ref: "Subcategory" }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
