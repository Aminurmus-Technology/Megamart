import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

function Menscard({
  id,
  name,
  description,
  price,
  salePrice,
  discount,
  image,
  brand,
}) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <div className="w-[172px] h-[203px] bg-white border-2 border-[#D4D0D0]">
      <div className="relative">
        <img src={image} alt={name} className="w-[151px] h-[116px] object-cover" />
      </div>
      <div className="p-2">
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-[8px] font-medium text-[#5D5656] mb-1">{brand}</p>
            <p className="text-[7px] ">{name}</p>
          </div>
          <div className="like-icon" onClick={toggleLike}>
              <FontAwesomeIcon
                icon={liked ? faHeartSolid : faHeartRegular}
                className={`text-[grey] cursor-pointer hover:text-red-600 transition-colors`}
              />
            </div>
        </div>
        <p className="text-[6px] text-[#5D5656] mb-2">{description}</p>
        <div className="flex items-center">
          <p className="text-[9px] font-medium">₹{salePrice}</p>
          <p className="text-[6px] text-[#969292] line-through">₹{price}</p>
          <p className="text-[9px] text-[#0F6D0D] font-semibold">{discount}% off</p>
        </div>
      </div>
    </div>
  );
}

export default Menscard;
