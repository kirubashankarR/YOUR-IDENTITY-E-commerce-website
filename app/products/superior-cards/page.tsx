"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronRight, Crown, Sparkles, Award } from "lucide-react";

export default function SuperiorCardsPage() {
  const categories = [
    {
      title: "400 GSM With Velvet Lamination",
      description: "Premium 400 GSM cards with luxurious velvet lamination finish",
      icon: Crown,
      link: "/products/superior-cards/velvet-lamination",
      popular: true,
      startingPrice: "₹3,500",
      features: ["400 GSM Premium Board", "Velvet Lamination", "Luxury Feel"],
      subcategories: [
        {
          title: "Velvet Lam. With UV",
          description: "Velvet lamination combined with premium spot UV coating",
          link: "/products/superior-cards/velvet-uv",
          startingPrice: "₹4,200"
        },
        {
          title: "Velvet Lam. With Foil",
          description: "Ultimate luxury with velvet lamination and foil stamping",
          link: "/products/superior-cards/velvet-foil",
          startingPrice: "₹5,500"
        }
      ]
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
                <BreadcrumbPage>Superior Cards</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge className="bg-red-600 text-white px-3 py-1 text-sm font-bold">
                New!
              </Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold">
                Superior Cards
              </h1>
              <ChevronRight size={32} className="text-white/80" />
            </div>
            <div className="gold-divider max-w-xs mx-auto mb-6 bg-white/30" />
            <p className="text-lg text-white/90 leading-relaxed">
              The ultimate in luxury visiting cards with premium 400 GSM velvet lamination and exclusive finishes
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 max-w-md mx-auto gap-8 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link key={index} href={category.link}>
                <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-orange-500/50 bg-gradient-to-br from-white to-orange-50/30">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200">
                    {/* Icon */}
                    <div className="absolute inset-4 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white rounded-full shadow-lg border-2 border-orange-200 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        <Icon size={32} className="text-orange-600" />
                      </div>
                    </div>
                    
                    {category.popular && (
                      <Badge className="absolute top-3 right-3 bg-orange-600 text-white">
                        Popular
                      </Badge>
                    )}

                    {/* New badge for all superior cards */}
                    <Badge className="absolute top-3 left-3 bg-red-600 text-white text-xs">
                      New!
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-orange-600 transition-colors">
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
                          <Badge key={featureIndex} variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-lg font-bold text-orange-600">{category.startingPrice}</div>
                        <div className="text-xs text-muted-foreground">Starting from</div>
                      </div>
                      <ChevronRight size={20} className="text-muted-foreground group-hover:text-orange-600 transition-colors" />
                    </div>

                    <div className="w-full text-center p-2 bg-orange-50 rounded text-sm text-orange-700 font-medium">
                      Superior Quality Available
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* 400 GSM Velvet Lamination Subcategories */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              400 GSM Velvet Lamination Options
            </h2>
            <div className="gold-divider max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Link href="/products/superior-cards/velvet-lamination">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-orange-500/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold group-hover:text-orange-600 transition-colors">
                      400 GSM Velvet Lamination
                    </h3>
                    <Badge className="bg-purple-600 text-white">From ₹3,500</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Premium 400 GSM cards with luxurious velvet lamination finish - the foundation of superior quality
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Base Premium Option</span>
                    <ChevronRight size={16} className="text-muted-foreground group-hover:text-orange-600 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/products/superior-cards/velvet-uv">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-orange-500/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold group-hover:text-orange-600 transition-colors">
                      Velvet Lam. With UV
                    </h3>
                    <Badge className="bg-indigo-600 text-white">From ₹4,200</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Velvet lamination combined with premium spot UV coating for stunning visual contrast
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Ultimate Luxury</span>
                    <ChevronRight size={16} className="text-muted-foreground group-hover:text-orange-600 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/products/superior-cards/velvet-foil">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-orange-500/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold group-hover:text-orange-600 transition-colors">
                      Velvet Lam. With Foil
                    </h3>
                    <Badge className="bg-amber-600 text-white">From ₹5,500</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ultimate luxury with velvet lamination and premium gold/silver foil stamping
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Ultra Luxury</span>
                    <ChevronRight size={16} className="text-muted-foreground group-hover:text-orange-600 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* What Makes Superior Cards Special */}
        <Card className="mb-12 bg-gradient-to-r from-orange-50 to-orange-100/50 border-orange-200">
          <CardContent className="p-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-orange-700 mb-6">
                What Makes Superior Cards Special?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex p-3 bg-orange-200 rounded-lg mb-4">
                    <Crown size={32} className="text-orange-700" />
                  </div>
                  <h4 className="font-semibold mb-2 text-orange-800">Premium Materials</h4>
                  <p className="text-sm text-orange-600">
                    Ultra-thick 400 GSM board with velvet lamination for unmatched luxury feel
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-3 bg-orange-200 rounded-lg mb-4">
                    <Sparkles size={32} className="text-orange-700" />
                  </div>
                  <h4 className="font-semibold mb-2 text-orange-800">Exclusive Finishes</h4>
                  <p className="text-sm text-orange-600">
                    Combination of velvet lamination with UV coating or foil stamping
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-3 bg-orange-200 rounded-lg mb-4">
                    <Award size={32} className="text-orange-700" />
                  </div>
                  <h4 className="font-semibold mb-2 text-orange-800">Ultimate Luxury</h4>
                  <p className="text-sm text-orange-600">
                    The highest tier of business cards for executives and luxury brands
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Velvet Lamination Benefits */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                The Velvet Lamination Advantage
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Tactile Experience</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Soft, velvety texture that feels luxurious to touch</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Creates memorable first impressions</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Unique matte finish with depth</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Fingerprint resistant surface</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Visual Appeal</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Rich, deep colors with enhanced contrast</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Elegant matte appearance</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Perfect for luxury branding</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Combines beautifully with UV and foil</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Target Audience */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Perfect For Elite Professionals
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">C-Level Executives</h4>
                <p className="text-sm text-muted-foreground">
                  CEOs, CTOs, and senior leadership who need the ultimate in professional presentation
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Luxury Brands</h4>
                <p className="text-sm text-muted-foreground">
                  High-end fashion, jewelry, and luxury service providers
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Premium Services</h4>
                <p className="text-sm text-muted-foreground">
                  Wealth management, private banking, and exclusive consultancy
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Creative Directors</h4>
                <p className="text-sm text-muted-foreground">
                  Top-tier designers and creative professionals who demand excellence
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-300">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-orange-700 mb-4">
              Experience Superior Quality
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Elevate your professional image with our Superior Cards collection. 
              The perfect combination of premium materials and exclusive finishes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products/superior-cards/velvet-lamination">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Explore Velvet Lamination
                </button>
              </Link>
              <Link href="/contact">
                <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Get Custom Quote
                </button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}