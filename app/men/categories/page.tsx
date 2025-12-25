import Link from "next/link";
import { Shirt, HardHat, ShoppingBag, Coffee, Settings, GraduationCap, Shield, Building2, Heart, Calendar } from "lucide-react";

export default function MenCategoriesPage() {
  const categories = [
    {
      title: "Corporate T-Shirts",
      icon: Shirt,
      href: "/men/corporate-tshirts",
      description: "Custom branded t-shirts for your business"
    },
    {
      title: "Industrial Shoes",
      icon: HardHat,
      href: "/men/industrial-shoes",
      description: "Safety footwear for industrial environments"
    },
    {
      title: "Caps & Uniforms",
      icon: ShoppingBag,
      href: "/men/caps-uniforms",
      description: "Branded caps and specialized uniform sets"
    },
    {
      title: "Hospitality",
      icon: Coffee,
      href: "/men/hospitality",
      description: "Hotels, restaurants & service industry"
    },
    {
      title: "Customization",
      icon: Settings,
      href: "/men/customization",
      description: "Custom designs & personalized uniforms"
    },
    {
      title: "School Uniforms",
      icon: GraduationCap,
      href: "/men/school-uniforms",
      description: "Educational institutions & students"
    },
    {
      title: "Security Services",
      icon: Shield,
      href: "/men/security-services",
      description: "Security guards & protection services"
    },
    {
      title: "Corporate Uniforms",
      icon: Building2,
      href: "/men/corporate-uniforms",
      description: "Business & office professional wear"
    },
    {
      title: "Health Care",
      icon: Heart,
      href: "/men/healthcare",
      description: "Medical professionals & healthcare staff"
    },
    {
      title: "Special Events",
      icon: Calendar,
      href: "/men/special-events",
      description: "Event staff & hospitality services"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Breadcrumb */}
      <div className="bg-gray-900/50 border-b border-yellow-500/50">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-300">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/men" className="hover:text-yellow-400">Men</Link>
            <span className="mx-2">/</span>
            <span className="text-yellow-400">Categories</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Choose Your Category
          </h1>
          <p className="text-xl text-yellow-100 leading-relaxed max-w-2xl mx-auto">
            Select from our premium uniform collections
          </p>
        </div>

        {/* Categories Grid - 4x3 layout like your image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.slice(0, 10).map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.href} href={category.href}>
                <div className="group relative">
                  {/* Card */}
                  <div className="relative bg-gray-900/60 backdrop-blur-sm border border-yellow-500/50 rounded-2xl p-8 hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 h-48 flex flex-col items-center justify-center">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon container */}
                    <div className="relative mb-4 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-800/50 to-black/50 rounded-xl flex items-center justify-center group-hover:from-yellow-500/20 group-hover:to-amber-500/20 transition-all duration-500 group-hover:scale-110">
                        <IconComponent 
                          size={32} 
                          className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-500" 
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative text-center">
                      <h3 className="text-lg font-bold text-yellow-400 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-amber-300 transition-all duration-500">
                        {category.title}
                      </h3>
                      <p className="text-gray-300 text-xs leading-relaxed group-hover:text-yellow-100 transition-colors duration-500">
                        {category.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 group-hover:w-12 transition-all duration-500"></div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gray-900/50 backdrop-blur-sm border border-yellow-500/50 rounded-full px-8 py-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-100 font-medium">Premium quality uniforms for all industries</span>
          </div>
        </div>
      </section>
    </div>
  );
}