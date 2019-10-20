const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: { type: String, required: true },
  keyword: Array,
  description: String,
  location: { type: String, required: true },
  images: { data: Buffer, contentType: String },
  price: { type: Number, required: true },
  isRented: { type: Boolean, default: false },
  created_at: { type: Date, default: null },
  ownerId: { type: Schema.Types.ObjectId, ref: "User" },
  renterId: { type: Schema.Types.ObjectId, ref: "User" },
  subcategoryId: { type: Schema.Types.ObjectId, ref: "Subcategory" }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
