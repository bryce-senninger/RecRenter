const { Category } = require("../models/category");

module.exports = {
  findAll: function(req, res) {
    Category.find({})
      .populate({ path: "subcategories", select: "name image" })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findOne: function(req, res) {
    let id = req.params.id;
    Category.findOne({ _id: id })
      .populate({
        path: "subcategories",
        select: "name image"
      })
      .then(function(result) {
        res.send(result);
      })
      .catch(err => res.json(err));
  }
};
