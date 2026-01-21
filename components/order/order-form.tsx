"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ZipCodeStep } from "./steps/zip-code-step";
import { ContactInfoStep } from "./steps/contact-info-step";
import { ServiceSelectionStep } from "./steps/service-selection-step";
import { ScheduleStep } from "./steps/schedule-step";
import { ConfirmationStep } from "./steps/confirmation-step";
import type { OrderFormData } from "@/lib/cleancloud/types";

const INITIAL_FORM_DATA: OrderFormData = {
  zipCode: "",
  region: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "AZ",
  serviceType: "wash_fold",
  estimatedWeight: 15,
  items: [],
  addons: [],
  notes: "",
  pickupDate: "",
  pickupTimeSlot: "",
  deliveryPreference: "standard",
};

const steps = [
  { id: 1, title: "Location", description: "Check service area" },
  { id: 2, title: "Contact", description: "Your information" },
  { id: 3, title: "Service", description: "What you need" },
  { id: 4, title: "Schedule", description: "Pick a time" },
  { id: 5, title: "Confirm", description: "Review & submit" },
];

export function OrderForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<OrderFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateFormData = (data: Partial<OrderFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
      setError(null);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setError(null);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Create customer
      const customerRes = await fetch("/api/cleancloud/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
        }),
      });

      const customerData = await customerRes.json();
      if (!customerData.success) {
        throw new Error(customerData.error || "Failed to create customer");
      }

      // Create order
      const orderRes = await fetch("/api/cleancloud/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerID: customerData.data.customerID,
          pickupDate: formData.pickupDate,
          pickupTimeSlot: formData.pickupTimeSlot,
          deliveryPreference: formData.deliveryPreference,
          serviceType: formData.serviceType,
          estimatedWeight: formData.estimatedWeight,
          items: formData.items,
          notes: formData.notes,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
        }),
      });

      const orderData = await orderRes.json();
      if (!orderData.success) {
        throw new Error(orderData.error || "Failed to create order");
      }

      // Redirect to confirmation page
      router.push(`/order/confirmation?orderId=${orderData.data.orderID}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ZipCodeStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <ContactInfoStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <ServiceSelectionStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 4:
        return (
          <ScheduleStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 5:
        return (
          <ConfirmationStep
            formData={formData}
            onSubmit={handleSubmit}
            onBack={prevStep}
            isSubmitting={isSubmitting}
            error={error}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center ${
                index < steps.length - 1 ? "flex-1" : ""
              }`}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    currentStep > step.id
                      ? "bg-fresh text-white"
                      : currentStep === step.id
                      ? "bg-primary text-white"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <p
                  className={`text-xs mt-2 hidden sm:block ${
                    currentStep >= step.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 rounded ${
                    currentStep > step.id ? "bg-fresh" : "bg-secondary"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="card-elevated p-6 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
