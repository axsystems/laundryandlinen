import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

interface CreateIntentRequest {
  amount: number; // Amount in cents
  orderId?: number;
  customerId?: string; // Stripe customer ID
  email?: string;
}

/**
 * POST /api/payments/create-intent
 *
 * Creates a Stripe PaymentIntent for the iOS app's PaymentSheet.
 * Returns the client secret, ephemeral key, and customer ID.
 */
export async function POST(request: NextRequest) {
  try {
    const body: CreateIntentRequest = await request.json();
    const { amount, orderId, customerId: existingCustomerId, email } = body;

    if (!amount || amount < 100) {
      return NextResponse.json(
        { success: false, error: "Invalid amount: minimum is $1.00 (100 cents)" },
        { status: 400 }
      );
    }

    // Get or create Stripe customer
    let customerId = existingCustomerId;

    if (!customerId && email) {
      // Search for existing customer by email
      const customers = await stripe.customers.list({
        email,
        limit: 1,
      });

      if (customers.data.length > 0) {
        customerId = customers.data[0].id;
      } else {
        // Create new customer
        const customer = await stripe.customers.create({
          email,
          metadata: {
            source: "ios_app",
          },
        });
        customerId = customer.id;
      }
    }

    if (!customerId) {
      // Create anonymous customer for guest checkout
      const customer = await stripe.customers.create({
        metadata: {
          source: "ios_app",
          type: "guest",
        },
      });
      customerId = customer.id;
    }

    // Create ephemeral key for the customer (required for PaymentSheet)
    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customerId },
      { apiVersion: "2024-12-18.acacia" }
    );

    // Create PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      customer: customerId,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        orderId: orderId?.toString() || "",
        source: "ios_app",
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        clientSecret: paymentIntent.client_secret,
        ephemeralKey: ephemeralKey.secret,
        customerId,
        publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      },
    });
  } catch (error) {
    console.error("Create payment intent error:", error);

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
