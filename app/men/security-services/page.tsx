import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Radio, Shirt, Badge, Lock } from "lucide-react";

export default function SecurityServicesPage() {
  const securityUniforms = [
    {
      id: "SEC-1",
      title: "Security Guard Uniform",
      description: "Professional security guard uniforms with durable fabric and multiple pockets for equipment",
      icon: Shield,
      price: "Rs 1,500.00",
      features: ["Durable fabric", "Multiple pockets", "Badge attachments", "Professional appearance"]
    },
    {
      id: "SEC-2",
      title: "Surveillance Officer",
      description: "Comfortable uniforms for surveillance and monitoring personnel with modern design",
      icon: Eye,
      price: "Rs 1,200.00",
      features: ["Comfortable fit", "Modern design", "Easy maintenance", "Professional look"]
    },
    {
      id: "SEC-3",
      title: "Radio Operator Uniform",
      description: "Specialized uniforms for radio operators and communication personnel",
      icon: Radio,
      price: "Rs 1,100.00",
      features: ["Radio attachments", "Comfortable wear", "Clear identification", "Functional design"]
    },
    {
      id: "SEC-4",
      title: "Tactical Vest",
      description: "High-quality tactical vests for security personnel requiring additional protection",
      icon: Shirt,
      price: "Rs 2,500.00",
      features: ["Protective padding", "Adjustable fit", "Multiple compartments", "Durable construction"]
    },
    {
      id: "SEC-5",
      title: "Security Supervisor",
      description: "Distinguished uniforms for security supervisors and team leaders",
      icon: Badge,
      price: "Rs 1,800.00",
      features: ["Leadership design", "Premium fabric", "Rank indicators", "Professional styling"]
    },
    {
      id: "SEC-6",
      title: "Access Control Officer",
      description: "Uniforms for access control and entry management personnel",
      icon: Lock,
      price: "Rs 1,300.00",
      features: ["ID card holders", "Key attachments", "Comfortable fabric", "Professional appearance"]
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
            <span className="text-white">Security Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl mb-6">
              <Shield size={40} className="text-red-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Services</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Professional security uniforms designed for protection and authority
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Security Uniform Collection</h2>
          <p className="text-slate-400 text-lg">Professional uniforms for security and protection services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityUniforms.map((uniform) => {
            const IconComponent = uniform.icon;
            return (
              <div key={uniform.id} className="group relative">
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all duration-500">
                      <IconComponent size={32} className="text-slate-400 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400 transition-all duration-500">
                      {uniform.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 group-hover:text-slate-300 transition-colors duration-500">
                      {uniform.description}
                    </p>
                    <div className="text-2xl font-bold text-red-400 mb-4">{uniform.price}</div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {uniform.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-slate-400">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 rounded-xl hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                    Order Now
                  </button>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}