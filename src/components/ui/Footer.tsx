// src/components/ui/Footer.tsx
import Link from "next/link";
import React from "react";
// import { PhoneCall } from "lucide-react"; // For the logo icon
import { FaLinkedinIn } from "react-icons/fa"; // For social icons
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white text-black py-16 px-4 md:px-6 border-t border-border"> {/* Changed bg-black to bg-white, text-white to text-black, added border-t */}
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Column 1: Logo and Copyright */}
        <div className="flex flex-col items-start space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            {/* <PhoneCall className="h-8 w-8 text-brand-blue" /> Using brand-blue for icon */}
            <Image 
                    src="/logo.png"  // Public folder path (see below)
                    alt="Description of image"
                    width={1000} 
                    height={1000} 
                    className="h-10 w-10 text-brand-blue"
                  />
            <span className="text-3xl font-bold text-foreground"> {/* Ensure logo text is foreground color */}
              Smalls<span className="text-brand-blue"> AI</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">© {currentYear} Smalls AI.</p> {/* Changed to muted-foreground for lighter text */}
          <p className="text-sm text-muted-foreground">Sales Engagement & Lead Intelligence</p> {/* Changed to muted-foreground */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/company/smalls-ai/" // Replace with actual LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors" // Adjusted hover effect
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-6 w-6" />
            </a>
            {/* <a
              href="https://discord.gg/your-discord-invite" // Replace with actual Discord invite URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors" // Adjusted hover effect
              aria-label="Discord"
            >
              <FaDiscord className="h-6 w-6" />
            </a> */}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3> {/* Ensure heading is foreground color */}
          <ul className="space-y-3 text-muted-foreground"> {/* Changed to muted-foreground */}
            {/* <li>
              <Link href="/pricing" className="hover:text-foreground transition-colors">
                Pricing
              </Link>
            </li> */}
            <li>
              <Link href="/#home" className="hover:text-foreground transition-colors"> {/* Adjusted hover effect */}
                Home
              </Link>
            </li>
             <li>
              <Link href="/#solutions" className="hover:text-foreground transition-colors"> {/* Adjusted hover effect */}
                Solutions
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-foreground transition-colors"> {/* Adjusted hover effect */}
                Contact
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-foreground transition-colors"> {/* Adjusted hover effect */}
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">Support</h3> {/* Ensure heading is foreground color */}
          <ul className="space-y-3 text-muted-foreground"> {/* Changed to muted-foreground */}
            <li>
              <Link href="/#contact" className="hover:text-foreground transition-colors"> {/* Placeholder Link, adjusted hover */}
                Help Desk
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/smalls-ai/" // Replace with actual Discord Community Link
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors" // Adjusted hover effect
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">Company</h3> {/* Ensure heading is foreground color */}
          <ul className="space-y-3 text-muted-foreground"> {/* Changed to muted-foreground */}
            <li>
              <Link href="/terms" className="hover:text-foreground transition-colors"> {/* Placeholder Link, adjusted hover */}
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-foreground transition-colors"> {/* Placeholder Link, adjusted hover */}
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
