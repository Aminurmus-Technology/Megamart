import React, { useState, useEffect } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { useCart } from "../context/CartContext";
import OrderSummary from "../Components/OrderSummary";
import PaymentOption from "../Components/PaymentOption";

const profile = {
  name: "customerName",
  contact: "+913921345768",
  Address: "Lorem ipsum dolor sit.",
};

const cartItems = [
  {
    id: 1,
    brand: "KHWABE",
    name: "Mens Plane Tshirt",
    Description: "Men Self Design Polo Neck Cotton Blend Blue T-Shirt",
    size: "XL",
    quantity: 1,
    discount: 40,
    price: 1000,
    salePrice: 600,
    image: "/images/productdetail.svg",
  },
];

function OrderConfirmation() {
    const { cart, removeFromCart, clearCart } = useCart();
    const [items, setItems] = useState([]);
    const [itemsPrice, setItemsPrice] = useState(0);
    const [totalPayable, setTotalPayable] = useState(0);
    const [totalSaving, setTotalSaving] = useState(0);

    const addItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
        setTotalPrice((prevTotal) => prevTotal + item.price);
    };

    const calculatePrices = () => {
        const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const totalPayable = cartItems.reduce((acc, item) => acc + item.salePrice * item.quantity+43, 0);
        const totalSaving = cartItems.reduce((acc, item) => acc + (item.price - item.salePrice) * item.quantity, 0);
    
        setItemsPrice(itemsPrice);
        setTotalPayable(totalPayable);
        setTotalSaving(totalSaving);
      };
    
      // Run calculation when cartItems changes
      useEffect(() => {
        calculatePrices();
      }, [cartItems]);

    return (
        <>
            <div className="flex p-4 bg-[#F5F5F5]">
                {/* Right Section */}
                <div className="w-3/4">
                    {/*Login Details */}
                    <div className="flex items-center bg-white h-[60px] mb-2 mx-2 ">
                        <div className="flex items-center justify-center w-8 h-8 ml-9 bg-[#E9E9E9] text-[#0A4078] text-[15px] font-semibold">
                            1
                        </div>
                        <div className="flex flex-col ml-6">
                            <p className="text-[15px] text-[#5D5656] font-semibold">
                                LOGIN <DoneIcon className="text-[#0C3056]" />
                            </p>
                            <div className="flex gap-3">
                                <p className="text-[12px] font-semibold">{profile.name}</p>{" "}
                                <p className="text-[12px] font-medium">{profile.contact}</p>
                            </div>
                        </div>
                    </div>
                    {/*Delivery Address */}
                    <div className="flex items-center bg-white h-[60px] m-2">
                        <div className="flex items-center justify-center w-8 h-8 ml-9 bg-[#E9E9E9] text-[#0A4078] text-[15px] font-semibold">
                            2
                        </div>
                        <div className="flex flex-col ml-6">
                            <p className="text-[15px] text-[#5D5656] font-semibold">
                                DELIVERY ADDRESS <DoneIcon className="text-[#0C3056]" />
                            </p>
                            <div className="flex gap-3">
                                <p className="text-[12px] font-semibold">{profile.name}</p>{" "}
                                <p className="text-[12px] font-medium">{profile.Address}</p>
                            </div>
                        </div>
                        <button className="flex text-[15px] font-semibold ml-auto mr-8 text-[#0A4078] bg-[#E9E9E9] px-6 py-2">
                            CHANGE
                        </button>
                    </div>
                    {/*Order summary */}
                    <OrderSummary cartItems={cart} removeFromCart={removeFromCart} clearCart={clearCart} />

                    {/*Payment Options */}
                    <PaymentOption/>
                </div>

                {/* Left Section */}
                <div className="flex flex-col w-1/4 bg-white max-h-[250px]">
                    <p className="font-semibold text-[15px] text-[#5D5656] pl-4 py-3 ">
                        PRICE DETAILS
                    </p>
                    <hr className="text-[#5D5656]" />
                    <div className="font-medium text-[12px] px-4 py-4 pr-6">
                        <div className="flex justify-between ">
                            <p>Price ({items.length} items)</p>
                            <p>₹{itemsPrice}</p>
                        </div>
                        <div className="flex justify-between py-4">
                            <p>Delivery Charges</p>
                            <p>₹40</p>
                        </div>
                        <div className="flex justify-between ">
                            <p>Platform Charges</p>
                            <p>₹3</p>
                        </div>
                    </div>
                    <hr className="text-[#5D5656]" />
                    <div className="flex justify-between font-medium text-[15px] py-2 px-4 pr-6">
                        <p>Total Payable</p>
                        <p>₹{totalPayable}</p>
                    </div>
                    <p className=" text-[#0F6D0D] text-[13px] text-center font-medium pt-2 pb-4">
                        Your total saving on this order is ₹{totalSaving}
                    </p>
                </div>
            </div>
        </>
    );
}

export default OrderConfirmation;
