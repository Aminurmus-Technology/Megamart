import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  // Check if admin login was selected from navbar
  useEffect(() => {
    if (location.state?.isAdmin !== undefined) {
      setIsAdmin(location.state.isAdmin);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // For now, simulate login without backend
      const mockUserData = {
        email: formData.email,
        role: isAdmin ? "admin" : "user",
        name: formData.email.split('@')[0]
      };

      // Use AuthContext to login
      login(mockUserData, mockUserData.role);

      // Show success message
      alert(`${isAdmin ? 'Admin' : 'User'} login successful!`);

      // Redirect based on user role
      if (isAdmin) {
        navigate("/AdminPanel");
      } else {
        navigate("/");
      }

    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed! Please check your credentials and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative px-4 sm:px-6 md:px-8">
      <div className="absolute w-[400px] h-[400px] bg-custom-gradient rounded-full mt-5 right-0 sm:w-[700px] sm:h-[700px]"></div>
      <div className="relative w-full max-w-sm bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h2 className="text-center text-xl font-bold text-[#581863] mb-4">
          {isAdmin ? 'ADMIN LOGIN' : 'USER LOGIN'}
        </h2>

        {/* Toggle Button for User/Admin Login */}
        <div className="flex justify-center mb-4">
          <button
            type="button"
            className={`w-1/2 px-3 py-2 text-sm font-medium rounded-l-lg transition-colors ${
              !isAdmin ? "bg-[#581863] text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => setIsAdmin(false)}
          >
            User Login
          </button>
          <button
            type="button"
            className={`w-1/2 px-3 py-2 text-sm font-medium rounded-r-lg transition-colors ${
              isAdmin ? "bg-[#581863] text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
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
            disabled={isLoading}
            className="w-full bg-[#581863] text-white py-2 rounded-lg hover:bg-[#4a1460] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "SIGNING IN..." : "SIGN IN"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <button 
            onClick={() => navigate("/SignUp")} 
            className="text-[#581863] hover:underline font-medium"
          >
            SIGN UP
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
