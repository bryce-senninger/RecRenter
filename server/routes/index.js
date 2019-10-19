const router = require("express").Router();
const apiRoutes = require("./api");
<<<<<<< HEAD
=======
const userRoutes = require("./api/user.js");
>>>>>>> adding multer

router.use("/api", apiRoutes);
router.use("/api", userRoutes);
module.exports = router;
