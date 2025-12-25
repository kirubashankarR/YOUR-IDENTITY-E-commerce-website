"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronRight, Scissors, Sparkles } from "lucide-react";

export default function SpecialCardsPage() {
  const categories = [
    {
      title: "Matt Die Cut Cards",
      description: "Premium matte laminated cards with custom die-cut shapes",
      icon: Scissors,
      link: "/products/special-cards/die-cut",
      popular: true,
      startingPrice: "₹2,800",
      features: ["Custom Die Cutting", "Matte Lamination", "Premium 300 GSM"]
    },
    {
      title: "Premium UV Cards",
      description: "Luxury cards with spot UV coating for selective gloss effects",
      icon: Sparkles,
      link: "/products/special-cards/premium-uv",
      popular: false,
      startingPrice: "₹3,200",
      features: ["Spot UV Coating", "Premium Finish", "Luxury Appeal"]
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
                <BreadcrumbPage>Special Cards</BreadcrumbPage>
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
              Special Cards
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unique and premium visiting cards with special finishes and custom shapes
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link key={index} href={category.link}>
                <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/20">
                    {/* Icon */}
                    <div className="absolute inset-4 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white rounded-full shadow-lg border transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        <Icon size={32} className="text-primary" />
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
                      Premium Quality Available
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Why Choose Special Cards */}
        <Card className="bg-muted/50">
          <CardContent className="p-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                Why Choose Special Cards?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                    <Scissors size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Unique Shapes</h4>
                  <p className="text-sm text-muted-foreground">
                    Stand out with custom die-cut shapes that make your cards memorable
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                    <Sparkles size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Premium Finishes</h4>
                  <p className="text-sm text-muted-foreground">
                    Luxury finishes like spot UV and matte lamination for professional appeal
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                    <Badge className="w-8 h-8 rounded-full flex items-center justify-center">★</Badge>
                  </div>
                  <h4 className="font-semibold mb-2">Lasting Impression</h4>
                  <p className="text-sm text-muted-foreground">
                    Create unforgettable first impressions with unique and premium cards
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