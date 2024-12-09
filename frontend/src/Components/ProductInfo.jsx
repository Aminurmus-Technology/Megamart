import React, { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";

const ProductInfo = ({ product }) => {
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [isReviewsOpen, setReviewsOpen] = useState(false);

  const toggleDetails = () => setDetailsOpen(!isDetailsOpen);
  const toggleReviews = () => setReviewsOpen(!isReviewsOpen);

  return (
    <div className="border-t border-gray-300 mt-6">
      {/* Product Details Section */}
      <div className="flex justify-between items-center px-4 py-2 border-b">
        <p className="text-[15px] font-bold">Product Details</p>
        <button onClick={toggleDetails} className="text-xl">
          {isDetailsOpen ? "-" : "+"}
        </button>
      </div>
      {isDetailsOpen && (
        <div className="px-4 py-2 text-sm text-gray-600">
          <p>Here are the product details...</p>
        </div>
      )}

      {/* Ratings & Reviews Section */}
      <div className="flex justify-between items-center px-4 py-2 border-b">
        <div className="flex items-center space-x-2">
          <p className="text-[15px] font-bold">Ratings & reviews</p>
          <div className="flex flex-row items-center mb-2">
            <div className="flex w-[52px] justify-center rounded-full bg-[#E7A728] ">
              <p className="text-white text-[11px] font-bold flex items-center">
                {product.ratings} <StarRateIcon className="w-3 h-3" />
              </p>
            </div>
            <p className="text-[12px] font-medium text-[#5D5656] ml-1">
              {product.ratingsCount} ratings {product.reviewsCount} reviews
            </p>
          </div>
        </div>
        <button onClick={toggleReviews} className="text-xl">
          {isReviewsOpen ? "-" : "+"}
        </button>
      </div>
      {isReviewsOpen && (
        <div className="px-4 py-2 text-sm text-gray-600">
          <p>Here are the ratings and reviews...</p>
        </div>
      )}

      {/* Post Question Section */}
      <div className="flex justify-between items-center px-4 py-2">
        <p className="text-[15px] font-bold">
          Have doubts regarding this product?
        </p>
        <button className="bg-green-600 text-white px-4 py-1 rounded">
          Post your question
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
