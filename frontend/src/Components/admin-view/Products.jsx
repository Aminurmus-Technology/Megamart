import { useEffect, useState } from "react";
import { fetchProducts, deleteProductById } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  // Fetch products when the component mounts
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetchProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    getProducts();
  }, []);

  // Function to delete a product
  const deleteProduct = async (id) => {
    try {
      await deleteProductById(id);
      setProducts(products.filter((product) => product._id !== id));
      alert("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Products</h2>
      <ul>
        {products.map((product) => (
          <li
            key={product._id}
            className="flex justify-between items-center p-3 border-b"
          >
            <div className="product-item flex">
              <div className="product-image mr-4 ">
                <img src={product.images[0]} alt={product.name} />
              </div>
              <div className="span-element flex-1">
                <div className="product-desc">
                  <h2>
                    {product.brand}, {product.type}
                  </h2>
                  <p className="first">{product.model}</p>
                  <p className="second">{product.description}</p>
                  <span>
                    ₹ {product.sprice}
                    <span className="product-strikeout">
                      {" "}
                      ₹ {product.cprice}
                    </span>
                  </span>
                  <span className="discount ml-2">{product.discount}% off</span>
                </div>
              </div>
            </div>
            <div>
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                type="edit"
                onClick={() => {
                  navigate("/AdminPanel/AddProduct"), { state: { product } };
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => deleteProduct(product._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
