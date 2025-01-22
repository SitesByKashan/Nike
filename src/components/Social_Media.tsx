import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Social_Media() {
  return (
      <div className="w-full mt-6">
          <div className="border-t border-gray-700 pt-6 flex justify-between items-center text-sm text-gray-400">
            <p>© 2023 Nike, Inc. All Rights Reserved</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
  )
}
