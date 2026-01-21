"use client";

import { ArrowLeft, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICE_TYPE_LABELS, TIME_SLOTS } from "@/lib/cleancloud/types";
import { ADDONS, FREE_PICKUP_MINIMUM } from "@/lib/constants/pricing";
import type { OrderFormData } from "@/lib/cleancloud/types";

interface ConfirmationStepProps {
  formData: OrderFormData;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
  error: string | null;
}

export function ConfirmationStep({
  formData,
  onSubmit,
  onBack,
  isSubmitting,
  error,
}: ConfirmationStepProps) {
  const timeSlot = TIME_SLOTS.find((s) => s.id === formData.pickupTimeSlot);

  // Calculate estimated total
  const basePrice =
    formData.serviceType === "wash_fold" || formData.serviceType === "mixed"
      ? (formData.estimatedWeight || 15) * 2.25
      : 0;

  const addonsTotal = (formData.addons || []).reduce((sum, addonId) => {
    const addon = ADDONS.find((a) => a.id === addonId);
    return sum + (addon?.price || 0);
  }, 0);

  const rushFee = formData.deliveryPreference === "rush" ? 10 : 0;
  const deliveryFee = basePrice + addonsTotal + rushFee < FREE_PICKUP_MINIMUM ? 4.99 : 0;

  const estimatedTotal = basePrice + addonsTotal + rushFee + deliveryFee;

  return (
    <div>
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-display font-bold text-foreground mb-2">
          Review Your Order
        </h2>
        <p className="text-muted-foreground">
          Please confirm your order details before submitting.
        </p>
      </div>

      <div className="space-y-6">
        {/* Contact Info */}
        <div className="p-4 rounded-lg bg-secondary/50">
          <h3 className="font-semibold text-foreground mb-2">Contact Information</h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>
              {formData.firstName} {formData.lastName}
            </p>
            <p>{formData.email}</p>
            <p>{formData.phone}</p>
          </div>
        </div>

        {/* Address */}
        <div className="p-4 rounded-lg bg-secondary/50">
          <h3 className="font-semibold text-foreground mb-2">Pickup Address</h3>
          <div className="text-sm text-muted-foreground">
            <p>{formData.address}</p>
            <p>
              {formData.city}, {formData.state} {formData.zipCode}
            </p>
          </div>
        </div>

        {/* Service Details */}
        <div className="p-4 rounded-lg bg-secondary/50">
          <h3 className="font-semibold text-foreground mb-2">Service Details</h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>
              <span className="text-foreground">Service:</span>{" "}
              {SERVICE_TYPE_LABELS[formData.serviceType]}
            </p>
            {(formData.serviceType === "wash_fold" ||
              formData.serviceType === "mixed") && (
              <p>
                <span className="text-foreground">Estimated Weight:</span>{" "}
                {formData.estimatedWeight} lbs
              </p>
            )}
            {formData.addons && formData.addons.length > 0 && (
              <p>
                <span className="text-foreground">Add-ons:</span>{" "}
                {formData.addons
                  .map((id) => ADDONS.find((a) => a.id === id)?.name)
                  .join(", ")}
              </p>
            )}
            {formData.notes && (
              <p>
                <span className="text-foreground">Notes:</span> {formData.notes}
              </p>
            )}
          </div>
        </div>

        {/* Schedule */}
        <div className="p-4 rounded-lg bg-secondary/50">
          <h3 className="font-semibold text-foreground mb-2">Pickup Schedule</h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>
              <span className="text-foreground">Date:</span>{" "}
              {new Date(formData.pickupDate).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>
              <span className="text-foreground">Time:</span> {timeSlot?.label}
            </p>
            <p>
              <span className="text-foreground">Delivery:</span>{" "}
              {formData.deliveryPreference === "rush"
                ? "Rush (Same Day)"
                : "Standard (24-48 hrs)"}
            </p>
          </div>
        </div>

        {/* Estimated Total */}
        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-3">Estimated Total</h3>
          <div className="space-y-2 text-sm">
            {basePrice > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Wash & Fold ({formData.estimatedWeight} lbs x $2.25)
                </span>
                <span>${basePrice.toFixed(2)}</span>
              </div>
            )}
            {addonsTotal > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Add-ons</span>
                <span>${addonsTotal.toFixed(2)}</span>
              </div>
            )}
            {rushFee > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rush Delivery</span>
                <span>${rushFee.toFixed(2)}</span>
              </div>
            )}
            {deliveryFee > 0 ? (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
            ) : (
              <div className="flex justify-between text-fresh">
                <span>Free Delivery</span>
                <span>-$0.00</span>
              </div>
            )}
            <div className="pt-2 mt-2 border-t border-border flex justify-between font-semibold text-lg">
              <span>Estimated Total</span>
              <span className="text-primary">${estimatedTotal.toFixed(2)}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            * Final price will be determined after weighing. You&apos;ll be charged after
            cleaning.
          </p>
        </div>

        {error && (
          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-destructive">Error</p>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          </div>
        )}

        <div className="flex gap-4 pt-4">
          <Button onClick={onBack} variant="outline" size="lg" disabled={isSubmitting}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
          <Button
            onClick={onSubmit}
            disabled={isSubmitting}
            variant="accent"
            size="lg"
            className="flex-1"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              "Confirm & Schedule Pickup"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
