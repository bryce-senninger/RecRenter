const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

var multipart = require("connect-multiparty");
var multipartMiddleware = multipart();
const cors = require("cors");

router.use(cors());

router
  // lines up this /item
  .route("/")
  .get(itemsController.findAll)
  .post(itemsController.new);

router
  // lines up with /item/:id
  .route("/:id")
  .get(itemsController.findById)
  .put(itemsController.update)
  .delete(itemsController.remove);

module.exports = router;
