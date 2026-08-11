import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumiere Beauty & Wellness",
  description: "Discover your glow with personalized beauty and wellness rituals.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
