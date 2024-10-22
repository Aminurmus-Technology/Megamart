import React, { useState } from "react";
import SellIcon from "@mui/icons-material/Sell";

const OfferOnProduct = ({ product }) => {
  const [showAllOffers, setShowAllOffers] = useState(false);

  const toggleOffers = () => setShowAllOffers(!showAllOffers);

  const offersToShow = showAllOffers
    ? product.offers
    : product.offers.slice(0, 4);

  return (
    <div className="mb-4">
      <p className="text-[15px] font-semibold mb-2">Available Offers:</p>
      <div
        className={`transition-all duration-300 ${
          showAllOffers ? "max-h-[1000px]" : "max-h-[200px] overflow-hidden"
        }`}
      >
        {offersToShow.map((offer) => (
          <div key={offer.type} className="flex flex-row mb-2">
            <SellIcon className="text-green-600 mr-1" />
            <p className="font-semibold text-[12px] mr-2">{offer.type}:</p>
            <p className="text-[12px]">
              {offer.detail}
            </p>
          </div>
        ))}
      </div>

      {product.offers.length > 4 && (
        <button
          onClick={toggleOffers}
          className="text-[12px] font-semibold hover:underline px-2 py-1"
        >
          {showAllOffers
            ? "Show Less Offers"
            : `+ ${product.offers.length - 4} Offers`}
        </button>
      )}

      <p className=" text-[12px] text-gray-500">
        *Terms and conditions apply.
      </p>

      
    </div>
  );
};

export default OfferOnProduct;
