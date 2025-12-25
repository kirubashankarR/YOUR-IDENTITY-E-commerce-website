"use client";

import Link from "next/link";
import { useState } from "react";

// Simple products data
const products = [
  {
    id: "ID-1",
    title: "Employee Front & Back 1000 - ID Card (ID-1)",
    description: "GST Inclusive | Qty : 1000 | Art Board (300 GSM) | 4C+4C Printing Front & Back | Front & Back Matte Lamination",
    price: "Rs 960.00",
    delivery: "2 to 4 Business Days",
  },
  {
    id: "ID-2",
    title: "Student Front & Back 1000 - ID Card (ID-2)",
    description: "GST Inclusive | Qty : 1000 | Art Board (350 GSM) | 4C+4C Printing Front & Back | Front & Back Matte Lamination",
    price: "Rs 960.00",
    delivery: "2 to 4 Business Days",
  },
  {
    id: "ID-3",
    title: "Visitor Front & Back 1000 - ID Card (ID-3)",
    description: "GST Inclusive | Qty : 1000 | Art Board (250 GSM) | 4C+4C Printing Front & Back | Front & Back Matte Lamination",
    price: "Rs 960.00",
    delivery: "2 to 4 Business Days",
  },
  {
    id: "ID-4",
    title: "Lanyards & Holders",
    description: "Premium quality lanyards with custom printing and durable card holders. Available in multiple widths.",
    price: "Rs 45.00",
    delivery: "3 to 5 Business Days",
  },
];

export default function IDCardsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/products" className="hover:text-blue-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">ID Cards & Accessories</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">ID Cards & Accessories</h1>
        <p className="text-gray-600">Professional ID card solutions for your organization</p>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Available Products ({products.length} items)</h2>

        <div className="grid gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-6">
                {/* Product Code */}
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-blue-600">{product.id}</span>
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-orange-600 mb-1">{product.price}</div>
                      <div className="text-sm text-gray-500">Delivery: {product.delivery}</div>
                    </div>

                    <div className="flex gap-3">
                      <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                        Learn More
                      </button>
                      <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Features */}
      <div className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600">🔒</span>
              </div>
              <h3 className="font-semibold mb-1">Security Features</h3>
              <p className="text-sm text-gray-600">Advanced security elements</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600">📦</span>
              </div>
              <h3 className="font-semibold mb-1">Bulk Orders</h3>
              <p className="text-sm text-gray-600">Competitive pricing</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600">🎨</span>
              </div>
              <h3 className="font-semibold mb-1">Custom Design</h3>
              <p className="text-sm text-gray-600">Tailored to your brand</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}