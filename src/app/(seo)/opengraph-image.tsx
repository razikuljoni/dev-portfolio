import { siteConfig } from "@/src/lib/site";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

const containerStyle = {
    background: "linear-gradient(120deg, #0b0d0e 0%, #111827 45%, #1f2937 100%)",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "80px",
    color: "white",
    fontFamily: "Arial, sans-serif",
} as const;

const titleStyle = {
    fontSize: 52,
    fontWeight: 700,
    letterSpacing: "-1px",
    marginBottom: 20,
} as const;

const descriptionStyle = {
    fontSize: 26,
    color: "#cbd5f5",
    maxWidth: 900,
} as const;

export default function OpenGraphImage() {
    return new ImageResponse(
        <div style={containerStyle}>
            <div style={titleStyle}>{siteConfig.title}</div>
            <div style={descriptionStyle}>{siteConfig.description}</div>
        </div>,
        size,
    );
}
