// src/components/Footer.tsx
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full min-h-[200px] py-8 border-t bg-gray-100 text-center text-muted-foreground text-sm px-4">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} Ciyn.ai. All rights reserved.</p>
        <nav className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/login" passHref>
            <span className="hover:underline cursor-pointer">Login</span>
          </Link>
          <Link href="/signup" passHref>
            <span className="hover:underline cursor-pointer">Sign Up</span>
          </Link>
          <Link href="/dashboard" passHref>
            <span className="hover:underline cursor-pointer">Dashboard (Demo)</span>
          </Link>
          {/* You can add more links like Privacy Policy, Terms of Service etc. here */}
        </nav>
      </div>
    </footer>
  );
}