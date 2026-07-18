import { ImageResponse } from "next/og";
import { logoMarkDataUri } from "@/lib/logoSvg";

export const alt = "Tumboh Coffee Bar — Kuala Terengganu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fbf7ef",
          color: "#241a12",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoMarkDataUri} width={180} height={209} alt="" />
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 28 }}>Tumboh</div>
        <div
          style={{
            fontSize: 27,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#4f7c3a",
            marginTop: 10,
          }}
        >
          Coffee Bar · Kuala Terengganu
        </div>
        <div style={{ fontSize: 30, color: "#3a2a1c", marginTop: 30 }}>
          Brewed to grow. Designed to flow.
        </div>
      </div>
    ),
    size
  );
}
