import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createCustomer, findCustomerByEmail } from "@/lib/cleancloud/customers";

const customerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  notes: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = customerSchema.parse(body);

    // Check if customer already exists
    const existing = await findCustomerByEmail(validated.email);
    if (existing.success && existing.data) {
      return NextResponse.json({
        success: true,
        data: existing.data,
        message: "Customer already exists",
      });
    }

    // Create new customer
    const result = await createCustomer(validated);

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

    console.error("Customer creation error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
