const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./api/user.js");
const categoryRoutes = require("./api/category.js");

router.use("/api", apiRoutes);
router.use("/api", userRoutes);
router.use("/api", categoryRoutes);
module.exports = router;
