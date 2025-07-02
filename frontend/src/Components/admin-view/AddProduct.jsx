import { useState } from "react";
import { addProduct } from "../../services/api";
import { useLocation } from "react-router-dom";

export default function AddProduct() {
  const location = useLocation();
  const productId = location.state?.productId || null; 
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    type: "",
    category: "",
    price: "",
    discount: "",
    sizes: [],
    description: "",
    images: [], // Store Cloudinary URLs
  });

  const [selectedFiles, setSelectedFiles] = useState([]); // Store actual file objects
  const [loading, setLoading] = useState(false);
  const isNewPoduct = productId === null; 

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSizeChange = (e) => {
    const options = [...e.target.options]
      .filter((option) => option.selected)
      .map((option) => option.value);
    setNewProduct({ ...newProduct, sizes: options });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + newProduct.images.length > 5) {
      alert("You can only upload up to 5 images.");
      return;
    }

    setSelectedFiles([...selectedFiles, ...files]); // Store actual files
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setNewProduct({
      ...newProduct,
      images: [...newProduct.images, ...imagePreviews],
    });
  };

  const uploadImagesToCloudinary = async () => {
    const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/image/upload`;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    const uploadedImageUrls = [];

    for (const file of selectedFiles) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      try {
        const response = await fetch(cloudinaryUploadUrl, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (data.secure_url) {
          uploadedImageUrls.push(data.secure_url);
        } else {
          console.error("No secure_url returned:", data);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Image upload failed!");
        return [];
      }
    }

    return uploadedImageUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Upload images to Cloudinary first
    const imageUrls = await uploadImagesToCloudinary();
    if (imageUrls.length === 0) {
      setLoading(false);
      return;
    }

    // Create the final product data
    const productData = {
      ...newProduct,
      images: imageUrls, // Store Cloudinary URLs instead of local previews
    };

    try {
      await addProduct(productData);
      alert("Product added successfully!");

      // Reset form
      setNewProduct({
        name: "",
        brand: "",
        type: "",
        category: "",
        price: "",
        discount: "",
        sizes: [],
        description: "",
        images: [],
      });
      setSelectedFiles([]);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
    setLoading(false);
  };

  return (
    <div className="mt-10 p-6 bg-white rounded-lg shadow-lg w-3/4 mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Product Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={newProduct.name}
            placeholder="Product Name"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="brand"
            value={newProduct.brand}
            placeholder="Brand"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="type"
            value={newProduct.type}
            placeholder="Type"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
          <select
            name="category"
            value={newProduct.category}
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Fashion">Fashion Mens</option>
            <option value="Fashion">Fashion Womens</option>
            <option value="Fashion">Fashion Kids</option>
            <option value="Grocery">Grocery</option>
            <option value="Beauty">Beauty</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
          </select>
          {newProduct.category === "Fashion" && (
            <div>
              <label className="block font-medium mb-2">Available Sizes</label>
              <div className="grid grid-cols-2 gap-4">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <label key={size} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={size}
                      checked={newProduct.sizes.includes(size)}
                      onChange={(e) => {
                        const selectedSizes = e.target.checked
                          ? [...newProduct.sizes, size]
                          : newProduct.sizes.filter((s) => s !== size);
                        setNewProduct({ ...newProduct, sizes: selectedSizes });
                      }}
                      className="w-4 h-4 text-purple-600"
                    />
                    {size}
                  </label>
                ))}
              </div>
            </div>
          )}
          <input
            type="number"
            name="price"
            value={newProduct.price}
            placeholder="Price"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="discount"
            value={newProduct.discount}
            placeholder="Discount"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="description"
          value={newProduct.description}
          placeholder="Description"
          className="w-full p-3 border rounded"
          rows="4"
          onChange={handleChange}
          required
        ></textarea>

        {/* Image Upload */}
        <div>
          <label className="block font-medium">Upload Images (Max: 5)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            className="w-full p-2 border rounded"
            onChange={handleImageChange}
          />
        </div>

        {/* Image Preview */}
        {newProduct.images.length > 0 && (
          <div className="grid grid-cols-5 gap-2 mt-3">
            {newProduct.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Preview ${index + 1}`}
                className="h-20 w-20 object-cover rounded border"
              />
            ))}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold"
          disabled={loading}
        >
          {isNewPoduct ? "Add Product" : "Edit product" }
        </button>
      </form>
    </div>
  );
}
