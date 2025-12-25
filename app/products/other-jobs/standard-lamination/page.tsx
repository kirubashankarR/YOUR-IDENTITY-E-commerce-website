"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Clock, FileText, Shield, Zap, Copy } from "lucide-react";

export default function StandardLaminationPage() {
  const products = [
    {
      id: "standard-lam-ss-500",
      title: "300 GSM Single Side (Lamination) 500",
      gstInclusive: true,
      quantity: 500,
      specifications: [
        "Premium Art Board (300 GSM)",
        "4C+0 Single Side Printing",
        "Gloss/Matte Lamination",
        "Standard Size (90mm x 53mm)",
        "Professional Finish"
      ],
      delivery: "2 to 4 Business Days",
      price: "₹550",
      originalPrice: "₹700",
      savings: "21%"
    },
    {
      id: "standard-lam-ss-1000",
      title: "300 GSM Single Side (Lamination) 1000",
      gstInclusive: true,
      quantity: 1000,
      specifications: [
        "Premium Art Board (300 GSM)",
        "4C+0 Single Side Printing",
        "Gloss/Matte Lamination",
        "Standard Size (90mm x 53mm)",
        "Professional Finish"
      ],
      delivery: "2 to 4 Business Days",
      price: "₹850",
      originalPrice: "₹1,100",
      popular: true,
      savings: "23%"
    },
    {
      id: "standard-lam-fb-500",
      title: "300 GSM Front & Back (Lamination) 500",
      gstInclusive: true,
      quantity: 500,
      specifications: [
        "Premium Art Board (300 GSM)",
        "4C+4C Front & Back Printing",
        "Gloss/Matte Lamination",
        "Standard Size (90mm x 53mm)",
        "Professional Finish"
      ],
      delivery: "3 to 5 Business Days",
      price: "₹950",
      originalPrice: "₹1,250",
      savings: "24%"
    },
    {
      id: "standard-lam-fb-1000",
      title: "300 GSM Front & Back (Lamination) 1000",
      gstInclusive: true,
      quantity: 1000,
      specifications: [
        "Premium Art Board (300 GSM)",
        "4C+4C Front & Back Printing",
        "Gloss/Matte Lamination",
        "Standard Size (90mm x 53mm)",
        "Professional Finish"
      ],
      delivery: "3 to 5 Business Days",
      price: "₹1,450",
      originalPrice: "₹1,850",
      savings: "22%"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Lamination Protection",
      description: "Durable lamination coating for enhanced protection and longevity"
    },
    {
      icon: Zap,
      title: "Professional Finish",
      description: "Gloss or matte lamination for a premium professional appearance"
    },
    {
      icon: Copy,
      title: "SS & FB Options",
      description: "Choose between single side or front & back printing options"
    },
    {
      icon: FileText,
      title: "Standard Quality",
      description: "Reliable 300 GSM art board with lamination for consistent results"
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
                <BreadcrumbPage>300 GSM SS & FB (Lam.)</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              300 GSM SS & FB (Lam.)
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6 bg-white/30" />
            <p className="text-lg text-white/90 leading-relaxed">
              Standard size printing on 300 GSM art board with professional lamination finish
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
                <Badge className="bg-blue-600 text-white text-xs block">
                  Laminated
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
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-500">
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className="w-28 h-18 bg-white rounded shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center border-2 border-blue-200 relative overflow-hidden">
                    <div className="text-center">
                      <div className="text-sm font-bold text-blue-700">300 GSM</div>
                      <div className="text-xs text-blue-600">LAMINATED</div>
                      <div className="text-xs text-blue-500">STANDARD</div>
                    </div>
                    {/* Lamination shine effect */}
                    <div className="absolute top-1 right-1 w-4 h-4 bg-gradient-to-br from-white/40 to-transparent rounded opacity-80"></div>
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
                <div className="flex items-center gap-2 mb-4 p-2 bg-blue-50 rounded-lg border border-blue-200">
                  <Clock size={14} className="text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">
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

                {/* Lamination Notice */}
                <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-700">
                    🛡️ Professional Lamination Finish
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
              Why Choose Laminated Cards?
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

        {/* Lamination vs No Lamination */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Laminated vs Non-Laminated Cards
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center text-blue-700">Laminated Cards</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Enhanced durability and protection</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Water and stain resistant</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Professional appearance and feel</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Longer lifespan and better preservation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Enhanced color vibrancy</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Higher cost per unit</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-center text-gray-600">Non-Laminated Cards</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Lower cost per unit</span>
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
                    <span>May show wear over time</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Not water resistant</span>
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
              Get Professional Laminated Cards
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Enhanced durability and professional appearance with lamination coating. 
              Perfect for businesses that need cards with longer lifespan and better protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Order Laminated Cards
              </Button>
              <Button size="lg" variant="outline">
                Compare Options
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}