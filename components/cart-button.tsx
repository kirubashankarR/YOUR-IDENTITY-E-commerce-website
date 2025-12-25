"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";
import { CartDrawer } from "./cart-drawer";

export function CartButton() {
  const { getTotalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const totalItems = getTotalItems();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-white hover:text-yellow-300 transition-colors"
      >
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
      
      <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}