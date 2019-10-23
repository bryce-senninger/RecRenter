const Item = require("../models/item");

module.exports = {
  findAll: function(req, res) {
    Item.find({})
      .populate("subcategoryId reviewId")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findById: function(req, res) {
    Item.findById({ _id: req.params.id })
      .populate("subcategoryId")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  create: function(req, res) {
    Item.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  update: function(req, res) {
    Item.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  remove: function(req, res) {
    Item.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
