import { useState } from "react";

export default function AddProduct() {
  const [newProduct, setNewProduct] = useState({
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
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setNewProduct({ ...newProduct, images: [...newProduct.images, ...imageUrls] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newProduct);
  };

  return (
    <div className="mt-10 p-6 bg-white rounded-lg shadow-lg w-3/4 mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
          <select
            name="category"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Fashion">Fashion Mens</option>
            <option value="Fashion">Fashion Womens</option>
            <option value="Fashion">Fashion kids</option>
            <option value="Grocery">Grocery</option>
            <option value="Beauty">Beauty</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
          </select>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="discount"
            placeholder="Discount"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="description"
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
              <img key={index} src={image} alt={`Preview ${index + 1}`} className="h-20 w-20 object-cover rounded border" />
            ))}
          </div>
        )}

        <button type="submit" className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold">
          Add Product
        </button>
      </form>
    </div>
  );
}
