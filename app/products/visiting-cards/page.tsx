"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronRight, Star, Clock, Download } from "lucide-react";

export default function VisitingCardsPage() {
  const categories = [
    {
      title: "Gloss Visiting Cards",
      description: "High-quality gloss laminated visiting cards with vibrant colors",
      image: "/placeholder.jpg",
      link: "/products/visiting-cards/gloss",
      popular: true,
      startingPrice: "₹800",
      features: ["Gloss Lamination", "Vibrant Colors", "Water Resistant"]
    },
    {
      title: "Matte Visiting Cards",
      description: "Premium matte finish cards with elegant appearance",
      image: "/placeholder.jpg",
      link: "/products/visiting-cards/matte",
      popular: true,
      startingPrice: "₹900",
      features: ["Matte Lamination", "Premium Feel", "Fingerprint Resistant"]
    },
    {
      title: "Synthetic Visiting Cards",
      description: "Durable synthetic material cards for long-lasting use",
      image: "/placeholder.jpg",
      link: "/products/visiting-cards/synthetic",
      popular: false,
      startingPrice: "₹1,200",
      features: ["Waterproof", "Tear Resistant", "Long Lasting"]
    },
    {
      title: "Without Lamination",
      description: "Cost-effective visiting cards on premium art board without lamination",
      image: "/placeholder.jpg",
      link: "/products/visiting-cards/without-lamination",
      popular: false,
      startingPrice: "₹450",
      features: ["Cost Effective", "300 GSM Art Board", "Quick Delivery"]
    },
    {
      title: "Premium UV Cards",
      description: "Spot UV coating for selective gloss effects",
      image: "/placeholder.jpg",
      link: "/products/visiting-cards/premium-uv",
      popular: false,
      startingPrice: "₹1,800",
      features: ["Spot UV", "Premium Look", "Textured Feel"]
    },
    {
      title: "Foil Stamped Cards",
      description: "Luxury cards with gold or silver foil stamping",
      image: "/placeholder.jpg",
      link: "/products/visiting-cards/foil-stamped",
      popular: false,
      startingPrice: "₹2,500",
      features: ["Gold/Silver Foil", "Luxury Finish", "Premium Quality"]
    }
  ];

  const specifications = [
    "Standard Size: 90mm x 53mm",
    "Art Board: 300 GSM",
    "Printing: 4C+4C (Full Color Both Sides)",
    "Delivery: 2-4 Business Days",
    "Minimum Order: 500 pieces",
    "File Format: PDF, AI, PSD preferred"
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
                <BreadcrumbPage>Visiting Cards</BreadcrumbPage>
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
              Visiting Cards
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional visiting cards with premium finishes and quick delivery
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Link key={index} href={category.link}>
              <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/20">
                  {/* Simulated Business Card */}
                  <div className="absolute inset-4 flex items-center justify-center">
                    <div className="w-24 h-16 bg-white rounded shadow-lg border transform rotate-3 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
                      <div className="text-xs font-bold text-primary">CARD</div>
                    </div>
                  </div>
                  
                  {category.popular && (
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                      Popular
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {category.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-lg font-bold text-primary">{category.startingPrice}</div>
                      <div className="text-xs text-muted-foreground">Starting from</div>
                    </div>
                    <ChevronRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <div className="w-full text-center p-2 bg-muted/50 rounded text-sm text-muted-foreground">
                    Professional Quality Available
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Specifications Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">
              Standard Specifications
            </h2>
            <div className="space-y-3">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Design Guidelines
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium text-foreground">Resolution:</span> 300 DPI minimum for best quality
                </div>
                <div>
                  <span className="font-medium text-foreground">Color Mode:</span> CMYK preferred over RGB
                </div>
                <div>
                  <span className="font-medium text-foreground">Bleed:</span> 2mm bleed on all sides
                </div>
                <div>
                  <span className="font-medium text-foreground">Safe Area:</span> Keep text 3mm from edges
                </div>
                <div>
                  <span className="font-medium text-foreground">Fonts:</span> Convert all text to outlines/curves
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4" size="sm">
                <Download size={14} className="mr-2" />
                Download Template
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us Section */}
        <Card className="bg-muted/50">
          <CardContent className="p-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                Why Choose Our Visiting Cards?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                    <Star size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Premium Quality</h4>
                  <p className="text-sm text-muted-foreground">
                    High-quality materials and professional printing for lasting impressions
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                    <Clock size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Quick Turnaround</h4>
                  <p className="text-sm text-muted-foreground">
                    Fast delivery within 2-4 business days without compromising quality
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                    <Download size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Design Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Free design templates and professional design assistance available
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}