const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  snowsports: Array,
  watersports: Array,
  camping: Array,
  bikes: Array,
  verticle: Array,
  misc: Array,
  item: { type: Schema.Types.ObjectId, ref: "Item" }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
