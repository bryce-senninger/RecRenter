const { Category } = require("../models/category");

module.exports = {
  findOne: function(req, res) {
    Category.find({})
      .populate({ path: "subcategoryId", select: "title" })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
