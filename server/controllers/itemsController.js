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
  createItem: function(req, res) {
    let body = req.body,
      title = body.title,
      location = body.location,
      price = body.price,
      imagePath = body.imagePath,
      description = body.description,
      subcategoryId = body.subcategoryId;

    new Item(function(body) {
      let record = body;
      record.title = title;
      record.location = location;
      record.price = price;
      record.description = description;
      record.subcategoryId = subcategoryId;
      record.imagePath = imagePath;
      record.save(function(err, item) {
        if (err) {
          res.send("Error");
        } else {
          res.send(item);
        }
      });
    });
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
