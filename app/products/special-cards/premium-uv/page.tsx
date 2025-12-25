"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Clock, Download, Sparkles, Star, AlertTriangle, FileText } from "lucide-react";

export default function PremiumUVCardsPage() {
  const products = [
    {
      id: "premium-uv-single-1000",
      title: "Premium Spot UV Single Side 1000",
      gstInclusive: true,
      quantity: 1000,
      specifications: [
        "Art Board (300 GSM)",
        "4C+0 Single Side Printing",
        "Premium Spot UV (Single Side)",
        "File Upload Size - 90mm x 53 mm"
      ],
      delivery: "3 to 5 Business Days",
      price: "₹2,400",
      originalPrice: "₹2,800",
      savings: "14%",
      cornerCutting: "4 CORNER CUTTING NOT AVAILABLE FOR THIS PRODUCT",
      instructionLink: "Click Here for Instruction and File Format",
      conditions: "* Conditions Apply",
      company: "AIM HEALTH VISION"
    },
    {
      id: "premium-uv-front-back-1000",
      title: "Premium Spot UV Front & Back 1000",
      gstInclusive: true,
      quantity: 1000,
      specifications: [
        "Art Board (300 GSM)",
        "4C+4C Front & Back Printing",
        "Premium Spot UV (Front & Back)",
        "File Upload Size - 90mm x 53 mm"
      ],
      delivery: "3 to 5 Business Days",
      price: "₹3,200",
      originalPrice: "₹3,800",
      popular: true,
      savings: "16%",
      cornerCutting: "4 CORNER CUTTING NOT AVAILABLE FOR THIS PRODUCT",
      instructionLink: "Click Here for Instruction and File Format",
      conditions: "* Conditions Apply",
      company: "AIM HEALTH VISION"
    }
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Premium Spot UV",
      description: "Selective UV coating creates stunning raised gloss effects on specific areas"
    },
    {
      icon: Star,
      title: "Luxury Finish",
      description: "Premium quality finish that adds elegance and sophistication"
    },
    {
      icon: FileText,
      title: "Design Instructions",
      description: "Detailed instructions and file format guidelines provided"
    },
    {
      icon: Clock,
      title: "Professional Delivery",
      description: "Quality production with 3-5 business days delivery"
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
                <BreadcrumbLink href="/products/special-cards">Special Cards</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Premium UV Cards</BreadcrumbPage>
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
              Premium UV Cards
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Luxury visiting cards with premium spot UV coating for selective gloss effects and superior finish
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-800 to-black">
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className="w-40 h-28 bg-gradient-to-br from-gray-900 to-black rounded shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center border border-gray-700 relative overflow-hidden">
                    {/* Fitness card design simulation */}
                    <div className="absolute inset-2 flex flex-col justify-between text-white">
                      <div className="text-right">
                        <div className="text-xs font-bold text-orange-400">{product.company}</div>
                        <div className="text-xs text-gray-300">Fitness Center</div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">Premium UV Effect</div>
                    </div>
                    {/* UV gloss effect simulation */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-br from-white/30 to-transparent rounded opacity-60"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-gradient-to-br from-white/20 to-transparent rounded opacity-40"></div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
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

                {/* Corner Cutting Warning */}
                <div className="mb-4 p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-red-700 font-medium">
                      {product.cornerCutting}
                    </span>
                  </div>
                </div>

                {/* Instruction Link */}
                <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <Button variant="link" className="p-0 h-auto text-sm text-blue-700 font-semibold">
                    {product.instructionLink}
                  </Button>
                  <div className="text-xs text-blue-600 mt-1">Learn More</div>
                </div>

                {/* Delivery Info */}
                <div className="flex items-center gap-2 mb-4 p-2 bg-green-50 rounded-lg border border-green-200">
                  <Clock size={14} className="text-green-600" />
                  <span className="text-sm font-medium text-green-700">
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

                {/* Conditions */}
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground">{product.conditions}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Why Choose Premium UV Cards?
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

        {/* Spot UV Information */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                What is Spot UV Coating?
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Benefits of Spot UV</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Creates raised, glossy texture on selected areas</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Adds luxury and premium feel to your cards</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Highlights important elements like logos or text</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Creates stunning visual contrast effects</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Provides tactile experience for recipients</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Design Guidelines</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Follow provided instruction and file format guidelines</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>UV areas should be clearly marked in separate layer</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Minimum UV area size: 3mm x 3mm</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>File upload size: 90mm x 53mm</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>4 corner cutting not available for UV products</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Use Cases */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Perfect For These Industries
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Luxury Brands</h4>
                <p className="text-sm text-muted-foreground">
                  High-end fashion, jewelry, and luxury service providers who need premium appeal
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Creative Professionals</h4>
                <p className="text-sm text-muted-foreground">
                  Designers, photographers, and artists who want to showcase their creativity
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Executive Level</h4>
                <p className="text-sm text-muted-foreground">
                  C-level executives and senior professionals who need impressive business cards
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Create Luxury Cards with Premium UV
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Elevate your professional image with premium spot UV coating. Create stunning visual 
              and tactile effects that make your business cards truly unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Order Premium UV Cards
              </Button>
              <Button size="lg" variant="outline">
                <Download size={16} className="mr-2" />
                Download Instructions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}