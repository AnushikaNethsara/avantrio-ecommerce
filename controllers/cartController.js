const { CART, PRODUCT_lIST } = require("../data/data");

exports.getCart = async (req, res) => {
  try {
    res.status(200).json({ cart: CART });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { itemId } = req.body;

    const inventoryItem = PRODUCT_lIST.find((i) => i.id == itemId);

    if (!inventoryItem)
      return res.status(500).json({ message: "No item found" });

    const exisitngItem = CART.find((i) => i.id == itemId);

    if (exisitngItem) {
      exisitngItem.quantity += 1;
    } else {
      CART.push({
        id: inventoryItem.id,
        name: inventoryItem.name,
        price: inventoryItem.price,
        quantity: 1,
      });
    }

    res.status(200).json({ cart: CART });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.decreaseItemInCart = async (req, res) => {
  try {
    const { itemId } = req.body;

    const cartItem = CART.find((i) => i.id == itemId);

    if (!cartItem) return res.status(500).json({ message: "No item found" });

    const exisitngItemIndex = CART.findIndex((i) => i.id == itemId);

    if (cartItem.quantity <= 1) {
      res.status(500).json({ message: "Cannot perform this operation" });
    } else {
      const newQuantity = CART[exisitngItemIndex].quantity - 1;
      CART[exisitngItemIndex].quantity = newQuantity;
    }

    res.status(200).json({ cart: CART });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteFrom = async (req, res) => {
  try {
    const { itemId } = req.body;

    const exisitngItem = CART.find((i) => i.id == itemId);

    if (!exisitngItem)
      return res.status(500).json({ message: "No item found in the cart" });

    const exisitngItemIndex = CART.findIndex((i) => i.id == itemId);

    CART.splice(exisitngItemIndex, 1);

    res.status(200).json({ cart: CART });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
