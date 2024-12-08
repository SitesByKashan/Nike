export default function CheckOut() {
    return (
      <div className="min-h-screen bg-[#FFFFFF] p-6">
        <div className="flex justify-center max-w-7xl mx-auto  gap-8">
          {/* Left Section: Form */}
          <div className="lg:col-span-2 bg-white w-[440px] p-6">
            <h1 className="text-[21px] font-medium mb-4">How would you like to get your order?</h1>
            <p className="text-[#757575] mb-6">
            Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More
            </p>
  
            {/* Delivery Options */}
            <div className="mb-6">
              <button className="w-full p-4 border border-gray-300 rounded-lg flex items-center justify-start">
              <img
                  src="/assets/Delivery.png"
                  alt="Delivery"
                  className="w-[24px] h-[24px] rounded-md border mr-4"
                />
                <span className="font-medium">Deliver it</span>
              </button>
            </div>
  
            {/* Address Form */}
            <form className="space-y-6">
              <span className="text-[21px] font-medium text-[#111111]">Enter your name and address:</span>
              {/* Name Fields */}
              <div className="grid grid-cols-1  gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-4 border rounded-md w-full"
                />
              </div>
              <div className="grid grid-cols-1  gap-4">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-4 border rounded-md w-full"
                />
              </div>
  
              {/* Address Fields */}
              <input
                type="text"
                placeholder="Address Line 1"
                className="p-4 border rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Address Line 2"
                className="p-4 border rounded-md w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="p-4 border rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Locality"
                  className="p-4 border rounded-md w-full"
                />
              </div>
  
              {/* Dropdowns */}
              <div className="grid grid-cols-2 gap-4">
                <select className="p-4 border rounded-md w-full">
                  <option>State/Territory</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                </select>
                <select className="p-4 border rounded-md w-full">
                  <option>India</option>
                  <option>United States</option>
                </select>
              </div>
  
              {/* Save Address */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-[#111111] h-4 w-4" />
                  <span>Save this address to my profile</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-[#111111] h-4 w-4" />
                  <span>Make this my preferred address</span>
                </label>
              </div>
  
              {/* Contact Information */}
              <div>
                <h2 className="text-lg font-medium mb-4">What&apos;s your contact information?</h2>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-4 border rounded-md w-full mb-4"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-4 border rounded-md w-full"
                />
              </div>
  
              {/* PAN */}
              <div>
                <h2 className="text-lg font-medium mb-4">What&apos;s your PAN?</h2>
                <input
                  type="text"
                  placeholder="PAN"
                  className="p-4 border rounded-md w-full"
                />
              </div>
  
              {/* Continue Button */}
              <button className="w-full p-4 bg-[#111111] text-white rounded-3xl">
                Continue
              </button>
            </form>
          </div>
  
          {/* Right Section: Order Summary */}
          <div className="bg-white w-[320px] h-[721px] p-6 ">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <ul className="space-y-6">
              <li className="flex items-center">
                <img
                  src="/assets/Shirt.png"
                  alt="T-shirt"
                  className="w-[128px] h-[128px] rounded-md border mr-4"
                />
                <div>
                  <p className="font-normal text-[13px]">Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</p>
                  <p className="text-gray-500">Qty: 1</p>
                </div>
              </li>
              <li className="flex items-center">
                <img
                  src="/assets/Shoes.png"
                  alt="Shoes"
                  className="w-[128px] h-[128px] rounded-md border mr-4"
                />
                <div>
                  <p className="font-medium">AirMax 90 Shoes - Size 10</p>
                  <p className="text-gray-500">Qty: 1</p>
                </div>
              </li>
            </ul>
  
            <hr className="my-6" />
  
            {/* Summary */}
            <div className="text-lg font-medium flex justify-between">
              <span>Subtotal:</span>
              <span>₹2,980.00</span>
            </div>
            <div className="text-lg font-medium flex justify-between">
              <span>Delivery:</span>
              <span>Free</span>
            </div>
            <div className="text-xl font-bold flex justify-between mt-4">
              <span>Total:</span>
              <span>₹2,980.00</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  