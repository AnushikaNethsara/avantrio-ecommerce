const express = require("express");
const router = express.Router();

const {
  getCart,
  addToCart,
  deleteFrom,
  decreaseItemInCart,
} = require("../controllers/cartController");

router.get("/get-cart", getCart);
router.post("/add-to-cart", addToCart);
router.post("/delete-from-cart", deleteFrom);
router.put("/decrease-from-cart", decreaseItemInCart);

module.exports = router;
