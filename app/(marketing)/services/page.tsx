import type { Metadata } from "next";
import Link from "next/link";
import { Shirt, Sparkles, Bed, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants/pricing";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional laundry services including wash & fold, dry cleaning, bedding & linens, and commercial solutions for Phoenix Metro businesses.",
};

const iconMap: Record<string, React.ElementType> = {
  shirt: Shirt,
  sparkles: Sparkles,
  bed: Bed,
  building: Building2,
};

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Professional Laundry Services
            </h1>
            <p className="text-lg text-muted-foreground">
              From everyday laundry to specialty items, we handle it all with care.
              Quality cleaning, convenient delivery, and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Shirt;
              const isReversed = index % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                      {service.name}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    {/* Pricing info */}
                    <div className="bg-secondary/50 rounded-xl p-4 mb-6">
                      {"pricePerLb" in service && (
                        <p className="text-2xl font-display font-bold text-primary">
                          ${service.pricePerLb}/lb
                          <span className="text-sm font-normal text-muted-foreground ml-2">
                            ({service.minWeight}lb minimum)
                          </span>
                        </p>
                      )}
                      {"pricePerItem" in service && (
                        <p className="text-2xl font-display font-bold text-primary">
                          Starting at ${service.pricePerItem}
                          <span className="text-sm font-normal text-muted-foreground ml-2">
                            per item
                          </span>
                        </p>
                      )}
                      {"priceInfo" in service && (
                        <p className="text-2xl font-display font-bold text-primary">
                          {service.priceInfo}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">
                        Turnaround: {service.turnaround}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-fresh flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Item prices if available */}
                    {"itemPrices" in service && service.itemPrices && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">
                          Popular Items
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.itemPrices.map((item, i) => (
                            <div
                              key={i}
                              className="flex justify-between py-2 px-3 bg-secondary/30 rounded-lg text-sm"
                            >
                              <span>{item.item}</span>
                              <span className="font-medium">${item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button asChild variant="accent">
                      <Link href="/order" className="group">
                        Order Now
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>

                  <div className={isReversed ? "lg:order-1" : ""}>
                    {/* Placeholder for service image */}
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-wave/10 flex items-center justify-center">
                      <Icon className="w-24 h-24 text-primary/30" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Schedule your first pickup today and experience the convenience of
            professional laundry service.
          </p>
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
        </div>
      </section>
    </div>
  );
}
