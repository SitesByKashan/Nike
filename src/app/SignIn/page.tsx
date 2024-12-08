import React from "react";

export default function SignIn() {
  return (
    <div className="flex mt-2 justify-center mb-10 bg-[#FFFFFF]">
      <div className="w-[90%] max-w-[380px] h-auto bg-[#FFFFFF] px-6">
        <div className="text-center mb-3">
          <img
            src="/assets/Nike.png" 
            alt="Nike Logo"
            className="mx-auto w-16 h-16"
          />
        </div>
        <h1 className="text-[18px] font-bold text-center text-[#111111]">
          YOUR ACCOUNT <br/>FOR EVERYTHING <br/>NIKE
        </h1>
        <form className="mt-6">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 rounded" />
              <span className="text-gray-600 text-sm">Keep me signed in</span>
            </label>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Forgotten your password?
            </a>
          </div>
          <p className="text-[#38D8D8D] text-[12px] items-center p-4 text-center">By logging in, you agree to Nike&apos;s Privacy Policy and Terms of Use.</p>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Not a Member?{" "}
          <a href="#" className="text-black font-medium hover:underline">
            Join Us
          </a>
        </p>
      </div>
    </div>
  );
}
