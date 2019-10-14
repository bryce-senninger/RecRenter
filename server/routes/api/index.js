const router = require("express").Router();
const itemRoutes = require("./item");
const userRoutes = require("./user");

router.use("/item", itemRoutes);
router.use("/user", userRoutes);

module.exports = router;
