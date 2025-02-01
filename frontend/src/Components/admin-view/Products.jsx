import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid, faHeart as faHeartRegular } from "@fortawesome/free-solid-svg-icons";

export default function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      model: "Model 1",
      brand: "Brand 1",
      type: "Type 1",
      sprice: 1000,
      cprice: 1200,
      discount: 20,
      liked: false,
      images: ["https://via.placeholder.com/100"],
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      model: "Model 2",
      brand: "Brand 2",
      type: "Type 2",
      sprice: 1500,
      cprice: 1800,
      discount: 15,
      liked: false,
      images: ["https://via.placeholder.com/100"],
    },
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const toggleLike = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, liked: !product.liked } : product
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Products</h2>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center p-3 border-b"
          >
            <div className="product-item flex">
              <div className="product-image mr-4">
                <img src={product.images[0]} alt={product.name} />
              </div>
              <div className="span-element flex-1">
                <div className="product-desc">
                  <h2>{product.brand}, {product.type}</h2>
                  <p className="first">{product.model}</p>
                  <p className="second">{product.description}</p>
                  <span>
                    ₹ {product.sprice} 
                    <span className="product-strikeout"> ₹ {product.cprice}</span>
                  </span>
                  <span className="discount ml-2">{product.discount}% off</span>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => deleteProduct(product.id)}
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
