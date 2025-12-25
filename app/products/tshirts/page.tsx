"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shirt } from "lucide-react";
import { CategoryGrid } from "@/components/MenCategoryGrid";

export default function TShirtsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "cotton", label: "Cotton T-Shirts" },
    { value: "polo", label: "Polo Shirts" },
    { value: "sports", label: "Sports Wear" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
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
                <BreadcrumbPage>Corporate T-Shirts</BreadcrumbPage>
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
              Corporate T-Shirts
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Premium quality corporate apparel with custom branding options
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Select a category to view products</span>
          </div>
        </div>

        {/* Tabs - Icons Only, No Products Grid */}
        <Tabs defaultValue="men" className="w-full">
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-2 gap-8 h-auto bg-transparent p-0 mb-12">
            <TabsTrigger
              value="men"
              className="group h-auto p-0 bg-transparent border-0 data-[state=active]:shadow-none"
              asChild
            >
              <Link href="/men" className="flex flex-col items-center w-full">
                <div className="bg-muted group-hover:bg-muted/70 transition-colors p-8 rounded-full shadow-lg group-data-[state=active]:ring-2 group-data-[state=active]:ring-primary group-data-[state=active]:scale-105 duration-300">
                  <div className="bg-background rounded-full p-6 shadow-sm">
                    <Shirt size={48} className="text-primary group-data-[state=active]:text-primary" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold group-data-[state=active]:text-primary transition-colors">Men</h3>
                </div>
              </Link>
            </TabsTrigger>

            <TabsTrigger
              value="women"
              className="group h-auto p-0 bg-transparent border-0 data-[state=active]:shadow-none"
            >
              <div className="flex flex-col items-center w-full">
                <div className="bg-muted group-hover:bg-muted/70 transition-colors p-8 rounded-full shadow-lg group-data-[state=active]:ring-2 group-data-[state=active]:ring-primary group-data-[state=active]:scale-105 duration-300">
                  <div className="bg-background rounded-full p-6 shadow-sm">
                    <Shirt size={48} className="text-primary group-data-[state=active]:text-primary" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold group-data-[state=active]:text-primary transition-colors">Women</h3>
                </div>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* TabsContent for Men and Women */}
          <TabsContent value="men" className="mt-0">
            <CategoryGrid />
          </TabsContent>
          <TabsContent value="women" className="mt-0">
            <CategoryGrid />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}