const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: { type: String, required: true, unique: true },
  // category: { type: String, unique: true },
  // subCategory: String,
  keyword: Array,
  description: String,
  location: String,
  images: Array,
  price: Number,
  isRented: { type: Boolean, default: false },
  created_at: { type: Date, default: null },
  ownerID: { type: Schema.Types.ObjectId, ref: "User" },
  renterID: { type: Schema.Types.ObjectId, ref: "User" },
  category: { type: String, field: "category", ref: "Category" }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
