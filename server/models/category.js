const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
  _id: { type: String, unique: true, required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category" }
});

const categorySchema = new Schema({
  _id: { type: String, required: true, unique: true },
  subcategories: [subcategorySchema]
});

const Category = mongoose.model("Category", categorySchema);
const Subcategory = mongoose.model("Subcategory", subcategorySchema);

module.exports = { Category, Subcategory };
