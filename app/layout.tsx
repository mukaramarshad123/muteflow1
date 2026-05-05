import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muteflow.io"),
  title: "muteflow — The silent build team for AI agencies.",
  description: "The silent build team for AI agencies.",
  openGraph: {
    title: "muteflow — The silent build team for AI agencies.",
    description: "The silent build team for AI agencies.",
    url: "https://muteflow.io",
    siteName: "muteflow",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "muteflow — The silent build team for AI agencies.",
    description: "The silent build team for AI agencies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-void font-sans text-text-primary antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
