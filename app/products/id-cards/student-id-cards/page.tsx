import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, BookOpen, Shield } from "lucide-react";

export default function StudentIDCardsPage() {
  const products = [
    {
      title: "School ID Cards",
      description: "Durable identification cards for school students",
      features: ["Student Photo", "School Details", "Class & Section", "Emergency Contact"],
      price: "₹35",
      delivery: "3-5 days",
      badge: "School",
    },
    {
      title: "College ID Cards",
      description: "Professional student identification for colleges and universities",
      features: ["Student Photo", "Course Details", "Validity Period", "Library Access"],
      price: "₹55",
      delivery: "4-6 days",
      badge: "College",
    },
    {
      title: "Smart Student ID",
      description: "Advanced student ID with RFID technology",
      features: ["RFID Chip", "Attendance Tracking", "Cashless Payments", "Access Control"],
      price: "₹120",
      delivery: "7-10 days",
      badge: "Smart",
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
            <span className="text-foreground">Student ID Cards</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <GraduationCap size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Student ID Cards
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Durable and secure student identification cards for educational institutions of all levels.
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

      {/* Educational Benefits */}
      <section className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
              Benefits for Educational Institutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Enhanced Security</h3>
                <p className="text-sm text-muted-foreground">Secure campus access and student identification</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Library Integration</h3>
                <p className="text-sm text-muted-foreground">Easy library book issuing and tracking</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Attendance Management</h3>
                <p className="text-sm text-muted-foreground">Automated attendance tracking systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}