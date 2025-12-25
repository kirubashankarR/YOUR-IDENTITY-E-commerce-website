"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CartButton } from "./cart-button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg border-b border-yellow-500/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <Image
                src="/logo.jpg"
                alt="Your Identity Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg sm:text-xl font-serif font-bold tracking-wide text-yellow-300">
                YOUR IDENTITY
              </div>
              <div className="text-xs text-yellow-200 italic">
                All You Need is Identity We Make it Better
              </div>
            </div>
            <div className="sm:hidden">
              <div className="text-sm font-serif font-bold tracking-wide text-yellow-300">
                YOUR IDENTITY
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-yellow-300",
                  pathname === item.href && "text-yellow-400"
                )}
              >
                {item.label}
              </Link>
            ))}
            <CartButton />
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="md:hidden flex items-center gap-3">
            <CartButton />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-yellow-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-yellow-500/20 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-base font-medium py-2 transition-colors hover:text-yellow-300",
                    pathname === item.href && "text-yellow-400"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
