import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex min-h-screen">

      {/* Left Side */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600 justify-center items-center text-white">
        <div className="text-center px-10">
          <h1 className="text-5xl font-bold mb-4">
            Welcome Back
          </h1>

          <p className="text-lg">
            Log in to continue your learning journey.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-1 justify-center items-center bg-gray-50 py-10">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

          <h1 className="text-3xl font-bold text-center mb-2">
            Login
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Welcome back! Please login to your account.
          </p>

          <form className="space-y-5">

            <div>
              <label className="font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-11 mt-2 rounded-lg border  px-4 shadow-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full h-11 mt-2 rounded-lg border  px-4 shadow-sm outline-none focus:border-blue-500"
              />
            </div>

            <button
              className="w-full h-11 rounded-lg bg-blue-600 text-white font-semibold transition hover:bg-blue-700 cursor-pointer"
            >
              Log In
            </button>

          </form>

          <div className="flex justify-center gap-2 mt-6 text-sm">
            <p>Don't have an account?</p>

            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Create Account
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;