"use client";

import { useCart } from "@/lib/cart-context";
import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, clearCart, sendToWhatsApp } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Button onClick={onClose}>Continue Shopping</Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg p-4 space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <p className="text-xs text-gray-500">{item.category}</p>
                      <p className="text-orange-600 font-bold mt-1">{item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 border rounded hover:bg-gray-100"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-semibold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 border rounded hover:bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t p-4 space-y-3">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total Items:</span>
              <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            
            <Button
              onClick={sendToWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="mr-2" size={20} />
              Send Order via WhatsApp
            </Button>
            
            <Button
              onClick={clearCart}
              variant="outline"
              className="w-full"
            >
              Clear Cart
            </Button>
          </div>
        )}
      </div>
    </>
  );
}