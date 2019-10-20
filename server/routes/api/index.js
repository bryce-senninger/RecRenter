const router = require("express").Router();
const itemRoutes = require("./item");
const userRoutes = require("./user");
const categoryRoutes = require("./category");

router.use("/item", itemRoutes);
router.use("/user", userRoutes);
router.use("/category", categoryRoutes);

module.exports = router;
