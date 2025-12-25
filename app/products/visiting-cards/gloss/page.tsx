"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { IdCard, Users, UserCheck, Scissors, Crown, FileText, Mail, Package, Heart, FileImage, Book, Calendar, Layers, Settings, Tag } from "lucide-react";

export default function GlossPage() {
  const products = [
    {
      id: "1",
      title: "Gloss Single Side 500",
      description: "GST Inclusive | Qty : 500 | Art Board (300 GSM) | 4C+0 Single Side Printing | Single Side Gloss Lamination | File Upload Size : 90mm x 53 mm",
      image: "/placeholder.jpg",
      price: "Rs 350.00",
      delivery: "1 to 2 Business Days",
      templateLink: "CLICK HERE FOR THE DIE LINE TEMPLATE",
    },
    {
      id: "2",
      title: "Gloss Single Side 1000",
      description: "GST Inclusive | Qty : 1000 | Art Board (300 GSM) | 4C+0 Single Side Printing | Single Side Gloss Lamination | File Upload Size : 90mm x 53 mm",
      image: "/placeholder.jpg",
      price: "Rs 450.00",
      delivery: "1 to 2 Business Days",
      templateLink: "CLICK HERE FOR THE DIE LINE TEMPLATE",
    },
    {
      id: "3",
      title: "Gloss Front & Back 500",
      description: "GST Inclusive | Qty : 500 | Art Board (300 GSM) | 4C+4C Printing Front & Back | Front & Back Gloss Lamination | File Upload Size : 90mm x 53 mm | 4C+4C (2 Side)",
      image: "/placeholder.jpg",
      price: "Rs 450.00",
      delivery: "1 to 2 Business Days",
      templateLink: "CLICK HERE FOR THE DIE LINE TEMPLATE",
    },
    {
      id: "4",
      title: "Gloss Front & Back 1000",
      description: "GST Inclusive | Qty : 1000 | Art Board (300 GSM) | 4C+4C Printing Front & Back | Front & Back Gloss Lamination | File Upload Size : 90mm x 53 mm | 4C+4C (2 Side)",
      image: "/placeholder.jpg",
      price: "Rs 550.00",
      delivery: "1 to 2 Business Days",
      templateLink: "CLICK HERE FOR THE DIE LINE TEMPLATE",
    },
    {
      id: "5",
      title: "Front Gloss / Back Single 1000",
      description: "GST Inclusive | Qty : 1000 | Art Board (300 GSM) | 4 Colours (CMYK) & 1 Colour (Black only) Printing Front & Back respectively. | Single Side Gloss Lamination (4C Side) | File Upload Size : 90mm x 53 mm",
      image: "/placeholder.jpg",
      price: "Rs 500.00",
      delivery: "1 to 2 Business Days",
      templateLink: "CLICK HERE FOR THE DIE LINE TEMPLATE",
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
            <Link href="/products/visiting-cards" className="hover:text-primary">Visiting Cards</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Gloss</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">GLOSS</h1>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
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
          
          <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <span className="text-gray-600">{products.length} Item(s)</span>
            <span className="text-gray-600 hidden sm:inline">SHOW:</span>
            <select className="border border-gray-300 rounded px-2 py-1">
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
                <div className="flex flex-col sm:flex-row">
                  {/* Product Image */}
                  <div className="w-full sm:w-48 h-48 sm:h-32 relative bg-gray-50 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 p-3 sm:p-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div className="flex-1 sm:pr-4 mb-3 sm:mb-0">
                        <h3 className="font-semibold text-gray-800 text-base sm:text-lg mb-2">
                          {product.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                          <span className="text-red-600 font-medium">GST Inclusive</span>
                          {product.description.replace('GST Inclusive', '')}
                        </p>
                        <div className="text-xs text-gray-600 mb-2">
                          <span className="font-medium">* Delivery :</span> {product.delivery}
                        </div>
                        <div className="text-xs text-gray-500 mb-2">* Conditions Apply</div>
                        <Link href="#" className="text-xs sm:text-sm text-blue-600 hover:underline">
                          Learn More
                        </Link>
                      </div>

                      {/* Price */}
                      <div className="text-left sm:text-right">
                        <div className="text-lg sm:text-xl font-bold text-orange-600 mb-4">
                          {product.price}
                        </div>
                      </div>
                    </div>
                    
                    {/* Add to Cart Section */}
                    <div className="border-t border-gray-200 pt-4">
                      <AddToCartButton
                        id={`gloss-${product.id}`}
                        title={product.title}
                        price={product.price}
                        category="Visiting Cards - Gloss"
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