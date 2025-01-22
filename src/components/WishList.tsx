"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

type WishListItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

type WishListContextType = {
  wishList: WishListItem[];
  addToWishList: (item: WishListItem) => void;
  removeFromWishList: (id: string) => void;
  clearWishList: () => void;
};

const WishListContext = createContext<WishListContextType | undefined>(undefined);

export const WishListProvider = ({ children }: { children: ReactNode }) => {
  const [wishList, setWishList] = useState<WishListItem[]>([]);

  const addToWishList = (item: WishListItem) => {
    setWishList((prevList) => {
      const existingItem = prevList.find((listItem) => listItem.id === item.id);
      if (existingItem) return prevList;
      return [...prevList, item];
    });
  };

  const removeFromWishList = (id: string) => {
    setWishList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const clearWishList = () => setWishList([]);

  return (
    <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList, clearWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  const context = useContext(WishListContext);
  if (!context) {
    throw new Error("useWishList must be used within a WishListProvider");
  }
  return context;
};
