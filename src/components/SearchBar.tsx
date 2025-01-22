import React, { ChangeEvent } from 'react';
type Product = {
  id: number; // or string if IDs are strings
  name: string;
  price: number; // Adjust the type based on your product properties
  description?: string; // Optional property
};

type SearchBarProps = {
  products: Product; // Accept products as an array
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
};
const SearchableProductList: React.FC<SearchBarProps> = ({ handleSearch, searchQuery }) => {
  return (
    <div>
      {/* Search bar */}
      <input 
        type="text" 
        placeholder="Search Products..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-bar" 
      />
      <div>
      
      </div>
    </div>
  );
};

export default SearchableProductList;