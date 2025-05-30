"use client";

import React, { useState } from "react";
import { X, List } from "lucide-react"; // Icons for toggle
// import { cn } from "@/lib/utils"; 

const sidebarItems = [
  { label: "Home", href: "#home" },
  { label: "Summary", href: "#summary" },
  { label: "History", href: "#history" },
  { label: "Settings", href: "#settings" },
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile sidebar toggle */}
      <header className="sticky top-0 z-20 flex items-center bg-white border-b px-4 py-3 md:hidden">
        <button
          aria-label="Open sidebar"
          onClick={() => setSidebarOpen(true)}
          className="text-gray-700 hover:text-gray-900"
        >
          <List size={24} />
        </button>
      </header>

      {/* Sidebar for desktop */}
      <aside className="hidden md:flex md:w-60 md:flex-col md:border-r md:bg-white md:p-6">
        <h2 className="mb-8 text-xl font-bold">Dashboard</h2>
        <nav className="flex flex-col space-y-4">
          {sidebarItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded px-3 py-2 hover:bg-gray-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile sidebar drawer */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-30 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <aside
            className="fixed inset-y-0 left-0 z-40 w-64 bg-white p-6 shadow-lg animate-slide-in md:hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">Dashboard</h2>
              <button
                aria-label="Close sidebar"
                onClick={() => setSidebarOpen(false)}
                className="text-gray-700 hover:text-gray-900"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {sidebarItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded px-3 py-2 hover:bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
