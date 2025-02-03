import React from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="relative flex justify-between bg-[#E9E9E9] w-full h-[90px] sm:px-2 md:px-7 z-10">
      <div
        className="w-[13rem] sm:w-[9rem] lg:w-[11rem] sm:mt-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="h-[110px]" src="./megamart_logo1.svg" alt="Logo" />
      </div>

      <div className="hidden sm:flex relative items-center mt-5 w-[30%] h-[50px]">
        <SearchIcon className="absolute left-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="flex-auto pl-12 p-2 w-full h-full outline-none rounded-[12px]"
        />
      </div>

      <div className="flex gap-2 items-center">
        {user ? (
          <button
            onClick={handleLogout}
            className="mt-5 px-4 py-2 bg-red-500 text-white rounded-full"
          >
            Logout
          </button>
        ) : (
          <>
            <a href="/Login">
              <button className="mt-5 px-4 py-2 bg-white rounded-full">
                <PersonIcon className="text-gray-500 mr-2" /> Login
              </button>
            </a>
            <a href="/SignUp">
              <button className="mt-5 px-4 py-2 bg-white rounded-full">
                <PersonIcon className="text-gray-500 mr-2" /> SignUp
              </button>
            </a>
          </>
        )}
        <a href="/cart">
          <ShoppingCartIcon
            fontSize="large"
            className="text-black cursor-pointer"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
