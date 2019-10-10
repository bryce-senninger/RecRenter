const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category: Array,
  subCategory: Array,
  item: { type: Schema.Types.ObjectId, ref: "Item" }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
