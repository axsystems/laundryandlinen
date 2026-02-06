import { NextRequest, NextResponse } from "next/server";
import { getCustomerOrders } from "@/lib/cleancloud/orders";

/**
 * GET /api/cleancloud/orders
 *
 * Retrieves all orders for a specific customer.
 * Used by the iOS app for order history.
 *
 * Query params:
 * - customerId: CleanCloud customer ID (required)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const customerIdParam = searchParams.get("customerId");

    if (!customerIdParam) {
      return NextResponse.json(
        { success: false, error: "Missing required parameter: customerId" },
        { status: 400 }
      );
    }

    const customerId = parseInt(customerIdParam, 10);

    if (isNaN(customerId)) {
      return NextResponse.json(
        { success: false, error: "Invalid customerId: must be a number" },
        { status: 400 }
      );
    }

    const response = await getCustomerOrders(customerId);

    if (!response.success) {
      return NextResponse.json(
        { success: false, error: response.error || "Failed to fetch orders" },
        { status: 500 }
      );
    }

    // Sort orders by creation date (newest first)
    const orders = response.data || [];
    orders.sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    });

    return NextResponse.json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.error("Get customer orders error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
