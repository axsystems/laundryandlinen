"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question or need help? We&apos;re here for you. Reach out and
              we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">{BUSINESS_INFO.phone}</p>
                    <p className="text-sm text-muted-foreground">Mon-Sat: 7am-8pm</p>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">{BUSINESS_INFO.email}</p>
                    <p className="text-sm text-muted-foreground">We reply within 24hrs</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Service Area</p>
                    <p className="text-muted-foreground">Phoenix Metro Area</p>
                    <Link
                      href="/areas"
                      className="text-sm text-primary hover:underline"
                    >
                      Check your ZIP code
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Hours</p>
                    <p className="text-muted-foreground">Monday - Saturday</p>
                    <p className="text-muted-foreground">7:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Quick Help */}
              <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/10">
                <MessageSquare className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Need Quick Help?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check our FAQ for instant answers to common questions.
                </p>
                <Link
                  href="/how-it-works"
                  className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1"
                >
                  View FAQ
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-elevated p-8">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-fresh/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-fresh" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 24
                      hours.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 555-5555"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="flex h-11 w-full rounded-lg border border-input bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="order">Order Question</option>
                          <option value="pricing">Pricing Question</option>
                          <option value="commercial">Commercial Services</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="flex w-full rounded-lg border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
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
            Skip the contact form and schedule your first pickup directly.
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
