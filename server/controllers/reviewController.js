const Review = require("../models/review");

module.exports = {
  findAll: function(req, res) {
    Review.find({})
      .populate("reviewerId", "username")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  create: function(req, res) {
    Review.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
