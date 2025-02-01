import React from "react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen relative px-4 sm:px-6 md:px-8">
      <div className="absolute w-[400px] h-[400px] bg-custom-gradient rounded-full mt-5 left-[-30px] sm:w-[700px] sm:h-[700px]"></div>
      <div className="relative bg-white shadow-lg rounded-lg p-6 w-full max-w-sm sm:w-80">
        <h2 className="text-center text-xl font-bold text-[#581863] mb-4">
          SIGN UP
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full p-3 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#581863] focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="CREATE PASSWORD"
              className="w-full p-3 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#581863] focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="CONFIRM PASSWORD"
              className="w-full p-3 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#581863] focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#581863] text-white py-2 rounded-lg hover:bg-[#581863] transition"
          >
            CREATE ACCOUNT
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/Login" className="text-[#581863] hover:underline">
            LOGIN
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
