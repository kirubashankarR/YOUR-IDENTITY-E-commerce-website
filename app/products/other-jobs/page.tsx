"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronRight, FileText, Printer, Copy, Shield } from "lucide-react";

export default function OtherJobsPage() {
  const categories = [
    {
      title: "300 GSM Art Board (No Lamination)",
      description: "Standard 300 GSM art board printing without lamination coating",
      icon: FileText,
      link: "/products/other-jobs/art-board-no-lamination",
      popular: true,
      startingPrice: "₹400",
      features: ["300 GSM Art Board", "No Lamination", "Cost Effective"],
      subcategories: [
        {
          title: "300 GSM SS & FB (No Lam.)",
          description: "Standard size single side and front & back printing without lamination",
          link: "/products/other-jobs/standard-no-lamination",
          startingPrice: "₹350"
        },
        {
          title: "300 GSM SS & FB (Lam.)",
          description: "Standard size single side and front & back printing with lamination",
          link: "/products/other-jobs/standard-lamination",
          startingPrice: "₹550"
        }
      ]
    },
    {
      title: "300 GSM A4 SS & FB (No Lam.)",
      description: "A4 size printing on 300 GSM board, single side and front & back options",
      icon: Printer,
      link: "/products/other-jobs/a4-no-lamination",
      popular: false,
      startingPrice: "₹600",
      features: ["A4 Size", "300 GSM Board", "SS & FB Options"]
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
                <BreadcrumbPage>Other Jobs</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText size={20} className="text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Other Jobs
              </h1>
              <ChevronRight size={32} className="text-primary/60" />
            </div>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Additional printing services and custom jobs for various business needs
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link key={index} href={category.link}>
                <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/20">
                    {/* Icon */}
                    <div className="absolute inset-4 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white rounded-full shadow-lg border-2 border-primary/20 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
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

                    <div className="w-full text-center p-2 bg-muted/50 rounded text-sm text-muted-foreground font-medium">
                      Custom Printing Available
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* What Are Other Jobs */}
        <Card className="mb-12 bg-muted/50">
          <CardContent className="p-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                What Are Other Jobs?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                    <FileText size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Custom Printing</h4>
                  <p className="text-sm text-muted-foreground">
                    Specialized printing jobs beyond standard visiting cards and business materials
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                    <Printer size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Various Sizes</h4>
                  <p className="text-sm text-muted-foreground">
                    Different size options including A4 and custom dimensions for specific needs
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                    <Copy size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Budget Options</h4>
                  <p className="text-sm text-muted-foreground">
                    Cost-effective printing solutions without lamination for bulk requirements
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* No Lamination Benefits */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Benefits of No Lamination Printing
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Cost Advantages</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Significantly lower cost per unit</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Perfect for bulk printing requirements</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Ideal for temporary or promotional materials</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Budget-friendly for startups and small businesses</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Practical Uses</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Internal company materials and forms</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Event materials and temporary signage</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Draft versions and proofing materials</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>High-volume distribution materials</span>
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
                Perfect For These Needs
              </h2>
              <div className="gold-divider max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Bulk Orders</h4>
                <p className="text-sm text-muted-foreground">
                  Large quantity printing for events, campaigns, or mass distribution
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Internal Use</h4>
                <p className="text-sm text-muted-foreground">
                  Company forms, internal documents, and office materials
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Temporary Materials</h4>
                <p className="text-sm text-muted-foreground">
                  Event signage, promotional flyers, and short-term use items
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Budget Projects</h4>
                <p className="text-sm text-muted-foreground">
                  Cost-conscious projects that need quality printing at lower prices
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Need Custom Printing Solutions?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore our other printing services for cost-effective solutions. 
              Perfect for bulk orders, internal materials, and budget-conscious projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products/other-jobs/art-board-no-lamination">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                  Explore Art Board Printing
                </button>
              </Link>
              <Link href="/contact">
                <button className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-semibold transition-colors">
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