import type { Metadata } from "next";
import { DM_Sans, Lexend } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@/components/analytics";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://laundryandlinen.com"
  ),
  title: {
    default: "Laundry & Linen | Professional Laundry Pickup & Delivery",
    template: "%s | Laundry & Linen",
  },
  description:
    "Phoenix Metro's premier laundry pickup and delivery service. Wash & fold, dry cleaning, and commercial laundry solutions. Free pickup for orders over $35.",
  keywords: [
    "laundry service",
    "laundry pickup",
    "laundry delivery",
    "wash and fold",
    "dry cleaning",
    "Phoenix laundry",
    "Scottsdale laundry",
    "Tempe laundry",
    "commercial laundry",
  ],
  authors: [{ name: "Laundry & Linen" }],
  creator: "Laundry & Linen",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://laundryandlinen.com",
    siteName: "Laundry & Linen",
    title: "Laundry & Linen | Professional Laundry Pickup & Delivery",
    description:
      "Phoenix Metro's premier laundry pickup and delivery service. Wash & fold, dry cleaning, and commercial laundry solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Laundry & Linen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laundry & Linen | Professional Laundry Pickup & Delivery",
    description:
      "Phoenix Metro's premier laundry pickup and delivery service.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lexend.variable}`}>
      <body className="min-h-screen bg-background antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
