import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0A0B",
        elev: "#111113",
        border: "#1F1F23",
        signal: "#C4F547",
        text: {
          primary: "#F4F4F5",
          muted: "#A8A8B3",
          quiet: "#8A8A93",
          ghost: "#6A6A73",
          dim: "#5A5A63",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Menlo", "monospace"],
      },
      letterSpacing: {
        "tightest-2": "-0.045em",
        "tightest-1": "-0.035em",
        "tight-2": "-0.02em",
        "tight-1": "-0.01em",
        "wide-brand": "0.14em",
        "wide-mono": "0.1em",
      },
      fontSize: {
        h1: [
          "clamp(48px, 8vw, 96px)",
          {
            lineHeight: "0.98",
            letterSpacing: "-0.045em",
            fontWeight: "700",
          },
        ],
        h2: [
          "clamp(36px, 5vw, 56px)",
          {
            lineHeight: "1.05",
            letterSpacing: "-0.035em",
            fontWeight: "700",
          },
        ],
        h3: [
          "22px",
          {
            lineHeight: "1.30",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "body-lg": ["19px", { lineHeight: "1.55" }],
        body: ["17px", { lineHeight: "1.55" }],
        small: ["14px", { lineHeight: "1.50" }],
        eyebrow: [
          "11px",
          {
            lineHeight: "1.0",
            letterSpacing: "0.14em",
            fontWeight: "600",
          },
        ],
        "mono-sm": [
          "12px",
          { lineHeight: "1.4", letterSpacing: "0.02em" },
        ],
        "mono-xs": [
          "11px",
          { lineHeight: "1.4", letterSpacing: "0.1em" },
        ],
      },
      boxShadow: {
        "signal-glow": "0 0 40px rgba(196, 245, 71, 0.15)",
        "signal-dot": "0 0 12px rgba(196, 245, 71, 0.6)",
      },
      backgroundImage: {
        "mesh-signal":
          "radial-gradient(ellipse at center, rgba(196,245,71,0.06) 0%, transparent 60%)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
