import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

interface PageProps {
    params: Promise<{ category: string }>;
}

export default async function MenCategoryPage({ params }: PageProps) {
    const { category } = await params;

    // Format the category name for display
    const displayName = category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col">
            {/* Header */}
            <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link
                        href="/men/categories"
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Categories</span>
                    </Link>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                        Men's Catalog
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
                <div className="max-w-2xl mx-auto">
                    {/* Animated Icon */}
                    <div className="mb-8 relative inline-block">
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
                        <div className="relative w-24 h-24 bg-slate-900 border border-slate-700 rounded-3xl flex items-center justify-center animate-bounce">
                            <Construction size={48} className="text-blue-400" />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        {displayName}
                    </h1>

                    <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                        We're currently curating our premium <span className="text-blue-400 font-semibold">{displayName}</span> collection.
                        Check back soon for high-quality professional uniforms.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/men/categories"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
                        >
                            Explore Other Categories
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95 border border-slate-700"
                        >
                            Inquire Now
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer Decoration */}
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        </div>
    );
}
