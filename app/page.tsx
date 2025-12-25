"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Moving gradient orbs */}
        <div 
          className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
          style={{ transform: `translate(-${scrollY * 0.15}px, ${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          style={{ transform: `translate(${scrollY * 0.05}px, -${scrollY * 0.1}px)` }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: `linear-gradient(rgba(234,179,8,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-amber-600/20" />
        <div 
          className="relative container mx-auto px-4 py-20"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Your Identity
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto mb-8 rounded-full" />
            <p className="text-xl md:text-2xl text-yellow-100 leading-relaxed mb-12">
              All You Need is Identity, We Make it Better
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Complete corporate identity solutions including ID cards, business cards, uniforms, and more in Coimbatore.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50" />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-yellow-400 mb-12">
              Why Choose Your Identity?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Premium Quality</h3>
                <p className="text-gray-300 leading-relaxed">High-quality materials and professional finishing for lasting durability</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Custom Solutions</h3>
                <p className="text-gray-300 leading-relaxed">Tailored designs and solutions to match your brand identity perfectly</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Complete Service</h3>
                <p className="text-gray-300 leading-relaxed">From initial design to final delivery, we handle every aspect professionally</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}