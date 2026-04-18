import { ImageResponse } from "next/og";

export const alt = "Garage — Atelier de Préparation & Tuning";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 30% 20%, rgba(255, 77, 13, 0.25) 0%, transparent 50%), linear-gradient(135deg, #050507 0%, #0b0b0f 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: "linear-gradient(135deg, #ff7033, #ff4d0d)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 900,
              color: "#050507",
            }}
          >
            G
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            GARAGE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            Préparation.
            <br />
            <span style={{ color: "#ff7033" }}>Précision.</span>
            <br />
            Passion.
          </div>
          <div style={{ fontSize: 28, color: "#9c9ca3", maxWidth: 900 }}>
            Atelier artisan spécialisé en tuning, restauration et entretien haut de gamme.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22, color: "#c5c5ca" }}>
          <div>garage.example.be</div>
          <div style={{ color: "#ff4d0d", fontWeight: 700 }}>+32 478 11 59 81</div>
        </div>
      </div>
    ),
    size,
  );
}
