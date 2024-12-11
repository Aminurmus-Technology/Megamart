import React, { useState } from "react";

import DoneIcon from "@mui/icons-material/Done";

const PaymentOption = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#5D5656");
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
    setBgColor((prevColor) =>
      prevColor === "#ffffff" ? "#0A4078" : "#ffffff"
    );
    setTextColor((prevColor) =>
      prevColor === "#5D5656" ? "#ffffff" : "#5D5656"
    );
  };

  const paymentOptions = [
    { label: "UPI", subOptions: ["PhonePe","Bharat Pay", "Your UPI ID"] },
    { label: "Wallets", subOptions: ["Gpay","Paytm","Amazon Pay"] },
    { label: "Credit/Debit/ATM Card", subOptions: [] },
    { label: "Net Banking", subOptions: [] },
    { label: "Cash on Delivery", subOptions: [] },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption((prevOption) => (prevOption === option ? null : option));
  };

  return (
    <>
      <div
        className="flex items-center h-[60px] m-2 cursor-pointer"
        style={{ backgroundColor: bgColor }}
        onClick={toggleExpand}
      >
        <div className="flex items-center justify-center w-8 h-8 ml-9 bg-[#E9E9E9] text-[#0A4078] text-[15px] font-semibold">
          4
        </div>
        <p
          className="text-[15px] font-semibold ml-6"
          style={{ color: textColor }}
        >
          PAYMENT OPTION <DoneIcon className="text-[#0C3056]" />
        </p>
      </div>
      {isExpanded && (
        <div>
          {paymentOptions.map((option, index) => (
            <div key={index} className="m-2 px-8">
              <div
                className="flex items-center h-[60px] cursor-pointer border-b"
                onClick={() => handleOptionClick(option.label)}
              >
                <input
                  type="radio"
                  name="paymentOption"
                  className="ml-3 mr-3"
                  checked={selectedOption === option.label}
                  onChange={() => handleOptionClick(option.label)}
                />
                <p className="text-[15px] font-semibold">{option.label}</p>
                {selectedOption === option.label && (
                  <DoneIcon className="ml-auto mr-3 text-[#0C3056]" />
                )}
              </div>

              {/* Display sub-options if the main option is selected */}
              {selectedOption === option.label && option.subOptions.length > 0 && (
                <div className="ml-10 mt-2">
                  <p className="text-[15px] font-semibold">Choose an Option</p>
                  {option.subOptions.map((subOption, subIndex) => (
                    <div key={subIndex} className="flex items-center mt-1">
                      <input type="radio" name="subOption" className="mr-2" />
                      <p className="text-[15px] font-semibold">{subOption}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default PaymentOption;
