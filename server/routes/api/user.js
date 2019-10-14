const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
  // lines up with /api/user
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create);

router
  //lines up with /api/user/:id
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
