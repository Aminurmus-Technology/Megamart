import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Dashboard from "../Components/admin-view/DashBoard";
import Products from "../Components/admin-view/Products";

export default function AdminPanel() {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-md p-5">
        <h2 className="text-xl font-bold flex items-center mb-5">
          <MdDashboard className="mr-2" /> Admin Panel
        </h2>
        <nav className="space-y-4">
          <button
            onClick={() => setSelectedTab("dashboard")}
            className={`flex items-center w-full text-left text-gray-700 hover:text-black ${
              selectedTab === "dashboard" ? "font-bold" : ""
            }`}
          >
            <MdDashboard className="mr-2" /> Dashboard
          </button>
          <button
            onClick={() => setSelectedTab("products")}
            className={`flex items-center w-full text-left text-gray-700 hover:text-black ${
              selectedTab === "products" ? "font-bold" : ""
            }`}
          >
            <AiOutlineShoppingCart className="mr-2" /> Products
          </button>
          {/* <button
            onClick={() => setSelectedTab("orders")}
            className={`flex items-center w-full text-left text-gray-700 hover:text-black ${
              selectedTab === "orders" ? "font-bold" : ""
            }`}
          >
            <BsCheckCircle className="mr-2" /> Orders
          </button> */}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-5 relative">
        {/* Add New Products Button (Visible only when on Products Tab) */}
        {selectedTab === "products" && (
          <a href="/AdminPanel/AddProduct" className="absolute top-5 right-5">
            <button className="bg-black text-white px-4 py-2 rounded">Add New Product</button>
          </a>
        )}

        {/* Render selected component */}
        {selectedTab === "dashboard" && <Dashboard/>}
        {selectedTab === "products" && <Products />}

      </div>
    </div>
  );
}
