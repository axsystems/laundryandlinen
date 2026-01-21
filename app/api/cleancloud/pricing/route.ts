import { NextResponse } from "next/server";
import { SERVICES, ADDONS, MINIMUM_ORDER, FREE_PICKUP_MINIMUM, DELIVERY_FEE } from "@/lib/constants/pricing";

// This endpoint returns display pricing
// Actual pricing is calculated by CleanCloud based on weight/items
export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      services: SERVICES.map((service) => ({
        id: service.id,
        name: service.name,
        description: service.description,
        pricePerLb: "pricePerLb" in service ? service.pricePerLb : undefined,
        pricePerItem: "pricePerItem" in service ? service.pricePerItem : undefined,
        turnaround: service.turnaround,
      })),
      addons: ADDONS,
      minimumOrder: MINIMUM_ORDER,
      freePickupMinimum: FREE_PICKUP_MINIMUM,
      deliveryFee: DELIVERY_FEE,
    },
  });
}
