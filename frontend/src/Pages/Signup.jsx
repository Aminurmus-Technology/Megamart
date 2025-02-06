import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("user", email);
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="relative bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-center text-xl font-bold text-[#581863] mb-4">SIGN UP</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="EMAIL"
            className="w-full p-3 mb-4 rounded-lg border border-gray-300"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="CREATE PASSWORD"
            className="w-full p-3 mb-4 rounded-lg border border-gray-300"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="CONFIRM PASSWORD"
            className="w-full p-3 mb-6 rounded-lg border border-gray-300"
            required
          />
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
