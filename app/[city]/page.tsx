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
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  LOCATIONS,
  getLocationBySlug,
  getAllCitySlugs,
  SERVICES_FOR_SEO,
} from "@/lib/constants/locations";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";
import {
  generateCityPageContent,
  generateMetaDescription,
  generatePageTitle,
  generateFAQs,
} from "@/lib/seo/content-generator";
import { generateCityPageSchema } from "@/lib/seo/schema";

interface PageProps {
  params: Promise<{ city: string }>;
}

// Generate static params for all cities
export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    return { title: "Not Found" };
  }

  const title = generatePageTitle(location);
  const description = generateMetaDescription(location);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/${location.slug}`,
      type: "website",
    },
    alternates: {
      canonical: `/${location.slug}`,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    notFound();
  }

  const content = generateCityPageContent(location);
  const faqs = generateFAQs(location);
  const schemas = generateCityPageSchema(location);

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
                <span className="text-foreground">{location.name}</span>
              </nav>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{location.region}</p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                    Laundry Service in {location.name}, AZ
                  </h1>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                {content.intro}
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
                  <span>4.9/5 Customer Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
              Our Services in {location.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES_FOR_SEO.slice(0, 4).map((service) => (
                <Link
                  key={service.slug}
                  href={`/${location.slug}/${service.slug}`}
                  className="card-elevated p-6 hover:shadow-lg transition-shadow group"
                >
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.shortName}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description} in {location.name}
                  </p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>

            {/* More Services */}
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES_FOR_SEO.slice(4).map((service) => (
                <Link
                  key={service.slug}
                  href={`/${location.slug}/${service.slug}`}
                  className="p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">
                    {service.shortName} in {location.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  {content.whyChoose}
                </h2>
                <ul className="space-y-4">
                  {content.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-fresh flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild variant="accent">
                    <Link href="/order">Schedule Pickup in {location.name}</Link>
                  </Button>
                </div>
              </div>

              {/* Location Info */}
              <div className="card-elevated p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  {location.name} Service Area
                </h3>
                <p className="text-muted-foreground mb-4">{location.description}</p>

                {location.neighborhoodsServed && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">
                      Neighborhoods We Serve:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {location.neighborhoodsServed.map((hood) => (
                        <span
                          key={hood}
                          className="px-3 py-1 bg-secondary rounded-full text-sm"
                        >
                          {hood}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">
                    ZIP Codes Served:
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {location.zipCodes.join(", ")}
                  </p>
                </div>

                {location.population && (
                  <p className="text-sm text-muted-foreground">
                    Serving over {location.population.toLocaleString()} residents
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
                Frequently Asked Questions About Laundry in {location.name}
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="card-elevated p-6">
                    <h3 className="font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Cities */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
              Also Serving Nearby Cities
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {content.nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/${nearbyCity.slug}`}
                  className="p-4 rounded-lg bg-white border border-border hover:border-primary/50 hover:shadow-md transition-all text-center"
                >
                  <p className="font-medium text-foreground">{nearbyCity.name}</p>
                  <p className="text-xs text-muted-foreground">{nearbyCity.region}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/areas"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                View all service areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {content.cta}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Join thousands of happy {location.name} customers who&apos;ve
              reclaimed their weekends with our professional laundry service.
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
