const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

router
  // lines up this /item
  .route("/")
  .get(itemsController.findAll)
  .post(itemsController.create);

router
  // lines up with /item/:id
  .route("/:id")
  .get(itemsController.findById)
  .put(itemsController.update)
  .delete(itemsController.remove);

module.exports = router;
