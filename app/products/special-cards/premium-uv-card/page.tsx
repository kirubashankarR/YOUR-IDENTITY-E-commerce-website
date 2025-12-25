"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { IdCard, Users, UserCheck, Scissors, Crown, FileText, Mail, Package, Heart, FileImage, Book, Calendar, Layers, Settings, Tag } from "lucide-react";

export default function PremiumUVCardPage() {
  const products = [
    {
      id: "1",
      title: "Premium Spot UV Single Side 1000",
      description: "GST Inclusive | Qty : 1000 | Art Board (300 GSM) | 4C+0 Single Side Printing | Premium Spot UV (Single Side) | File Upload Size : 90mm x 53 mm | 4 CORNER CUTTING NOT AVAILABLE FOR THIS PRODUCT",
      image: "/placeholder.jpg",
      price: "Rs 550.00",
      delivery: "2 to 4 Business Days",
      templateLink: "Click Here for Instruction and File Format",
      specialNote: "4 CORNER CUTTING NOT AVAILABLE FOR THIS PRODUCT",
    },
    {
      id: "2",
      title: "Premium Spot UV Front & Back 1000",
      description: "GST Inclusive | Qty : 1000 | Art Board (300 GSM) | 4C+4C Front & Back Printing | Premium Spot UV (Front & Back) | File Upload Size : 90mm x 53 mm | 4 CORNER CUTTING NOT AVAILABLE FOR THIS PRODUCT",
      image: "/placeholder.jpg",
      price: "Rs 750.00",
      delivery: "2 to 4 Business Days",
      templateLink: "Click Here for Instruction and File Format",
      specialNote: "4 CORNER CUTTING NOT AVAILABLE FOR THIS PRODUCT",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-muted-foreground">
            <Link href="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <Link href="/products/special-cards" className="hover:text-primary">Special Cards</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Premium UV Card</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">PREMIUM UV CARD</h1>
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <button className="p-1 border border-gray-300 rounded">
              <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                <div className="bg-gray-400 w-1.5 h-1.5"></div>
                <div className="bg-gray-400 w-1.5 h-1.5"></div>
                <div className="bg-gray-400 w-1.5 h-1.5"></div>
                <div className="bg-gray-400 w-1.5 h-1.5"></div>
              </div>
            </button>
            <button className="p-1 border border-gray-300 rounded">
              <div className="space-y-0.5 w-4 h-4">
                <div className="bg-gray-400 w-4 h-1"></div>
                <div className="bg-gray-400 w-4 h-1"></div>
                <div className="bg-gray-400 w-4 h-1"></div>
              </div>
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{products.length} Item(s)</span>
            <span className="text-sm text-gray-600">SHOW:</span>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>

        {/* Products List */}
        <div className="space-y-4">
          {products.map((product) => (
            <Card key={product.id} className="border border-gray-200">
              <CardContent className="p-0">
                <div className="flex">
                  {/* Product Image */}
                  <div className="w-48 h-32 relative bg-gray-50 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1 pr-4">
                        <h3 className="font-semibold text-gray-800 text-lg mb-2">
                          {product.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">
                          <span className="text-red-600 font-medium">GST Inclusive</span>
                          {product.description.replace('GST Inclusive', '').replace(product.specialNote, '')}
                        </p>
                        <div className="text-red-600 text-sm font-bold mb-2">
                          {product.specialNote}
                        </div>
                        <div className="text-blue-600 text-sm font-medium mb-2 cursor-pointer hover:underline">
                          {product.templateLink}
                        </div>
                        <div className="text-xs text-gray-600 mb-2">
                          <span className="font-medium">* Delivery :</span> {product.delivery}
                        </div>
                        <div className="text-xs text-gray-500 mb-2">* Conditions Apply</div>
                        <Link href="#" className="text-sm text-blue-600 hover:underline">
                          Learn More
                        </Link>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-xl font-bold text-orange-600 mb-4">
                          {product.price}
                        </div>
                      </div>
                    </div>
                    
                    {/* Add to Cart Section */}
                    <div className="border-t border-gray-200 pt-4">
                      <AddToCartButton
                        id={`premium-uv-${product.id}`}
                        title={product.title}
                        price={product.price}
                        category="Premium UV Cards"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}