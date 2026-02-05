import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Truck,
  Clock,
  Star,
  Sparkles,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getLocationBySlug,
  getAllCityServiceCombinations,
  getServiceBySlug,
  SERVICES_FOR_SEO,
} from "@/lib/constants/locations";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";
import {
  generateCityServiceContent,
  generateMetaDescription,
  generatePageTitle,
  generateFAQs,
} from "@/lib/seo/content-generator";
import { generateCityServicePageSchema } from "@/lib/seo/schema";

interface PageProps {
  params: Promise<{ city: string; service: string }>;
}

// Generate static params for all city+service combinations
export async function generateStaticParams() {
  return getAllCityServiceCombinations();
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, service } = await params;
  const location = getLocationBySlug(city);
  const serviceInfo = getServiceBySlug(service);

  if (!location || !serviceInfo) {
    return { title: "Not Found" };
  }

  const title = generatePageTitle(location, service);
  const description = generateMetaDescription(location, service);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/${location.slug}/${service}`,
      type: "website",
    },
    alternates: {
      canonical: `/${location.slug}/${service}`,
    },
  };
}

export default async function CityServicePage({ params }: PageProps) {
  const { city, service } = await params;
  const location = getLocationBySlug(city);
  const serviceInfo = getServiceBySlug(service);

  if (!location || !serviceInfo) {
    notFound();
  }

  const content = generateCityServiceContent(location, service);
  const faqs = generateFAQs(location, service);
  const schemas = generateCityServicePageSchema(location, service, faqs);

  if (!content) {
    notFound();
  }

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
                <Link href={`/${location.slug}`} className="hover:text-primary">
                  {location.name}
                </Link>
                <span>/</span>
                <span className="text-foreground">{serviceInfo.shortName}</span>
              </nav>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {location.name}, {location.region}
                  </p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                    {serviceInfo.shortName} in {location.name}, AZ
                  </h1>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                {content.intro}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="accent" size="lg">
                  <Link href="/order" className="group">
                    Schedule {serviceInfo.shortName} Pickup
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

        {/* Service Details */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Professional {serviceInfo.shortName} in {location.name}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {BUSINESS_INFO.name} provides expert {serviceInfo.name.toLowerCase()} throughout {location.name} and
                  the {location.region} area. Our professional team handles your items with care,
                  ensuring quality results every time.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-4">
                  What&apos;s Included:
                </h3>
                <ul className="space-y-3 mb-8">
                  {content.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-fresh flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild variant="accent" size="lg">
                  <Link href="/order">
                    Get Started in {location.name}
                  </Link>
                </Button>
              </div>

              {/* Pricing Card */}
              <div className="card-elevated p-8">
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  {serviceInfo.shortName} Pricing
                </h3>

                {service === "wash-and-fold" && (
                  <div className="mb-6">
                    <p className="text-4xl font-display font-bold text-primary">
                      $2.25<span className="text-lg font-normal text-muted-foreground">/lb</span>
                    </p>
                    <p className="text-sm text-muted-foreground">10lb minimum</p>
                  </div>
                )}

                {service === "dry-cleaning" && (
                  <div className="mb-6">
                    <p className="text-4xl font-display font-bold text-primary">
                      From $7.99<span className="text-lg font-normal text-muted-foreground">/item</span>
                    </p>
                    <p className="text-sm text-muted-foreground">Prices vary by garment</p>
                  </div>
                )}

                {service === "bedding-cleaning" && (
                  <div className="mb-6">
                    <p className="text-4xl font-display font-bold text-primary">
                      From $15.99<span className="text-lg font-normal text-muted-foreground">/item</span>
                    </p>
                    <p className="text-sm text-muted-foreground">Comforters, duvets, sheets</p>
                  </div>
                )}

                {(service === "commercial-laundry" || service === "hotel-laundry" || service === "restaurant-laundry" || service === "airbnb-laundry") && (
                  <div className="mb-6">
                    <p className="text-4xl font-display font-bold text-primary">
                      Custom
                    </p>
                    <p className="text-sm text-muted-foreground">Volume-based pricing</p>
                  </div>
                )}

                {service === "laundry-pickup-delivery" && (
                  <div className="mb-6">
                    <p className="text-4xl font-display font-bold text-primary">
                      FREE
                    </p>
                    <p className="text-sm text-muted-foreground">On orders over $35</p>
                  </div>
                )}

                <div className="space-y-3 mb-6 pt-6 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Standard Turnaround</span>
                    <span className="font-medium">24-48 hours</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Rush Service</span>
                    <span className="font-medium">Same Day (+$10)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Free Delivery</span>
                    <span className="font-medium">Orders $35+</span>
                  </div>
                </div>

                <Button asChild variant="accent" className="w-full">
                  <Link href="/order">Schedule Pickup</Link>
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  No contracts. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        {content.processSteps && (
          <section className="section-padding bg-secondary/30">
            <div className="container-custom">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-12">
                How {serviceInfo.shortName} Works in {location.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {content.processSteps.map((step, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {i + 1}
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* What to Expect */}
        {content.whatToExpect && (
          <section className="section-padding">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  What to Expect from {serviceInfo.shortName} in {location.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {content.whatToExpect}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Areas Served */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
              {serviceInfo.shortName} Areas in {location.name}
            </h2>

            {location.neighborhoodsServed && (
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-wrap justify-center gap-3">
                  {location.neighborhoodsServed.map((hood) => (
                    <span
                      key={hood}
                      className="px-4 py-2 bg-white rounded-full text-sm border border-border"
                    >
                      {hood}
                    </span>
                  ))}
                </div>
                <p className="text-center text-muted-foreground mt-6">
                  ZIP Codes: {location.zipCodes.join(", ")}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
                {serviceInfo.shortName} FAQs for {location.name}
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

        {/* Other Services */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
              Other Services in {location.name}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {content.otherServices.map((otherService) => (
                <Link
                  key={otherService.slug}
                  href={`/${location.slug}/${otherService.slug}`}
                  className="p-4 rounded-lg bg-white border border-border hover:border-primary/50 hover:shadow-md transition-all text-center"
                >
                  <p className="font-medium text-foreground">{otherService.shortName}</p>
                  <p className="text-xs text-muted-foreground">in {location.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Cities */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
              {serviceInfo.shortName} in Nearby Cities
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {content.nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/${nearbyCity.slug}/${service}`}
                  className="p-4 rounded-lg bg-white border border-border hover:border-primary/50 hover:shadow-md transition-all text-center"
                >
                  <p className="font-medium text-foreground">{nearbyCity.name}</p>
                  <p className="text-xs text-muted-foreground">{serviceInfo.shortName}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial Cross-Link */}
        {content.hasCommercialCrossLink && (
          <section className="section-padding bg-secondary/30">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <Building2 className="w-10 h-10 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Need Commercial {serviceInfo.shortName} in {location.name}?
                </h2>
                <p className="text-muted-foreground mb-6">
                  We offer dedicated commercial laundry solutions with volume pricing, dedicated account management, and flexible scheduling.
                </p>
                <Button asChild variant="outline">
                  <Link href="/commercial">Explore Commercial Services</Link>
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {content.cta}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Professional {serviceInfo.name.toLowerCase()} with free pickup and delivery in {location.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/order" className="group">
                  Schedule {serviceInfo.shortName} Pickup
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
                  {BUSINESS_INFO.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
