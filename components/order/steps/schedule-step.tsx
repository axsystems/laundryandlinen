"use client";

import { ArrowLeft, ArrowRight, Calendar, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TIME_SLOTS } from "@/lib/cleancloud/types";
import type { OrderFormData } from "@/lib/cleancloud/types";

interface ScheduleStepProps {
  formData: OrderFormData;
  updateFormData: (data: Partial<OrderFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function ScheduleStep({
  formData,
  updateFormData,
  onNext,
  onBack,
}: ScheduleStepProps) {
  // Generate available dates (next 7 days, excluding Sunday)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      // Skip Sundays
      if (date.getDay() === 0) continue;

      dates.push({
        value: date.toISOString().split("T")[0],
        label: date.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
        dayName: date.toLocaleDateString("en-US", { weekday: "long" }),
      });
    }

    return dates;
  };

  const availableDates = getAvailableDates();
  const isValid = formData.pickupDate && formData.pickupTimeSlot;

  return (
    <div>
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Calendar className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-display font-bold text-foreground mb-2">
          Schedule Pickup
        </h2>
        <p className="text-muted-foreground">
          Choose when we should pick up your laundry.
        </p>
      </div>

      <div className="space-y-6">
        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Pickup Date
          </label>
          <div className="grid grid-cols-3 gap-2">
            {availableDates.map((date) => (
              <button
                key={date.value}
                onClick={() => updateFormData({ pickupDate: date.value })}
                className={cn(
                  "p-3 rounded-lg border-2 text-center transition-all",
                  formData.pickupDate === date.value
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                )}
              >
                <p className="text-xs text-muted-foreground">
                  {date.label.split(",")[0]}
                </p>
                <p className="font-semibold text-foreground">
                  {date.label.split(",")[1]?.trim() || date.label}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Time Slot Selection */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            <Clock className="w-4 h-4 inline mr-2" />
            Pickup Time
          </label>
          <div className="space-y-2">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot.id}
                onClick={() => updateFormData({ pickupTimeSlot: slot.id })}
                disabled={!slot.available}
                className={cn(
                  "w-full p-4 rounded-lg border-2 text-left transition-all",
                  formData.pickupTimeSlot === slot.id
                    ? "border-primary bg-primary/5"
                    : slot.available
                    ? "border-border hover:border-primary/50"
                    : "border-border bg-secondary/50 opacity-50 cursor-not-allowed"
                )}
              >
                <p className="font-medium text-foreground">{slot.label}</p>
                {!slot.available && (
                  <p className="text-xs text-muted-foreground">Not available</p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Delivery Preference */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Delivery Speed
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => updateFormData({ deliveryPreference: "standard" })}
              className={cn(
                "p-4 rounded-lg border-2 text-left transition-all",
                formData.deliveryPreference === "standard"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              )}
            >
              <p className="font-semibold text-foreground">Standard</p>
              <p className="text-sm text-muted-foreground">24-48 hours</p>
              <p className="text-sm font-medium text-fresh mt-1">Included</p>
            </button>
            <button
              onClick={() => updateFormData({ deliveryPreference: "rush" })}
              className={cn(
                "p-4 rounded-lg border-2 text-left transition-all",
                formData.deliveryPreference === "rush"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              )}
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <p className="font-semibold text-foreground">Rush</p>
              </div>
              <p className="text-sm text-muted-foreground">Same day</p>
              <p className="text-sm font-medium text-accent mt-1">+$10.00</p>
            </button>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <Button onClick={onBack} variant="outline" size="lg">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
          <Button
            onClick={onNext}
            disabled={!isValid}
            variant="accent"
            size="lg"
            className="flex-1"
          >
            Review Order
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
