const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    product: { type: String, required: true }, // Example: "Menswear"
    image: { type: String, required: true },  // Example: Path to image file
    type: { type: String, required: true },   // Example: "Mens Plain Tshirts"
    brand: { type: String, required: true },  // Example: "Nike"
    model: { type: String, required: true },  // Example: "Sporty Tee"
    cprice: { type: Number, required: true }, // Current price
    discount: { type: Number, required: true }, // Discount percentage
    sprice: { type: Number, required: true }, // Selling price after discount 
    rating: { type: Number, default: 0 },    // Average product rating
    category: { type: String, required: true }, // Example: "Clothing"
    description: { type: String, required: true }, // Product description
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model("Product", productSchema);
