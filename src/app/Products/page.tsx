"use client";

import { useState, useEffect } from "react";
import { BsFillFilterCircleFill } from "react-icons/bs";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

type Product = {
  _id: string;
  productName: string;
  imageUrl: string;
  colors?: string[];
  price: number;
};

export default function Products() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type == "product"]{
          _id,
          productName,
          category,
          price,
          inventory,
          colors,
          status,
          "imageUrl": image.asset->url,
          description
        }
      `;
      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex">
      {/* Sidebar - Filters */}
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
      {/* Hamburger Icon */}
      

      {/* Main Content - Products */}
      <main className="w-full lg:w-3/4 p-6">
        <div className="flex justify-between items-center mb-4">
        {!isSidebarOpen && (
        <button
          className="lg:hidden top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-full"
          onClick={toggleSidebar}
        >
          <BsFillFilterCircleFill />
        </button>
      )}
          <h2 className="text-xl font-semibold">Sort By</h2>
          <button className="text-gray-600">Hide Filters</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Map through the products array */}
          {products.map((product: Product) => (
            <Link href={`/Products/${product._id}`} key={product._id}>
            <div className="border p-4">
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="w-full mb-4"
              />
              <h3 className="text-lg font-medium">{product.productName}</h3>
              <p className="text-gray-500">{product.colors}</p>
              <p className="text-gray-900">MRP: {product.price}</p>
            </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
