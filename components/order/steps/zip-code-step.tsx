"use client";

import { useState } from "react";
import { MapPin, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isZipCodeServiceable, getRegionByZipCode } from "@/lib/constants/service-areas";
import type { OrderFormData } from "@/lib/cleancloud/types";

interface ZipCodeStepProps {
  formData: OrderFormData;
  updateFormData: (data: Partial<OrderFormData>) => void;
  onNext: () => void;
}

export function ZipCodeStep({ formData, updateFormData, onNext }: ZipCodeStepProps) {
  const [checked, setChecked] = useState(!!formData.region);
  const [serviceable, setServiceable] = useState(!!formData.region);

  const handleCheck = () => {
    const cleaned = formData.zipCode.replace(/\D/g, "");
    if (cleaned.length === 5) {
      const isServiceable = isZipCodeServiceable(cleaned);
      const region = getRegionByZipCode(cleaned);
      setChecked(true);
      setServiceable(isServiceable);
      if (isServiceable && region) {
        updateFormData({ region });
      }
    }
  };

  const handleContinue = () => {
    if (serviceable) {
      onNext();
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <MapPin className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-display font-bold text-foreground mb-2">
          Check Your Service Area
        </h2>
        <p className="text-muted-foreground">
          Enter your ZIP code to see if we deliver to your area.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            ZIP Code
          </label>
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="85001"
              value={formData.zipCode}
              onChange={(e) => {
                updateFormData({ zipCode: e.target.value, region: "" });
                setChecked(false);
              }}
              onKeyDown={(e) => e.key === "Enter" && handleCheck()}
              maxLength={5}
              className="text-lg"
            />
            <Button onClick={handleCheck} variant="outline">
              Check
            </Button>
          </div>
        </div>

        {checked && (
          <div
            className={`p-4 rounded-xl ${
              serviceable
                ? "bg-fresh/10 border border-fresh/30"
                : "bg-destructive/10 border border-destructive/30"
            }`}
          >
            {serviceable ? (
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-fresh flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">
                    Great news! We service your area.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formData.region} region
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">
                    We don&apos;t service this ZIP code yet.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Contact us to request coverage in your area.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        <Button
          onClick={handleContinue}
          disabled={!serviceable}
          variant="accent"
          size="lg"
          className="w-full"
        >
          Continue
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
