"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, Package, Palette, Sparkles } from "lucide-react";

export default function BusinessCardsPage() {
  const [selectedFinish, setSelectedFinish] = useState("all");

  const products = [
    {
      id: "bc-001",
      title: "Premium Matte Business Cards",
      image: "/matte-business-card.png",
      description: "300 GSM art board with elegant matte finish",
      price: "₹1,200",
      originalPrice: "₹1,500",
      rating: 4.8,
      reviews: 124,
      delivery: "2-3 days",
      finish: "matte",
      features: ["Matte Lamination", "Premium Paper", "Rounded Corners"],
      popular: true,
    },
    {
      id: "bc-002",
      title: "Glossy Business Cards",
      image: "/gloss-business-card.png",
      description: "High-gloss finish for vibrant colors",
      price: "₹1,000",
      originalPrice: "₹1,200",
      rating: 4.6,
      reviews: 89,
      delivery: "2-3 days",
      finish: "gloss",
      features: ["Gloss Lamination", "Vibrant Colors", "Standard Size"],
      popular: false,
    },
    {
      id: "bc-003",
      title: "Foil Stamped Business Cards",
      image: "/foil-business-card.png",
      description: "Luxury cards with gold/silver foil accents",
      price: "₹2,800",
      originalPrice: "₹3,200",
      rating: 4.9,
      reviews: 67,
      delivery: "5-7 days",
      finish: "foil",
      features: ["Gold Foil", "Premium Stock", "Luxury Finish"],
      popular: false,
    },
    {
      id: "bc-004",
      title: "Spot UV Business Cards",
      image: "/spot-uv-business-card.png",
      description: "Selective UV coating for premium feel",
      price: "₹2,200",
      originalPrice: "₹2,600",
      rating: 4.7,
      reviews: 92,
      delivery: "4-5 days",
      finish: "uv",
      features: ["Spot UV", "Textured Feel", "Premium Design"],
      popular: true,
    },
    {
      id: "bc-005",
      title: "Die Cut Business Cards",
      image: "/die-cut-business-card.png",
      description: "Custom shapes and creative die cuts",
      price: "₹3,500",
      originalPrice: "₹4,000",
      rating: 4.8,
      reviews: 45,
      delivery: "6-8 days",
      finish: "die-cut",
      features: ["Custom Shape", "Creative Design", "Unique Cut"],
      popular: false,
    },
    {
      id: "bc-006",
      title: "Embossed Business Cards",
      image: "/embossed-business-card.png",
      description: "Raised text and design elements",
      price: "₹2,500",
      originalPrice: "₹3,000",
      rating: 4.6,
      reviews: 78,
      delivery: "5-6 days",
      finish: "emboss",
      features: ["Embossed Text", "Tactile Feel", "Professional"],
      popular: false,
    },
  ];

  const filteredProducts = selectedFinish === "all"
    ? products
    : products.filter(product => product.finish === selectedFinish);

  const finishOptions = [
    { value: "all", label: "All Finishes", icon: Palette },
    { value: "matte", label: "Matte", icon: null },
    { value: "gloss", label: "Gloss", icon: null },
    { value: "foil", label: "Foil", icon: Sparkles },
    { value: "uv", label: "Spot UV", icon: null },
    { value: "die-cut", label: "Die Cut", icon: null },
    { value: "emboss", label: "Embossed", icon: null },
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
                <BreadcrumbPage>Business Cards</BreadcrumbPage>
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
              Business Cards
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Make a lasting first impression with our premium business card collection
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Tabs */}
        <div className="mb-8">
          <Tabs value={selectedFinish} onValueChange={setSelectedFinish}>
            <TabsList className="grid w-full grid-cols-7 lg:w-auto lg:grid-cols-none lg:inline-flex">
              {finishOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <TabsTrigger key={option.value} value={option.value} className="flex items-center gap-2">
                    {Icon && <Icon size={16} />}
                    {option.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.popular && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      Popular
                    </Badge>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                {/* Price and Delivery */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">per 1000 cards</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock size={14} />
                      <span>{product.delivery}</span>
                    </div>
                  </div>
                </div>

                {/* Product Information */}
                <div className="text-center p-2 bg-muted/50 rounded mb-4">
                  <p className="text-sm text-muted-foreground">
                    Premium Business Cards
                  </p>
                </div>

                {/* Add to Cart Section */}
                <AddToCartButton
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  category="business-cards"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Package className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-lg font-semibold mb-2">Free Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Free delivery on all orders above ₹1000
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Palette className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-lg font-semibold mb-2">Custom Design</h3>
              <p className="text-sm text-muted-foreground">
                Professional design services available
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Star className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">
                High-quality materials and finishes
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}