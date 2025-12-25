import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Crown, Shield, Sparkles } from "lucide-react";

export default function ExecutiveMattDieCutCardsPage() {
  const products = [
    {
      title: "Premium Executive Die Cut",
      description: "Luxury die-cut cards for senior management with premium finish",
      features: ["400 GSM Premium Stock", "Matte Velvet Finish", "Gold Foil Accents", "Custom Executive Shape"],
      price: "₹180",
      delivery: "10-12 days",
      badge: "Premium",
    },
    {
      title: "Platinum Executive Die Cut",
      description: "Ultra-luxury die-cut cards with platinum finish elements",
      features: ["450 GSM Ultra Stock", "Platinum Foiling", "Complex Die Cutting", "Embossed Details"],
      price: "₹250",
      delivery: "12-15 days",
      badge: "Platinum",
    },
    {
      title: "Diamond Executive Die Cut",
      description: "The ultimate luxury die-cut cards for top executives",
      features: ["500 GSM Luxury Stock", "Diamond Dust Finish", "Multi-layer Die Cut", "Swarovski Elements"],
      price: "₹350",
      delivery: "15-18 days",
      badge: "Diamond",
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
            <Link href="/products/id-cards/matt-die-cut-cards" className="hover:text-primary">Matt Die Cut Cards</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Executive Matt Die Cut Cards</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Crown size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Executive Matt Die Cut Cards
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ultra-luxury die-cut identification cards for senior executives with premium materials and finishes.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Luxury Features */}
      <section className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
              Executive Luxury Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Premium Materials</h3>
                <p className="text-sm text-muted-foreground">Highest quality card stock and finishing materials</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Luxury Finishes</h3>
                <p className="text-sm text-muted-foreground">Gold, platinum, and diamond dust finishing options</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Exclusive Design</h3>
                <p className="text-sm text-muted-foreground">Unique shapes that reflect executive status</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}