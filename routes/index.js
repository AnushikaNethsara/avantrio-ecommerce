const express = require("express");
const router = express.Router();

router.use("/carts", require("./cartRouter"));
router.use("/products", require("./productRouter"));

module.exports = router;
