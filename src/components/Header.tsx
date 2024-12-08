"use client"
import Image from "next/image"
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="body-font bg-[#F5F5F5] h-[36px] pt-1">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
          {/* Logo and Icon Section */}
          <div className="flex items-center">
            <Image
              className="w-[24px] h-[24px]"
              width={24}
              height={24}
              src={"/assets/Vector.png"}
              alt={"Icon"}
            />

          </div>

          {/* Navigation Section */}
          <nav className="flex flex-wrap items-center text-sm text-[#111111] font-helvetica space-x-4 md:space-x-6 ">
            <Link href={"/"} className="hover:text-gray-800">
              Find a Store
            </Link>
            <div className="w-[1px] h-[14px] bg-[#111111]"></div>
            <Link href={"/Help"} className="hover:text-gray-800">
              Help
            </Link>
            <div className="w-[1px] h-[14px] bg-[#111111]"></div>
            <Link href={"/JoinUs"} className="hover:text-gray-800">
              Join Us
            </Link>
            <div className="w-[1px] h-[14px] bg-[#111111] "></div>
            <Link href={"/SignIn"} className="hover:text-gray-800">
              Sign In
            </Link>
          </nav>
        </div>
      </header>


      <header className="w-full h-[60px] flex justify-between items-center px-4 font-helvetica bg-[#FFFFFF]">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <img
          src="/assets/Nike.png"
          alt="Nike Logo"
          className="w-[50px] h-[50px]"
        />
      </div>

      {/* Middle - Navigation Links */}
      <nav className="hidden md:flex ml-44 space-x-4 text-[15px]">
        <Link href="/" className="hover:text-gray-600">
          New & Featured
        </Link>
        <Link href="/" className="hover:text-gray-600">
          Men
        </Link>
        <Link href="/" className="hover:text-gray-600">
          Women
        </Link>
        <Link href="/" className="hover:text-gray-600">
          Kids
        </Link>
        <Link href="/" className="hover:text-gray-600">
          Sale
        </Link>
        <Link href="/" className="hover:text-gray-600">
          SNKRS
        </Link>
      </nav>

      {/* Right Side - Search and Wishlist */}
      <div className="hidden md:flex space-x-4 items-center">
        {/* Search Bar */}
        <div className="flex items-center">
          <img
            src="/assets/Search.png"
            alt="Search Bar"
            className="w-[180px] h-[40px]"
          />
        </div>

        {/* Wishlist Icon */}
        <div className="flex items-center">
          <img
            src="/assets/Search Icon.png"
            alt="Wishlist Icon"
            className="w-[84px] h-[60px]"
          />
        </div>
      </div>

      {/* Right Side - Menu Icon (Small Screens) */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            // Close Icon
            <div className="w-[24px] h-[24px] flex items-center justify-center bg-gray-800 text-white rounded">
              ✖
            </div>
          ) : (
            // Menu Icon
            <div className="w-[24px] h-[24px] flex flex-col justify-between bg-gray-800 text-white p-[2px] rounded">
              <span className="block h-[2px] bg-white"></span>
              <span className="block h-[2px] bg-white"></span>
              <span className="block h-[2px] bg-white"></span>
            </div>
          )}
        </button>
      </div>

      {/* Navigation Links - Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <Link href="/" className="hover:text-gray-600">
              New & Featured
            </Link>
            <Link href="/" className="hover:text-gray-600">
              Men
            </Link>
            <Link href="/" className="hover:text-gray-600">
              Women
            </Link>
            <Link href="/" className="hover:text-gray-600">
              Kids
            </Link>
            <Link href="/" className="hover:text-gray-600">
              Sale
            </Link>
            <Link href="/" className="hover:text-gray-600">
              SNKRS
            </Link>
            {/* Center - Search and Wishlist for Small Screens */}
            <div className="flex flex-col items-center space-y-2 mt-4">
              {/* Search Bar */}
              <div className="flex items-center">
                <img
                  src="/assets/Search.png"
                  alt="Search Bar"
                  className="w-[150px] h-[30px]"
                />
              </div>
              {/* Wishlist Icon */}
              <div className="flex items-center">
                <img
                  src="/assets/Search Icon.png"
                  alt="Wishlist Icon"
                  className="w-[40px] h-[40px]"
                />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
    </>

  )
}