"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  ArrowLeft,
  Send,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";

const businessTypes = [
  "Apartment Complex / Multi-Family",
  "Hotel / Resort",
  "Airbnb / Vacation Rental",
  "Restaurant / Bar",
  "Spa / Salon",
  "Gym / Fitness Center",
  "Healthcare / Medical",
  "Other",
];

const volumeOptions = [
  "Under 100 lbs/week",
  "100-500 lbs/week",
  "500-1000 lbs/week",
  "1000-2500 lbs/week",
  "2500+ lbs/week",
  "Not sure",
];

export default function CommercialQuotePage() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    propertySize: "",
    estimatedVolume: "",
    currentSolution: "",
    services: [] as string[],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/b2b-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to submit");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-fresh/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-fresh" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Quote Request Received!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for your interest. Our commercial team will review your
              information and get back to you within 1 business day with a
              customized quote.
            </p>

            <div className="card-elevated p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-4">
                What Happens Next?
              </h3>
              <div className="space-y-4 text-left">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary text-sm">1</span>
                  </div>
                  <p className="text-muted-foreground">
                    Our team reviews your requirements and prepares a custom quote.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary text-sm">2</span>
                  </div>
                  <p className="text-muted-foreground">
                    We&apos;ll reach out to discuss your needs and answer questions.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary text-sm">3</span>
                  </div>
                  <p className="text-muted-foreground">
                    Start service with a trial period—no long-term commitment.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent">
                <Link href="/">Back to Home</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-32 pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm" className="mb-4">
              <Link href="/commercial">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Commercial
              </Link>
            </Button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  Request a Quote
                </h1>
                <p className="text-muted-foreground">
                  Tell us about your business and we&apos;ll create a custom proposal.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card-elevated p-6 md:p-8">
            <div className="space-y-6">
              {/* Business Info */}
              <div>
                <h2 className="text-lg font-display font-semibold text-foreground mb-4">
                  Business Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Name *
                    </label>
                    <Input
                      name="businessName"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Your Business Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      required
                      value={formData.businessType}
                      onChange={handleChange}
                      className="flex h-11 w-full rounded-lg border border-input bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                    >
                      <option value="">Select type</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-lg font-display font-semibold text-foreground mb-4">
                  Contact Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Contact Name *
                    </label>
                    <Input
                      name="contactName"
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@business.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Property Size
                    </label>
                    <Input
                      name="propertySize"
                      type="text"
                      value={formData.propertySize}
                      onChange={handleChange}
                      placeholder="e.g., 50 units, 100 rooms"
                    />
                  </div>
                </div>
              </div>

              {/* Service Needs */}
              <div>
                <h2 className="text-lg font-display font-semibold text-foreground mb-4">
                  Service Needs
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Estimated Weekly Volume
                    </label>
                    <select
                      name="estimatedVolume"
                      value={formData.estimatedVolume}
                      onChange={handleChange}
                      className="flex h-11 w-full rounded-lg border border-input bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                    >
                      <option value="">Select volume</option>
                      {volumeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Services Needed
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Sheets & Bedding",
                        "Towels",
                        "Table Linens",
                        "Uniforms",
                        "Wash & Fold",
                        "Dry Cleaning",
                      ].map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`p-3 rounded-lg border text-sm text-left transition-colors ${
                            formData.services.includes(service)
                              ? "border-primary bg-primary/5 text-foreground"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {formData.services.includes(service) && (
                            <CheckCircle2 className="w-4 h-4 text-primary inline mr-2" />
                          )}
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Current Solution
                    </label>
                    <Input
                      name="currentSolution"
                      type="text"
                      value={formData.currentSolution}
                      onChange={handleChange}
                      placeholder="How do you currently handle laundry?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Any specific requirements or questions..."
                      className="w-full rounded-lg border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 resize-none"
                    />
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                variant="accent"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Quote Request
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Contact Alternative */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Prefer to talk? Reach out directly:
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="w-4 h-4" />
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
