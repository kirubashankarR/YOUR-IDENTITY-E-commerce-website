import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center">
          {/* 404 Number */}
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          
          {/* Error Message */}
          <h1 className="text-2xl font-serif font-bold text-foreground mb-2">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link href="/" className="w-full">
              <Button className="w-full" size="lg">
                <Home className="mr-2" size={18} />
                Go Home
              </Button>
            </Link>
            
            <Link href="/products" className="w-full">
              <Button variant="outline" className="w-full" size="lg">
                <Search className="mr-2" size={18} />
                Browse Products
              </Button>
            </Link>

            <Button 
              variant="ghost" 
              className="w-full" 
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2" size={18} />
              Go Back
            </Button>
          </div>

          {/* Help Text */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Need help? <Link href="/contact" className="text-primary hover:underline">Contact us</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}