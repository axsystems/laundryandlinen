import { NextRequest, NextResponse } from "next/server";
import { createCustomer, findCustomerByEmail } from "@/lib/cleancloud/customers";

interface SyncCustomerRequest {
  supabaseUserId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

/**
 * POST /api/auth/sync-customer
 *
 * Syncs a Supabase user with CleanCloud by creating or finding their customer record.
 * Called by the iOS app after successful authentication.
 */
export async function POST(request: NextRequest) {
  try {
    const body: SyncCustomerRequest = await request.json();
    const { supabaseUserId, firstName, lastName, email, phone } = body;

    if (!supabaseUserId || !email) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: supabaseUserId and email" },
        { status: 400 }
      );
    }

    // Check if customer already exists in CleanCloud
    const existingCustomer = await findCustomerByEmail(email);

    if (existingCustomer.success && existingCustomer.data) {
      // Customer exists, return their ID
      return NextResponse.json({
        success: true,
        data: {
          cleancloudCustomerId: existingCustomer.data.customerID,
          isNew: false,
        },
      });
    }

    // Create new customer in CleanCloud
    const newCustomer = await createCustomer({
      firstName: firstName || "",
      lastName: lastName || "",
      email,
      phone: phone || "",
      notes: `Supabase ID: ${supabaseUserId}`,
    });

    if (!newCustomer.success || !newCustomer.data) {
      return NextResponse.json(
        { success: false, error: newCustomer.error || "Failed to create customer" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        cleancloudCustomerId: newCustomer.data.customerID,
        isNew: true,
      },
    });
  } catch (error) {
    console.error("Sync customer error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
