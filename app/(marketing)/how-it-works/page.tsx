import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck,
  Package,
  Truck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  CreditCard,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how our laundry pickup and delivery service works. Schedule online, we pick up, clean, and deliver fresh laundry to your door.",
};

const steps = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Schedule Online",
    description:
      "Choose a pickup time that works for you. Morning, afternoon, or evening—we work around your schedule.",
    details: [
      "Book in under 2 minutes",
      "Same-day pickup available",
      "Flexible rescheduling",
    ],
  },
  {
    icon: Package,
    number: "02",
    title: "We Pick Up",
    description:
      "Our friendly driver arrives at your door. Hand over your laundry—we provide bags if you need them.",
    details: [
      "No-contact option available",
      "We provide laundry bags",
      "Real-time driver tracking",
    ],
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Expert Cleaning",
    description:
      "Your items are sorted, washed with premium products, and handled with the utmost care.",
    details: [
      "Sorted by color & fabric",
      "Eco-friendly detergents",
      "Special care instructions honored",
    ],
  },
  {
    icon: Truck,
    number: "04",
    title: "Fresh Delivery",
    description:
      "Clean, fresh, and neatly packaged—delivered right back to your doorstep.",
    details: [
      "Folded or hung per preference",
      "24-48 hour turnaround",
      "Satisfaction guaranteed",
    ],
  },
];

const features = [
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Track your order status from pickup to delivery via text or email.",
  },
  {
    icon: CreditCard,
    title: "Pay After Cleaning",
    description: "No upfront payment. We weigh and charge after processing.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never miss a pickup with our automated reminder system.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              How It Works
            </h1>
            <p className="text-lg text-muted-foreground">
              Fresh, clean laundry in four simple steps. No more laundromat trips,
              no more wasted weekends.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  {/* Step indicator */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-wave flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-5xl font-display font-bold text-primary/20">
                      {step.number}
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-fresh flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  {/* Illustration placeholder */}
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-wave/10 flex items-center justify-center">
                    <step.icon className="w-24 h-24 text-primary/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">
            Built for Convenience
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">
              Common Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How do I prepare my laundry?",
                  a: "Just gather your clothes in any bag—we'll provide professional laundry bags for future pickups. Remove any items from pockets and let us know about any special care items.",
                },
                {
                  q: "What if I'm not home for pickup/delivery?",
                  a: "No problem! You can leave your laundry in a secure location (like your porch or with a doorman) and we'll do the same for delivery. Just add instructions in your order.",
                },
                {
                  q: "How do you handle delicate items?",
                  a: "We sort all laundry before cleaning. Delicates are washed separately on gentle cycles. For extra care, select 'hang dry' or mark items requiring special treatment.",
                },
                {
                  q: "What happens if something is damaged?",
                  a: "We take every precaution, but if something goes wrong, we'll make it right. Contact us within 48 hours and we'll re-clean or compensate you for any damage.",
                },
              ].map((faq, i) => (
                <div key={i} className="p-6 card-elevated">
                  <h3 className="font-display font-semibold text-foreground mb-3">
                    {faq.q}
                  </h3>
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
            Ready to Try It?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Schedule your first pickup in under 2 minutes. No commitments, no
            contracts—just clean laundry.
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
