import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  businessType: z.string().optional(),
  propertySize: z.string().optional(),
  estimatedVolume: z.string().optional(),
  currentSolution: z.string().optional(),
  services: z.array(z.string()).optional(),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = leadSchema.parse(body);

    const web3formsKey = process.env.WEB3FORMS_KEY;

    if (!web3formsKey) {
      // If no Web3Forms key, just log and return success (for testing)
      console.log("B2B Lead received:", validated);
      return NextResponse.json({
        success: true,
        message: "Lead received (Web3Forms not configured)",
      });
    }

    // Submit to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: web3formsKey,
        subject: `New B2B Lead: ${validated.businessName}`,
        from_name: "Laundry & Linen Website",
        // Lead details
        business_name: validated.businessName,
        contact_name: validated.contactName,
        email: validated.email,
        phone: validated.phone,
        business_type: validated.businessType || "Not specified",
        property_size: validated.propertySize || "Not specified",
        estimated_volume: validated.estimatedVolume || "Not specified",
        current_solution: validated.currentSolution || "Not specified",
        services_needed: validated.services?.join(", ") || "Not specified",
        message: validated.message || "No additional message",
      }),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || "Failed to submit lead");
    }

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Validation error", details: error.issues },
        { status: 400 }
      );
    }

    console.error("B2B lead submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit lead" },
      { status: 500 }
    );
  }
}
