const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const path = require("path");
const multer = require("multer");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: "public/userImages/",
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
  // lines up with /api/user
  .route("/")
  .get(usersController.findAll);

router.route("/signup").post(usersController.signup);
router.route("/login").post(usersController.login);

// router.route("/login").get();

router
  //lines up with /api/user/:id
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
