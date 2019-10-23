const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");

router
  // lines up with /api/review
  .route("/")
  .get(reviewController.findAll)
  .post(reviewController.create);

module.exports = router;
