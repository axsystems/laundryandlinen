"use client";

import { motion } from "framer-motion";
import {
  Shirt,
  Sparkles,
  Bed,
  Building2,
  Timer,
  Leaf,
  Award,
  HeartHandshake
} from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Wash & Fold",
    description: "Your everyday laundry washed, dried, and neatly folded. Starting at $2.25/lb.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Sparkles,
    title: "Dry Cleaning",
    description: "Professional cleaning for suits, dresses, and delicate garments.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Bed,
    title: "Bedding & Linens",
    description: "Comforters, sheets, towels, and tablecloths—crisp and fresh.",
    color: "bg-fresh/10 text-fresh",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Bulk solutions for apartments, hotels, restaurants, and gyms.",
    color: "bg-wave/10 text-wave",
  },
];

const benefits = [
  {
    icon: Timer,
    title: "24-48 Hour Turnaround",
    description: "Fast service without sacrificing quality. Rush options available.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Premium, environmentally conscious detergents and processes.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Not satisfied? We'll re-clean or refund—no questions asked.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    description: "Special instructions honored. Your preferences remembered.",
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Services Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Everything You Need, Handled
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From everyday laundry to specialty items, we&apos;ve got you covered with
            professional cleaning services.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="card-elevated p-6 text-center group cursor-pointer"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.color} mb-4 transition-transform group-hover:scale-110`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Why Choose Laundry & Linen?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re not just another laundry service. Here&apos;s what sets us apart.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
