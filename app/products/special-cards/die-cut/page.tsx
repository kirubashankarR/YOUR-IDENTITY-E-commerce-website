"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Clock, Download, Scissors, Star, FileText } from "lucide-react";

export default function MattDieCutCardsPage() {
  const products = [
    {
      id: "dc-1",
      title: "Matt Front & Back 1000 - Die Cut Card (DC-1)",
      gstInclusive: true,
      quantity: 1000,
      specifications: [
        "Art Board (300 GSM)",
        "4C+4C Printing Front & Back",
        "Front & Back Matte Lamination",
        "Die Cut - DC - 1 (Refer Product Catalogue)",
        "Die-line Template given in the link below",
        "90mm x 53 mm Upload File size"
      ],
      delivery: "2 to 4 Business Days",
      price: "₹2,800",
      originalPrice: "₹3,200",
      savings: "13%",
      templateLink: "CLICK HERE FOR THE DIE LINE TEMPLATE",
      conditions: "* Conditions Apply",
      company: "NE"
    },
    {
      id: "dc-2",
      title: "Matt Front & Back 1000 - Die Cut Card (DC-2)",
      gstInclusive: true,
      quantity: 1000,
      specifications: [
        "Art Board (300 GSM)",
        "4C+4C Printing Front & Back",
        "Front & Back Matte Lamination",
        "Die Cut - DC - 2 (Refer Product Catalogue)",
        "Die-line Template given in the link below",
        "90mm x 53 mm Upload File size"
      ],
      delivery: "2 to 4 Business Days",
      price: "₹2,800",
      originalPrice: "₹3,200",
      popular: true,
      savings: "13%",
      templateLink: "CLICK HERE FOR THE DIE LINE TEMPLATE",
      conditions: "* Conditions Apply",
      company: "AST"
    },
    {
      id: "dc-3",
      title: "Matt Front & Back 1000 - Die Cut Card (DC-3)",
      gstInclusive: true,
      quantity: 1000,
      specifications: [
        "Art Board (300 GSM)",
        "4C+4C Printing Front & Back",
        "Front & Back Matte Lamination",
        "Die Cut - DC - 3 (Refer Product Catalogue)",
        "Die-line Template given in the link below",
        "90mm x 53 mm Upload File size"
      ],
      delivery: "2 to 4 Business Days",
      price: "₹2,800",
      originalPrice: "₹3,200",
      savings: "13%",
      templateLink: "CLICK HERE FOR THE DIE LINE TEMPLATE",
      conditions: "* Conditions Apply",
      company: "Westman"
    },
    {
      id: "dc-4",
      title: "Matt Front & Back 1000 - Die Cut Card (DC-4)",
      gstInclusive: true,
      quantity: 1000,
      specifications: [
        "Art Board (300 GSM)",
        "4C+4C Printing Front & Back",
        "Front & Back Matte Lamination",
        "Die Cut - DC - 4 (Refer Product Catalogue)",
        "Die-line Template given in the link below",
        "90mm x 53 mm Upload File size"
      ],
      delivery: "2 to 4 Business Days",
      price: "₹2,800",
      originalPrice: "₹3,200",
      savings: "13%",
      templateLink: "CLICK HERE FOR THE DIE LINE TEMPLATE",
      conditions: "* Conditions Apply",
      company: "Kids Raava"
    },
    {
      id: "dc-6",
      title: "Matt Front & Back 1000 - Die Cut Card (DC-6)",
      gstInclusive: true,
      quantity: 1000,
      specifications: [
        "Art Board (300 GSM)",
        "4C+4C Printing Front & Back",
        "Front & Back Matte Lamination",
        "Die Cut - DC - 6 (Refer Product Catalogue)",
        "Die-line Template given in the link below",
        "90mm x 53 mm Upload File size"
      ],
      delivery: "2 to 4 Business Days",
      price: "₹2,800",
      originalPrice: "₹3,200",
      savings: "13%",
      templateLink: "CLICK HERE FOR THE DIE LINE TEMPLATE",
      conditions: "* Conditions Apply",
      company: "Fibre Smith"
    }
  ];

  const features = [
    {
      icon: Scissors,
      title: "Custom Die Cutting",
      description: "Unique shapes and designs with precision die cutting technology"
    },
    {
      icon: Star,
      title: "Matte Lamination",
      description: "Premium matte finish on both sides for elegant appearance"
    },
    {
      icon: FileText,
      title: "Template Provided",
      description: "Die-line templates provided for accurate design placement"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Professional delivery within 2-4 business days"
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
                <BreadcrumbPage>Matt Die Cut Cards</BreadcrumbPage>
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
              Matt Die Cut Cards
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Premium matte laminated visiting cards with custom die-cut shapes for unique professional identity
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
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
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-600">
                <div className="absolute top-2 left-2 text-xs font-bold text-white bg-black/20 px-2 py-1 rounded">
                  {product.id.toUpperCase()}
                </div>
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className="w-28 h-18 bg-white rounded-lg shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center border-2 border-purple-200 relative overflow-hidden">
                    {/* Die cut effect simulation */}
                    <div className="absolute top-0 right-0 w-4 h-4 bg-purple-100 transform rotate-45 translate-x-2 -translate-y-2"></div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-purple-700">{product.company}</div>
                      <div className="text-xs text-purple-600">DIE CUT</div>
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

                {/* Template Link */}
                <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <Button variant="link" className="p-0 h-auto text-sm text-green-700 font-semibold">
                    {product.templateLink}
                  </Button>
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

                {/* Learn More */}
                <div className="mb-4">
                  <Button variant="link" className="p-0 h-auto text-sm text-primary">
                    Learn More
                  </Button>
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
              Why Choose Matt Die Cut Cards?
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

        {/* Die Cut Shapes Info */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Available Die Cut Shapes
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">DC-1</h4>
                <p className="text-sm text-muted-foreground">
                  Rounded corner design with elegant curves
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">DC-2</h4>
                <p className="text-sm text-muted-foreground">
                  Angular cut with modern geometric shape
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">DC-3</h4>
                <p className="text-sm text-muted-foreground">
                  Curved edge design for professional look
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">DC-4</h4>
                <p className="text-sm text-muted-foreground">
                  Creative shape for unique brand identity
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">DC-6</h4>
                <p className="text-sm text-muted-foreground">
                  Premium curved design for luxury appeal
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Design Guidelines */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Design Guidelines for Die Cut Cards
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Important Notes</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Use provided die-line templates for accurate cutting</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Keep important content away from cut edges</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Refer to product catalogue for exact shapes</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Upload file size: 90mm x 53mm</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Technical Specs</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Art Board: 300 GSM premium quality</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Printing: 4C+4C full color both sides</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Finish: Matte lamination front & back</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Delivery: 2-4 business days</span>
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
              Stand Out with Custom Die Cut Cards
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Make a lasting impression with uniquely shaped visiting cards. Premium matte finish 
              with precision die cutting for the ultimate professional identity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Order Die Cut Cards
              </Button>
              <Button size="lg" variant="outline">
                <Download size={16} className="mr-2" />
                Download Templates
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}