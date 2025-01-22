"use client"
import Image from "next/image"
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { client } from '@/sanity/lib/client';



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

    // Fetch products from Sanity
    useEffect(() => {
      const fetchProducts = async () => {
        const data = await client.fetch(`*[_type == "product"]{
          _id,
          productName,
          category,
          price,
          image,
          description,
        }`);
        setProducts(data);
        setFilteredProducts(data); // Initialize with all products
      };
  
      fetchProducts();
    }, []);
  
    // Handle search query change
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value.toLowerCase();
      setSearchQuery(query);
  
      // Filter products based on search query
      const filtered = products.filter((product) =>
        product.productName.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    };

  return (
    <>
      <header className="body-font bg-[#F5F5F5] h-[36px] pt-1">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
          {/* Logo and Icon Section */}
          <div className="flex items-center">
            <Image
              className="w-[24px] h-[24px]"
              width={24}
              height={24}
              src={"/assets/Vector.png"}
              alt={"Icon"}
            />

          </div>

          {/* Navigation Section */}
          <nav className="flex flex-wrap items-center text-sm text-[#111111] font-helvetica space-x-2 md:space-x-6 ">
            <Link href={"/Stores"} className="hover:text-gray-800">
              Find a Store
            </Link>
            <div className="w-[1px] h-[14px] bg-[#111111]"></div>
            <Link href={"/Help"} className="hover:text-gray-800">
              Help
            </Link>
            <div className="w-[1px] h-[14px] bg-[#111111]"></div>
            <Link href={"/JoinUs"} className="hover:text-gray-800">
              Join Us
            </Link>
            <div className="w-[1px] h-[14px] bg-[#111111] "></div>
            <Link href={"/SignIn"} className="hover:text-gray-800">
              Sign In
            </Link>
          </nav>
        </div>
      </header>


      <header className="w-full h-[60px] flex justify-between items-center px-4 font-helvetica bg-[#FFFFFF]">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <Link href={"/"}>
        <img
          src="/assets/Nike.png"
          alt="Nike Logo"
          className="w-[50px] h-[50px]"
        />
        </Link>
      </div>

      {/* Middle - Navigation Links */}
      <nav className="hidden md:flex ml-44 space-x-4 text-[15px]">
        <Link href="/" className="hover:text-gray-600">
          New & Featured
        </Link>
        <Link href="/mens" className="hover:text-gray-600">
          Men
        </Link>
        <Link href="/womens" className="hover:text-gray-600">
          Women
        </Link>
        <Link href="/kids" className="hover:text-gray-600">
          Kids
        </Link>
        <Link href="/sale" className="hover:text-gray-600">
          Sale
        </Link>
        <Link href="/SNKRS" className="hover:text-gray-600">
          SNKRS
        </Link>
      </nav>

      {/* Right Side - Search and Wishlist */}
      <div className="hidden md:flex space-x-4 items-center">
        {/* Search Bar */}
   <div className="relative">
  <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-gray-300 rounded-2xl">
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearch}
      className="bg-transparent outline-none text-black text-[14px] placeholder:text-gray-500 w-full"
    />
    <IoSearch className="text-black w-[20px] h-[20px]" />
  </div>

  {/* Dropdown for filtered products */}
  {searchQuery && filteredProducts.length > 0 && (
    <div className="absolute bg-white w-full border border-gray-300 rounded-md shadow-lg mt-2 z-10">
      <ul>
        {filteredProducts.map((product: any) => (
          <li
            key={product._id}
            className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
          >
            <Link href={`/Products/${product._id}`}>
              {product.productName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

        {/* Wishlist Icon */}
        <div className="flex items-center">
          <Link href={"/WishList"}>
          <img
            src="/assets/Heart.png"
            alt="Wishlist Icon"
            className="w-[36px] h-[36px]"
          />
          </Link>
          <Link href={"/Bag"}>
            <img
            src="/assets/Bag.png"
            alt="Wishlist Icon"
            className="w-[36px] h-[36px]"
          />
          </Link>
        </div>
      </div>

      {/* Right Side - Menu Icon (Small Screens) */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            // Close Icon
            <div className="w-[24px] h-[24px] flex items-center justify-center bg-gray-800 text-white rounded">
              ✖
            </div>
          ) : (
            // Menu Icon
            <div className="w-[24px] h-[24px] flex flex-col justify-between bg-gray-800 text-white p-[2px] rounded">
              <span className="block h-[2px] bg-white"></span>
              <span className="block h-[2px] bg-white"></span>
              <span className="block h-[2px] bg-white"></span>
            </div>
          )}
        </button>
      </div>

      {/* Navigation Links - Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <Link href="/" className="hover:text-gray-600">
              New & Featured
            </Link>
            <Link href="/mens" className="hover:text-gray-600">
              Men
            </Link>
            <Link href="/womens" className="hover:text-gray-600">
              Women
            </Link>
            <Link href="/kids" className="hover:text-gray-600">
              Kids
            </Link>
            <Link href="/sale" className="hover:text-gray-600">
              Sale
            </Link>
            <Link href="/SNKRS" className="hover:text-gray-600">
              SNKRS
            </Link>
            {/* Center - Search and Wishlist for Small Screens */}
            <div className="flex flex-col items-center space-y-2 mt-4">
              {/* Search Bar */}
              <div className="relative">
  <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-gray-300 rounded-2xl">
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearch}
      className="bg-transparent outline-none text-black text-[14px] placeholder:text-gray-500 w-full"
    />
    <IoSearch className="text-black w-[20px] h-[20px]" />
  </div>

  {/* Dropdown for filtered products */}
  {searchQuery && filteredProducts.length > 0 && (
    <div className="absolute bg-white w-full border border-gray-300 rounded-md shadow-lg mt-2 z-10">
      <ul>
        {filteredProducts.map((product: any) => (
          <li
            key={product._id}
            className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
          >
            <Link href={`/Products/${product._id}`}>
              {product.productName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>
              {/* Wishlist Icon */}
              <div className="flex items-center">
              <Link href={"/WishList"}>
          <img
            src="/assets/Heart.png"
            alt="Wishlist Icon"
            className="w-[36px] h-[36px]"
          />
          </Link>
          <Link href={"/Bag"}>
            <img
            src="/assets/Bag.png"
            alt="Wishlist Icon"
            className="w-[36px] h-[36px]"
          />
          </Link>
        </div>
            </div>
          </nav>
        </div>
      )}
    </header>
    </>

  )
}