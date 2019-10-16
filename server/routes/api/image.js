const router = require("express").Router();
const imageController = require("../../controllers/imageControllers");

router.route("/").post(imageController.upload);

// router.route("/:id").delete(imageController.remove);

module.exports = router;
