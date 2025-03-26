import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp"; // Logout icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Profile icon

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const customPurple = "#4B1C56"; // Custom purple color from the image

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT
        setIsLoggedIn(true);
        setIsAdmin(decodedToken.userData.role === "admin"); // Check if user is admin
      } catch (error) {
        console.error("Invalid token");
        setIsLoggedIn(false);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear stored token
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate("/login"); // Redirect to login page
    window.location.reload(); // Reload to reset state
  };

  return (
    <nav className="relative flex justify-between items-center bg-[#E9E9E9] w-full h-[90px] px-6 sm:px-8 md:px-12 z-10 shadow-lg">
      {/* Logo */}
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <img className="h-[80px]" src="./megamart_logo1.svg" alt="Logo" />
      </div>

      {/* Search Bar */}
      <div className="hidden sm:flex relative items-center w-[30%] h-[50px]">
        <SearchIcon className="absolute left-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="flex-auto pl-12 p-2 w-full h-full outline-none rounded-[12px] border border-gray-300"
        />
      </div>

      {/* Buttons Section */}
      <div className="flex items-center space-x-4">
        {!isLoggedIn ? (
          <>
            {/* Show Login & Signup if not logged in */}
            <a href="/login">
              <button
                className="px-5 py-2 text-white rounded-full shadow-md hover:scale-105 transition-all"
                style={{ backgroundColor: customPurple }}
              >
                <PersonIcon className="mr-2" /> Login
              </button>
            </a>
            <a href="/signup">
              <button
                className="px-5 py-2 text-white rounded-full shadow-md hover:scale-105 transition-all"
                style={{ backgroundColor: customPurple }}
              >
                <PersonIcon className="mr-2" /> SignUp
              </button>
            </a>
          </>
        ) : (
          <>
            {/* Profile Icon for logged-in users */}
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md border border-gray-300">
              <AccountCircleIcon fontSize="large" style={{ color: customPurple }} />
              <span className="text-gray-700 text-sm font-semibold">
                {isAdmin ? "Admin" : "User"}
              </span>
            </div>

            {/* Admin sees Admin Panel, Cart, and Logout */}
            {isAdmin && (
              <a href="/AdminPanel">
                <button
                  className="px-5 py-2 text-white rounded-full shadow-md hover:scale-105 transition-all"
                  style={{ backgroundColor: customPurple }}
                >
                  <PersonIcon className="mr-2" /> Admin Panel
                </button>
              </a>
            )}

            {/* Both Admin & Normal Users see Cart */}
            <a href="/cart">
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-transform hover:scale-110">
                <ShoppingCartIcon fontSize="large" style={{ color: customPurple }} />
              </button>
            </a>

            {/* Both Admin & Normal Users see Logout */}
            <button
              onClick={handleLogout}
              className="px-5 py-2 text-white rounded-full shadow-md hover:bg-red-600 transition-all flex items-center"
              style={{ backgroundColor: "#D32F2F" }} // Red logout button
            >
              <ExitToAppIcon className="mr-2" /> Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
