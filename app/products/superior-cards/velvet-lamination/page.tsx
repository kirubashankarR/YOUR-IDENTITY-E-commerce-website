"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Clock, Crown, Star, Shield, Palette, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function VelvetLaminationPage() {
  const products = [
    {
      id: "velvet-500",
      title: "400 GSM Velvet Lamination 500",
      gstInclusive: true,
      quantity: 500,
      specifications: [
        "Premium Art Board (400 GSM)",
        "4C+4C Full Color Printing",
        "Velvet Lamination Both Sides",
        "File Upload Size - 90mm x 53mm",
        "Ultra Premium Finish"
      ],
      delivery: "5 to 7 Business Days",
      price: "₹3,500",
      originalPrice: "₹4,200",
      savings: "17%"
    },
    {
      id: "velvet-1000",
      title: "400 GSM Velvet Lamination 1000",
      gstInclusive: true,
      quantity: 1000,
      specifications: [
        "Premium Art Board (400 GSM)",
        "4C+4C Full Color Printing",
        "Velvet Lamination Both Sides",
        "File Upload Size - 90mm x 53mm",
        "Ultra Premium Finish"
      ],
      delivery: "5 to 7 Business Days",
      price: "₹6,500",
      originalPrice: "₹7,800",
      popular: true,
      savings: "17%"
    }
  ];

  const features = [
    {
      icon: Crown,
      title: "400 GSM Premium Board",
      description: "Ultra-thick premium board for exceptional durability and luxury feel"
    },
    {
      icon: Star,
      title: "Velvet Lamination",
      description: "Soft, velvety texture that creates an unforgettable tactile experience"
    },
    {
      icon: Shield,
      title: "Superior Protection",
      description: "Enhanced durability and resistance to wear and fingerprints"
    },
    {
      icon: Palette,
      title: "Rich Color Depth",
      description: "Enhanced color saturation and contrast for stunning visual impact"
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
                <BreadcrumbLink href="/products/superior-cards">Superior Cards</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>400 GSM With Velvet Lamination</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-red-600 text-white px-3 py-1 text-sm font-bold mb-4">
              New! Superior Quality
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              400 GSM With Velvet Lamination
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6 bg-white/30" />
            <p className="text-lg text-white/90 leading-relaxed">
              The ultimate in luxury visiting cards with ultra-thick 400 GSM board and velvet lamination
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Velvet Lamination Subcategories */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              400 GSM Velvet Lamination Options
            </h2>
            <div className="gold-divider max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-purple-700">
                    400 GSM Velvet Lamination
                  </h3>
                  <Badge className="bg-purple-600 text-white">Current Page</Badge>
                </div>
                <p className="text-sm text-purple-600 mb-4">
                  Premium 400 GSM cards with luxurious velvet lamination finish - the foundation option
                </p>
                <div className="text-xs text-purple-500">Base Premium Option</div>
              </CardContent>
            </Card>

            <Link href="/products/superior-cards/velvet-uv">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      Velvet Lam. With UV
                    </h3>
                    <Badge className="bg-indigo-600 text-white">From ₹4,200</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Velvet lamination combined with premium spot UV coating for stunning effects
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Ultimate Luxury</span>
                    <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/products/superior-cards/velvet-foil">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      Velvet Lam. With Foil
                    </h3>
                    <Badge className="bg-amber-600 text-white">From ₹5,500</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ultimate luxury with velvet lamination and premium foil stamping
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Ultra Luxury</span>
                    <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border relative bg-gradient-to-br from-white to-purple-50/30">
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 space-y-2">
                <Badge className="bg-green-600 text-white block">
                  Save {product.savings}
                </Badge>
                <Badge className="bg-red-600 text-white text-xs block">
                  GST Inclusive
                </Badge>
                <Badge className="bg-purple-600 text-white text-xs block">
                  Superior Quality
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
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-600">
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className="w-32 h-20 bg-gradient-to-br from-gray-900 to-black rounded shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center border-2 border-purple-200 relative overflow-hidden">
                    {/* Velvet texture simulation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent"></div>
                    <div className="text-center text-white">
                      <div className="text-sm font-bold">VELVET</div>
                      <div className="text-xs opacity-80">400 GSM</div>
                      <div className="text-xs opacity-60">PREMIUM</div>
                    </div>
                    {/* Velvet sheen effect */}
                    <div className="absolute top-1 right-1 w-4 h-4 bg-gradient-to-br from-white/20 to-transparent rounded opacity-60"></div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-purple-600 transition-colors">
                    {product.title}
                  </h3>
                  <Badge variant="outline" className="text-sm border-purple-300 text-purple-700">
                    Qty: {product.quantity}
                  </Badge>
                </div>

                {/* Specifications */}
                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-2">Specifications:</div>
                  <div className="space-y-1">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="flex items-center gap-2 mb-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <Clock size={16} className="text-purple-600" />
                  <span className="text-sm font-medium text-purple-700">
                    ★ Delivery: {product.delivery}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-purple-600">{product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">GST Inclusive | Per {product.quantity} Cards</div>
                </div>

                {/* Premium Notice */}
                <div className="text-center p-3 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg border border-purple-200">
                  <p className="text-sm font-medium text-purple-700">
                    ✨ Superior Quality - Ultra Premium Finish
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
              Why Choose 400 GSM Velvet Lamination?
            </h2>
            <div className="gold-divider max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-purple-200">
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 bg-purple-100 rounded-lg mb-4">
                      <Icon size={32} className="text-purple-600" />
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

        {/* Comparison Section */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                400 GSM vs Standard Cards
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center text-purple-700">400 GSM Velvet Cards</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Ultra-thick 400 GSM premium board</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Luxurious velvet lamination texture</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Superior durability and longevity</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Enhanced color depth and richness</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Fingerprint and smudge resistant</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Unforgettable tactile experience</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-center text-gray-600">Standard 300 GSM Cards</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Standard 300 GSM thickness</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Basic lamination options</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Good durability</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Standard color reproduction</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>May show fingerprints</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Standard feel and texture</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-purple-500/10 to-indigo-600/10 border-purple-300">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-purple-700 mb-4">
              Experience Ultimate Luxury
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Make an unforgettable impression with our 400 GSM velvet laminated cards. 
              The perfect choice for executives and luxury brands who demand the very best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Order Velvet Cards Now
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                Request Sample
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}