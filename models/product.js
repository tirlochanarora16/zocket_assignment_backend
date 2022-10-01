const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  imgUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
