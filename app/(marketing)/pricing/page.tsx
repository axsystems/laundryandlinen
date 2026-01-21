import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SERVICES,
  ADDONS,
  MINIMUM_ORDER,
  FREE_PICKUP_MINIMUM,
  DELIVERY_FEE,
} from "@/lib/constants/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for all our laundry services. Wash & fold starting at $2.25/lb. Free pickup and delivery on orders over $35.",
};

export default function PricingPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              No hidden fees. No surprises. Just great laundry service at fair prices.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-8 bg-fresh/10">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center">
            <div>
              <p className="text-2xl font-display font-bold text-fresh">FREE</p>
              <p className="text-sm text-muted-foreground">
                Pickup & Delivery on ${FREE_PICKUP_MINIMUM}+
              </p>
            </div>
            <div className="h-12 w-px bg-border hidden md:block" />
            <div>
              <p className="text-2xl font-display font-bold text-foreground">
                ${DELIVERY_FEE}
              </p>
              <p className="text-sm text-muted-foreground">
                Delivery fee under ${FREE_PICKUP_MINIMUM}
              </p>
            </div>
            <div className="h-12 w-px bg-border hidden md:block" />
            <div>
              <p className="text-2xl font-display font-bold text-foreground">
                ${MINIMUM_ORDER}
              </p>
              <p className="text-sm text-muted-foreground">Minimum order</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="card-elevated p-6 flex flex-col h-full"
              >
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                {/* Price */}
                <div className="py-4 border-y border-border mb-4">
                  {"pricePerLb" in service && (
                    <div>
                      <p className="text-3xl font-display font-bold text-primary">
                        ${service.pricePerLb}
                        <span className="text-lg font-normal text-muted-foreground">
                          /lb
                        </span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {service.minWeight}lb minimum
                      </p>
                    </div>
                  )}
                  {"pricePerItem" in service && (
                    <div>
                      <p className="text-3xl font-display font-bold text-primary">
                        ${service.pricePerItem}+
                      </p>
                      <p className="text-sm text-muted-foreground">per item</p>
                    </div>
                  )}
                </div>

                {/* Item prices if available */}
                {"itemPrices" in service && service.itemPrices && (
                  <div className="mb-4 flex-grow">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Popular Items:
                    </h4>
                    <ul className="space-y-1">
                      {service.itemPrices.slice(0, 4).map((item, i) => (
                        <li
                          key={i}
                          className="flex justify-between text-sm text-muted-foreground"
                        >
                          <span>{item.item}</span>
                          <span>${item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-fresh flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-muted-foreground mb-4">
                  Turnaround: {service.turnaround}
                </p>

                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link href="/order">Order Now</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Commercial pricing */}
          <div className="mt-12 card-elevated p-8 bg-gradient-to-r from-primary/5 to-wave/5">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Commercial Services
                </h3>
                <p className="text-muted-foreground mb-6">
                  Custom pricing for apartments, hotels, Airbnbs, restaurants, gyms,
                  and other businesses. Volume discounts available.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-fresh" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-fresh" />
                    <span>Same-day turnaround available</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-fresh" />
                    <span>Custom billing & invoicing</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-fresh" />
                    <span>Volume-based pricing</span>
                  </li>
                </ul>
                <Button asChild variant="accent">
                  <Link href="/commercial/quote" className="group">
                    Get Custom Quote
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="text-center">
                <p className="text-4xl font-display font-bold text-primary mb-2">
                  Custom Pricing
                </p>
                <p className="text-muted-foreground">
                  Based on volume and frequency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground text-center mb-8">
              Available Add-ons
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {ADDONS.map((addon) => (
                <div
                  key={addon.id}
                  className="flex items-center justify-between p-4 bg-white rounded-xl"
                >
                  <div>
                    <p className="font-medium text-foreground">{addon.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {addon.description}
                    </p>
                  </div>
                  <p className="font-display font-bold text-primary ml-4">
                    {addon.price === 0 ? "Free" : `+$${addon.price}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground text-center mb-8">
              Pricing FAQ
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How is wash & fold priced?",
                  a: "Wash & fold is priced by the pound with a 10lb minimum. We weigh your laundry when it arrives and charge accordingly. Average loads are 10-15 lbs.",
                },
                {
                  q: "When is pickup/delivery free?",
                  a: `Pickup and delivery are free on all orders over $${FREE_PICKUP_MINIMUM}. Orders under this amount have a $${DELIVERY_FEE} delivery fee.`,
                },
                {
                  q: "How do I pay?",
                  a: "We accept all major credit cards. You'll be charged after we weigh and process your order. No payment required at pickup.",
                },
                {
                  q: "What's included in dry cleaning prices?",
                  a: "Our dry cleaning prices include cleaning, pressing, and minor repairs. Garments are returned on hangers with protective bags.",
                },
              ].map((faq, i) => (
                <div key={i} className="p-6 card-elevated">
                  <div className="flex gap-3">
                    <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {faq.q}
                      </h3>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </div>
                  </div>
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
            Ready to Save Time?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Join thousands of Phoenix residents enjoying fresh, clean laundry
            without the hassle.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            <Link href="/order" className="group">
              Schedule Your First Pickup
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
