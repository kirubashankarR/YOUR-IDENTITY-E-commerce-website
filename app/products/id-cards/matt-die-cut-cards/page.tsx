import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Star, Shield, Sparkles, IdCard, Users } from "lucide-react";

export default function MattDieCutCardsPage() {
  const subcategories = [
    {
      title: "Employee Matt Die Cut Cards",
      description: "Professional die-cut employee ID cards with matte finish",
      icon: IdCard,
      link: "/products/id-cards/matt-die-cut-cards/employee",
      badge: "Professional",
    },
    {
      title: "Student Matt Die Cut Cards",
      description: "Unique die-cut student ID cards for educational institutions",
      icon: Users,
      link: "/products/id-cards/matt-die-cut-cards/student",
      badge: "Educational",
    },
    {
      title: "Executive Matt Die Cut Cards",
      description: "Premium die-cut cards for senior management with luxury finish",
      icon: Star,
      link: "/products/id-cards/matt-die-cut-cards/executive",
      badge: "Premium",
    },
    {
      title: "Custom Shape Die Cut Cards",
      description: "Completely custom die-cut shapes tailored to your brand",
      icon: Scissors,
      link: "/products/id-cards/matt-die-cut-cards/custom-shape",
      badge: "Custom",
    },
  ];

  const features = [
    {
      title: "Custom Shapes",
      description: "Unique die-cut shapes that match your brand identity",
      icon: Scissors,
    },
    {
      title: "Matte Finish",
      description: "Premium matte lamination for elegant appearance",
      icon: Star,
    },
    {
      title: "Durable Quality",
      description: "High GSM card stock for long-lasting durability",
      icon: Shield,
    },
    {
      title: "Premium Look",
      description: "Professional appearance that stands out",
      icon: Sparkles,
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
            <span className="text-foreground">Matt Die Cut Cards</span>
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
              Matt Die Cut Cards
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Premium die-cut ID cards with matte finish, custom shapes, and professional appearance for distinctive branding.
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subcategories.map((subcategory) => {
            const Icon = subcategory.icon;
            return (
              <Link key={subcategory.title} href={subcategory.link}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {subcategory.title}
                          </h3>
                          <Badge variant="outline" className="ml-2">
                            {subcategory.badge}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {subcategory.description}
                        </p>
                        <div className="text-sm text-primary font-medium group-hover:underline">
                          View Options →
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">
              Why Choose Matt Die Cut Cards?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scissors size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Custom Shapes</h3>
                <p className="text-sm text-muted-foreground">Unique die-cut shapes that match your brand identity</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Premium Finish</h3>
                <p className="text-sm text-muted-foreground">Elegant matte lamination for professional appearance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Durable Quality</h3>
                <p className="text-sm text-muted-foreground">High GSM materials for long-lasting durability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
            Product Specifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Material & Finish</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Card Stock:</span>
                    <span className="font-medium">350-400 GSM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Lamination:</span>
                    <span className="font-medium">Matte Finish</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Die Cutting:</span>
                    <span className="font-medium">Custom Shapes</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Durability:</span>
                    <span className="font-medium">Water Resistant</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Customization Options</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Shapes:</span>
                    <span className="font-medium">Custom Die Cut</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Colors:</span>
                    <span className="font-medium">Full Color CMYK</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Foiling:</span>
                    <span className="font-medium">Gold/Silver Available</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Min Order:</span>
                    <span className="font-medium">100 pieces</span>
                  </li>
                </ul>
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
              Ready to Create Unique ID Cards?
            </h2>
            <p className="text-muted-foreground mb-8">
              Stand out with custom die-cut shapes and premium matte finish that reflects your brand's professionalism.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-lg">
              Custom Design Consultation Available
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}