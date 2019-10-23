const router = require("express").Router();
const itemRoutes = require("./item");
const userRoutes = require("./user");
const categoryRoutes = require("./category");
const reviewRoutes = require("./review");

router.use("/item", itemRoutes);
router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/review", reviewRoutes);

module.exports = router;
