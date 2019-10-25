const router = require("express").Router();
const categoryController = require("../../controllers/categoryController");

router
  // lines up with /api/category
  .route("/")
  .get(categoryController.findAll);

// lines up with /api/category/:id
router.route("/:id").get(categoryController.findOne);

module.exports = router;
