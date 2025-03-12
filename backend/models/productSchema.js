const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    sizes: { type: [String], required: true },
    description: { type: String, required: true },
    images: { type: [String] }, // Store URLs of uploaded images
  },
  { timestamps: true }
);

// Remove the custom id field if it's unnecessary
module.exports = mongoose.model("Product", productSchema);
