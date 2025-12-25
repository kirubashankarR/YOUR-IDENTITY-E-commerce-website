"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { IdCard, Users, UserCheck, Scissors, Crown, FileText, Mail, Package, Heart, FileImage, Book, Calendar, Layers, Settings, Tag } from "lucide-react";

export default function MattDieCutCardsPage() {
  const products = [
    {
      id: "DC-1",
      title: "Matt Front & Back 1000 - Die Cut Card (DC-1)",
      description: "GST Inclusive | Qty : 1000 | Art Board (300 GSM) | 4C+4C Printing Front & Back | Front & Back Matte Lamination | Die Cut - DC - 1 (Refer Product Catalogue / Die-line Template given in the link below) | 90mm x 53 mm Upload File size",
      image: "/placeholder.jpg",
      price: "Rs 960.00",
      delivery: "2 to 4 Business Days",
      templateLink: "CLICK HERE FOR THE DIE LINE TEMPLATE",
    },
    {
      id: "DC-2",
      title: "Matt Front & Back 1000 - Die Cut Card (DC-2)",
      description: "GST Inclusive | Qty : 1000 | Art Board (300 GSM) | 4C+4C Printing Front & Back | Front & Back Matte Lamination | Die Cut - DC - 2 (Refer Product Catalogue / Die-line Template given in the link below) | 90mm x 53 mm Upload File size",
      image: "/placeholder.jpg",
      price: "Rs 960.00",
      delivery: "2 to 4 Business Days",
      templateLink: "CLICK HERE FOR THE DIE LINE TEMPLATE",
    },
    {
      id: "DC-3",
      title: "Matt Front & Back 1000 - Die Cut Card (DC-3)",
      description: "GST Inclusive | Qty : 1000 | Art Board (300 GSM) | 4C+4C Printing Front & Back | Front & Back Matte Lamination | Die Cut - DC - 3 (Refer Product Catalogue / Die-line Template given in the link below) | 90mm x 53 mm Upload File size",
      image: "/placeholder.jpg",
      price: "Rs 960.00",
      delivery: "2 to 4 Business Days",
      templateLink: "CLICK HERE FOR THE DIE LINE TEMPLATE",
    },
    {
      id: "DC-4",
      title: "Matt Front & Back 1000 - Die Cut Card (DC-4)",
      description: "GST Inclusive | Qty : 1000 | Art Board (300 GSM) | 4C+4C Printing Front & Back | Front & Back Matte Lamination | Die Cut - DC - 4 (Refer Product Catalogue / Die-line Template given in the link below) | 90mm x 53 mm Upload File size",
      image: "/placeholder.jpg",
      price: "Rs 960.00",
      delivery: "2 to 4 Business Days",
      templateLink: "CLICK HERE FOR THE DIE LINE TEMPLATE",
    },
    {
      id: "DC-5",
      title: "Matt Front & Back 1000 - Die Cut Card (DC-5)",
      description: "GST Inclusive | Qty : 1000 | Art Board (300 GSM) | 4C+4C Printing Front & Back | Front & Back Matte Lamination | Die Cut - DC - 5 (Refer Product Catalogue / Die-line Template given in the link below) | 90mm x 53 mm Upload File size",
      image: "/placeholder.jpg",
      price: "Rs 960.00",
      delivery: "2 to 4 Business Days",
      templateLink: "CLICK HERE FOR THE DIE LINE TEMPLATE",
    },
    {
      id: "DC-7",
      title: "Matt Front & Back 1000 - Die Cut Card (DC-7)",
      description: "GST Inclusive | Qty : 1000 | Art Board (300 GSM) | 4C+4C Printing Front & Back | Front & Back Matte Lamination | Die Cut - DC - 7 (Refer Product Catalogue / Die-line Template given in the link below) | 90mm x 53 mm Upload File size",
      image: "/placeholder.jpg",
      price: "Rs 960.00",
      delivery: "2 to 4 Business Days",
      templateLink: "CLICK HERE FOR THE DIE LINE TEMPLATE",
    },
    {
      id: "DC-8",
      title: "Matt Front & Back 1000 - Die Cut Card (DC-8)",
      description: "GST Inclusive | Qty : 1000 | Art Board (300 GSM) | 4C+4C Printing Front & Back | Front & Back Matte Lamination | Die Cut - DC - 8 (Refer Product Catalogue / Die-line Template given in the link below) | 90mm x 53 mm Upload File size",
      image: "/placeholder.jpg",
      price: "Rs 960.00",
      delivery: "2 to 4 Business Days",
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
            <Link href="/products/special-cards" className="hover:text-primary">Special Cards</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Matt Die Cut Cards</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">MATT DIE CUT CARDS</h1>
        
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
                  {/* Product Code */}
                  <div className="w-16 bg-gray-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">{product.id}</span>
                  </div>

                  {/* Product Image */}
                  <div className="w-32 h-32 relative bg-gray-50 flex-shrink-0">
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
                        <h3 className="font-semibold text-gray-800 text-sm mb-2">
                          {product.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed mb-3">
                          {product.description}
                        </p>
                        <div className="text-green-600 text-xs font-medium mb-2 cursor-pointer hover:underline">
                          {product.templateLink}
                        </div>
                        <div className="text-xs text-gray-600">
                          <span className="font-medium">Delivery :</span> {product.delivery}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">* Conditions Apply</div>
                        <Link href="#" className="text-xs text-blue-600 hover:underline mt-2 inline-block">
                          Learn More
                        </Link>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-lg font-bold text-orange-600 mb-3">
                          {product.price}
                        </div>
                      </div>
                    </div>
                    
                    {/* Add to Cart Section */}
                    <div className="border-t border-gray-200 pt-4">
                      <AddToCartButton
                        id={`matt-die-cut-${product.id}`}
                        title={product.title}
                        price={product.price}
                        category="Matt Die Cut Cards"
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