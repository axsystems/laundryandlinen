"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";

const benefits = [
  "Free pickup & delivery on orders $35+",
  "24-48 hour turnaround",
  "Satisfaction guaranteed",
  "No contracts or commitments",
];

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-12 lg:p-16 text-white"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Ready to Reclaim Your Weekends?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Stop spending hours on laundry. Schedule your first pickup today
                and experience the freedom of fresh, clean clothes delivered to
                your door.
              </p>

              {/* Benefits list */}
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-fresh-light flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="xl"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link href="/order" className="group">
                    Schedule Free Pickup
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="xl"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 hover:text-white"
                >
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}>
                    <Phone className="w-5 h-5" />
                    {BUSINESS_INFO.phone}
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Placeholder for image/illustration */}
                <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-4xl">🧺</span>
                    </div>
                    <p className="text-xl font-display font-semibold">
                      Your First Order
                    </p>
                    <p className="text-white/70 mt-2">
                      Use code <span className="font-bold">FRESH20</span> for 20%
                      off
                    </p>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-accent shadow-lg"
                >
                  <span className="font-semibold">Free Delivery!</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
