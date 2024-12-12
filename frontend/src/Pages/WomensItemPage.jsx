import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function WomensItemPage({
  id,
  product,
  images,
  type,
  brand,
  name,
  model,
  cprice,
  discount,
  rating,
  sprice,
  MOQ,
  ratingsCount,
  reviewsCount,
  sizes,
  deliveryDate,
  category,
  description,
}) {
  const [liked, setLiked] = useState(false); // Initial state is false, meaning it's not liked
  const navigate = useNavigate();

  const toggleLike = () => {
    setLiked(!liked); // Toggle between liked and unliked state
  };

  // Function to handle navigation to ProductDetail page
  const goToProductDetail = () => {
    navigate(`/product/${id}`, {
      state: {
        id,
        product,
        images,
        type,
        brand,
        name,
        model,
        cprice,
        discount,
        rating,
        sprice,
        MOQ,
        ratingsCount,
        reviewsCount,
        sizes,
        deliveryDate,
        category,
        description,
      },
    });
  };

  return (
    <div onClick={goToProductDetail} className="cursor-pointer">
      <div className="product-item">
        <div className="product-image">
          <img src={images[0]} alt={model} />
        </div>
        <div className="span-element">
          <div className="product-desc">
            <h2>
              {brand},{type}
            </h2>
            <p className="first">{model}</p>
            <p className="second">{description}</p>
            <span>
              {" "}
              <span>
                {" "}
                ₹ {sprice} <span className="product-strikeout">₹{cprice}</span>
              </span>
              <span className="discount">{discount}%off</span>
            </span>
          </div>
          <div className="product-stars">
            <FontAwesomeIcon
              icon={liked ? faHeartSolid : faHeartRegular}
              onClick={toggleLike}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WomensItemPage;
