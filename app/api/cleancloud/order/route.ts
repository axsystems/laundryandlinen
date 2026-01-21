import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createOrder, getOrder } from "@/lib/cleancloud/orders";

const orderSchema = z.object({
  customerID: z.number(),
  pickupDate: z.string(),
  pickupTimeSlot: z.string(),
  deliveryPreference: z.enum(["standard", "rush"]).optional(),
  serviceType: z.enum(["wash_fold", "dry_cleaning", "bedding", "mixed"]),
  estimatedWeight: z.number().optional(),
  items: z
    .array(
      z.object({
        serviceType: z.string(),
        name: z.string(),
        quantity: z.number(),
      })
    )
    .optional(),
  notes: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = orderSchema.parse(body);

    const result = await createOrder(validated);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Validation error", details: error.issues },
        { status: 400 }
      );
    }

    console.error("Order creation error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get("orderId");

    if (!orderId) {
      return NextResponse.json(
        { success: false, error: "Order ID is required" },
        { status: 400 }
      );
    }

    const result = await getOrder(parseInt(orderId, 10));

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
    });
  } catch (error) {
    console.error("Order fetch error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
