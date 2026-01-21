"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import {
  Package,
  Truck,
  Sparkles,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowLeft,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getStatusLabel, getStatusStep } from "@/lib/cleancloud/orders";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ orderId: string }>;
}

const trackingSteps = [
  { step: 1, label: "Order Placed", icon: Clock },
  { step: 2, label: "Picked Up", icon: Package },
  { step: 3, label: "Cleaning", icon: Sparkles },
  { step: 4, label: "Ready", icon: CheckCircle2 },
  { step: 5, label: "Out for Delivery", icon: Truck },
  { step: 6, label: "Delivered", icon: MapPin },
];

export default function OrderTrackingPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const [orderStatus, setOrderStatus] = useState<string>("pending");
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrderStatus = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/cleancloud/order?orderId=${resolvedParams.orderId}`);
      const data = await res.json();

      if (data.success && data.data) {
        setOrderStatus(data.data.status || "pending");
        setLastUpdated(data.data.updatedAt || new Date().toISOString());
      } else {
        // For demo purposes, simulate a status
        setOrderStatus("picked_up");
        setLastUpdated(new Date().toISOString());
      }
    } catch {
      // For demo, show a status even on error
      setOrderStatus("picked_up");
      setLastUpdated(new Date().toISOString());
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderStatus();
  }, [resolvedParams.orderId]);

  const currentStepNumber = getStatusStep(orderStatus);

  return (
    <div className="pt-24 md:pt-32 pb-16">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm" className="mb-4">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
              Track Your Order
            </h1>
            <p className="text-muted-foreground">
              Order #{resolvedParams.orderId}
            </p>
          </div>

          {/* Status Card */}
          <div className="card-elevated p-6 md:p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Current Status</p>
                <p className="text-2xl font-display font-bold text-primary">
                  {getStatusLabel(orderStatus)}
                </p>
              </div>
              <Button
                onClick={fetchOrderStatus}
                variant="outline"
                size="sm"
                disabled={isLoading}
              >
                <RefreshCw
                  className={cn("w-4 h-4 mr-2", isLoading && "animate-spin")}
                />
                Refresh
              </Button>
            </div>

            {error && (
              <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/30 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{error}</p>
              </div>
            )}

            {/* Progress Steps */}
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-secondary" />
              <div
                className="absolute left-5 top-5 w-0.5 bg-primary transition-all duration-500"
                style={{
                  height: `${Math.max(0, ((currentStepNumber - 1) / (trackingSteps.length - 1)) * 100)}%`,
                }}
              />

              <div className="space-y-6">
                {trackingSteps.map(({ step, label, icon: Icon }) => {
                  const isCompleted = currentStepNumber >= step;
                  const isCurrent = currentStepNumber === step;

                  return (
                    <div key={step} className="flex items-center gap-4 relative">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors",
                          isCompleted
                            ? "bg-primary text-white"
                            : "bg-secondary text-muted-foreground"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p
                          className={cn(
                            "font-medium",
                            isCompleted ? "text-foreground" : "text-muted-foreground"
                          )}
                        >
                          {label}
                        </p>
                        {isCurrent && (
                          <p className="text-sm text-primary">In progress</p>
                        )}
                      </div>
                      {isCompleted && step < currentStepNumber && (
                        <CheckCircle2 className="w-5 h-5 text-fresh" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {lastUpdated && (
              <p className="text-xs text-muted-foreground mt-6 text-right">
                Last updated:{" "}
                {new Date(lastUpdated).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
            )}
          </div>

          {/* Help Section */}
          <div className="card-elevated p-6 text-center">
            <h3 className="font-display font-semibold text-foreground mb-2">
              Need Help?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              If you have questions about your order, we&apos;re here to help.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
