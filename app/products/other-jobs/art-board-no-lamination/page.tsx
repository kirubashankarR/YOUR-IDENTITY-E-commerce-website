"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Clock, FileText, DollarSign, Zap, Palette, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ArtBoardNoLaminationPage() {
  const products = [
    {
      id: "art-board-500",
      title: "300 GSM Art Board (No Lamination) 500",
      gstInclusive: true,
      quantity: 500,
      specifications: [
        "Premium Art Board (300 GSM)",
        "4C+0 Single Side Printing",
        "No Lamination Coating",
        "File Upload Size - 90mm x 53mm",
        "Standard Quality Finish"
      ],
      delivery: "2 to 3 Business Days",
      price: "₹400",
      originalPrice: "₹500",
      savings: "20%"
    },
    {
      id: "art-board-1000",
      title: "300 GSM Art Board (No Lamination) 1000",
      gstInclusive: true,
      quantity: 1000,
      specifications: [
        "Premium Art Board (300 GSM)",
        "4C+0 Single Side Printing",
        "No Lamination Coating",
        "File Upload Size - 90mm x 53mm",
        "Standard Quality Finish"
      ],
      delivery: "2 to 3 Business Days",
      price: "₹650",
      originalPrice: "₹800",
      popular: true,
      savings: "19%"
    },
    {
      id: "art-board-front-back-1000",
      title: "300 GSM Art Board Front & Back (No Lamination) 1000",
      gstInclusive: true,
      quantity: 1000,
      specifications: [
        "Premium Art Board (300 GSM)",
        "4C+4C Front & Back Printing",
        "No Lamination Coating",
        "File Upload Size - 90mm x 53mm",
        "Standard Quality Finish"
      ],
      delivery: "2 to 4 Business Days",
      price: "₹950",
      originalPrice: "₹1,200",
      savings: "21%"
    }
  ];

  const features = [
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Budget-friendly printing solution without lamination costs"
    },
    {
      icon: Zap,
      title: "Quick Turnaround",
      description: "Fast delivery within 2-4 business days for urgent needs"
    },
    {
      icon: FileText,
      title: "300 GSM Quality",
      description: "Premium art board material for professional appearance"
    },
    {
      icon: Palette,
      title: "Full Color Printing",
      description: "Vibrant 4C printing for sharp and clear designs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products/other-jobs">Other Jobs</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products/other-jobs/art-board-no-lamination">300 GSM Art Board</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Art Board (No Lamination)</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              300 GSM Art Board (No Lamination)
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cost-effective printing on premium 300 GSM art board without lamination for budget-conscious projects
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Subcategories */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              300 GSM Art Board Options
            </h2>
            <div className="gold-divider max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href="/products/other-jobs/standard-no-lamination">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      300 GSM SS & FB (No Lam.)
                    </h3>
                    <Badge className="bg-green-600 text-white">From ₹350</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Standard size single side and front & back printing without lamination - most affordable option
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Budget Friendly</span>
                    <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/products/other-jobs/standard-lamination">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      300 GSM SS & FB (Lam.)
                    </h3>
                    <Badge className="bg-blue-600 text-white">From ₹550</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Standard size single side and front & back printing with professional lamination finish
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Professional Finish</span>
                    <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border relative">
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 space-y-2">
                <Badge className="bg-green-600 text-white block">
                  Save {product.savings}
                </Badge>
                <Badge className="bg-red-600 text-white text-xs block">
                  GST Inclusive
                </Badge>
              </div>

              {product.popular && (
                <div className="absolute top-3 right-3 z-10">
                  <Badge className="bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                </div>
              )}

              {/* Card Visual */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/20">
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className="w-28 h-18 bg-white rounded shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center border-2 border-primary/20">
                    <div className="text-center">
                      <div className="text-sm font-bold text-primary">300 GSM</div>
                      <div className="text-xs text-muted-foreground">ART BOARD</div>
                      <div className="text-xs text-muted-foreground">NO LAM</div>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                    {product.title}
                  </h3>
                  <Badge variant="outline" className="text-sm">
                    Qty: {product.quantity}
                  </Badge>
                </div>

                {/* Specifications */}
                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-2">Specifications:</div>
                  <div className="space-y-1">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="flex items-center gap-2 mb-4 p-2 bg-muted/50 rounded-lg border border-border">
                  <Clock size={14} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    ★ Delivery: {product.delivery}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">GST Inclusive | Per {product.quantity} Cards</div>
                </div>

                {/* Budget Notice */}
                <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm font-medium text-green-700">
                    💰 Budget-Friendly Option
                  </p>
                </div>

                {/* Conditions */}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">* Conditions Apply</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Why Choose Art Board Without Lamination?
            </h2>
            <div className="gold-divider max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Use Cases */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Perfect Use Cases
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Bulk Distribution</h4>
                <p className="text-sm text-muted-foreground">
                  Large quantity printing for events, campaigns, or mass distribution where cost is a priority
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Internal Materials</h4>
                <p className="text-sm text-muted-foreground">
                  Company forms, internal documents, and office materials that don't require lamination
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Temporary Use</h4>
                <p className="text-sm text-muted-foreground">
                  Event materials, promotional items, and short-term use cards where durability is less critical
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparison */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                No Lamination vs Laminated Cards
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center">No Lamination Cards</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Significantly lower cost</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Faster production time</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Good for bulk orders</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Less durable finish</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>May show fingerprints</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-center">Laminated Cards</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Premium finish and feel</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Enhanced durability</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Water and stain resistant</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Higher cost per unit</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Longer production time</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Need Budget-Friendly Printing?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get professional quality printing on premium 300 GSM art board without the extra cost of lamination. 
              Perfect for bulk orders and cost-conscious projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Order Art Board Cards
              </Button>
              <Button size="lg" variant="outline">
                Get Bulk Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}