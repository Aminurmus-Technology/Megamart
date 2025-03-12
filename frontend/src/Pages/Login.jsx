import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, loginAdmin } from "../services/api"; 

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isAdmin, setIsAdmin] = useState(false); // Toggle for user/admin login
  const navigate = useNavigate();

  // Handle changes in form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call login function based on selection
      const response = isAdmin ? await loginAdmin(formData) : await loginUser(formData);

      // Store token in local storage
      const token = response.data.token || response.data;
      localStorage.setItem("token", token);
      const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT
      const userRole = decodedToken.userData.role; // Extract role

      console.log(userRole);

      // Redirect based on user role
      if (userRole === "admin") {
        console.log("Redirecting to AdminPanel...");
        navigate("/AdminPanel"); // Redirect admin to AdminPanel
      } else {
        navigate("/"); // Redirect normal user to home
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed! Please check your credentials and try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative px-4 sm:px-6 md:px-8">
      <div className="absolute w-[400px] h-[400px] bg-custom-gradient rounded-full mt-5 right-0 sm:w-[700px] sm:h-[700px]"></div>
      <div className="relative w-full max-w-sm bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h2 className="text-center text-xl font-bold text-[#581863] mb-4">LOGIN</h2>

        {/* Toggle Button for User/Admin Login */}
        <div className="flex justify-center mb-4">
          <button
            type="button"
            className={`w-1/2 px-3 py-2 text-sm font-medium rounded-l-lg ${
              !isAdmin ? "bg-[#581863] text-white" : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setIsAdmin(false)}
          >
            User Login
          </button>
          <button
            type="button"
            className={`w-1/2 px-3 py-2 text-sm font-medium rounded-r-lg ${
              isAdmin ? "bg-[#581863] text-white" : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setIsAdmin(true)}
          >
            Admin Login
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="EMAIL"
              className="w-full p-3 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#581863] focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="PASSWORD"
              className="w-full p-3 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#581863] focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#581863] text-white py-2 rounded-lg"
          >
            SIGN IN
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/SignUp" className="text-[#581863] hover:underline">SIGNUP</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
