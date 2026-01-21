"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/areas", label: "Service Areas" },
  { href: "/commercial", label: "Commercial" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <span className="text-xl font-bold text-white">L</span>
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Laundry & Linen
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors rounded-lg",
                  pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS_INFO.phone}
            </a>
            <Button asChild variant="accent" size="default">
              <Link href="/order">Schedule Pickup</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-secondary lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-white border-t border-border lg:hidden"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-3 text-base font-medium rounded-lg transition-colors",
                      pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}
                  className="flex items-center justify-center gap-2 py-3 text-base font-medium text-foreground/70"
                >
                  <Phone className="h-5 w-5" />
                  {BUSINESS_INFO.phone}
                </a>
                <Button asChild variant="accent" size="lg" className="w-full">
                  <Link href="/order">Schedule Pickup</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
