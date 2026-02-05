import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm } from "./quote-form";

export const metadata: Metadata = {
  title: "Request a Commercial Quote | Laundry & Linen",
  description:
    "Get a customized commercial laundry service quote for your business. Hotels, restaurants, gyms, salons, healthcare & more across the Phoenix metro area.",
  alternates: {
    canonical: "/commercial/quote",
  },
};

export default function CommercialQuotePage() {
  return (
    <Suspense>
      <QuoteForm />
    </Suspense>
  );
}
