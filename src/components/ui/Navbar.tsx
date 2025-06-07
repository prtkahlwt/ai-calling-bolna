// src/components/ui/Navbar.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

// An array to make the navigation items easier to manage
const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Solutions", href: "/#solutions" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-border py-4 px-6 flex items-center justify-between shadow-sm">
      {/* Logo Section (no changes) */}
      <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
        <PhoneCall className="h-6 w-6 text-brand-blue" />
        <span className="text-2xl font-bold text-foreground">
          Small<span className="text-brand-blue">.ai</span>
        </span>
      </Link>

      {/* Navigation Links - updated for in-page scrolling */}
      <div className="hidden md:flex space-x-8 flex-grow justify-center">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-muted-foreground hover:text-foreground transition-colors text-lg"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Action Button - updated to "Book a Demo" */}
      <div className="flex items-center space-x-4 flex-shrink-0">
        <Link         
        href="https://calendly.com/ap2303898" // <-- IMPORTANT: Replace with your actual Calendly link
        target="_blank"
        rel="noopener noreferrer" passHref>
          <Button
            className="rounded-full px-6 py-3 border border-input bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 text-lg"
          >
            Book a Demo
          </Button>
        </Link>
      </div>
    </nav>
  );
}