import React from 'react'

export default function JoinUs() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFFFFF]">
    <div className="w-[380px] max-w-lg p-8 bg-[#FFFFFF]">
      <div className="text-center mb-6">
        <img
          src="/assets/Nike.png" // Add Nike logo to the public folder
          alt="Nike Logo"
          className="mx-auto w-16 h-16"
        />
      </div>
      <h1 className="text-xl font-semibold text-center text-gray-800">
        BECOME A NIKE MEMBER
      </h1>
      <p className="text-sm text-center text-gray-600 mt-2">
        Create your Nike Member profile and get first access to the very best
        of Nike products, inspiration, and community.
      </p>
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
        <div className="mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Get a Nike Member Reward every year on your Birthday.
          </p>
        </div>
        <div className="mb-4">
          <select
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          >
            <option value="" disabled selected>
              Select Country/Region
            </option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <button
            type="button"
            className="flex-1 py-2 border rounded-md text-center hover:bg-gray-100"
          >
            Male
          </button>
          <button
            type="button"
            className="flex-1 py-2 border rounded-md text-center hover:bg-gray-100"
          >
            Female
          </button>
        </div>
        <div className="mb-4">
          <label className="flex items-center text-gray-600 text-sm">
            <input type="checkbox" className="mr-2 rounded" />
            Sign up for emails to get updates from Nike on products, offers,
            and your Member benefits.
          </label>
        </div>
        <p className="text-xs text-gray-500 mb-6 text-center">
          By creating an account, you agree to Nike&apos;s{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Terms of Use
          </a>.
        </p>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
        >
          Join Us
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600">
        Already a Member?{" "}
        <a href="#" className="text-black font-medium hover:underline">
          Sign In
        </a>
      </p>
    </div>
  </div>
  )
}
