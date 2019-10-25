const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
  // lines up with /api/user
  .route("/")
  .get(usersController.findAll);

router.route("/signup").post(usersController.signup);
router
  .route("/login")
  .get(usersController.login)
  .post(usersController.login);

// router.route("/login").get();

router
  //lines up with /api/user/:id
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
