import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("user", email);
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="relative w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-center text-xl font-bold text-[#581863] mb-4">LOGIN</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="EMAIL"
            className="w-full p-3 mb-4 rounded-lg border border-gray-300"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            className="w-full p-3 mb-6 rounded-lg border border-gray-300"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
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
