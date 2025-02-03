import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", email);
    setUser(email);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="relative w-full max-w-sm bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h2 className="text-center text-xl font-bold text-[#581863] mb-4">
          LOGIN
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#581863] focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#581863] text-white py-2 rounded-lg hover:bg-[#4a1259] transition"
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
