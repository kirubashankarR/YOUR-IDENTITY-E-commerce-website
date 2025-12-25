import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-20 relative z-10">
      <div className="container mx-auto px-4 py-12">
        {/* Decorative divider */}
        <div className="gold-divider mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/logo.jpg"
                  alt="Your Identity Logo"
                  width={40}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-primary">YOUR IDENTITY</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">All You Need is Identity, We Make it Better</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Kumaran Building, Old No. 40, New 37C, Rajendraprasad Road, Coimbatore - 641 012</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>8870007483 / 9894877483</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span>urid2025@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="gold-divider mb-6" />
        <div className="text-center">
          <p className="text-sm text-primary font-serif italic">A complete solution for Corporate Needs...</p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} Your Identity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
