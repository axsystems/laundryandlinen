"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, Package, Truck, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Schedule Pickup",
    description:
      "Choose a convenient time online. We'll send you reminders so you never miss your pickup.",
  },
  {
    icon: Package,
    number: "02",
    title: "We Collect",
    description:
      "Our driver arrives at your door. Just hand over your laundry—we provide bags if needed.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Expert Cleaning",
    description:
      "Your items are sorted, cleaned with premium products, and handled with care.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Fresh Delivery",
    description:
      "Clean, folded, and delivered back to you. Track your order every step of the way.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Laundry Made Simple
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four easy steps to fresh, clean laundry without lifting a finger.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative"
            >
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
              )}

              <div className="relative z-10 text-center">
                {/* Icon container */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-wave text-white mb-6 shadow-lg">
                  <step.icon className="w-10 h-10" />
                </div>

                {/* Step number */}
                <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-2 text-sm font-bold text-primary/50">
                  {step.number}
                </div>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button asChild variant="accent" size="lg">
            <Link href="/order" className="group">
              Get Started Today
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
