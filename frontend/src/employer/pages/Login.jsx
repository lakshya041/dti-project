import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const signInEmailRef = useRef()
  const signInPasswordRef = useRef()
  const signupNameRef = useRef()
  const signupEmailRef = useRef()
  const signupPasswordRef = useRef()

  async function signinHandler(){
    const res = await fetch("http://localhost:3000/employerlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signInEmailRef.current.value,
        password: signInPasswordRef.current.value,
      }),
    });

    const data = await res.json();
    if (data.message === "login Success") {
      document.cookie = `${data.token}; path=/;`;
      console.log(data.token);
      navigate("/");
    }
  }

  async function signupHandler(){
    const res = await fetch("http://localhost:3000/employersignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signupEmailRef.current.value,
        password: signupPasswordRef.current.value,
        username: signupNameRef.current.value,
      }),
    });

    const data = await res.json();
    if (data.message === "signup Success") {
      document.cookie = `${data.token}; path=/;`;
      navigate("/");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="relative w-[800px] h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Sliding Color Panel */}
        <div
          className={`absolute top-0 w-1/2 h-full bg-gradient-to-br from-red-600 to-orange-500 transition-all duration-700 ease-in-out z-20 ${
            isSignIn ? "left-0" : "left-1/2"
          }`}
        >
          {/* Content for Sign In state */}
          <div 
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white p-8 transition-all duration-700 ${
              isSignIn ? "translate-x-0 opacity-100" : "-translate-x-full hidden opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold mb-4">Welcome Back!</h3>
            <p className="text-center mb-6">
              To keep connected with us please login with your personal info
            </p>
            <button
              onClick={() => setIsSignIn(false)}
              className="cursor-pointer border-2 border-white px-8 py-2 rounded-full hover:bg-white hover:text-red-500 transition-colors"
            >
              Sign Up
            </button>
          </div>

          {/* Content for Sign Up state */}
          <div 
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white p-8 transition-all duration-700 ${
              !isSignIn ? "translate-x-0 opacity-100" : "translate-x-full hidden opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold mb-4">Hello, Friend!</h3>
            <p className="text-center mb-6">
              Enter your personal details and start journey with us
            </p>
            <button
              onClick={() => setIsSignIn(true)}
              className="cursor-pointer border-2 border-white px-8 py-2 rounded-full hover:bg-white hover:text-red-500 transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Forms Container */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${
            isSignIn ? "translate-x-100" : "-translate-x-1/2"
          }`}>
            {/* Sign In Form */}
            <div className={`absolute left-0 w-1/2 h-full flex items-center justify-center transition-all duration-700 ${
              isSignIn ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}>
              <div className="w-[300px]">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Sign In</h2>
                <input
                ref={signInEmailRef}
                  type="email"                  
                  placeholder="Email"
                  className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
                <input
                ref={signInPasswordRef}
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
                <div className="flex items-center justify-between w-full text-gray-700 text-sm py-6">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 accent-blue-500" />
                    Remember me
                  </label>
                  <a href="#" className="text-orange-500 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <button  onClick={signinHandler} className="cursor-pointer w-full py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                  Sign In
                </button>
              </div>
            </div>

            {/* Sign Up Form */}
            <div className={`absolute left-1/2 w-1/2 h-full flex items-center justify-center transition-all duration-700 ${
              !isSignIn ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}>
              <div className="w-[300px]">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Create Account</h2>
                <input
                ref={signupNameRef}
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
                <input
                ref={signupEmailRef}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
                <input
                ref={signupPasswordRef}
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
                
                <button onClick={signupHandler} className="cursor-pointer w-full py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
