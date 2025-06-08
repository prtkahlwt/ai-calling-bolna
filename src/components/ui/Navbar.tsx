// src/components/ui/Navbar.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "@/store/authSlice";
import { RootState } from "@/store";
import { useEffect, useState } from "react";

// An array to make the navigation items easier to manage
const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Solutions", href: "/#solutions" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const isAuthenticated = useSelector((state: RootState) => state.auth.username !== null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-border py-4 px-6 flex items-center justify-between shadow-sm">
      {/* Logo Section */}
      <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
        <PhoneCall className="h-6 w-6 text-brand-blue" />
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
      <div className="flex items-center space-x-4 flex-shrink-0">
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
              onClick={() => window.open('https://calendly.com/ap2303898', '_blank')}
            >
              Book a Demo
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}