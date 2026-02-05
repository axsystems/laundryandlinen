import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Laundry & Linen - Professional Laundry Pickup & Delivery";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1e3a5f",
          backgroundImage: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 20,
            }}
          >
            <span
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: "#2563eb",
              }}
            >
              L
            </span>
          </div>
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "white",
            }}
          >
            Laundry & Linen
          </span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "rgba(255, 255, 255, 0.9)",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Professional Laundry Pickup & Delivery
        </div>
        <div
          style={{
            fontSize: 22,
            color: "rgba(255, 255, 255, 0.7)",
            textAlign: "center",
            marginTop: 16,
            maxWidth: 700,
          }}
        >
          Wash & Fold • Dry Cleaning • Commercial • Phoenix Metro Area
        </div>
        <div
          style={{
            display: "flex",
            gap: 40,
            marginTop: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
            }}
          >
            <span style={{ fontSize: 36, fontWeight: 700 }}>4.9/5</span>
            <span style={{ fontSize: 16, opacity: 0.8 }}>Rating</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
            }}
          >
            <span style={{ fontSize: 36, fontWeight: 700 }}>24hr</span>
            <span style={{ fontSize: 16, opacity: 0.8 }}>Turnaround</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
            }}
          >
            <span style={{ fontSize: 36, fontWeight: 700 }}>FREE</span>
            <span style={{ fontSize: 16, opacity: 0.8 }}>Pickup $35+</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
