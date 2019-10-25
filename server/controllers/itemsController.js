const Item = require("../models/item");

module.exports = {
  new: (req, res) => {
    console.log(req.body + "this is req.body");

    Item.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  createItem: function(req, res) {
    const cloudinary = require("cloudinary").v2;

    cloudinary.config({
      cloud_name: "dqpccnwco",
      api_key: "442876256574885",
      api_secret: "9yurGnuwemrGwR90gIdL7d3_wdQ"
    });

    const path = req.file.path;
    const uniqueFilename = new Date().toISOString();

    cloudinary.uploader.upload(
      path,
      { public_id: `items/${uniqueFilename}`, tags: `item` },
      function(err, image) {
        if (err) return res.send(err);
        console.log("file uploaded to Cloudinary");

        const fs = require("fs");
        fs.unlinkSync(path);

        res.json(image);

        // let imagePath = result.files;
      }
    );
  },
  findAll: function(req, res) {
    Item.find({})
      .populate("subcategoryId reviewId")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findOne: function(req, res) {
    let id = req.params.id;
    Item.findOne({ _id: id })
      .populate({
        path: "subcategories",
        select: "name image"
      })
      .then(function(result) {
        res.send(result);
      })
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
