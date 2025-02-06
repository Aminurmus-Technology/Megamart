import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api"; 
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Handle changes in form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login data to the backend
      const response = await loginUser(formData);
      
      // Assuming the response contains the JWT token as the response data
      const token = response.data;
      localStorage.setItem("token", token);
      
      // Redirect to the home page or dashboard
      navigate("/");
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
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email" // add name attribute to use in state update
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
              name="password" // add name attribute for state update
              value={formData.password}
              onChange={handleChange}
              placeholder="PASSWORD"
              className="w-full p-3 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#581863] focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#581863] text-white py-2 rounded-lg hover:bg-[#581863] transition"
          >
            SIGN IN
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/SignUp" className="text-[#581863] hover:underline">
            SIGNUP
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
