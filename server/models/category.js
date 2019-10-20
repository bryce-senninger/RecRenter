const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
  title: String
});

const schema = new Schema({
  title: String,
  subcategoryId: [{ type: Schema.ObjectId, ref: "Subcategory" }]
});

module.exports = {
  Subcategory: mongoose.model("Subcategory", subcategorySchema),
  Category: mongoose.model("Category", schema)
};
