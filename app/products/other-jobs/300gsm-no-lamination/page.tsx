import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function GSM300NoLaminationPage() {
  const subcategories = [
    {
      id: "a4-ss-fb-no-lam",
      title: "300 GSM A4 SS & FB (No Lam.)",
      href: "/products/other-jobs/300gsm-a4-ss-fb-no-lam",
      icon: "››"
    },
    {
      id: "ss-fb-no-lam", 
      title: "300 GSM SS & FB (No Lam.)",
      href: "/products/other-jobs/300gsm-ss-fb-no-lam",
      icon: "››"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-muted-foreground">
            <Link href="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <Link href="/products/other-jobs" className="hover:text-primary">Other Jobs</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">300 GSM Art Board (No Lamination)</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">300 GSM ART BOARD (NO LAMINATION)</h1>
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <button className="p-1 border border-gray-300 rounded">
              <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                <div className="bg-gray-400 w-1.5 h-1.5"></div>
                <div className="bg-gray-400 w-1.5 h-1.5"></div>
                <div className="bg-gray-400 w-1.5 h-1.5"></div>
                <div className="bg-gray-400 w-1.5 h-1.5"></div>
              </div>
            </button>
            <button className="p-1 border border-gray-300 rounded">
              <div className="space-y-0.5 w-4 h-4">
                <div className="bg-gray-400 w-4 h-1"></div>
                <div className="bg-gray-400 w-4 h-1"></div>
                <div className="bg-gray-400 w-4 h-1"></div>
              </div>
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{subcategories.length} Item(s)</span>
            <span className="text-sm text-gray-600">SHOW:</span>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>

        {/* Subcategories List */}
        <div className="bg-white border border-gray-200 rounded p-4">
          <div className="space-y-2">
            {/* Main Category Header */}
            <div className="flex items-center gap-2 text-sm text-gray-700 mb-4">
              <span>›</span>
              <span className="font-medium">300 GSM Art Board (No Lamination)</span>
              <span className="text-gray-400">▼</span>
            </div>
            
            {/* Subcategories */}
            <div className="ml-6 space-y-2">
              {subcategories.map((subcategory) => (
                <Link 
                  key={subcategory.id}
                  href={subcategory.href} 
                  className="flex items-center gap-2 text-xs text-gray-600 hover:text-primary cursor-pointer"
                >
                  <span>{subcategory.icon}</span>
                  <span>{subcategory.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">300 GSM Art Board (No Lamination)</h3>
          <p className="text-blue-800 text-sm leading-relaxed">
            High-quality 300 GSM art board printing without lamination. Perfect for flyers, brochures, 
            posters, and promotional materials where a premium paper finish is desired without additional 
            lamination coating.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-medium text-blue-900">Material:</span>
              <span className="text-blue-800 ml-2">300 GSM Art Board</span>
            </div>
            <div>
              <span className="font-medium text-blue-900">Finish:</span>
              <span className="text-blue-800 ml-2">No Lamination</span>
            </div>
            <div>
              <span className="font-medium text-blue-900">Printing:</span>
              <span className="text-blue-800 ml-2">4C+4C (Front & Back)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}