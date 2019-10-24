const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
  name: String
});

const schema = new Schema({
  // _id: { type: mongoose.Types.ObjectId, unique: true },
  name: String,
  image: String,
  subcategories: [{ type: mongoose.Types.ObjectId, ref: "Subcategory" }]
});

module.exports = {
  Subcategory: mongoose.model("Subcategory", subcategorySchema),
  Category: mongoose.model("Category", schema)
};
