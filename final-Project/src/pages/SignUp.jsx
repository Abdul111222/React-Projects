import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="flex min-h-screen">

      {/* Left Side */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600 justify-center items-center text-white">
        <div className="text-center px-10">
          <h1 className="text-5xl font-bold mb-4">Create Account</h1>
          <p className="text-lg">
            Join us today and start your learning journey.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-1 justify-center items-center bg-gray-50 py-10">

        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

          <h1 className="text-3xl font-bold text-center mb-2">
            Sign Up
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Create your account to continue
          </p>

          <form className="space-y-5">

            <div>
              <label className="font-medium">First Name</label>

              <input
                type="text"
                placeholder="Enter first name"
                className="w-full h-11 mt-2 rounded-lg border focous:border-gray-300 px-4 shadow-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="font-medium">Last Name</label>

              <input
                type="text"
                placeholder="Enter last name"
                className="w-full h-11 mt-2 rounded-lg border focous:border-gray-300 px-4 shadow-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="font-medium">Username</label>

              <input
                type="text"
                placeholder="Enter username"
                className="w-full h-11 mt-2 rounded-lg border focous:border-gray-300 px-4 shadow-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="font-medium">Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-11 mt-2 rounded-lg border focous:border-gray-300 px-4 shadow-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="font-medium">Password</label>

              <input
                type="password"
                placeholder="Enter password"
                className="w-full h-11 mt-2 rounded-lg border focous:border-gray-300 px-4 shadow-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="font-medium">Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm password"
                className="w-full h-11 mt-2 rounded-lg border focous:border-gray-300 px-4 shadow-sm outline-none focus:border-blue-500"
              />
            </div>

            <button
              className="w-full h-11 rounded-lg bg-blue-600 text-white font-semibold transition hover:bg-blue-700 cursor-pointer"
            >
              Create Account
            </button>

          </form>

          <div className="flex justify-center gap-2 mt-6 text-sm">
            <p>Already have an account?</p>

            <button className="text-blue-600 font-semibold hover:underline cursor-pointer">
              <Link to="/login">Login</Link>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SignUp;