"use client";

import { ArrowLeft, ArrowRight, Sparkles, Shirt, Bed, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SERVICES, ADDONS } from "@/lib/constants/pricing";
import type { OrderFormData } from "@/lib/cleancloud/types";

interface ServiceSelectionStepProps {
  formData: OrderFormData;
  updateFormData: (data: Partial<OrderFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const serviceIcons: Record<string, React.ElementType> = {
  wash_fold: Shirt,
  dry_cleaning: Sparkles,
  bedding: Bed,
  mixed: Layers,
};

const serviceTypeMap: Record<string, string> = {
  "wash-fold": "wash_fold",
  "dry-cleaning": "dry_cleaning",
  bedding: "bedding",
  commercial: "wash_fold",
};

export function ServiceSelectionStep({
  formData,
  updateFormData,
  onNext,
  onBack,
}: ServiceSelectionStepProps) {
  const toggleAddon = (addonId: string) => {
    const current = formData.addons || [];
    const updated = current.includes(addonId)
      ? current.filter((id) => id !== addonId)
      : [...current, addonId];
    updateFormData({ addons: updated });
  };

  return (
    <div>
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-display font-bold text-foreground mb-2">
          Select Your Service
        </h2>
        <p className="text-muted-foreground">
          Choose the type of laundry service you need.
        </p>
      </div>

      <div className="space-y-6">
        {/* Service Type Selection */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Service Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            {SERVICES.filter((s) => s.id !== "commercial").map((service) => {
              const serviceType = serviceTypeMap[service.id] || service.id;
              const Icon = serviceIcons[serviceType] || Shirt;
              const isSelected = formData.serviceType === serviceType;

              return (
                <button
                  key={service.id}
                  onClick={() =>
                    updateFormData({
                      serviceType: serviceType as OrderFormData["serviceType"],
                    })
                  }
                  className={cn(
                    "p-4 rounded-xl border-2 text-left transition-all",
                    isSelected
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-6 h-6 mb-2",
                      isSelected ? "text-primary" : "text-muted-foreground"
                    )}
                  />
                  <p className="font-semibold text-foreground">{service.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {"pricePerLb" in service
                      ? `$${service.pricePerLb}/lb`
                      : "From $" + ("pricePerItem" in service ? service.pricePerItem : "8.99")}
                  </p>
                </button>
              );
            })}
            {/* Mixed option */}
            <button
              onClick={() => updateFormData({ serviceType: "mixed" })}
              className={cn(
                "p-4 rounded-xl border-2 text-left transition-all",
                formData.serviceType === "mixed"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              )}
            >
              <Layers
                className={cn(
                  "w-6 h-6 mb-2",
                  formData.serviceType === "mixed"
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              />
              <p className="font-semibold text-foreground">Mixed Services</p>
              <p className="text-xs text-muted-foreground mt-1">
                Multiple service types
              </p>
            </button>
          </div>
        </div>

        {/* Estimated Weight (for wash & fold) */}
        {(formData.serviceType === "wash_fold" ||
          formData.serviceType === "mixed") && (
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Estimated Weight (lbs)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={formData.estimatedWeight || 15}
                onChange={(e) =>
                  updateFormData({ estimatedWeight: parseInt(e.target.value) })
                }
                className="flex-1"
              />
              <span className="text-lg font-semibold text-primary w-16 text-center">
                {formData.estimatedWeight || 15} lbs
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Estimate: ${((formData.estimatedWeight || 15) * 2.25).toFixed(2)}
            </p>
          </div>
        )}

        {/* Add-ons */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Add-ons (Optional)
          </label>
          <div className="space-y-2">
            {ADDONS.map((addon) => {
              const isSelected = (formData.addons || []).includes(addon.id);
              return (
                <button
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={cn(
                    "w-full p-3 rounded-lg border flex items-center justify-between transition-all",
                    isSelected
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-5 h-5 rounded border-2 flex items-center justify-center",
                        isSelected
                          ? "border-primary bg-primary text-white"
                          : "border-muted-foreground"
                      )}
                    >
                      {isSelected && (
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-foreground">{addon.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {addon.description}
                      </p>
                    </div>
                  </div>
                  <span className="font-semibold text-primary">
                    {addon.price === 0 ? "Free" : `+$${addon.price}`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Special Instructions (Optional)
          </label>
          <textarea
            placeholder="Any special care instructions..."
            value={formData.notes || ""}
            onChange={(e) => updateFormData({ notes: e.target.value })}
            rows={3}
            className="w-full rounded-lg border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 resize-none"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <Button onClick={onBack} variant="outline" size="lg">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
          <Button onClick={onNext} variant="accent" size="lg" className="flex-1">
            Continue
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
