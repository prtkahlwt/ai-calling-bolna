// src/components/Navbar.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-border py-4 px-6 flex items-center justify-between shadow-sm">
      {/* Logo Section */}
      <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
        <PhoneCall className="h-6 w-6 text-brand-blue" /> {/* Using brand-blue for icon */}
        <span className="text-2xl font-bold text-foreground">
          Small<span className="text-brand-blue">.ai</span> {/* Ciyn.ai text with brand-blue ".ai" */}
        </span>
      </Link>

      {/* Navigation Links - Hidden on small screens, shown on medium and up */}
      <div className="hidden md:flex space-x-8 flex-grow justify-center">
        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-lg">
          Home
        </Link>
        <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-lg">
          Pricing
        </Link>
        <Link href="/trial" className="text-muted-foreground hover:text-foreground transition-colors text-lg">
          7-Day Trial
        </Link>
      </div>

      {/* Action Buttons (Login and Get Started) */}
      <div className="flex items-center space-x-4 flex-shrink-0">
        <Link href="/login" passHref>
          <Button variant="ghost" className="text-foreground text-lg">Login</Button>
        </Link>
        <Link href="/signup" passHref>
          <Button
            className="rounded-full px-6 py-3 border border-input bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 text-lg"
            // Keeping it primary (dark) with rounded-full for homepage consistency
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
}