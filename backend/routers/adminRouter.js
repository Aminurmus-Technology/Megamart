const express = require("express");
const router = express.Router();
const Admin = require("../models/admin");
const Product = require("../models/productSchema");
const { jwtAuthMiddleware, generateToken } = require("../jwt");
const { upload } = require("../config/cloudinary.js");



// Admin signup route
router.post("/signup", async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if an admin already exists with the same email
      const existingAdmin = await Admin.findOne({ email });
      if (existingAdmin) {
        return res.status(400).json({ error: "Admin with this email already exists" });
      }
  
      // Create and save the new admin
      const newAdmin = new Admin({ name, email, password });
      await newAdmin.save();
  
      res.status(201).json({ message: "Admin registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });


// Admin login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const payload = { id: admin.id, role:"admin" };
    const token = generateToken(payload);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// get all products (Admin only)
router.get("/products", jwtAuthMiddleware, async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Get a product by ID
router.get("/products/:id", jwtAuthMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Requested ID:", id); // Debugging
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add a new product (using Cloudinary secure URLs from the client)
router.post("/products", jwtAuthMiddleware, async (req, res) => {
  try {
    const { name, brand, type, category, price, discount, sizes, description, images } = req.body;
    const sizesArray = typeof sizes === "string" ? sizes.split(",") : sizes;

    const newProduct = new Product({
      name,
      brand,
      type,
      category,
      price,
      discount,
      sizes: sizesArray,
      description,
      images, // This should be an array of secure URLs from Cloudinary
    });

    await newProduct.save();
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Failed to add product" });
  }
});


// update a product
router.put("/products/:id", jwtAuthMiddleware, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update product" });
  }
});

// delete a product
router.delete("/products/:id", jwtAuthMiddleware, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

module.exports = router;
