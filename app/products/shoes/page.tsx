"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, HardHat, Zap, Award, Star } from "lucide-react";

export default function ShoesPage() {
  const [selectedType, setSelectedType] = useState("all");

  const products = [
    {
      id: "sh-001",
      title: "Steel Toe Safety Boots",
      image: "/safety-shoe-product.png",
      description: "Heavy-duty steel toe boots for maximum protection",
      price: "₹2,500",
      type: "safety",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      features: ["Steel Toe", "Slip Resistant", "Oil Resistant", "Puncture Proof"],
      rating: 4.8,
      reviews: 156,
      popular: true,
    },
    {
      id: "sh-002",
      title: "Composite Toe Work Shoes",
      image: "/safety-shoe-product.png",
      description: "Lightweight composite toe for comfort and safety",
      price: "₹2,200",
      type: "safety",
      sizes: ["6", "7", "8", "9", "10", "11"],
      features: ["Composite Toe", "Lightweight", "Breathable", "Anti-Static"],
      rating: 4.6,
      reviews: 89,
      popular: false,
    },
    {
      id: "sh-003",
      title: "Slip-On Safety Shoes",
      image: "/safety-shoe-product.png",
      description: "Easy slip-on design with safety features",
      price: "₹1,800",
      type: "safety",
      sizes: ["6", "7", "8", "9", "10", "11"],
      features: ["Slip-On", "Steel Toe", "Non-Slip", "Comfortable"],
      rating: 4.4,
      reviews: 67,
      popular: false,
    },
    {
      id: "sh-004",
      title: "Electrical Hazard Boots",
      image: "/safety-shoe-product.png",
      description: "Insulated boots for electrical work environments",
      price: "₹3,200",
      type: "electrical",
      sizes: ["7", "8", "9", "10", "11", "12"],
      features: ["Electrical Hazard", "Insulated", "Steel Toe", "Waterproof"],
      rating: 4.9,
      reviews: 34,
      popular: true,
    },
    {
      id: "sh-005",
      title: "Chemical Resistant Boots",
      image: "/safety-shoe-product.png",
      description: "Specialized boots for chemical industry workers",
      price: "₹2,800",
      type: "chemical",
      sizes: ["6", "7", "8", "9", "10", "11"],
      features: ["Chemical Resistant", "Waterproof", "Steel Toe", "Easy Clean"],
      rating: 4.7,
      reviews: 45,
      popular: false,
    },
    {
      id: "sh-006",
      title: "High-Ankle Safety Boots",
      image: "/safety-shoe-product.png",
      description: "Extra ankle support for demanding work conditions",
      price: "₹2,600",
      type: "safety",
      sizes: ["7", "8", "9", "10", "11", "12"],
      features: ["High Ankle", "Steel Toe", "Durable", "Comfortable"],
      rating: 4.5,
      reviews: 78,
      popular: false,
    },
  ];

  const types = [
    { value: "all", label: "All Types" },
    { value: "safety", label: "General Safety" },
    { value: "electrical", label: "Electrical Hazard" },
    { value: "chemical", label: "Chemical Resistant" },
  ];

  const filteredProducts = products.filter(product =>
    selectedType === "all" || product.type === selectedType
  );

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
                <BreadcrumbLink href="/men">Men's Uniforms</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Industrial Shoes</BreadcrumbPage>
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
              Industrial Safety Shoes
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional safety footwear designed for maximum protection and comfort
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              {types.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Showing {filteredProducts.length} products</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
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

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="text-xs text-muted-foreground mb-2">Safety Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-4">
                  <div className="text-xs text-muted-foreground mb-1">Available Sizes:</div>
                  <div className="flex flex-wrap gap-1">
                    {product.sizes.map((size) => (
                      <Badge key={size} variant="outline" className="text-xs">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-lg font-bold text-primary">{product.price}</div>
                    <div className="text-xs text-muted-foreground">per pair</div>
                  </div>
                </div>

                {/* Product Information */}
                <div className="text-center p-2 bg-muted/50 rounded mb-4">
                  <p className="text-sm text-muted-foreground">
                    Professional Safety Footwear
                  </p>
                </div>

                {/* Add to Cart Section */}
                <AddToCartButton
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  category="shoes"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Safety Standards Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-lg font-semibold mb-2">Safety Certified</h3>
              <p className="text-sm text-muted-foreground">
                All products meet international safety standards
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <HardHat className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-lg font-semibold mb-2">Industrial Grade</h3>
              <p className="text-sm text-muted-foreground">
                Built for demanding industrial environments
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Zap className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-lg font-semibold mb-2">Electrical Safe</h3>
              <p className="text-sm text-muted-foreground">
                Electrical hazard protection available
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Award className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-lg font-semibold mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">
                Rigorous quality testing and warranty
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Size Guide */}
        <Card className="bg-muted/50">
          <CardContent className="p-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                Size Guide & Safety Standards
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Size Chart (Indian Sizes)</h3>
                  <div className="bg-background rounded-lg p-4">
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="font-semibold">Size</div>
                      <div className="font-semibold">Length (cm)</div>
                      <div className="font-semibold">Width (cm)</div>
                      <div>6</div><div>24.5</div><div>9.5</div>
                      <div>7</div><div>25.5</div><div>10</div>
                      <div>8</div><div>26.5</div><div>10.5</div>
                      <div>9</div><div>27.5</div><div>11</div>
                      <div>10</div><div>28.5</div><div>11.5</div>
                      <div>11</div><div>29.5</div><div>12</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Safety Certifications</h3>
                  <div className="bg-background rounded-lg p-4 text-sm space-y-2">
                    <div>• IS 15298:2011 - Indian Standard for Safety Footwear</div>
                    <div>• ASTM F2413 - American Standard for Protective Footwear</div>
                    <div>• EN ISO 20345 - European Standard for Safety Footwear</div>
                    <div>• CSA Z195 - Canadian Standard for Protective Footwear</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}