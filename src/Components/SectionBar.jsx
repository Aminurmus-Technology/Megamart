import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

const SectionBar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md py-4">
      <div className="container mx-auto flex flex-shrink justify-around">

        {/* Men Section */}
        <div className="relative group">
          <span
            className="text-lg font-semibold cursor-pointer p-1 flex items-center"
            onClick={() => navigate("/category/men")}
          >
            Men <div className=" hidden sm:inline "> <ArrowDropDownIcon/> </div>
          </span>
          <ul className="absolute hidden group-hover:block w-48 bg-white border shadow-lg p-2 z-10 space-y-2">
            <li className="hover:bg-gray-300 cursor-pointer p-1">Mens Plain Tshirts</li>
            <li className="hover:bg-gray-300 cursor-pointer p-1">Dress Shirt</li>
            <li className="hover:bg-gray-300 cursor-pointer p-1">Jeans</li>
            <li className="hover:bg-gray-300 cursor-pointer p-1">Hoodie</li>
            <li className="hover:bg-gray-300 cursor-pointer p-1">Blazer</li>
            <li className="hover:bg-gray-300 cursor-pointer p-1">Jacket</li>
          </ul>
        </div>

        {/* Women Section */}
        <div className="relative group">
          <span
            className="text-lg font-semibold cursor-pointer p-1 flex items-center"
            onClick={() => navigate("/category/women")}
          >
            Women <div className=" hidden sm:inline "> <ArrowDropDownIcon/> </div>
          </span>
          <ul className="absolute hidden group-hover:block w-48 bg-white border shadow-lg p-2 z-10 space-y-2">
            <li className="hover:bg-gray-300 cursor-pointer p-1">Dresses</li>
            <li className="hover:bg-gray-300 cursor-pointer p-1">Tops</li>
            <li className="hover:bg-gray-300 cursor-pointer p-1">Skirts</li>
            <li className="hover:bg-gray-300 cursor-pointer p-1">Pants</li>
          </ul>
        </div>

        {/* Baby & Kids Section */}
        <div className="relative group">
          <span
            className="text-lg font-semibold cursor-pointer p-1 flex items-center"
            onClick={() => navigate("/category/baby-kids")}
          >
            Baby & Kids <div className=" hidden sm:inline "> <ArrowDropDownIcon/> </div>
          </span>
          <ul className="absolute hidden group-hover:block w-48 bg-white border shadow-lg p-2 z-10 space-y-2">
            <li className="hover:bg-gray-300 cursor-pointer p-1">Toys</li>
            <li className="hover:bg-gray-300 cursor-pointer p-1">Clothing</li>
            <li className="hover:bg-gray-300 cursor-pointer p-1">Books</li>
          </ul>
        </div>

        {/* Grocery Section */}
        <div className="relative group">
          <span
            className="text-lg font-semibold cursor-pointer p-1 flex items-center"
            onClick={() => navigate("/grocery")}
          >
            Grocery <div className=" hidden sm:inline "> <ArrowDropDownIcon/> </div>
          </span>
          <ul className="absolute hidden group-hover:block w-48 bg-white border shadow-lg p-2 z-10 space-y-2">
            <li className="hover:bg-gray-300 cursor-pointer p-1">Staples</li>
            <li className="hover:bg-gray-300 cursor-pointer p-1">Snacks & Beverages</li>
            <li className="hover:bg-gray-300 cursor-pointer p-1">Household Care</li>
            <li className="hover:bg-gray-300 cursor-pointer p-1">Dairy & Eggs</li>
            <li className="hover:bg-gray-300 cursor-pointer p-1">Baby Care</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default SectionBar;
