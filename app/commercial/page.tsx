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
  Bed,
  UtensilsCrossed,
  Dumbbell,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";

export const metadata: Metadata = {
  title: "Commercial Laundry Services",
  description:
    "Professional commercial laundry solutions for apartments, hotels, Airbnbs, restaurants, gyms, and healthcare facilities in Phoenix Metro.",
};

const industries = [
  {
    icon: Home,
    title: "Apartments & Multi-Family",
    description:
      "Turnover laundry, amenity linens, and tenant services for property managers.",
  },
  {
    icon: Bed,
    title: "Hotels & Airbnbs",
    description:
      "Fresh linens, towels, and bedding for hospitality excellence.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Spas",
    description:
      "Tablecloths, napkins, towels, and uniforms for service industries.",
  },
  {
    icon: Dumbbell,
    title: "Gyms & Fitness",
    description:
      "Towel service, workout gear, and facility linens for fitness centers.",
  },
];

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
              Custom solutions for every business type, from small properties to
              large enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div key={industry.title} className="card-elevated p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
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

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Trusted by Local Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
