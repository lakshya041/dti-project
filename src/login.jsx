import React from "react";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex bg-white shadow-2xl rounded-2xl overflow-hidden max-w-5xl">
        {/* Left Section */}
        <div className="p-12 w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-6">Welcome Back</h1>
          <p className="text-gray-600 mb-8 text-lg">Login with your social networks or email address to continue.</p>

          {/* Social Login Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <i className="fab fa-facebook-f"></i> Facebook
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
              <i className="fab fa-google"></i> Google
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </button>
          </div>

          <div className="border-t border-gray-300 mb-6"></div>

          {/* Email Login Form */}
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <div className="relative mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">👁</span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember Me
              </label>
              <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="bg-gradient-to-br from-teal-400 to-green-500 text-white p-12 w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">New Here?</h2>
          <p className="mb-8 text-center text-lg">Create an account and explore amazing opportunities tailored just for you!</p>
          <button className="bg-white text-teal-500 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
