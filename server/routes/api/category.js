const router = require("express").Router();
const categoryController = require("../../controllers/categoryController");

router
  // lines up with /api/user
  .route("/")
  .get(categoryController.findOne);

module.exports = router;
