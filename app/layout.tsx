import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumière Beauty & Wellness",
  description: "Discover your glow with personalized beauty and wellness rituals.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
