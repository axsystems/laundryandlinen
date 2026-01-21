"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Scottsdale",
    rating: 5,
    text: "I used to spend my entire Sunday doing laundry. Now I get that time back for my family. The quality is better than I could do myself!",
    highlight: "Game changer for busy families",
  },
  {
    name: "Michael R.",
    location: "Tempe",
    rating: 5,
    text: "As a property manager, I need reliable service. Laundry & Linen handles all 50 of my units' turnover laundry. Never had a complaint from guests.",
    highlight: "Reliable commercial partner",
  },
  {
    name: "Jennifer L.",
    location: "Paradise Valley",
    rating: 5,
    text: "The dry cleaning is exceptional. My husband's suits have never looked better. Plus, free pickup saves us so much time.",
    highlight: "Premium quality cleaning",
  },
  {
    name: "David K.",
    location: "Gilbert",
    rating: 5,
    text: "I was skeptical at first, but the convenience is unbeatable. Scheduled online in 2 minutes, and my laundry was back in 24 hours. Perfectly folded!",
    highlight: "Fast and convenient",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export function Testimonials() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Loved by Phoenix Families & Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who&apos;ve reclaimed their weekends.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-elevated p-6 md:p-8 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Highlight tag */}
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                {testimonial.highlight}
              </div>

              {/* Quote text */}
              <p className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-wave flex items-center justify-center text-white font-semibold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10,000+", label: "Happy Customers" },
            { value: "50,000+", label: "Loads Cleaned" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "24hr", label: "Avg Turnaround" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
