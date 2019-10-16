const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
  name: String
});

const categorySchema = new Schema({
  category: String,
  subcategories: { subcategorySchema }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
