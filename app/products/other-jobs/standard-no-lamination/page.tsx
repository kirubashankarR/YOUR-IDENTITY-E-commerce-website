"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Clock, FileText, DollarSign, Zap, Copy } from "lucide-react";

export default function StandardNoLaminationPage() {
  const products = [
    {
      id: "standard-ss-500",
      title: "300 GSM Single Side (No Lamination) 500",
      gstInclusive: true,
      quantity: 500,
      specifications: [
        "Premium Art Board (300 GSM)",
        "4C+0 Single Side Printing",
        "Standard Size (90mm x 53mm)",
        "No Lamination Coating",
        "Standard Quality Finish"
      ],
      delivery: "1 to 2 Business Days",
      price: "₹350",
      originalPrice: "₹450",
      savings: "22%"
    },
    {
      id: "standard-ss-1000",
      title: "300 GSM Single Side (No Lamination) 1000",
      gstInclusive: true,
      quantity: 1000,
      specifications: [
        "Premium Art Board (300 GSM)",
        "4C+0 Single Side Printing",
        "Standard Size (90mm x 53mm)",
        "No Lamination Coating",
        "Standard Quality Finish"
      ],
      delivery: "1 to 3 Business Days",
      price: "₹550",
      originalPrice: "₹700",
      popular: true,
      savings: "21%"
    },
    {
      id: "standard-fb-500",
      title: "300 GSM Front & Back (No Lamination) 500",
      gstInclusive: true,
      quantity: 500,
      specifications: [
        "Premium Art Board (300 GSM)",
        "4C+4C Front & Back Printing",
        "Standard Size (90mm x 53mm)",
        "No Lamination Coating",
        "Standard Quality Finish"
      ],
      delivery: "2 to 3 Business Days",
      price: "₹650",
      originalPrice: "₹850",
      savings: "24%"
    },
    {
      id: "standard-fb-1000",
      title: "300 GSM Front & Back (No Lamination) 1000",
      gstInclusive: true,
      quantity: 1000,
      specifications: [
        "Premium Art Board (300 GSM)",
        "4C+4C Front & Back Printing",
        "Standard Size (90mm x 53mm)",
        "No Lamination Coating",
        "Standard Quality Finish"
      ],
      delivery: "2 to 4 Business Days",
      price: "₹950",
      originalPrice: "₹1,250",
      savings: "24%"
    }
  ];

  const features = [
    {
      icon: DollarSign,
      title: "Most Affordable",
      description: "Lowest cost option for standard size printing needs"
    },
    {
      icon: Zap,
      title: "Fastest Delivery",
      description: "Quick turnaround with 1-4 business days delivery"
    },
    {
      icon: Copy,
      title: "SS & FB Options",
      description: "Choose between single side or front & back printing"
    },
    {
      icon: FileText,
      title: "Standard Quality",
      description: "Reliable 300 GSM art board for consistent results"
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
                <BreadcrumbPage>300 GSM SS & FB (No Lam.)</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              300 GSM SS & FB (No Lam.)
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6 bg-white/30" />
            <p className="text-lg text-white/90 leading-relaxed">
              Most affordable standard size printing on 300 GSM art board - perfect for budget-conscious bulk orders
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
                <Badge className="bg-orange-600 text-white text-xs block">
                  Best Value
                </Badge>
              </div>

              {product.popular && (
                <div className="absolute top-3 right-3 z-10">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Card Visual */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-400 to-red-500">
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className="w-28 h-18 bg-white rounded shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center border-2 border-orange-200">
                    <div className="text-center">
                      <div className="text-sm font-bold text-orange-700">STANDARD</div>
                      <div className="text-xs text-orange-600">300 GSM</div>
                      <div className="text-xs text-orange-500">NO LAM</div>
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
                <div className="flex items-center gap-2 mb-4 p-2 bg-orange-50 rounded-lg border border-orange-200">
                  <Clock size={14} className="text-orange-600" />
                  <span className="text-sm font-medium text-orange-700">
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

                {/* Value Notice */}
                <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-sm font-medium text-orange-700">
                    💰 Best Value - Lowest Price Option
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
              Why Choose Standard No Lamination?
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

        {/* Best Value Proposition */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Maximum Savings, Quality Results
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold mb-2 text-green-700">Lowest Cost</h4>
                <p className="text-sm text-green-600">
                  Starting from just ₹350 for 500 cards - the most affordable option available
                </p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold mb-2 text-blue-700">Fast Delivery</h4>
                <p className="text-sm text-blue-600">
                  Quick turnaround from 1-4 business days for urgent requirements
                </p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-semibold mb-2 text-orange-700">Quality Material</h4>
                <p className="text-sm text-orange-600">
                  Premium 300 GSM art board ensures professional appearance despite low cost
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Single Side vs Front & Back Comparison
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-3 text-left">Feature</th>
                    <th className="border border-gray-300 p-3 text-center">Single Side (SS)</th>
                    <th className="border border-gray-300 p-3 text-center">Front & Back (FB)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Cost (500 qty)</td>
                    <td className="border border-gray-300 p-3 text-center text-green-600 font-bold">₹350</td>
                    <td className="border border-gray-300 p-3 text-center text-blue-600 font-bold">₹650</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Cost (1000 qty)</td>
                    <td className="border border-gray-300 p-3 text-center text-green-600 font-bold">₹550</td>
                    <td className="border border-gray-300 p-3 text-center text-blue-600 font-bold">₹950</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Delivery Time</td>
                    <td className="border border-gray-300 p-3 text-center">1-3 days</td>
                    <td className="border border-gray-300 p-3 text-center">2-4 days</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Information Capacity</td>
                    <td className="border border-gray-300 p-3 text-center">Limited</td>
                    <td className="border border-gray-300 p-3 text-center">Double</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Best For</td>
                    <td className="border border-gray-300 p-3 text-center">Simple designs, flyers</td>
                    <td className="border border-gray-300 p-3 text-center">Detailed info, brochures</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Perfect For Budget-Conscious Projects
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Startup Businesses</h4>
                <p className="text-sm text-muted-foreground">
                  New businesses needing professional cards on a tight budget
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Bulk Distribution</h4>
                <p className="text-sm text-muted-foreground">
                  Large quantity needs for events, campaigns, or mass distribution
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Temporary Use</h4>
                <p className="text-sm text-muted-foreground">
                  Short-term projects where durability is less important than cost
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Testing Designs</h4>
                <p className="text-sm text-muted-foreground">
                  Proof printing and design testing before final production
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Get Maximum Value for Your Money
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              The most affordable printing option without compromising on quality. 
              Perfect for budget-conscious businesses and bulk requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Order Standard Cards
              </Button>
              <Button size="lg" variant="outline">
                Calculate Bulk Savings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}