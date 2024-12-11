import React from "react";
import { useState } from "react";
import OfferOnProduct from "../Components/OfferOnProduct";
import ProductInfo from "../Components/ProductInfo";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useLocation } from "react-router-dom";

import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRateIcon from "@mui/icons-material/StarRate";
import SellIcon from "@mui/icons-material/Sell";
import ProductCarousel from "../Components/ProductCarousel";

import { locations } from "../Data/locations";
import { offers } from "../Data/offers";

const ProductDetail = () => {
  const { state: product } = useLocation();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [isFavorited, setIsFavorited] = useState(false);
  const [location, setLocation] = React.useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const toggleFavorite = () => setIsFavorited(!isFavorited);

  return (
    <div className="bg-[#E9E9E9]">
      <div className="flex flex-col sm:flex-row p-6 border border-gray-300 bg-white">
        <div className="flex flex-col ">
          <div className="flex flex-col sm:flex-row mx-4 mb-4">
            {/* Thumbnail Column */}
            <div className="flex sm:flex-col flex-row justify-evenly space-y-2">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`md:w-[108px] md:h-[120px] w-[33%] h-fit object-cover cursor-pointer border-2
                        ${
                          selectedImage === img
                            ? "border-[#23497F]"
                            : "border-transparent"
                        }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            {/* Selected Image */}
            <div className="flex ml-[10px] relative">
              <img
                src={selectedImage}
                alt="Selected Product"
                className="md:w-[323px] md:h-[380px]  object-cover"
              />
              {/* Favorite Icon */}
              <FavoriteIcon
                onClick={toggleFavorite}
                className={`absolute top-1 right-2 text-[#817F7F] transition-colors duration-300 ${
                  isFavorited ? "text-red-500" : "text-[#817F7F]"
                }`}
              />
            </div>
          </div>
          <div className="flex flex-row justify-evenly ">
            <button className="mx-5 w-[159px] h-[46px] bg-[#EDAE30] text-white ">
              ADD TO CART
            </button>
            <button className="mx-5 w-[159px] h-[46px] bg-[#DA940A] text-white ">
              BUY NOW
            </button>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-[15px] font-medium text-[#5D5656] mb-2 ">
            {product.brand}
          </p>
          <p className="text-[20px] mb-1">{product.name}</p>
          <p className="text-[15px] font-semibold text-[#0F6D0D] mb-1">
            Special price
          </p>
          <div className="flex flex-row items-baseline mb-2">
            <p className="text-[17px] font-medium ml-1">
              ₹{(product.cprice - (product.cprice * product.discount) / 100).toFixed(2)}
            </p>
            <p className="text-[11px] font-medium text-[#969292] line-through ml-1">
              ₹{product.cprice}
            </p>
            <p className="text-[11px] font-medium text-[#0F6D0D] ml-1">
              ₹{product.discount}%off
            </p>
          </div>
          <p className="text-[12px] mb-2">
            Minimum Order Quantity:{product.MOQ}
          </p>
          <div className="flex flex-row items-baseline mb-2">
            <div className="flex w-[52px] justify-center rounded-full bg-[#E7A728] ">
              <p className="text-white text-[11px] font-bold flex items-center">
                {product.ratings} <StarRateIcon />
              </p>
            </div>
            <p className="text-[12px] font-medium text-[#5D5656] ml-1">
              {product.ratingsCount} ratings {product.reviewsCount} reviews
            </p>
          </div>
          <div className="mb-4">
            <p className="text-[12px] text-[#5D5656] font-medium">size</p>
            <div className="mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="mr-4 px-4 py-1 border-2 border-transparent font-bold bg-gray-300 hover:border-gray-700"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <OfferOnProduct offers={offers} />
          </div>
          <div className="flex flex-col">
            <p className="text-[15px] font-bold text-[#5D5656] ml-1 mb-2">
              Deliver to
            </p>
              <FormControl className="m-1 sm:w-[350px] bg-[#E1E1E1] mb-2">
                <InputLabel id="location">Location</InputLabel>
                <Select
                  id="location"
                  value={location}
                  onChange={handleChange}
                  autoWidth
                  label="locattion"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {locations.map((location) => (
                    <MenuItem key={location.pincode} value={location.pincode}>
                      {`${location.city} - ${location.pincode}`}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            <p className="text-[12px] font-semibold ml-1">
              Will be delivered in 24 hrs
            </p>
          </div>
          <div>
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-evenly my-2 bg-white py-4">
        <div className="flex flex-row md:items-center justify-center md:my-0 my-2">
          <div className="flex items-center justify-center rounded-full w-[44px] h-[44px] bg-[#DA940A]">
            <StarRateIcon className="text-[#132465] w-[24px] h-[24px] z-10" />
          </div>
          <div className="flex flex-col ml-2">
            <p className="text-[15px] font-bold">Trending Style</p>
            <p className="text-[8px] font-semibold">From Top Brands</p>
          </div>
        </div>
        <div className="flex flex-row md:items-center justify-center md:my-0 my-2">
          <div className="flex items-center justify-center rounded-full w-[44px] h-[44px] bg-[#DA940A]">
            <SellIcon className="text-[#132465] w-[24px] h-[24px] z-10" />
          </div>
          <div className="flex flex-col ml-2">
            <p className="text-[15px] font-bold">Best Prices</p>
            <p className="text-[8px] font-semibold">From Top Brands</p>
          </div>
        </div>
        <div className="flex flex-row md:items-center justify-center md:my-0 my-2">
          <div className="flex items-center justify-center rounded-full w-[44px] h-[44px] bg-[#DA940A]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="#132465"
            >
              <path
                fillRule="evenodd"
                d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001l.274-.11a.75.75 0 0 1 .558 0l.274.11l.004.001zm-1.374.527L8 5.962L1.846 3.5L1 3.839v.4l6.5 2.6v7.922l.5.2l.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"
              />
            </svg>
          </div>
          <div className="flex flex-col ml-2">
            <p className="text-[15px] font-bold">Easy Return</p>
            <p className="text-[8px] font-semibold">From Top Brands</p>
          </div>
        </div>
      </div>
      {/* <div className="mb-3">
        <ProductCarousel title="Recently Viewed" products={menData} />
      </div>
      <div className="mb-2">
        <ProductCarousel title="Similar Product" products={menData} />
      </div> */}
    </div>
  );
};

export default ProductDetail;
