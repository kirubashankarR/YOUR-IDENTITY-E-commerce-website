import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Palette, Zap, Target } from "lucide-react";

export default function CustomShapeDieCutCardsPage() {
  const products = [
    {
      title: "Basic Custom Shape",
      description: "Simple custom die-cut shapes with matte finish",
      features: ["350 GSM Card Stock", "Basic Custom Shape", "Matte Lamination", "Standard Colors"],
      price: "₹95",
      delivery: "7-10 days",
      badge: "Basic",
    },
    {
      title: "Complex Custom Shape",
      description: "Intricate die-cut designs with multiple cut-outs",
      features: ["400 GSM Premium Stock", "Complex Die Cutting", "Multiple Cut-outs", "Premium Finish"],
      price: "₹150",
      delivery: "10-14 days",
      badge: "Complex",
    },
    {
      title: "Ultra Custom Shape",
      description: "Most complex die-cut designs with premium materials",
      features: ["450 GSM Ultra Stock", "Ultra Complex Cutting", "Multi-layer Design", "Luxury Finish"],
      price: "₹220",
      delivery: "14-18 days",
      badge: "Ultra",
    },
  ];

  const shapeOptions = [
    {
      title: "Logo Shapes",
      description: "Die-cut in your company logo shape",
      icon: Target,
    },
    {
      title: "Geometric Designs",
      description: "Modern geometric patterns and shapes",
      icon: Scissors,
    },
    {
      title: "Industry Specific",
      description: "Shapes related to your industry or business",
      icon: Zap,
    },
    {
      title: "Creative Concepts",
      description: "Unique artistic and creative shape designs",
      icon: Palette,
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
            <span className="text-foreground">Custom Shape Die Cut Cards</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Scissors size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Custom Shape Die Cut Cards
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Completely custom die-cut ID cards tailored to your brand with unlimited shape possibilities.
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

      {/* Shape Options */}
      <section className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
              Custom Shape Options
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {shapeOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <div key={option.title} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
            Custom Design Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Consultation</h3>
                <p className="text-sm text-muted-foreground">Discuss your vision and requirements with our design team</p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Design & Approval</h3>
                <p className="text-sm text-muted-foreground">Review and approve the custom die-cut design mockup</p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Production</h3>
                <p className="text-sm text-muted-foreground">Professional die-cutting and finishing of your cards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Ready to Create Your Unique Shape?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let our design team help you create the perfect custom die-cut shape that represents your brand.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-lg">
              Free Design Consultation Available
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}