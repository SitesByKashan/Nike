"use client";
import Filter from "@/components/Filter";
import Products from "@/components/Products";


export default function ProductsPage() {
  return (
    <div className="flex">
      {/* Sidebar - Filters */}
      <Filter/>
      
      {/* Main Content - Products */}
     <Products/>
    </div>
  );
}
