const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");
const path = require("path");
const multer = require("multer");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: "public/itemImages/",
  filename: function(req, file, callback) {
    crypto.pseudoRandomBytes(16, function(err, raw) {
      if (err) return callback(err);
      callback(null, raw.toString("hex") + path.extname(file.originalname));
    });
  }
});
const upload = multer({ storage: storage });
const sUpload = upload.single("imagePath");

router
  // lines up this /item
  .route("/")
  .get(itemsController.findAll)
  .post(sUpload, itemsController.create);

router
  // lines up with /item/:id
  .route("/:id")
  .get(itemsController.findById)
  .put(itemsController.update)
  .delete(itemsController.remove);

module.exports = router;
