const { Category } = require("../models/category");

module.exports = {
  findAll: function(req, res) {
    Category.find({})
      .populate({ path: "subcategories", select: "name" })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findOne: function(req, res) {
    // let id = req.params.id;
    Category.findOne(req.body)
      // .then(dbModel => res.json(dbModel))
      .populate({ path: "subategories", select: "name" })
      .then(function(result) {
        res.send(result);
      });

    // .then(dbModel => res.json(dbModel))
    // .catch(err => res.json(err));
  }
};
