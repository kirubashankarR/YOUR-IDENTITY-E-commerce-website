import Link from "next/link";
import { User, Users } from "lucide-react";

export default function WomenUniformsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">Category</span>
          </h1>
          <p className="text-xl text-yellow-100 leading-relaxed max-w-2xl mx-auto">
            Select your uniform category to explore our premium collections
          </p>
        </div>

        {/* Two Icon Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
          {/* Men Card */}
          <Link href="/men/categories" className="group">
            <div className="relative">
              {/* Card */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-yellow-500/50 rounded-3xl p-12 md:p-16 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 w-80 h-80 flex flex-col items-center justify-center">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon container */}
                <div className="relative mb-8 flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-black rounded-3xl flex items-center justify-center group-hover:from-yellow-500/20 group-hover:to-amber-500/20 transition-all duration-500 group-hover:scale-110">
                    <User 
                      size={80} 
                      className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-500" 
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-amber-300 transition-all duration-500">
                    Men
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-yellow-100 transition-colors duration-500">
                    Professional uniforms for men
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 group-hover:w-24 transition-all duration-500 rounded-full"></div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"></div>
            </div>
          </Link>

          {/* Women Card */}
          <Link href="/women/categories" className="group">
            <div className="relative">
              {/* Card */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-yellow-500/50 rounded-3xl p-12 md:p-16 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 w-80 h-80 flex flex-col items-center justify-center">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon container */}
                <div className="relative mb-8 flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-black rounded-3xl flex items-center justify-center group-hover:from-yellow-500/20 group-hover:to-amber-500/20 transition-all duration-500 group-hover:scale-110">
                    <Users 
                      size={80} 
                      className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-500" 
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-amber-300 transition-all duration-500">
                    Women
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-yellow-100 transition-colors duration-500">
                    Professional uniforms for women
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 group-hover:w-24 transition-all duration-500 rounded-full"></div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"></div>
            </div>
          </Link>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gray-900/50 backdrop-blur-sm border border-yellow-500/50 rounded-full px-8 py-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-100 font-medium">Premium quality uniforms for all industries</span>
          </div>
        </div>
      </div>
    </div>
  );
}