import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Zap, Shield, Package } from "lucide-react";

export default function LanyardsHoldersPage() {
  const products = [
    {
      title: "Basic Lanyards",
      description: "Standard polyester lanyards with metal clips",
      features: ["Polyester Material", "Metal Clip", "Standard Width", "Custom Colors"],
      price: "₹15",
      delivery: "2-3 days",
      badge: "Basic",
    },
    {
      title: "Premium Lanyards",
      description: "High-quality lanyards with custom printing and safety features",
      features: ["Custom Printing", "Safety Breakaway", "Retractable Badge", "Comfort Padding"],
      price: "₹35",
      delivery: "3-5 days",
      badge: "Premium",
    },
    {
      title: "ID Card Holders",
      description: "Protective holders for ID cards in various orientations",
      features: ["Clear Plastic", "Multiple Sizes", "Horizontal/Vertical", "Waterproof"],
      price: "₹8",
      delivery: "1-2 days",
      badge: "Accessory",
    },
    {
      title: "Retractable Badge Reels",
      description: "Convenient retractable badge holders with strong clips",
      features: ["Retractable Cord", "Strong Clip", "Durable Housing", "Custom Colors"],
      price: "₹25",
      delivery: "2-4 days",
      badge: "Functional",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-muted-foreground">
            <Link href="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <Link href="/products/id-cards" className="hover:text-primary">ID Cards & Accessories</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Lanyards & Holders</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <UserCheck size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Lanyards & Holders
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Complete accessories for ID card display, security, and convenience with customizable options.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Card key={product.title} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">{product.title}</h3>
                  <Badge variant="outline">{product.badge}</Badge>
                </div>
                
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-medium text-foreground">Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Price (GST Incl.)</span>
                    <span className="text-lg font-semibold text-primary">{product.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Delivery</span>
                    <span className="text-sm font-medium">{product.delivery}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Customization Options */}
      <section className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
              Customization Options
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Custom Printing</h3>
                <p className="text-sm text-muted-foreground">Company logos and text on lanyards</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Safety Features</h3>
                <p className="text-sm text-muted-foreground">Breakaway clips for workplace safety</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Bulk Orders</h3>
                <p className="text-sm text-muted-foreground">Special pricing for large quantities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}