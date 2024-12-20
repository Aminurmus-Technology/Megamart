import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="relative flex justify-between bg-[#E9E9E9] w-full h-[90px] sm:px-2 md:px-7 z-10">
      <div
        className="w-[13rem] max-[90px]:w-[9rem] max-[90px]:mt-2 sm:w-[9rem] lg:w-[11rem] sm:mt-3"
        onClick={() => navigate("/")}
      >
          <img className="h-[110px]" src="./megamart_logo1.svg" alt="Logo" />
      </div>
      <div className="max-[640px]:hidden relative flex items-center mt-5 w-[30%] h-[50px]">
        <SearchIcon className="absolute left-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="flex-auto pl-12 p-2 w-full h-full outline-none rounded-[12px]"
        />
      </div>
      <div className="flex grid-cols-2 gap-1">
        <a href="/Login">
          <button className="mt-5 sm:w-[90px] max-[640px]:text-[12px] md:w-[110px] lg:w-[120px] h-[50%] bg-white rounded-full">
            <PersonIcon className="text-gray-500 sm:mr-1 md:mr-3" /> Login
          </button>
        </a>
        <a href="/SignUp">
          <button className="mt-5 sm:w-[90px] max-[640px]:text-[12px] md:w-[110px] lg:w-[120px] h-[50%] bg-white rounded-full">
            <PersonIcon className="text-gray-500 sm:mr-1 md:mr-3" /> SignUp
          </button>
        </a>
        <a href="/cart">
          <button>
            <ShoppingCartIcon
              fontSize="large"
              className="text-white mt-5 sm:w-[90px] max-[640px]:text-[12px] md:w-[110px] lg:w-[120px] h-[50%]"
            />
          </button>
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
