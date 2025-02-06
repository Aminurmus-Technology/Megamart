import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="relative flex justify-between items-center bg-[#E9E9E9] w-full h-[90px] sm:px-2 md:px-7 z-10">
      <div
        className="w-[13rem] sm:w-[9rem] lg:w-[11rem] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="h-[110px]" src="./megamart_logo1.svg" alt="Logo" />
      </div>

      <div className="max-[640px]:hidden relative flex items-center w-[30%] h-[50px]">
        <SearchIcon className="absolute left-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="flex-auto pl-12 p-2 w-full h-full outline-none rounded-[12px]"
        />
      </div>

      <div className="flex items-center gap-3">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <>
            <a href="/Login">
              <button className="px-4 py-2 bg-white rounded-full flex items-center gap-1">
                <PersonIcon className="text-gray-500" /> Login
              </button>
            </a>
            <a href="/SignUp">
              <button className="px-4 py-2 bg-white rounded-full flex items-center gap-1">
                <PersonIcon className="text-gray-500" /> SignUp
              </button>
            </a>
          </>
        )}
        <a href="/cart">
          <button>
            <ShoppingCartIcon fontSize="large" className="text-gray-500" />
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
