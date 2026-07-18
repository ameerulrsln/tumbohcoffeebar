import { ImageResponse } from "next/og";
import { logoMarkDataUri } from "@/lib/logoSvg";

/**
 * Square raster of the mark, referenced as `logo` in the JSON-LD so Google
 * has a supported image format for the knowledge panel.
 */
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fbf7ef",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoMarkDataUri} width={360} height={418} alt="" />
      </div>
    ),
    { width: 512, height: 512 }
  );
}
