import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Palette, Scissors, Shirt, Badge, Zap } from "lucide-react";

export default function CustomizationPage() {
  const customizationServices = [
    {
      id: "CUSTOM-1",
      title: "Logo Embroidery",
      description: "Professional logo embroidery on uniforms with high-quality threads and precision stitching",
      icon: Badge,
      price: "Rs 150.00",
      features: ["High-quality threads", "Precision stitching", "Multiple colors", "Durable finish"]
    },
    {
      id: "CUSTOM-2",
      title: "Custom Tailoring",
      description: "Bespoke uniform tailoring to fit your exact measurements and style preferences",
      icon: Scissors,
      price: "Rs 500.00",
      features: ["Perfect fit", "Style customization", "Premium fabrics", "Expert tailoring"]
    },
    {
      id: "CUSTOM-3",
      title: "Color Matching",
      description: "Match your brand colors perfectly with our advanced color matching technology",
      icon: Palette,
      price: "Rs 200.00",
      features: ["Brand color matching", "Pantone colors", "Consistent results", "Quality assurance"]
    },
    {
      id: "CUSTOM-4",
      title: "Design Consultation",
      description: "Professional design consultation to create the perfect uniform for your brand",
      icon: Settings,
      price: "Rs 1,000.00",
      features: ["Expert consultation", "Design mockups", "Brand alignment", "Style guidance"]
    },
    {
      id: "CUSTOM-5",
      title: "Bulk Customization",
      description: "Large volume uniform customization with consistent quality and competitive pricing",
      icon: Shirt,
      price: "Rs 300.00",
      features: ["Volume discounts", "Consistent quality", "Fast turnaround", "Dedicated support"]
    },
    {
      id: "CUSTOM-6",
      title: "Express Service",
      description: "Rush orders and express customization service for urgent uniform requirements",
      icon: Zap,
      price: "Rs 800.00",
      features: ["24-48 hour delivery", "Priority processing", "Quality guaranteed", "Rush order support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Breadcrumb */}
      <div className="bg-slate-800/50 border-b border-slate-700/50">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/men" className="hover:text-white">Men</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Customization</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-6">
              <Settings size={40} className="text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Uniforms</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Personalized uniform solutions tailored to your brand and requirements
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Customization Services</h2>
          <p className="text-slate-400 text-lg">Professional uniform customization with attention to detail</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customizationServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="group relative">
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500">
                      <IconComponent size={32} className="text-slate-400 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 group-hover:text-slate-300 transition-colors duration-500">
                      {service.description}
                    </p>
                    <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-slate-400">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                    Get Quote
                  </button>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}