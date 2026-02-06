import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

/**
 * DELETE /api/payments/methods/[id]
 *
 * Detaches a payment method from a customer.
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing payment method ID" },
        { status: 400 }
      );
    }

    await stripe.paymentMethods.detach(id);

    return NextResponse.json({
      success: true,
      data: { detached: true },
    });
  } catch (error) {
    console.error("Detach payment method error:", error);

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
