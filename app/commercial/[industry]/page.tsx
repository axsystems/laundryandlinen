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
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getIndustryBySlug,
  getAllIndustrySlugs,
  INDUSTRIES,
} from "@/lib/constants/industries";
import { LOCATIONS } from "@/lib/constants/locations";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";
import {
  generateCommercialPageTitle,
  generateCommercialMetaDescription,
  generateCommercialFAQs,
} from "@/lib/seo/commercial-content-generator";
import {
  generateCommercialPageSchema,
} from "@/lib/seo/schema";

interface PageProps {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params;
  const ind = getIndustryBySlug(industry);
  if (!ind) return { title: "Not Found" };

  const title = generateCommercialPageTitle(ind);
  const description = generateCommercialMetaDescription(ind);

  return {
    title,
    description,
    openGraph: { title, description, url: `/commercial/${industry}`, type: "website" },
    alternates: { canonical: `/commercial/${industry}` },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { industry } = await params;
  const ind = getIndustryBySlug(industry);
  if (!ind) notFound();

  const faqs = generateCommercialFAQs(ind);
  const schemas = generateCommercialPageSchema(ind);

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
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white/90">Home</Link>
              <span>/</span>
              <Link href="/commercial" className="hover:text-white/90">Commercial</Link>
              <span>/</span>
              <span className="text-white">{ind.name}</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                {ind.name}
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {ind.heroTagline}
              </h1>
              <p className="text-lg text-white/80 mb-8">{ind.heroDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href={`/commercial/quote?industry=${ind.slug}`} className="group">
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
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Why {ind.name} Need Professional Laundry
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">{ind.whyNeedService}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {ind.benefits.slice(0, 8).map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-fresh flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-12">
              How It Works
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

        {/* Stats */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {ind.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto card-elevated p-8">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Case Study</span>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-4">{ind.caseStudy.title}</h3>
              <div className="space-y-4">
                <div><p className="text-sm font-semibold text-foreground">Challenge:</p><p className="text-muted-foreground">{ind.caseStudy.challenge}</p></div>
                <div><p className="text-sm font-semibold text-foreground">Solution:</p><p className="text-muted-foreground">{ind.caseStudy.solution}</p></div>
                <div><p className="text-sm font-semibold text-foreground">Result:</p><p className="text-muted-foreground">{ind.caseStudy.result}</p></div>
              </div>
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
                  Frequently Asked Questions
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

        {/* City Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
              {ind.name} Laundry Service by City
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {LOCATIONS.map((loc) => (
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

        {/* CTA */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Streamline Your {ind.shortName} Laundry?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Get a custom quote tailored to your business needs. No commitment, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href={`/commercial/quote?industry=${ind.slug}`} className="group">
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
