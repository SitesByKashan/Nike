"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "@/components/CartContext";

interface Product {
  _id: string;
  productName: string;
  imageUrl: string;
  colors: string[];
  price: number;
  description: string;
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.productName,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    });
    toast.success(`${product.productName} added to your bag!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.productName}
            className="w-full h-96 rounded-lg shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-bold mb-4">{product.productName}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-gray-900 text-lg font-semibold mb-4">
            Price: ₹ {product.price}
          </p>
          {product.colors && (
            <div className="mb-4">
              <h3 className="font-medium mb-2">Available Colors:</h3>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="block w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          )}
          <button
            className="bg-black text-white py-2 px-4 rounded mt-6 hover:bg-gray-800"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      {/* Toastify container */}
      <ToastContainer />
    </div>
  );
}
