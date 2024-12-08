import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 flex flex-wrap justify-between">
          {/* Column 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h4 className="uppercase text-sm font-semibold mb-4">Find a Store</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Become a Member
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Sign Up for Email
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Send Us Feedback
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Student Discounts
                </a>
              </li>
            </ul>
          </div>
  
          {/* Column 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h4 className="uppercase text-sm font-semibold mb-4">Get Help</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Order Status
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Delivery
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Returns
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Payment Options
                </a>
              </li>
            </ul>
          </div>
  
          {/* Column 3 */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h4 className="uppercase text-sm font-semibold mb-4">About Nike</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  News
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Investors
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
  
           {/* Social Icons Section */}
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
      </div>
    </footer>
    );
  }
  