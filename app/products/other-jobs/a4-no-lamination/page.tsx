"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Clock, FileText, DollarSign, Maximize, Palette } from "lucide-react";

export default function A4NoLaminationPage() {
  const products = [
    {
      id: "a4-ss-100",
      title: "300 GSM A4 Single Side (No Lamination) 100",
      gstInclusive: true,
      quantity: 100,
      specifications: [
        "Premium Art Board (300 GSM)",
        "4C+0 Single Side Printing",
        "A4 Size (210mm x 297mm)",
        "No Lamination Coating",
        "Standard Quality Finish"
      ],
      delivery: "2 to 3 Business Days",
      price: "₹600",
      originalPrice: "₹750",
      savings: "20%"
    },
    {
      id: "a4-ss-250",
      title: "300 GSM A4 Single Side (No Lamination) 250",
      gstInclusive: true,
      quantity: 250,
      specifications: [
        "Premium Art Board (300 GSM)",
        "4C+0 Single Side Printing",
        "A4 Size (210mm x 297mm)",
        "No Lamination Coating",
        "Standard Quality Finish"
      ],
      delivery: "2 to 4 Business Days",
      price: "₹1,200",
      originalPrice: "₹1,500",
      popular: true,
      savings: "20%"
    },
    {
      id: "a4-fb-100",
      title: "300 GSM A4 Front & Back (No Lamination) 100",
      gstInclusive: true,
      quantity: 100,
      specifications: [
        "Premium Art Board (300 GSM)",
        "4C+4C Front & Back Printing",
        "A4 Size (210mm x 297mm)",
        "No Lamination Coating",
        "Standard Quality Finish"
      ],
      delivery: "3 to 4 Business Days",
      price: "₹950",
      originalPrice: "₹1,200",
      savings: "21%"
    },
    {
      id: "a4-fb-250",
      title: "300 GSM A4 Front & Back (No Lamination) 250",
      gstInclusive: true,
      quantity: 250,
      specifications: [
        "Premium Art Board (300 GSM)",
        "4C+4C Front & Back Printing",
        "A4 Size (210mm x 297mm)",
        "No Lamination Coating",
        "Standard Quality Finish"
      ],
      delivery: "3 to 5 Business Days",
      price: "₹1,800",
      originalPrice: "₹2,300",
      savings: "22%"
    }
  ];

  const features = [
    {
      icon: Maximize,
      title: "A4 Size Format",
      description: "Large format printing perfect for flyers, posters, and documents"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Budget-friendly A4 printing without lamination costs"
    },
    {
      icon: FileText,
      title: "300 GSM Quality",
      description: "Premium art board material for professional appearance"
    },
    {
      icon: Palette,
      title: "Full Color Options",
      description: "Single side or front & back printing options available"
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
                <BreadcrumbPage>300 GSM A4 SS & FB (No Lam.)</BreadcrumbPage>
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
              300 GSM A4 SS & FB (No Lam.)
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              A4 size printing on premium 300 GSM art board without lamination - perfect for flyers, posters, and documents
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
              </div>

              {product.popular && (
                <div className="absolute top-3 right-3 z-10">
                  <Badge className="bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                </div>
              )}

              {/* Card Visual */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/20">
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className="w-32 h-24 bg-white rounded shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center border-2 border-primary/20">
                    <div className="text-center">
                      <div className="text-sm font-bold text-primary">A4 SIZE</div>
                      <div className="text-xs text-muted-foreground">300 GSM</div>
                      <div className="text-xs text-muted-foreground">NO LAM</div>
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
                <div className="flex items-center gap-2 mb-4 p-2 bg-muted/50 rounded-lg border border-border">
                  <Clock size={14} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    ★ Delivery: {product.delivery}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">GST Inclusive | Per {product.quantity} Sheets</div>
                </div>

                {/* A4 Notice */}
                <div className="text-center p-3 bg-muted/50 rounded-lg border border-border">
                  <p className="text-sm font-medium text-foreground">
                    📄 A4 Size - Perfect for Documents
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
              Why Choose A4 No Lamination Printing?
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

        {/* A4 Size Benefits */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                A4 Size Advantages
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Perfect For</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Flyers and promotional materials</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Company letterheads and documents</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Event posters and announcements</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Certificates and awards</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Menu cards and price lists</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Size Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Standard international size (210mm x 297mm)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Fits standard folders and filing systems</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Ample space for detailed information</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Professional document appearance</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Easy to handle and distribute</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Printing Options */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Single Side vs Front & Back
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-muted/50 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Single Side (SS)</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Cost-effective option</p>
                  <p>• Perfect for flyers and posters</p>
                  <p>• Quick turnaround time</p>
                  <p>• Ideal for wall displays</p>
                  <p>• Lower printing cost</p>
                </div>
              </div>

              <div className="text-center p-6 bg-muted/50 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Front & Back (FB)</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Maximum information capacity</p>
                  <p>• Professional document look</p>
                  <p>• Perfect for brochures and menus</p>
                  <p>• Better value for detailed content</p>
                  <p>• Comprehensive presentation</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Need A4 Size Printing?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Professional A4 printing on premium 300 GSM art board without lamination. 
              Perfect for documents, flyers, and promotional materials at budget-friendly prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Order A4 Printing
              </Button>
              <Button size="lg" variant="outline">
                Get Custom Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}