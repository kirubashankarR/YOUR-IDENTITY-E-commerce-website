import "./globals.css";

export const metadata = {
  title: "Your Identity - Corporate Identity Solutions",
  description: "All You Need is Identity, We Make it Better. Complete corporate identity solutions including ID cards, business cards, uniforms, and more in Coimbatore.",
};

import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { CartProvider } from "@/lib/cart-context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CartProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
