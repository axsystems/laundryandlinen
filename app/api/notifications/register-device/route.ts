import { NextRequest, NextResponse } from "next/server";

interface RegisterDeviceRequest {
  token: string;
  platform: "ios" | "android";
  userId?: string;
}

/**
 * POST /api/notifications/register-device
 *
 * Registers a device for push notifications.
 * Stores the FCM token for later use when sending order updates.
 *
 * In production, this would:
 * 1. Validate the FCM token
 * 2. Store it in the database linked to the user
 * 3. Subscribe to relevant topics (order updates, promotions, etc.)
 */
export async function POST(request: NextRequest) {
  try {
    const body: RegisterDeviceRequest = await request.json();
    const { token, platform, userId } = body;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Missing required field: token" },
        { status: 400 }
      );
    }

    if (!platform || !["ios", "android"].includes(platform)) {
      return NextResponse.json(
        { success: false, error: "Invalid platform: must be 'ios' or 'android'" },
        { status: 400 }
      );
    }

    // In production, store the token in your database
    // Example with Supabase:
    // await supabase
    //   .from('profiles')
    //   .update({ push_token: token })
    //   .eq('id', userId);

    // Or store in a separate push_tokens table:
    // await supabase
    //   .from('push_tokens')
    //   .upsert({
    //     user_id: userId,
    //     token,
    //     platform,
    //     updated_at: new Date().toISOString()
    //   });

    console.log("Device registered for push notifications:", {
      platform,
      userId,
      tokenPrefix: token.substring(0, 20) + "...",
    });

    return NextResponse.json({
      success: true,
      data: {
        registered: true,
        platform,
      },
    });
  } catch (error) {
    console.error("Register device error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
