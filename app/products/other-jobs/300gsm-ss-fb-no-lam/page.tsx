"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AddToCartButton } from "@/components/add-to-cart-button";

export default function GSM300SSFBNoLamPage() {
  const products = [
    {
      id: "1",
      title: "300 GSM Art Board 22.5\" x 8.5\" (572 mm x 216 mm) 500 Copies Front & Back",
      description: "GST 18% Tax Inclusive | Qty : 500 | Art Board (300 GSM) | 4C+4C Front & Back | 22.5\" (inch) x 8.5\" (inch) | No Lamination | 4C+0 (1 Side), 4C+4C (2 Side) *",
      image: "/placeholder.jpg",
      price: "Rs 7,500.00",
      delivery: "1 to 4 Business Days",
    },
    {
      id: "2", 
      title: "300 GSM Art Board 22.5\" x 8.5\" (572 mm x 216 mm) 1,000 Copies Front & Back",
      description: "GST 18% Tax Inclusive | Qty : 1,000 | Art Board (300 GSM) | 4C+4C Front & Back | 22.5\" (inch) x 8.5\" (inch) | No Lamination | 4C+0 (1 Side), 4C+4C (2 Side) *",
      image: "/placeholder.jpg",
      price: "Rs 10,900.00",
      delivery: "1 to 4 Business Days",
    },
    {
      id: "3",
      title: "300 GSM Art Board 11\" x 17\" (280 mm x 432 mm) 500 Copies Front & Back",
      description: "GST 18% Tax Inclusive | Qty : 500 | Art Board (300 GSM) | 4C+4C Front & Back | 11\" (inch) x 17\" (inch) | No Lamination | 4C+0 (1 Side), 4C+4C (2 Side) *",
      image: "/placeholder.jpg",
      price: "Rs 7,500.00",
      delivery: "1 to 4 Business Days",
    },
    {
      id: "4",
      title: "300 GSM Art Board 11\" x 17\" (280 mm x 432 mm) 1,000 Copies Front & Back",
      description: "GST 18% Tax Inclusive | Qty : 1,000 | Art Board (300 GSM) | 4C+4C Front & Back | 11\" (inch) x 17\" (inch) | No Lamination | 4C+0 (1 Side), 4C+4C (2 Side) *",
      image: "/placeholder.jpg",
      price: "Rs 10,920.00",
      delivery: "1 to 4 Business Days",
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
            <Link href="/products/other-jobs" className="hover:text-primary">Other Jobs</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">300 GSM SS & FB (No Lam.)</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">300 GSM SS & FB (NO LAM.)</h1>
        
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
                          <span className="text-red-600 font-medium">GST 18% Tax Inclusive</span>
                          {product.description.replace('GST 18% Tax Inclusive', '')}
                        </p>
                        <div className="text-xs text-gray-600">
                          <span className="font-medium">Delivery :</span> {product.delivery}
                        </div>
                        <Link href="#" className="text-xs text-blue-600 hover:underline mt-2 inline-block">
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
                        id={`300gsm-no-lam-${product.id}`}
                        title={product.title}
                        price={product.price}
                        category="300 GSM No Lamination"
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