import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions | AI Services",
  description:
    "Deploy generative AI, machine learning, and cloud infrastructure that drives measurable business outcomes.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
