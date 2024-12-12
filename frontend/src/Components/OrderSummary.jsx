import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";

const OrderSummary = ({ cartItems }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#5D5656");

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
    setBgColor((prevColor) =>
      prevColor === "#ffffff" ? "#0A4078" : "#ffffff"
    );
    setTextColor((prevColor) =>
      prevColor === "#5D5656" ? "#ffffff" : "#5D5656"
    );
  };

  const updateQuantity = (index, quantityChange) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + quantityChange } : item
      )
    );
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* Order Summary Header */}
      <div
        className="flex items-center h-[60px] m-2 cursor-pointer"
        style={{ backgroundColor: bgColor }}
        onClick={toggleExpand}
      >
        <div className="flex items-center justify-center w-8 h-8 ml-9 bg-[#E9E9E9] text-[#0A4078] text-[15px] font-semibold">
          3
        </div>
        <p
          className="text-[15px] font-semibold ml-6"
          style={{ color: textColor }}
        >
          ORDER SUMMARY <DoneIcon className="text-[#0C3056]" />
        </p>
      </div>

      {/* Expanded Section - Cart Items */}
      {isExpanded && (
        <div className="bg-white p-4 m-2 border ">
          {cartItems.length > 0 ? (
            <ul className="space-y-2">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-2 border-b last:border-b-0"
                >
                  <div>
                    <div className="flex">
                      <img src={item.image} className="max-h-[82px] " />
                      <div className="ml-4">
                        <p className="text-[11px] font-medium">{item.name}</p>
                        <p className="text-[10px] text-[#5D5656] font-medium">
                          Size : {item.size}
                        </p>
                        <div className="flex flex-row items-baseline mb-2">
                          <p className="text-[13px] font-medium ml-1">
                            ₹{item.price - (item.price * item.discount) / 100}
                          </p>
                          <p className="text-[10px] font-medium text-[#969292] line-through ml-1">
                            ₹{item.price}
                          </p>
                          <p className="text-[8px] font-medium text-[#0F6D0D] ml-1">
                            ₹{item.discount}%off
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Quantity Controls */}
                    <div className="flex items-center mt-2 space-x-2">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        disabled={item.quantity <= 1}
                        className="text-[10px] font-semibold border border-[#CBCACA] px-1"
                      >
                        -
                      </button>
                      <div className="text-[10px] border border-[#CBCACA] px-2 ">{item.quantity}</div>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="text-[10px] font-semibold border border-[#CBCACA] px-1"
                      >
                        +
                      </button>
                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(index)}
                        className="text-[12px] font-semibold "
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[#5D5656] text-sm">Your cart is empty.</p>
          )}
        </div>
      )}
    </>
  );
};

export default OrderSummary;
