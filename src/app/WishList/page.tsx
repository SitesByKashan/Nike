"use client";
import React from "react";
import { useWishList } from "@/components/WishList";
import Link from "next/link";
import Image from "next/image";

export default function WishListPage() {
  const { wishList, removeFromWishList, clearWishList } = useWishList();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Wish List</h1>
      {wishList.length === 0 ? (
        <div className="flex flex-col w-full items-center justify-center mt-10">
          <Image
            src={"/assets/WishList_Empty.jpg"}
            width={300}
            height={300}
            alt={"Your Wish List Empty"}
            className="mb-1"
          />
          <Link href={'/'}>
          <button className="w-full -mt-4 px-10 bg-black text-white py-3 rounded-3xl font-medium">
            Start Shopping
          </button>
          </Link>
        </div>
      ) : (
        <div>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded mb-4 hover:bg-red-600"
            onClick={clearWishList}
          >
            Clear Wish List
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishList.map((product) => (
              <div key={product.id} className="border p-4">
                <Link href={`/Products/${product.id}`}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full mb-4"
                  />
                </Link>
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-900">MRP: {product.price}</p>
                <button
                  className="bg-red-500 text-white py-1 px-4 rounded mt-4 hover:bg-red-600"
                  onClick={() => removeFromWishList(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
