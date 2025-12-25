"use client";

import { ShoppingCart, Plus, Minus, Heart, Share2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "./ui/button";
import { useState } from "react";

interface AddToCartButtonProps {
  id: string;
  title: string;
  price: string;
  category: string;
}

export function AddToCartButton({ id, title, price, category }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // Add item multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart({ id, title, price, category });
    }

    // Show success feedback
    const button = document.getElementById(`cart-btn-${id}`);
    if (button) {
      button.classList.add('animate-pulse');
      setTimeout(() => {
        button.classList.remove('animate-pulse');
        setQuantity(1); // Reset quantity after adding
      }, 500);
    }
  };

  return (
    <div className="space-y-3">
      {/* Quantity Selector */}
      <div className="flex items-center gap-3">
        <div className="text-xs sm:text-sm font-semibold text-gray-700">Quantity (in 100s)</div>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        {/* Minus Button */}
        <button
          onClick={handleDecrease}
          className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <Minus size={18} className="sm:w-5 sm:h-5" />
        </button>

        {/* Quantity Display */}
        <div className="w-16 h-10 sm:w-20 sm:h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-base sm:text-lg font-semibold">{quantity}</span>
        </div>

        {/* Plus Button */}
        <button
          onClick={handleIncrease}
          className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <Plus size={18} className="sm:w-5 sm:h-5" />
        </button>

        {/* Total Display */}
        <div className="text-gray-600 text-xs sm:text-sm">
          <span>Total: </span>
          <span className="font-semibold">{quantity * 100} pieces</span>
        </div>
      </div>

      {/* Add to Cart Button with Icons */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Button
          id={`cart-btn-${id}`}
          onClick={handleAddToCart}
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white h-12 sm:h-14 text-sm sm:text-lg"
        >
          <ShoppingCart className="mr-1 sm:mr-2" size={18} />
          <span className="hidden xs:inline">Add to Cart</span>
          <span className="xs:hidden">Add</span>
        </Button>

        {/* Wishlist Button */}
        <button
          className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0"
          title="Add to Wishlist"
        >
          <Heart size={20} className="sm:w-6 sm:h-6 text-gray-600" />
        </button>

        {/* Share Button */}
        <button
          className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0"
          title="Share"
        >
          <Share2 size={20} className="sm:w-6 sm:h-6 text-gray-600" />
        </button>
      </div>

      {/* Social Icons Row */}
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100 justify-center sm:justify-start">
        <a href="#" className="text-gray-400 hover:text-[#25D366] transition-colors" title="Share on WhatsApp">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-[#1877F2] transition-colors" title="Share on Facebook">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors" title="Share on Twitter">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-[#0A66C2] transition-colors" title="Share on LinkedIn">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
        </a>
      </div>
    </div>
  );
}