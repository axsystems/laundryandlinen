import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Building2,
  ArrowRight,
  CheckCircle2,
  Phone,
  Star,
  HelpCircle,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getIndustryBySlug,
  getAllIndustryCityCombinations,
  INDUSTRIES,
} from "@/lib/constants/industries";
import {
  getLocationBySlug,
  getNearbyCities,
} from "@/lib/constants/locations";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";
import {
  generateCommercialPageTitle,
  generateCommercialMetaDescription,
  generateIndustryCityContent,
  generateCommercialFAQs,
} from "@/lib/seo/commercial-content-generator";
import {
  generateCommercialCityPageSchema,
} from "@/lib/seo/schema";

interface PageProps {
  params: Promise<{ industry: string; city: string }>;
}

export async function generateStaticParams() {
  return getAllIndustryCityCombinations();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry, city } = await params;
  const ind = getIndustryBySlug(industry);
  const location = getLocationBySlug(city);
  if (!ind || !location) return { title: "Not Found" };

  const title = generateCommercialPageTitle(ind, location);
  const description = generateCommercialMetaDescription(ind, location);

  return {
    title,
    description,
    openGraph: { title, description, url: `/commercial/${industry}/${city}`, type: "website" },
    alternates: { canonical: `/commercial/${industry}/${city}` },
  };
}

export default async function IndustryCityPage({ params }: PageProps) {
  const { industry, city } = await params;
  const ind = getIndustryBySlug(industry);
  const location = getLocationBySlug(city);
  if (!ind || !location) notFound();

  const content = generateIndustryCityContent(ind, location);
  const faqs = generateCommercialFAQs(ind, location);
  const schemas = generateCommercialCityPageSchema(ind, location, faqs);
  const nearbyCities = getNearbyCities(city, 6);
  const otherIndustries = INDUSTRIES.filter((i) => i.slug !== ind.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <div className="pt-24 md:pt-32">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-ocean-dark to-primary text-white">
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
              <Link href="/" className="hover:text-white/90">Home</Link>
              <span>/</span>
              <Link href="/commercial" className="hover:text-white/90">Commercial</Link>
              <span>/</span>
              <Link href={`/commercial/${ind.slug}`} className="hover:text-white/90">{ind.shortName}</Link>
              <span>/</span>
              <span className="text-white">{location.name}</span>
            </nav>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-white/70" />
                <span className="text-white/70">{location.name}, {location.region}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                {ind.name} Laundry Service in {location.name}, AZ
              </h1>
              <p className="text-lg text-white/80 mb-8">{content.intro}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href={`/commercial/quote?industry=${ind.slug}&city=${location.slug}`} className="group">
                    Get Custom Quote
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    {BUSINESS_INFO.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Why {location.name} {ind.shortName} Businesses Choose Us
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">{content.whyNeedText}</p>
                <ul className="space-y-3">
                  {ind.benefits.slice(0, 6).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-fresh flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-elevated p-8">
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  Service Details
                </h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Pricing Model</p>
                    <p className="font-medium">{ind.pricingInfo.model}</p>
                  </div>
                  {ind.pricingInfo.startingAt && (
                    <div>
                      <p className="text-sm text-muted-foreground">Starting At</p>
                      <p className="font-medium text-primary text-xl">{ind.pricingInfo.startingAt}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground">Service Area</p>
                    <p className="font-medium">{location.name} and {location.region}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{ind.pricingInfo.note}</p>
                <Button asChild variant="accent" className="w-full">
                  <Link href={`/commercial/quote?industry=${ind.slug}&city=${location.slug}`}>
                    Request a Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-12">
              How It Works in {location.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {ind.processSteps.map((step, i) => (
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

        {/* Testimonial */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-xl text-foreground mb-6 leading-relaxed">
                &ldquo;{ind.testimonial.quote}&rdquo;
              </blockquote>
              <p className="font-semibold text-foreground">{ind.testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{ind.testimonial.title}, {ind.testimonial.location}</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-8">
                <HelpCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  {ind.shortName} Laundry FAQs for {location.name}
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="card-elevated p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Cities */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
              {ind.shortName} Laundry in Nearby Cities
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {nearbyCities.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/commercial/${ind.slug}/${loc.slug}`}
                  className="p-4 rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all text-center"
                >
                  <p className="font-medium text-foreground">{loc.name}</p>
                  <p className="text-xs text-muted-foreground">{ind.shortName} Service</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other Industries */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
              Other Commercial Services in {location.name}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {otherIndustries.map((other) => (
                <Link
                  key={other.slug}
                  href={`/commercial/${other.slug}/${location.slug}`}
                  className="p-4 rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all text-center"
                >
                  <p className="font-medium text-foreground">{other.shortName}</p>
                  <p className="text-xs text-muted-foreground">in {location.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {content.cta}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Professional {ind.shortName.toLowerCase()} laundry with free pickup and delivery in {location.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href={`/commercial/quote?industry=${ind.slug}&city=${location.slug}`} className="group">
                  Get Your Custom Quote
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
