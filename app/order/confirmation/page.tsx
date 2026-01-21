"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Calendar, MapPin, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";
import { Suspense } from "react";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <div className="pt-24 md:pt-32 pb-16">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-fresh/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-fresh" />
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Pickup Scheduled!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your order has been confirmed. We&apos;ll send you a reminder before your
            pickup time.
          </p>

          {orderId && (
            <div className="card-elevated p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-1">Order Number</p>
              <p className="text-2xl font-display font-bold text-primary">
                #{orderId}
              </p>
            </div>
          )}

          {/* What's Next */}
          <div className="card-elevated p-6 md:p-8 text-left mb-8">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">
              What Happens Next?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Confirmation Email
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Check your inbox for order details and preparation tips.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Pickup Reminder</h3>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ll text you 30 minutes before your driver arrives.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Laundry Collection
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Hand your laundry to our driver or leave it in a secure spot.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-fresh/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-fresh">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Fresh Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Clean, folded laundry delivered back to your door!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {orderId && (
              <Button asChild variant="accent" size="lg">
                <Link href={`/order/track/${orderId}`} className="group">
                  Track Your Order
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
            <Button asChild variant="outline" size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="p-6 rounded-xl bg-secondary/50">
            <h3 className="font-semibold text-foreground mb-4">
              Questions? We&apos;re here to help.
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
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

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div className="pt-24 md:pt-32 pb-16 text-center">Loading...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}
