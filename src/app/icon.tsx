import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0b0b0f 0%, #16161b 50%, #232329 100%)",
          borderRadius: "6px",
          color: "#ff4d0d",
          fontSize: 22,
          fontWeight: 900,
          fontFamily: "sans-serif",
          letterSpacing: "-0.04em",
        }}
      >
        G
      </div>
    ),
    size,
  );
}
