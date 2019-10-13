const router = require("express").Router();
const itemRoutes = require("./item");

router.use("/item", itemRoutes);

module.exports = router;
