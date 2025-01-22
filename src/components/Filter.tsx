"use client";
import { useState } from "react";

export default function Filter(){
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);
      const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
    return(
        <aside
        className={`fixed top-0 left-0 h-full bg-[#FFFFFF]  p-4 pl-12 z-40 transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:w-1/4`}
      >
        <button
          className="lg:hidden absolute top-4 right-4 text-gray-600 text-xl"
          onClick={toggleSidebar}
        >
          ✕
        </button>
        <h2 className="text-lg font-semibold mb-4">New (500)</h2>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700">Shoes</a></li>
              <li><a href="#" className="text-gray-700">Sports Bras</a></li>
              <li><a href="#" className="text-gray-700">Tops & T-Shirts</a></li>
              {/* Add more categories here */}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Gender</h3>
            <ul className="space-y-2">
              <li><label><input type="checkbox" className="mr-2 accent-black" />Men</label></li>
              <li><label><input type="checkbox" className="mr-2 accent-black" />Women</label></li>
              <li><label><input type="checkbox" className="mr-2 accent-black" />Unisex</label></li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Kids</h3>
            <ul className="space-y-2">
              <li><label><input type="checkbox" className="mr-2 accent-black" />Boys</label></li>
              <li><label><input type="checkbox" className="mr-2 accent-black" />Girls</label></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Shop By Price</h3>
            <ul className="space-y-2">
              <li><label><input type="radio" name="price" className="mr-2 accent-black" />Under ₹ 7,500</label></li>
              <li><label><input type="radio" name="price" className="mr-2 accent-black" />₹ 7,500 - ₹ 15,000</label></li>
            </ul>
          </div>
        </aside>
    )
}