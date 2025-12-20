"use client";
import React, { useState } from "react";

export default function CartButton() {
  const [inCart, setInCart] = useState(false);
  const handleAddToCart = () => {
    setInCart(true);
  };
  return (
    <button
      onClick={handleAddToCart}
      disabled={inCart}
      className="flex-1 bg-gray-900 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors active:scale-95 shadow-md shadow-gray-200 cursor-pointer disabled:bg-gray-100 disabled:text-black"
    >
      {inCart ? "Added" : "Add To Cart"}
    </button>
  );
}
