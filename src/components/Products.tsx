import React from 'react'
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { BsFillFilterCircleFill } from "react-icons/bs";
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
      const [error, setError] = useState<string | null>(null); 


      // useEffect(() => {
      //   const fetchProducts = async () => {
      //     const query = `
      //       *[_type == "product"]{
      //         _id,
      //         productName,
      //         category,
      //         price,
      //         inventory,
      //         colors,
      //         status,
      //         "imageUrl": image.asset->url,
      //         description
      //       }
      //     `;
      //     const fetchedProducts = await client.fetch(query);
      //     setProducts(fetchedProducts);
      //   };
    
      //   fetchProducts();
      // }, []);
      useEffect(() => {
        const fetchProducts = async () => {
          try {
            const query = `  *[_type == "product"]{
              _id,
              productName,
              category,
              price,
              inventory,
              colors,
              status,
              "imageUrl": image.asset->url,
              description
            }`;
            const fetchedProducts = await client.fetch(query);
            setProducts(fetchedProducts); // Update state with fetched products
          } catch (error) {
            console.error("Error fetching products:", error); // Log error for debugging
            setError("Failed to fetch products. Please try again later."); // Update error state
          }
        };
      
        fetchProducts();
      }, []);
      const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
  return (
    <>
    {error? (
      <div className="text-red-500 text-center mt-4">
      {error}
    </div>
    ):
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
  }
  </>
  )
}
