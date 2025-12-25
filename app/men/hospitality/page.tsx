import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Users, Utensils, Bed, Star, Clock, Shield } from "lucide-react";

export default function HospitalityPage() {
  const hospitalityProducts = [
    {
      id: "HOSP-1",
      title: "Hotel Reception Uniform",
      description: "Professional reception desk uniforms for hotel staff with elegant design and comfortable fit",
      image: "/hospitality-reception.jpg",
      price: "Rs 1,200.00",
      category: "Reception",
      icon: Users,
      features: ["Wrinkle-resistant", "Professional look", "Comfortable fit"]
    },
    {
      id: "HOSP-2", 
      title: "Restaurant Server Uniform",
      description: "Smart casual uniforms for restaurant servers and waitstaff with stain-resistant fabric",
      image: "/hospitality-server.jpg",
      price: "Rs 950.00",
      category: "Restaurant",
      icon: Utensils,
      features: ["Stain-resistant", "Easy care", "Professional appearance"]
    },
    {
      id: "HOSP-3",
      title: "Housekeeping Uniform",
      description: "Durable and comfortable uniforms for housekeeping staff with multiple pockets",
      image: "/hospitality-housekeeping.jpg", 
      price: "Rs 800.00",
      category: "Housekeeping",
      icon: Bed,
      features: ["Multiple pockets", "Durable fabric", "Easy maintenance"]
    },
    {
      id: "HOSP-4",
      title: "Concierge Uniform",
      description: "Premium uniforms for concierge and guest services with sophisticated styling",
      image: "/hospitality-concierge.jpg",
      price: "Rs 1,500.00", 
      category: "Concierge",
      icon: Star,
      features: ["Premium fabric", "Sophisticated design", "Custom tailoring"]
    },
    {
      id: "HOSP-5",
      title: "Barista Uniform",
      description: "Stylish and functional uniforms for coffee shop and bar staff",
      image: "/hospitality-barista.jpg",
      price: "Rs 900.00",
      category: "Barista", 
      icon: Coffee,
      features: ["Stylish design", "Functional pockets", "Comfortable wear"]
    },
    {
      id: "HOSP-6",
      title: "Security Uniform",
      description: "Professional security uniforms for hotel and hospitality security personnel",
      image: "/hospitality-security.jpg",
      price: "Rs 1,100.00",
      category: "Security",
      icon: Shield,
      features: ["Professional look", "Durable construction", "Badge attachments"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/men" className="hover:text-primary">Men</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Hospitality</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Coffee size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Hospitality Uniforms
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional uniforms for hotels, restaurants, and hospitality industry with comfort and style.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Hospitality Uniform Collection</h2>
          <p className="text-gray-600">Professional uniforms designed for the hospitality industry</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitalityProducts.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <div className="relative">
                  {/* Product Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                    <IconComponent size={64} className="text-orange-300" />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{product.title}</h3>
                      <p className="text-sm text-gray-500">{product.id}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="text-xl font-bold text-orange-600">
                      {product.price}
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Details
                      </button>
                      <button className="px-4 py-2 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                        Order Now
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">
              Why Choose Our Hospitality Uniforms?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">High-quality fabrics designed for hospitality industry demands</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Quick Delivery</h3>
                <p className="text-sm text-muted-foreground">Fast turnaround times for bulk orders</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Custom Sizing</h3>
                <p className="text-sm text-muted-foreground">Tailored fits for all staff members</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}