// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar"; // Import Navbar
import Footer from "@/components/ui/Footer"; // Import Footer
import Chatbot from "./chatbot";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smalls AI - AI Calling Solutions",
  description: "Automate your customer outreach with intelligent AI calling agents.",
  openGraph: {
    title: "Smalls AI - AI Calling Solutions",
    description: "Automate your customer outreach with intelligent AI calling agents.",
    url: "https://www.smalls.in",
    siteName: "Smalls AI",
  //   images: [
  //     {
  //       url: "/og-image.jpg", // Add your OG image path
  //       width: 1200,
  //       height: 630,
  //       alt: "Smalls AI Preview",
  //     },
  //   ],
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Smalls AI - AI Calling Solutions",
  //   description: "Automate your customer outreach with intelligent AI calling agents.",
  //   images: ["/og-image.jpg"], // Same image or different one
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Providers>
          <Navbar /> {/* Navbar always visible */}
          <main className="flex-grow"> {/* Main content expands to fill space */}
            {children}
          </main>
          <Footer /> {/* Footer always visible */}
          <Chatbot />
        </Providers>
      </body>
    </html>
  );
}
