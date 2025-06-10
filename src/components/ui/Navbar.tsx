// src/components/ui/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "@/store/authSlice";
import { RootState } from "@/store";
import Image from "next/image";

// An array to make the navigation items easier to manage
const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Solutions", href: "/#solutions" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector((state: RootState) => state.auth.username !== null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // <nav className="sticky top-0 z-50 w-full bg-background border-b border-border py-4 px-6 flex items-center justify-between shadow-sm">
    <nav className="sticky top-0 z-50 w-full bg-white/30 backdrop-blur-md border-b border-border py-4 px-6 flex items-center justify-between shadow-sm">

      {/* Logo Section */}
      <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
        {/* <PhoneCall className="h-6 w-6 text-brand-blue" /> */}
        <Image 
        src="/logo.png"  // Public folder path (see below)
        alt="Description of image"
        width={1000} 
        height={1000} 
        className="h-10 w-10 text-brand-blue"
      />
        <span className="text-2xl font-bold text-foreground">
          Smalls<span className="text-brand-blue">.ai</span>
        </span>
      </Link>

      {/* Navigation Links */}
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

      {/* Action Buttons */}
      <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
        {mounted && isAuthenticated ? (
          <Button
            onClick={handleLogout}
            variant="outline"
            className="rounded-full px-6 py-3 text-lg"
          >
            Logout
          </Button>
        ) : (
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="rounded-full px-6 py-3 text-lg"
              onClick={() => router.push('/login')}
            >
              Login
            </Button>
            <Button
              className="rounded-full px-6 py-3 border border-input bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 text-lg"
              onClick={() => window.open('https://calendly.com/prateekahlawat1223/smalls-ai-demo', '_blank')}
            >
              Book a Demo
            </Button>
          </div>
        )}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {mounted && isAuthenticated ? (
              <Button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                variant="outline"
                className="w-full rounded-full px-6 py-3 text-lg mt-2"
              >
                Logout
              </Button>
            ) : (
              <div className="space-y-2 mt-2">
                <Button
                  variant="outline"
                  className="w-full rounded-full px-6 py-3 text-lg"
                  onClick={() => {
                    router.push('/login');
                    setIsMenuOpen(false);
                  }}
                >
                  Login
                </Button>
                <Button
                  className="w-full rounded-full px-6 py-3 border border-input bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 text-lg"
                  onClick={() => {
                    window.open('https://calendly.com/prateekahlawat1223/smalls-ai-demo', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  Book a Demo
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}