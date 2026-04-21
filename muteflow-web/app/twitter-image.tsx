import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#0A0A0B",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: 8,
            height: 8,
            borderRadius: 9999,
            background: "#C4F547",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 72,
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#F4F4F5",
              letterSpacing: "-0.045em",
              lineHeight: 1,
            }}
          >
            muteflow
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 24,
              color: "#8A8A93",
              fontFamily:
                "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            }}
          >
            The silent build team for AI agencies.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
