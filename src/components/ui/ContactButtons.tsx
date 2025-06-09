// src/components/ContactButtons.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

const phoneNumbers = [
  { display: "+91 85708 89528", href: "tel:+918570889528" },
  // { display: "+91 85708 89528", href: "tel:+918570889528" },
];

export default function ContactButtons() {
  const [isCallMenuOpen, setIsCallMenuOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      {/* "Call Us" Button and Dropdown */}
      <div className="relative w-full sm:w-auto">
        <Button
          size="lg"
          variant="outline"
          className="px-8 py-6 text-lg w-full"
          onClick={() => setIsCallMenuOpen(!isCallMenuOpen)}
        >
          Call Us
        </Button>
        
        {/* Dropdown Menu for Phone Numbers */}
        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            isCallMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
             <div className="mt-2 w-full rounded-md border bg-background shadow-lg p-4 space-y-3">
              {phoneNumbers.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <PhoneCall className="h-5 w-5 text-brand-blue" />
                  <span className="font-medium tracking-wider group-hover:underline">
                    {phone.display}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* "Book a Demo" Button */}
      <Link
        href="https://calendly.com/prateekahlawat1223/smalls-ai-demo" // <-- IMPORTANT: Replace with your actual Calendly link
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        <Button size="lg" className="px-8 py-6 text-lg w-full">
          Book a Demo
        </Button>
      </Link>
    </div>
  );
}