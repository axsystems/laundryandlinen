import type { Metadata } from "next";
import { OrderForm } from "@/components/order";

export const metadata: Metadata = {
  title: "Schedule Pickup",
  description: "Schedule your laundry pickup in under 2 minutes. Free pickup and delivery on orders over $35.",
};

export default function OrderPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Schedule Your Pickup
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fresh, clean laundry in 4 easy steps. Free pickup and delivery on
            orders over $35.
          </p>
        </div>

        <OrderForm />
      </div>
    </div>
  );
}
