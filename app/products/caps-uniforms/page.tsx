"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Crown, Shirt, Users, Palette, Star } from "lucide-react";

export default function CapsUniformsPage() {
  const [activeTab, setActiveTab] = useState("caps");

  const caps = [
    {
      id: "cap-001",
      title: "Corporate Baseball Cap",
      image: "/cap-product.png",
      description: "Classic baseball cap with adjustable strap",
      price: "₹250",
      colors: ["Black", "Navy", "White", "Grey", "Red"],
      minOrder: 50,
      popular: true,
    },
    {
      id: "cap-002",
      title: "Snapback Cap",
      image: "/cap-product.png",
      description: "Modern snapback design with flat brim",
      price: "₹320",
      colors: ["Black", "Navy", "White", "Grey"],
      minOrder: 25,
      popular: false,
    },
    {
      id: "cap-003",
      title: "Trucker Cap",
      image: "/cap-product.png",
      description: "Mesh back trucker style cap",
      price: "₹280",
      colors: ["Black/White", "Navy/White", "Red/White"],
      minOrder: 30,
      popular: true,
    },
    {
      id: "cap-004",
      title: "Beanie Hat",
      image: "/cap-product.png",
      description: "Knitted beanie for winter wear",
      price: "₹180",
      colors: ["Black", "Navy", "Grey", "Maroon"],
      minOrder: 50,
      popular: false,
    },
  ];

  const uniforms = [
    {
      id: "uni-001",
      title: "Security Guard Uniform Set",
      image: "/corporate-tshirt-product.png",
      description: "Complete security uniform with shirt and pants",
      price: "₹1,200",
      sizes: ["S", "M", "L", "XL", "XXL"],
      includes: ["Shirt", "Pants", "Belt", "Cap"],
      minOrder: 10,
      popular: true,
    },
    {
      id: "uni-002",
      title: "Hospital Staff Uniform",
      image: "/corporate-tshirt-product.png",
      description: "Medical scrubs for healthcare professionals",
      price: "₹800",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      includes: ["Top", "Pants"],
      minOrder: 20,
      popular: true,
    },
    {
      id: "uni-003",
      title: "Chef Uniform Set",
      image: "/corporate-tshirt-product.png",
      description: "Professional chef attire with apron",
      price: "₹950",
      sizes: ["S", "M", "L", "XL", "XXL"],
      includes: ["Chef Coat", "Pants", "Apron", "Hat"],
      minOrder: 15,
      popular: false,
    },
    {
      id: "uni-004",
      title: "School Uniform Set",
      image: "/corporate-tshirt-product.png",
      description: "Complete school uniform for students",
      price: "₹650",
      sizes: ["XS", "S", "M", "L", "XL"],
      includes: ["Shirt", "Pants/Skirt", "Tie"],
      minOrder: 25,
      popular: true,
    },
    {
      id: "uni-005",
      title: "Industrial Worker Uniform",
      image: "/corporate-tshirt-product.png",
      description: "Durable workwear for industrial environments",
      price: "₹1,100",
      sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
      includes: ["Coverall", "Safety Vest", "Hard Hat"],
      minOrder: 20,
      popular: false,
    },
    {
      id: "uni-006",
      title: "Hotel Staff Uniform",
      image: "/corporate-tshirt-product.png",
      description: "Elegant uniform for hospitality industry",
      price: "₹850",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      includes: ["Blazer", "Shirt", "Pants", "Tie"],
      minOrder: 15,
      popular: false,
    },
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
                <BreadcrumbLink href="/men">Men's Uniforms</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Caps & Uniforms</BreadcrumbPage>
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
              Caps & Uniforms
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Complete uniform solutions and branded caps for all industries
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-none lg:inline-flex">
            <TabsTrigger value="caps" className="flex items-center gap-2">
              <Crown size={16} />
              Caps & Hats
            </TabsTrigger>
            <TabsTrigger value="uniforms" className="flex items-center gap-2">
              <Shirt size={16} />
              Uniforms
            </TabsTrigger>
          </TabsList>

          {/* Caps Tab */}
          <TabsContent value="caps" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caps.map((cap) => (
                <Card key={cap.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={cap.image}
                      alt={cap.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {cap.popular && (
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                        Popular
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {cap.description}
                    </p>

                    {/* Colors */}
                    <div className="mb-3">
                      <div className="text-xs text-muted-foreground mb-1">Colors:</div>
                      <div className="flex flex-wrap gap-1">
                        {cap.colors.map((color) => (
                          <Badge key={color} variant="secondary" className="text-xs">
                            {color}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Price and Min Order */}
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-lg font-bold text-primary">{cap.price}</div>
                        <div className="text-xs text-muted-foreground">per piece</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Min Order</div>
                        <div className="text-sm font-medium">{cap.minOrder} pcs</div>
                      </div>
                    </div>

                    <div className="w-full text-center p-2 bg-muted/50 rounded text-sm text-muted-foreground mb-4">
                      Professional Quality
                    </div>

                    <AddToCartButton
                      id={cap.id}
                      title={cap.title}
                      price={cap.price}
                      category="caps"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Uniforms Tab */}
          <TabsContent value="uniforms" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uniforms.map((uniform) => (
                <Card key={uniform.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={uniform.image}
                      alt={uniform.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {uniform.popular && (
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                        Popular
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {uniform.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {uniform.description}
                    </p>

                    {/* Includes */}
                    <div className="mb-3">
                      <div className="text-xs text-muted-foreground mb-1">Includes:</div>
                      <div className="flex flex-wrap gap-1">
                        {uniform.includes.map((item) => (
                          <Badge key={item} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Sizes */}
                    <div className="mb-4">
                      <div className="text-xs text-muted-foreground mb-1">Sizes:</div>
                      <div className="flex flex-wrap gap-1">
                        {uniform.sizes.map((size) => (
                          <Badge key={size} variant="outline" className="text-xs">
                            {size}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Price and Min Order */}
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-lg font-bold text-primary">{uniform.price}</div>
                        <div className="text-xs text-muted-foreground">per set</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Min Order</div>
                        <div className="text-sm font-medium">{uniform.minOrder} sets</div>
                      </div>
                    </div>

                    <div className="text-center p-2 bg-muted/50 rounded mb-4">
                      <p className="text-sm text-muted-foreground">
                        Complete Uniform Solutions
                      </p>
                    </div>

                    <AddToCartButton
                      id={uniform.id}
                      title={uniform.title}
                      price={uniform.price}
                      category="uniforms"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <Card>
            <CardContent className="p-6 text-center">
              <Palette className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-lg font-semibold mb-2">Custom Branding</h3>
              <p className="text-sm text-muted-foreground">
                Logo embroidery and printing services
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Users className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-lg font-semibold mb-2">Bulk Orders</h3>
              <p className="text-sm text-muted-foreground">
                Special pricing for large quantities
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Shirt className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-lg font-semibold mb-2">Quality Fabric</h3>
              <p className="text-sm text-muted-foreground">
                Premium materials for durability
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Star className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-lg font-semibold mb-2">Custom Fit</h3>
              <p className="text-sm text-muted-foreground">
                Tailored sizing for perfect fit
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Industries Section */}
        <Card className="bg-muted/50 mt-12">
          <CardContent className="p-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                Industries We Serve
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Healthcare</h4>
                  <p className="text-muted-foreground">Medical scrubs and uniforms</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Security</h4>
                  <p className="text-muted-foreground">Security guard uniforms</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Hospitality</h4>
                  <p className="text-muted-foreground">Hotel and restaurant staff</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-muted-foreground">School and college uniforms</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Industrial</h4>
                  <p className="text-muted-foreground">Factory worker uniforms</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Corporate</h4>
                  <p className="text-muted-foreground">Office and business attire</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Food Service</h4>
                  <p className="text-muted-foreground">Chef and kitchen uniforms</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Sports</h4>
                  <p className="text-muted-foreground">Team uniforms and caps</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}