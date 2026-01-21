import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Truck,
  Clock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getAllZipCodes,
  getPrimaryLocationByZipCode,
  getLocationsByZipCode,
  SERVICES_FOR_SEO,
} from "@/lib/constants/locations";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/seo/schema";

interface PageProps {
  params: Promise<{ zip: string }>;
}

// Generate static params for all ZIP codes
export async function generateStaticParams() {
  return getAllZipCodes().map((zip) => ({ zip }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { zip } = await params;
  const location = getPrimaryLocationByZipCode(zip);

  if (!location) {
    return { title: "Not Found" };
  }

  const title = `Laundry Service in ${zip} | ${location.name}, AZ | Pickup & Delivery`;
  const description = `Professional laundry pickup & delivery in ZIP code ${zip} (${location.name}, AZ). Wash & fold, dry cleaning, free delivery on $35+. Schedule online today!`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/service-area/${zip}`,
      type: "website",
    },
    alternates: {
      canonical: `/service-area/${zip}`,
    },
  };
}

export default async function ZipCodePage({ params }: PageProps) {
  const { zip } = await params;
  const primaryLocation = getPrimaryLocationByZipCode(zip);
  const allLocations = getLocationsByZipCode(zip);

  if (!primaryLocation) {
    notFound();
  }

  const schemas = [
    generateLocalBusinessSchema(primaryLocation),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Service Areas", url: "/areas" },
      { name: `ZIP ${zip}`, url: `/service-area/${zip}` },
    ]),
  ];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-wave/10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
                <span>/</span>
                <Link href="/areas" className="hover:text-primary">
                  Service Areas
                </Link>
                <span>/</span>
                <span className="text-foreground">ZIP {zip}</span>
              </nav>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {primaryLocation.name}, {primaryLocation.region}
                  </p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                    Laundry Service in {zip}
                  </h1>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                Yes, we deliver to ZIP code {zip}! {BUSINESS_INFO.name} provides professional
                laundry pickup and delivery service throughout {primaryLocation.name} and
                the {primaryLocation.region} area. Schedule your free pickup today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="accent" size="lg">
                  <Link href="/order" className="group">
                    Schedule Free Pickup
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    {BUSINESS_INFO.phone}
                  </a>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="w-5 h-5 text-primary" />
                  <span>Free Pickup & Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>24-48hr Turnaround</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-5 h-5 text-primary" />
                  <span>Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ZIP Code Details */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Laundry Pickup & Delivery in {zip}
                </h2>
                <p className="text-muted-foreground mb-6">
                  ZIP code {zip} is located in {primaryLocation.name}, Arizona, within
                  the {primaryLocation.region}. {BUSINESS_INFO.name} provides full-service
                  laundry pickup and delivery to all addresses in this ZIP code.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-4">
                  What We Offer in {zip}:
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-fresh flex-shrink-0 mt-0.5" />
                    <span>Free pickup and delivery on orders over $35</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-fresh flex-shrink-0 mt-0.5" />
                    <span>Wash & fold service starting at $2.25/lb</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-fresh flex-shrink-0 mt-0.5" />
                    <span>Professional dry cleaning services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-fresh flex-shrink-0 mt-0.5" />
                    <span>24-48 hour standard turnaround</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-fresh flex-shrink-0 mt-0.5" />
                    <span>Same-day rush service available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-fresh flex-shrink-0 mt-0.5" />
                    <span>Commercial services for businesses</span>
                  </li>
                </ul>

                <Button asChild variant="accent" size="lg">
                  <Link href="/order">
                    Get Started in {zip}
                  </Link>
                </Button>
              </div>

              {/* Location Card */}
              <div className="card-elevated p-8">
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  ZIP Code {zip} Details
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">City</p>
                    <p className="font-medium">{primaryLocation.name}, AZ</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Region</p>
                    <p className="font-medium">{primaryLocation.region}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">County</p>
                    <p className="font-medium">{primaryLocation.county} County</p>
                  </div>
                  {primaryLocation.population && (
                    <div>
                      <p className="text-sm text-muted-foreground">City Population</p>
                      <p className="font-medium">{primaryLocation.population.toLocaleString()}</p>
                    </div>
                  )}
                </div>

                {allLocations.length > 1 && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      Also served by:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {allLocations.slice(1).map((loc) => (
                        <Link
                          key={loc.slug}
                          href={`/${loc.slug}`}
                          className="text-sm text-primary hover:underline"
                        >
                          {loc.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Services Available */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
              Services Available in {zip}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {SERVICES_FOR_SEO.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${primaryLocation.slug}/${service.slug}`}
                  className="p-4 rounded-lg bg-white border border-border hover:border-primary/50 hover:shadow-md transition-all text-center"
                >
                  <p className="font-medium text-foreground">{service.shortName}</p>
                  <p className="text-xs text-muted-foreground">in {zip}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby ZIP Codes */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
              More ZIP Codes in {primaryLocation.name}
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {primaryLocation.zipCodes
                .filter((z) => z !== zip)
                .map((nearbyZip) => (
                  <Link
                    key={nearbyZip}
                    href={`/service-area/${nearbyZip}`}
                    className="px-4 py-2 rounded-full bg-white border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
                  >
                    {nearbyZip}
                  </Link>
                ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href={`/${primaryLocation.slug}`}
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                View all {primaryLocation.name} services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready for Laundry Pickup in {zip}?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Join your neighbors in {primaryLocation.name} who have already discovered
              the convenience of professional laundry service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/order" className="group">
                  Schedule Free Pickup
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call {BUSINESS_INFO.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
