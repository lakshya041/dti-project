import { useState } from "react";

export default function AuthForm() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-96 p-8 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Gradient Background */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-red-500 transition-transform duration-500 ${isSignIn ? "translate-x-0" : "-translate-x-full"}`}
        ></div>

        <div className="relative z-10">
          {isSignIn ? (
            <SignInForm toggle={() => setIsSignIn(false)} />
          ) : (
            <SignUpForm toggle={() => setIsSignIn(true)} />
          )}
        </div>
      </div>
    </div>
  );
}

function SignInForm({ toggle }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <input type="email" placeholder="Email" className="w-full p-2 mb-2 border rounded" />
      <input type="password" placeholder="Password" className="w-full p-2 mb-2 border rounded" />
      <button className="w-full py-2 bg-red-500 text-white rounded">Sign In</button>
      <p className="mt-4 text-sm">
        New here? <span className="text-red-500 cursor-pointer" onClick={toggle}>Sign Up</span>
      </p>
    </div>
  );
}

function SignUpForm({ toggle }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>
      <input type="text" placeholder="Name" className="w-full p-2 mb-2 border rounded" />
      <input type="email" placeholder="Email" className="w-full p-2 mb-2 border rounded" />
      <input type="password" placeholder="Password" className="w-full p-2 mb-2 border rounded" />
      <button className="w-full py-2 bg-red-500 text-white rounded">Sign Up</button>
      <p className="mt-4 text-sm">
        Already have an account? <span className="text-red-500 cursor-pointer" onClick={toggle}>Sign In</span>
      </p>
    </div>
  );
}
