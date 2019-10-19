<<<<<<< HEAD
const db = require("../models");
=======
const db = require("../db/models/category");

const multer = require("multer");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: "itemImages/",
  filename: function(req, file, callback) {
    crypto.pseudoRandomBytes(16, function(err, raw) {
      if (err) return callback(err);
      callback(null, raw.toString("hex") + path.extname(file.originalname));
    });
  }
});
const upload = multer({ storage: storage });
const sUpload = upload.single("image");
>>>>>>> adding multer

module.exports = {
  findAll: function(req, res) {
    db.Item.find({})
      .populate("subcategories", "name")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findById: function(req, res) {
    db.Item.findById(req.params.id)
      .populate("categoryId")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  create: function(req, res) {
    db.Category.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  update: function(req, res) {
    db.Item.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  remove: function(req, res) {
    db.Item.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
