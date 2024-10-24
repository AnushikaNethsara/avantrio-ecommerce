const { PRODUCT_lIST } = require("../data/data");

exports.getProducts = async (req, res) => {
  try {
    res.status(200).json({ products: PRODUCT_lIST });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
