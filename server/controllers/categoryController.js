const { Category } = require("../models/category");

module.exports = {
  findAll: function(req, res) {
    Category.find({})
      .populate({ path: "subcategories", select: "name" })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findOne: function(req, res) {
    // let id = JSON.stringify(req.params.id);
    Category.findOne({ name: req.body.name })
      .populate({
        path: "subcategories",
        select: "name"
      })
      .then(function(result) {
        res.send(result);
      })
      .catch(err => res.json(err));

    // .then(dbModel => res.json(dbModel))
    // .catch(err => res.json(err));
  }
};
