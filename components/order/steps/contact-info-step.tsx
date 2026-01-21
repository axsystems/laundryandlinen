"use client";

import { ArrowLeft, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { OrderFormData } from "@/lib/cleancloud/types";

interface ContactInfoStepProps {
  formData: OrderFormData;
  updateFormData: (data: Partial<OrderFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function ContactInfoStep({
  formData,
  updateFormData,
  onNext,
  onBack,
}: ContactInfoStepProps) {
  const isValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.address.trim() &&
    formData.city.trim();

  const handleContinue = () => {
    if (isValid) {
      onNext();
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-display font-bold text-foreground mb-2">
          Contact Information
        </h2>
        <p className="text-muted-foreground">
          Where should we pick up and deliver your laundry?
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              First Name *
            </label>
            <Input
              type="text"
              placeholder="John"
              value={formData.firstName}
              onChange={(e) => updateFormData({ firstName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Last Name *
            </label>
            <Input
              type="text"
              placeholder="Doe"
              value={formData.lastName}
              onChange={(e) => updateFormData({ lastName: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <Input
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Phone *
          </label>
          <Input
            type="tel"
            placeholder="(555) 555-5555"
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Street Address *
          </label>
          <Input
            type="text"
            placeholder="123 Main St, Apt 4"
            value={formData.address}
            onChange={(e) => updateFormData({ address: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              City *
            </label>
            <Input
              type="text"
              placeholder="Phoenix"
              value={formData.city}
              onChange={(e) => updateFormData({ city: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              ZIP Code
            </label>
            <Input
              type="text"
              value={formData.zipCode}
              disabled
              className="bg-secondary"
            />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <Button onClick={onBack} variant="outline" size="lg">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
          <Button
            onClick={handleContinue}
            disabled={!isValid}
            variant="accent"
            size="lg"
            className="flex-1"
          >
            Continue
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
