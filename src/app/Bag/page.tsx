"use client"
import Recommendation from "@/components/Recommendation";
import Link from "next/link";
import { useCart } from "@/components/CartContext";
import Image from "next/image";

export default function Bag() {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart();
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

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
            <h2 className="text-lg font-bold mb-2">Your Cart</h2>
            <div className="space-y-8">
            {cart.length === 0 ? (
            <div className="flex w-full items-center justify-center">
                    <Image
                      src={"/assets/Cart_Empty.jpg"}
                      width={300}
                      height={300}
                      alt={"Your Cart Is Empty"}
                      className="mb-4"
                    />
                  </div>
        ) : (
          <div className="space-y-8">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md border"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <div className="flex items-center space-x-4">
                        <button
                          className="px-2 py-1 bg-gray-200 rounded-full text-black font-semibold"
                          onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <p>Quantity: {item.quantity}</p>
                        <button
                          className="px-2 py-1 bg-gray-200 rounded-full text-black font-semibold"
                          onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                  <button
                    className="text-red-500 mt-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
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
                <span>Rs {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery & Handling:</span>
                <span>Free</span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>Rs {subtotal.toLocaleString()}</span>
            </div>
            <Link href={"/CheckOut"}>
            <button className="w-full mt-6 bg-black text-white py-3 rounded-3xl font-medium">
              Member Checkout
            </button>
            </Link>
          </div>
        </div>
  
        {/* Recommendations */}
        <Recommendation/>
      </div>
    );
  }
