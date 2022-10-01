const { Router } = require("express");
const Product = require("../models/product");

const router = Router();

router.get("/all", async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(200).json({ products });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: err.message });
  }
});

router.post("/new", async (req, res) => {
  try {
    const { imgUrl, name, price } = req.body;

    const product = new Product({ imgUrl, name, price });

    await product.save();

    return res.status(201).json({ msg: "added new product to the db" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

module.exports = router;
