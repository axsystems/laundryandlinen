import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";

const footerLinks = {
  services: [
    { href: "/services", label: "All Services" },
    { href: "/services#wash-fold", label: "Wash & Fold" },
    { href: "/services#dry-cleaning", label: "Dry Cleaning" },
    { href: "/services#bedding", label: "Bedding & Linens" },
    { href: "/commercial", label: "Commercial" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/areas", label: "Service Areas" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                <span className="text-xl font-bold text-primary">L</span>
              </div>
              <span className="font-display text-xl font-bold">
                Laundry & Linen
              </span>
            </Link>
            <p className="text-white/70 text-sm mb-6">
              Phoenix Metro&apos;s premier laundry pickup and delivery service.
              Quality care for your clothes and linens.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                {BUSINESS_INFO.email}
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="h-4 w-4" />
                Phoenix Metro Area, AZ
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Clock className="h-4 w-4" />
                Mon-Sat: 7am - 8pm
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Get Started
            </h3>
            <p className="text-sm text-white/70 mb-4">
              Ready to reclaim your time? Schedule your first pickup today.
            </p>
            <Link
              href="/order"
              className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
            >
              Schedule Pickup
            </Link>
            <div className="mt-6 p-4 rounded-lg bg-white/10">
              <p className="text-sm font-medium mb-1">Free Pickup & Delivery</p>
              <p className="text-xs text-white/70">On orders over $35</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
