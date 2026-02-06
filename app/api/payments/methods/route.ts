import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

/**
 * GET /api/payments/methods
 *
 * Lists saved payment methods for a customer.
 * Requires customerId as a query parameter.
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const customerId = searchParams.get("customerId");

    if (!customerId) {
      return NextResponse.json(
        { success: false, error: "Missing required parameter: customerId" },
        { status: 400 }
      );
    }

    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
      type: "card",
    });

    // Get customer to check default payment method
    const customer = await stripe.customers.retrieve(customerId);
    const defaultPaymentMethodId =
      typeof customer !== "string" && !customer.deleted
        ? customer.invoice_settings?.default_payment_method
        : null;

    const methods = paymentMethods.data.map((pm) => ({
      id: pm.id,
      brand: pm.card?.brand || "unknown",
      last4: pm.card?.last4 || "****",
      expiryMonth: pm.card?.exp_month || 0,
      expiryYear: pm.card?.exp_year || 0,
      isDefault: pm.id === defaultPaymentMethodId,
    }));

    return NextResponse.json({
      success: true,
      data: methods,
    });
  } catch (error) {
    console.error("List payment methods error:", error);

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

/**
 * POST /api/payments/methods
 *
 * Attaches a payment method to a customer.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerId, paymentMethodId, setAsDefault } = body;

    if (!customerId || !paymentMethodId) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: customerId and paymentMethodId" },
        { status: 400 }
      );
    }

    // Attach payment method to customer
    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customerId,
    });

    // Set as default if requested
    if (setAsDefault) {
      await stripe.customers.update(customerId, {
        invoice_settings: {
          default_payment_method: paymentMethodId,
        },
      });
    }

    return NextResponse.json({
      success: true,
      data: { attached: true },
    });
  } catch (error) {
    console.error("Attach payment method error:", error);

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
