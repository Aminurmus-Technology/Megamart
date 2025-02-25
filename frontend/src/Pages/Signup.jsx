import React, { useState } from "react";
import { signUpUser } from "../services/api"; // Import API function

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await signUpUser({
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 201) {
        alert("Account Created! Please Log In.");
      }
    } catch (error) {
      console.error(error);
      alert("Signup Failed! Try Again.");
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
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#581863] text-white py-2 rounded-lg"
          >
            CREATE ACCOUNT
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/Login" className="text-[#581863] hover:underline">LOGIN</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
