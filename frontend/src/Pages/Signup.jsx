import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../services/api"; // Import API function

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    setIsLoading(true);

    try {
      // For now, simulate signup without backend
      const mockUserData = {
        email: formData.email,
        role: "user",
        name: formData.email.split('@')[0]
      };

      // Store user data in localStorage (for demo purposes)
      const existingUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
      const userExists = existingUsers.find(user => user.email === formData.email);
      
      if (userExists) {
        alert("User with this email already exists!");
        return;
      }

      existingUsers.push(mockUserData);
      localStorage.setItem("registeredUsers", JSON.stringify(existingUsers));

      alert("Account Created Successfully! Please Log In.");
      navigate("/Login");

    } catch (error) {
      console.error(error);
      alert("Signup Failed! Try Again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative px-4 sm:px-6 md:px-8">
      <div className="absolute w-[400px] h-[400px] bg-custom-gradient rounded-full mt-5 left-[-30px] sm:w-[700px] sm:h-[700px]"></div>
      <div className="relative bg-white shadow-lg rounded-lg p-6 w-full max-w-sm sm:w-80">
        <h2 className="text-center text-xl font-bold text-[#581863] mb-4">
          SIGN UP
        </h2>
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
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="CREATE PASSWORD"
              className="w-full p-3 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#581863] focus:outline-none"
              required
              minLength={6}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="CONFIRM PASSWORD"
              className="w-full p-3 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#581863] focus:outline-none"
              required
              minLength={6}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#581863] text-white py-2 rounded-lg hover:bg-[#4a1460] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <button 
            onClick={() => navigate("/Login")} 
            className="text-[#581863] hover:underline font-medium"
          >
            LOGIN
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
