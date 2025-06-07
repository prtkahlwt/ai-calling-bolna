// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar"; // Import Navbar
import Footer from "@/components/ui/Footer"; // Import Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ciyn.ai - AI Calling Solutions", // Updated title
  description: "Automate your customer outreach with intelligent AI calling agents.", // Updated description
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
        <Navbar /> {/* Navbar always visible */}
        <main className="flex-grow"> {/* Main content expands to fill space */}
          {children}
        </main>
        <Footer /> {/* Footer always visible */}
      </body>
    </html>
  );
}