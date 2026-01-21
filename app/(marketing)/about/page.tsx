import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Leaf, Users, Award, Target, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Laundry & Linen - Phoenix Metro's trusted laundry pickup and delivery service. Our mission is to give you back your time.",
};

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our priority. We treat every garment like our own.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description: "Premium, environmentally friendly detergents and sustainable practices.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Proudly serving Phoenix families and businesses since day one.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "No shortcuts. Professional cleaning with attention to every detail.",
  },
];

const stats = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "50,000+", label: "Loads Cleaned" },
  { value: "4.9", label: "Average Rating" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              About Laundry & Linen
            </h1>
            <p className="text-lg text-muted-foreground">
              We started with a simple idea: everyone deserves more time for what
              matters. Let us handle the laundry while you live your life.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Giving You Back Your Time
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The average family spends 5-7 hours per week on laundry. That&apos;s
                over 300 hours a year—precious time that could be spent with loved
                ones, pursuing hobbies, or simply relaxing.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We built Laundry & Linen to change that. With professional cleaning,
                free pickup and delivery, and lightning-fast turnaround, we make
                laundry one less thing you have to worry about.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you&apos;re a busy professional, a growing family, or a
                business owner, we&apos;re here to help you reclaim your time.
              </p>
            </div>
            <div>
              {/* Image placeholder */}
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-wave/10 flex items-center justify-center">
                <Sparkles className="w-24 h-24 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground text-center mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                Laundry & Linen was born from a simple frustration: there had to be
                a better way to handle laundry in the modern world.
              </p>
              <p>
                As Phoenix grew, so did the demands on people&apos;s time. Between
                work, family, and everything else, laundry became just another
                chore eating into precious hours.
              </p>
              <p>
                We saw an opportunity to make life easier. By combining
                professional cleaning expertise with modern convenience, we created
                a service that truly gives people their time back.
              </p>
              <p>
                Today, we serve thousands of families and businesses across the
                Phoenix Metro area. Our team takes pride in every load we clean,
                treating your clothes with the same care we&apos;d give our own.
              </p>
              <p>
                We&apos;re more than a laundry service—we&apos;re a partner in
                helping you live a better, less cluttered life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Join the Laundry & Linen Family
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Experience the difference professional laundry service can make.
            Schedule your first pickup today.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            <Link href="/order" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
