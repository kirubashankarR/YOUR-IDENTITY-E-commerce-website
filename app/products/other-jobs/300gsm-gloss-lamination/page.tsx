"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { useState } from "react";

export default function GSM300GlossLaminationPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const subcategories = [
    {
      id: "gloss-a4-fb",
      title: "300 GSM Gloss A4 Size FB",
      icon: "››",
      products: [
        {
          id: "1",
          title: "300 GSM Art Board A4 Size (297 mm x 210 mm) 500 Copies Front & Back",
          description: "GST 18% Tax Inclusive | Qty : 500 | Art Board (300 GSM) | 4C+4C Front & Back | A4 Size (297mm x 210mm) | Gloss Lamination | 4C+0 (1 Side), 4C+4C (2 Side) *",
          price: "Rs 3,200.00",
          delivery: "1 to 4 Business Days",
        },
        {
          id: "2",
          title: "300 GSM Art Board A4 Size (297 mm x 210 mm) 1,000 Copies Front & Back",
          description: "GST 18% Tax Inclusive | Qty : 1,000 | Art Board (300 GSM) | 4C+4C Front & Back | A4 Size (297mm x 210mm) | Gloss Lamination | 4C+0 (1 Side), 4C+4C (2 Side) *",
          price: "Rs 5,800.00",
          delivery: "1 to 4 Business Days",
        }
      ]
    },
    {
      id: "gloss-a3-fb",
      title: "300 GSM Gloss A3 Size FB",
      icon: "››",
      products: [
        {
          id: "3",
          title: "300 GSM Art Board A3 Size (420 mm x 297 mm) 500 Copies Front & Back",
          description: "GST 18% Tax Inclusive | Qty : 500 | Art Board (300 GSM) | 4C+4C Front & Back | A3 Size (420mm x 297mm) | Gloss Lamination | 4C+0 (1 Side), 4C+4C (2 Side) *",
          price: "Rs 6,400.00",
          delivery: "1 to 4 Business Days",
        },
        {
          id: "4",
          title: "300 GSM Art Board A3 Size (420 mm x 297 mm) 1,000 Copies Front & Back",
          description: "GST 18% Tax Inclusive | Qty : 1,000 | Art Board (300 GSM) | 4C+4C Front & Back | A3 Size (420mm x 297mm) | Gloss Lamination | 4C+0 (1 Side), 4C+4C (2 Side) *",
          price: "Rs 11,600.00",
          delivery: "1 to 4 Business Days",
        }
      ]
    },
    {
      id: "gloss-fb",
      title: "300 GSM Gloss FB",
      icon: "››",
      products: [
        {
          id: "5",
          title: "300 GSM Art Board 22.5\" x 8.5\" (572 mm x 216 mm) 500 Copies Front & Back",
          description: "GST 18% Tax Inclusive | Qty : 500 | Art Board (300 GSM) | 4C+4C Front & Back | 22.5\" (inch) x 8.5\" (inch) | Gloss Lamination | 4C+0 (1 Side), 4C+4C (2 Side) *",
          price: "Rs 8,500.00",
          delivery: "1 to 4 Business Days",
        },
        {
          id: "6",
          title: "300 GSM Art Board 22.5\" x 8.5\" (572 mm x 216 mm) 1,000 Copies Front & Back",
          description: "GST 18% Tax Inclusive | Qty : 1,000 | Art Board (300 GSM) | 4C+4C Front & Back | 22.5\" (inch) x 8.5\" (inch) | Gloss Lamination | 4C+0 (1 Side), 4C+4C (2 Side) *",
          price: "Rs 15,900.00",
          delivery: "1 to 4 Business Days",
        }
      ]
    }
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
            <span className="text-foreground">300 GSM Art Board (Gloss Lam.)</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">300 GSM ART BOARD (GLOSS LAM.)</h1>

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
            <span className="text-sm text-gray-600">{subcategories.length} Item(s)</span>
            <span className="text-sm text-gray-600">SHOW:</span>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>

        {/* Navigation Structure - Same as Sidebar */}
        <div className="space-y-4">
          {/* Other Jobs Header */}
          <div className="bg-orange-200 p-4 rounded flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
              <span>Other Jobs</span>
            </div>
            <span className="text-gray-600">▼</span>
          </div>

          {/* Categories List */}
          <div className="space-y-3 ml-4">
            {/* 300 GSM Art Board (No Lamination) */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span>›</span>
                <span>300 GSM Art Board (No Lamination)</span>
                <span className="text-gray-400">▼</span>
              </div>
              <div className="ml-6 space-y-2">
                <Link href="/products/other-jobs/300gsm-a4-ss-fb-no-lam" className="flex items-center gap-2 text-xs text-gray-600 hover:text-primary cursor-pointer">
                  <span>››</span>
                  <span>300 GSM A4 SS & FB (No Lam.)</span>
                </Link>
                <Link href="/products/other-jobs/300gsm-ss-fb-no-lam" className="flex items-center gap-2 text-xs text-gray-600 hover:text-primary cursor-pointer">
                  <span>››</span>
                  <span>300 GSM SS & FB (No Lam.)</span>
                </Link>
              </div>
            </div>

            {/* 300 GSM Art Board (Gloss Lam.) - Clickable to expand */}
            <div className="space-y-2">
              <div
                className="flex items-center gap-2 text-sm text-gray-700 font-medium cursor-pointer hover:text-primary"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <span>›</span>
                <span>300 GSM Art Board (Gloss Lam.)</span>
                <span className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}>▼</span>
              </div>

              {/* Subcategories - Show when expanded */}
              {isExpanded && (
                <div className="ml-6 space-y-2">
                  {subcategories.map((subcategory) => (
                    <div
                      key={subcategory.id}
                      className="flex items-center gap-2 text-xs text-gray-600 hover:text-primary cursor-pointer"
                      onClick={() => setSelectedSubcategory(selectedSubcategory === subcategory.id ? null : subcategory.id)}
                    >
                      <span>{subcategory.icon}</span>
                      <span>{subcategory.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Products Display - Show when subcategory is selected */}
        {selectedSubcategory && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              {subcategories.find(sub => sub.id === selectedSubcategory)?.title}
            </h2>
            <div className="space-y-4">
              {subcategories.find(sub => sub.id === selectedSubcategory)?.products.map((product) => (
                <Card key={product.id} className="border border-gray-200">
                  <CardContent className="p-0">
                    <div className="flex">
                      {/* Product Image */}
                      <div className="w-48 h-32 relative bg-gray-50 flex-shrink-0">
                        <Image
                          src="/placeholder.jpg"
                          alt={product.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 p-4">
                        <div className="flex justify-between items-start">
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

                          {/* Price and Add to Cart */}
                          <div className="text-right space-y-3">
                            <div className="text-xl font-bold text-orange-600">
                              {product.price}
                            </div>
                            <AddToCartButton
                              id={`gloss-lam-${product.id}`}
                              title={product.title}
                              price={product.price}
                              category="300 GSM Gloss Lamination"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}