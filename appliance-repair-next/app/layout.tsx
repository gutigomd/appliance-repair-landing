import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "USA Appliance Repair Service",
  description:
    "Fast, reliable appliance repair across the U.S. Same-day and next-day service for refrigerators, washers, dishwashers, ovens and more."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

