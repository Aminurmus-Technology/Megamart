import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, userRole, logout } = useAuth();
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const dropdownRef = useRef(null);
  const { cart } = useCart();

  // Calculate total quantity in cart
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLoginOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
    window.location.reload();
  };

  const handleLoginClick = () => {
    setShowLoginOptions(!showLoginOptions);
  };

  const handleUserLogin = () => {
    setShowLoginOptions(false);
    navigate("/Login", { state: { isAdmin: false } });
  };

  const handleAdminLogin = () => {
    setShowLoginOptions(false);
    navigate("/Login", { state: { isAdmin: true } });
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

      <div className="flex items-center gap-2">
        {!isLoggedIn ? (
          // Not logged in - show Login and Signup buttons
          <>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={handleLoginClick}
                className="mt-5 sm:w-[90px] max-[640px]:text-[12px] md:w-[110px] lg:w-[125px] h-[50%] bg-white rounded-full hover:bg-gray-50 transition-colors"
              >
                <PersonIcon className="text-gray-500 sm:mr-1 md:mr-3" /> Login
              </button>
              
              {showLoginOptions && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[200px] z-50">
                  <button
                    onClick={handleUserLogin}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-t-lg border-b border-gray-100"
                  >
                    <PersonIcon className="text-gray-500 mr-2" />
                    User Login
                  </button>
                  <button
                    onClick={handleAdminLogin}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-b-lg"
                  >
                    <AdminPanelSettingsIcon className="text-gray-500 mr-2" />
                    Admin Login
                  </button>
                </div>
              )}
            </div>
            
            <button
              onClick={() => navigate("/SignUp")}
              className="mt-5 sm:w-[90px] max-[640px]:text-[12px] md:w-[110px] lg:w-[125px] h-[50%] bg-[#581863] text-white rounded-full hover:bg-[#4a1460] transition-colors"
            >
              SignUp
            </button>
          </>
        ) : (
          // Logged in - show role-specific options
          <>
            {userRole === "admin" ? (
              // Admin options
              <>
                <button
                  onClick={() => navigate("/AdminPanel")}
                  className="mt-5 sm:w-[90px] max-[640px]:text-[12px] md:w-[110px] lg:w-[125px] h-[50%] bg-[#581863] text-white rounded-full hover:bg-[#4a1460] transition-colors"
                >
                  <AdminPanelSettingsIcon className="text-white sm:mr-1 md:mr-3" /> Admin Panel
                </button>
                <button
                  onClick={handleLogout}
                  className="mt-5 sm:w-[90px] max-[640px]:text-[12px] md:w-[110px] lg:w-[125px] h-[50%] bg-white rounded-full hover:bg-gray-50 transition-colors"
                >
                  <LogoutIcon className="text-gray-500 sm:mr-1 md:mr-3" /> Sign Out
                </button>
              </>
            ) : (
              // User options
              <>
                <button
                  onClick={() => navigate("/cart")}
                  className="mt-5 sm:w-[90px] max-[640px]:text-[12px] md:w-[110px] lg:w-[125px] h-[50%] bg-[#581863] text-white rounded-full hover:bg-[#4a1460] transition-colors relative"
                >
                  <ShoppingCartIcon className="text-white sm:mr-1 md:mr-3" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                      {cartCount}
                    </span>
                  )}
                  Cart
                </button>
                <button
                  onClick={handleLogout}
                  className="mt-5 sm:w-[90px] max-[640px]:text-[12px] md:w-[110px] lg:w-[125px] h-[50%] bg-white rounded-full hover:bg-gray-50 transition-colors"
                >
                  <LogoutIcon className="text-gray-500 sm:mr-1 md:mr-3" /> Sign Out
                </button>
              </>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
