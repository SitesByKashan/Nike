import Link from "next/link";

export default function Bag() {
    return (
      <div className="min-h-screen bg-[#FFFFFF]">
        {/* Container */}
        <div className="max-w-7xl mx-auto px-4 py-8  grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bag Section */}
          <div className="lg:col-span-2 bg-[#FFFFFF] p-6">
            {/* Free Delivery Banner */}
            <div className="bg-gray-100 p-4 mb-6 rounded-md text-sm">
              <span>Free Delivery</span> applies to orders of ₹10,000 or more.{" "}
              <a href="#" className="text-[#111111] underline">
                View details
              </a>
            </div>
  
            {/* Bag Items */}
            <h2 className="text-lg font-bold mb-4">Bag</h2>
            <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex gap-4">
                <img
                  src="/assets/Shirt.png"
                  alt="Nike Shirt"
                  className="w-24 h-24 object-cover rounded-md border"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">Nike Dri-FIT ADV TechKnit Ultra</h3>
                  <p className="text-gray-500 text-sm">
                    Men&apos;s Short-Sleeve Running Top
                    <br />
                    Ashen Slate/Cobalt Bliss
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">Size:</span> L
                    <span className="mx-2">|</span>
                    <span className="font-bold">Quantity:</span> 1
                  </p>
                  <div className="mt-4 flex gap-4 text-sm text-gray-500">
                    <button className="flex items-center gap-2">
                      ❤️ <span>Save</span>
                    </button>
                    <button className="flex items-center gap-2">
                      🗑️ <span>Remove</span>
                    </button>
                  </div>
                </div>
                <p className="font-bold">MRP: ₹ 3,895.00</p>
              </div>
  
              {/* Item 2 */}
              <div className="flex gap-4">
                <img
                  src="/assets/Shoes.png"
                  alt="Nike Shoes"
                  className="w-24 h-24 object-cover rounded-md border"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">Nike Air Max 97 SE</h3>
                  <p className="text-gray-500 text-sm">
                    Men&apos;s Shoes
                    <br />
                    Flat Pewter/Light Bone/Black/White
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">Size:</span> 8
                    <span className="mx-2">|</span>
                    <span className="font-bold">Quantity:</span> 1
                  </p>
                  <div className="mt-4 flex gap-4 text-sm text-gray-500">
                    <button className="flex items-center gap-2">
                      ❤️ <span>Save</span>
                    </button>
                    <button className="flex items-center gap-2">
                      🗑️ <span>Remove</span>
                    </button>
                  </div>
                </div>
                <p className="font-bold">MRP: ₹ 16,995.00</p>
              </div>
            </div>
  
            {/* Favourites Section */}
            <h3 className="text-lg font-bold mt-12">Favourites</h3>
            <p className="text-gray-500">There are no items saved to your favourites.</p>
          </div>
  
          {/* Summary Section */}
          <div className="bg-[#FFFFFF] p-6">
            <h2 className="text-lg font-bold mb-6">Summary</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹ 20,890.00</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery & Handling:</span>
                <span>Free</span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>₹ 20,890.00</span>
            </div>
            <Link href={"/CheckOut"}>
            <button className="w-full mt-6 bg-black text-white py-3 rounded-3xl font-medium">
              Member Checkout
            </button>
            </Link>
          </div>
        </div>
  
        {/* Recommendations */}
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <h3 className="text-lg font-bold mt-12 mb-4">You Might Also Like</h3>
          <div className="flex gap-12 overflow-x-scroll md:overflow-x-hidden">
            {/* Product 1 */}
            <div className="flex-shrink-0 w-48 ml-8">
              <img
                src="/assets/Shoe1.png"
                alt="Air Jordan"
                className="w-full h-48 object-cover rounded-md border"
              />
              <h4 className="font-semibold mt-2">Air Jordan 1 Mid SE Craft</h4>
              <p className="text-gray-500">Men&apos;s Shoes</p>
              <p className="font-bold">MRP: ₹ 12,295.00</p>
            </div>
           {/* Product 2 */}
           <div className="flex-shrink-0 w-48">
              <img
                src="/assets/Shirt.png"
                alt="Air Jordan"
                className="w-full h-48 object-cover rounded-md border"
              />
              <h4 className="font-semibold mt-2">Air Jordan 1 Mid SE Craft</h4>
              <p className="text-gray-500">Men&apos;s Shoes</p>
              <p className="font-bold">MRP: ₹ 12,295.00</p>
            </div>
            {/* Product 3 */}
            <div className="flex-shrink-0 w-48">
              <img
                src="/assets/Shoe2.png"
                alt="Air Jordan"
                className="w-full h-48 object-cover rounded-md border"
              />
              <h4 className="font-semibold mt-2">Air Jordan 1 Mid SE Craft</h4>
              <p className="text-gray-500">Men&apos;s Shoes</p>
              <p className="font-bold">MRP: ₹ 12,295.00</p>
            </div>
            {/* Product 4 */}
            <div className="flex-shrink-0 w-48">
              <img
                src="/assets/Shirt2.png"
                alt="Air Jordan"
                className="w-full h-48 object-cover rounded-md border"
              />
              <h4 className="font-semibold mt-2">Air Jordan 1 Mid SE Craft</h4>
              <p className="text-gray-500">Men&apos;s Shoes</p>
              <p className="font-bold">MRP: ₹ 12,295.00</p>
            </div>
            {/* Product 6 */}
            <div className="flex-shrink-0 w-48">
              <img
                src="/assets/Shoes.png"
                alt="Air Jordan"
                className="w-full h-48 object-cover rounded-md border"
              />
              <h4 className="font-semibold mt-2">Air Jordan 1 Mid SE Craft</h4>
              <p className="text-gray-500">Men&apos;s Shoes</p>
              <p className="font-bold">MRP: ₹ 12,295.00</p>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  