import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, IdCard, Shirt, ShoppingBag, HardHat, Sparkles, Crown, FileText } from "lucide-react";

export default function ProductsPage() {
  const categories = [
    {
      title: "Visiting Cards",
      description: "Premium visiting cards with gloss, matte, and specialty finishes",
      icon: CreditCard,
      image: "/business-card-product.png",
      link: "/products/visiting-cards",
    },
    {
      title: "Special Cards",
      description: "Unique die-cut and premium UV cards for distinctive branding",
      icon: Sparkles,
      image: "/business-card-product.png",
      link: "/products/special-cards",
    },
    {
      title: "Other Jobs",
      description: "Cost-effective printing solutions without lamination for bulk needs",
      icon: FileText,
      image: "/printing-workshop.png",
      link: "/products/other-jobs",
    },
    {
      title: "ID Cards & Accessories",
      description: "Complete ID card solutions with lanyards and holders",
      icon: IdCard,
      image: "/id-card-product.png",
      link: "/products/id-cards",
    },
    {
      title: "Men's Uniforms",
      description: "Complete professional wear including t-shirts, safety shoes, and industry-specific uniforms",
      icon: Shirt,
      image: "/corporate-tshirt-product.png",
      link: "/men",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Our Products
            </h1>
            <div className="gold-divider max-w-xs mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover our comprehensive range of corporate identity solutions designed to elevate your professional image.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.title} href={category.link}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Need Something Custom?
            </h2>
            <p className="text-muted-foreground mb-8">
              We specialize in creating bespoke solutions tailored to your specific requirements.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-lg">
              Professional Solutions Available
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
