import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Atmosphere } from "@/components/atmosphere";
import { ScrollEffects } from "@/components/scroll-effects";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://takagit.vercel.app"),
  title: "Hirokazu Takagi | Web Director / Creative Producer",
  description:
    "A cinematic portfolio for Hirokazu Takagi, a healthcare-focused Web Director and Creative Producer designing trust through digital experiences.",
  openGraph: {
    title: "Hirokazu Takagi | Designing Trust",
    description: "Healthcare branding, hospital website direction, recruitment branding, UX strategy, and digital storytelling.",
    images: ["/og.svg"],
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <SmoothScroll />
        <ScrollEffects />
        <Atmosphere />
        {children}
      </body>
    </html>
  );
}
