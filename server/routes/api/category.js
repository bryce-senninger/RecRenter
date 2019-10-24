const router = require("express").Router();
const categoryController = require("../../controllers/categoryController");

router
  // lines up with /api/category
  .route("/")
  .get(categoryController.findAll);

router.route("/:id").get(categoryController.findOne);

module.exports = router;
