import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  BarChart,
  Shield,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";
import { INDUSTRIES } from "@/lib/constants/industries";

export const metadata: Metadata = {
  title: "Commercial Laundry Services",
  description:
    "Professional commercial laundry solutions for apartments, hotels, Airbnbs, restaurants, gyms, and healthcare facilities in Phoenix Metro.",
};

const benefits = [
  {
    icon: Clock,
    title: "Same-Day Turnaround",
    description: "Rush service available for urgent needs",
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "Personal support for your business",
  },
  {
    icon: BarChart,
    title: "Volume Discounts",
    description: "Better rates as your volume grows",
  },
  {
    icon: Shield,
    title: "Consistent Quality",
    description: "Professional standards every time",
  },
];

const features = [
  "Custom pickup schedules",
  "Flexible billing options",
  "Priority processing",
  "Eco-friendly options",
  "Damage protection guarantee",
  "Online order management",
  "Real-time tracking",
  "Monthly reporting",
];

export default function CommercialPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-ocean-dark to-primary text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Commercial Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Professional Laundry for Your Business
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Volume-based pricing, dedicated support, and reliable service for
                apartments, hotels, restaurants, and more. Let us handle the
                laundry so you can focus on your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link href="/commercial/quote" className="group">
                    Get Custom Quote
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
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square rounded-2xl bg-white/10 flex items-center justify-center">
                <Building2 className="w-32 h-32 text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Custom solutions for every business type, from small properties to large enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/commercial/${industry.slug}`}
                className="card-elevated p-6 text-center group hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {industry.shortName}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {industry.description.slice(0, 100)}...
                </p>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "500+", label: "Business Clients" },
              { value: "28", label: "Cities Served" },
              { value: "24hr", label: "Turnaround Available" },
              { value: "99.5%", label: "On-Time Delivery" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold mb-2">{stat.value}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Why Businesses Choose Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand the unique demands of commercial laundry. Our
                dedicated team ensures your business always has fresh, clean
                linens when you need them.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-elevated p-8">
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                What&apos;s Included
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-fresh flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Pricing based on volume and frequency. Contact us for a custom
                  quote tailored to your needs.
                </p>
                <Button asChild variant="accent" className="w-full">
                  <Link href="/commercial/quote">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Request a Quote", desc: "Tell us about your business needs and volume requirements." },
              { step: "2", title: "Custom Plan", desc: "We design a service plan tailored to your schedule and budget." },
              { step: "3", title: "Scheduled Pickup", desc: "Regular pickups on your preferred schedule—daily, weekly, or custom." },
              { step: "4", title: "Fresh Delivery", desc: "Clean linens delivered on time, every time. Guaranteed." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Trusted by Local Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="card-elevated p-6">
              <p className="text-foreground mb-4">
                &ldquo;Managing 50+ apartment turnovers a month used to be a
                nightmare. Laundry & Linen handles everything with same-day
                service. Our guest reviews have never been better.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  M
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Michael R.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Property Manager, 52 Units
                  </p>
                </div>
              </div>
            </div>
            <div className="card-elevated p-6">
              <p className="text-foreground mb-4">
                &ldquo;The consistency is what sold me. Every tablecloth, every
                napkin—perfect quality every time. My restaurant staff can focus
                on service instead of laundry.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  S
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Sofia L.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Restaurant Owner, Scottsdale
                  </p>
                </div>
              </div>
            </div>
            <div className="card-elevated p-6">
              <p className="text-foreground mb-4">
                &ldquo;We switched from in-house laundry to Laundry &amp; Linen for our spa towels. The quality is better and we save over $2,000 a month in labor costs.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  J
                </div>
                <div>
                  <p className="font-semibold text-foreground">Jessica T.</p>
                  <p className="text-sm text-muted-foreground">Spa Owner, Chandler</p>
                </div>
              </div>
            </div>
            <div className="card-elevated p-6">
              <p className="text-foreground mb-4">
                &ldquo;As an Airbnb Superhost with 8 properties, I need reliable linen turnaround. Laundry &amp; Linen delivers every single time, even on back-to-back bookings.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  D
                </div>
                <div>
                  <p className="font-semibold text-foreground">David K.</p>
                  <p className="text-sm text-muted-foreground">Airbnb Superhost, Tempe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-8">
              Commercial Laundry FAQs
            </h2>
            <div className="space-y-4">
              {[
                { q: "What types of businesses do you serve?", a: "We serve hotels, Airbnb/vacation rentals, restaurants, apartments, gyms, spas, healthcare facilities, and event venues throughout the Phoenix Metro area." },
                { q: "Is there a minimum volume requirement?", a: "We work with businesses of all sizes. While there's no strict minimum, our commercial pricing is most competitive for businesses processing 50+ lbs per week." },
                { q: "How does pricing work for commercial accounts?", a: "Commercial pricing is based on volume, frequency, and item types. We offer per-pound, per-piece, and flat-rate options depending on your needs. Contact us for a custom quote." },
                { q: "Do you offer same-day commercial service?", a: "Yes! Same-day turnaround is available for commercial accounts. Many of our hotel and Airbnb clients rely on same-day service for back-to-back turnovers." },
                { q: "Can I try the service before committing?", a: "Absolutely. We offer trial periods with no long-term contracts. Start with a trial and scale up when you're ready." },
                { q: "Do you provide linen rental or just cleaning?", a: "Currently we provide professional cleaning of your linens. We can recommend linen suppliers if you need to purchase new inventory." },
                { q: "How do I track my commercial orders?", a: "Commercial accounts get access to our online dashboard for tracking orders, viewing invoices, and managing pickup schedules." },
                { q: "What areas do you serve for commercial laundry?", a: "We serve all of the Phoenix Metro area including Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, and more—28 cities in total." },
              ].map((faq, i) => (
                <div key={i} className="card-elevated p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Streamline Your Laundry?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Get a custom quote tailored to your business needs. No commitment, no
            pressure—just honest pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link href="/commercial/quote" className="group">
                Get Your Custom Quote
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
  );
}
