import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import type React from "react";
import "./globals.css";

const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});
const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const _spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  title: "Danalitic – Crafting Intelligent AI Platforms",
  description:
    "Enterprise AI, Hybrid Cloud & Quantum Solutions for the Modern Era. From LLMs to Agentic AI, we build systems that think, adapt, and scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${_inter.variable} ${_poppins.variable} ${_spaceGrotesk.variable} font-sans antialiased bg-background text-foreground scroll-smooth`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
