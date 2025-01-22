import Social_Media from "./Social_Media";

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
        <Social_Media/>
      </div>
    </footer>
    );
  }
  