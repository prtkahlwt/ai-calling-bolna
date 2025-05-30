"use client";

import React, { useState } from "react";
import { X, List } from "lucide-react";
import Settings from "./settings";
import Calling from "./Calling";
import DashboardSection from "./dashboard";
import AddDetails from "./addDetails";
import ExcelUploader from "./addDetails";

interface DataRow {
  id: number;
  name: string;
  mobile: string;
  time: number; 
  response: "Positive" | "Negative";
  audioUrl: string; 
  summary: string;
}

const sidebarItems = [
  { label: "Home", value: "home" },
  { label: "Calling Details", value: "Calling Details" },
  { label: "Add Details", value: "Add Details" }, // you can handle this if you add component
  { label: "Settings", value: "settings" },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<"Dashboard" | "Calling Details" |"Add Details" | "settings">(
    "Dashboard"
  );

  // Function to render content based on currentPage state
  function renderContent() {
    switch (currentPage) {
      case "Dashboard":
        return <DashboardSection />;
      case "Calling Details":
        return <Calling />;
      case "Add Details":
        return <AddDetails />;
        // return <ExcelUploader />;
      case "settings":
        return <Settings />;
      default:
        return <DashboardSection />;
    }
  }

  return (
    <>
      {/* Mobile header with hamburger */}
      <header className="sticky top-0 z-20 flex items-center bg-white border-b px-4 py-3 md:hidden">
        <button
          aria-label="Open sidebar"
          onClick={() => setSidebarOpen(true)}
          className="text-gray-700 hover:text-gray-900"
        >
          <List size={24} />
        </button>
        <h1 className="ml-4 text-xl font-semibold">Dashboard</h1>
      </header>

      <div className="flex h-screen overflow-hidden">
        {/* Desktop sidebar */}
        <aside className="hidden md:flex md:w-60 md:flex-col md:border-r md:bg-white md:p-6">
          <h2 className="mb-8 text-xl font-bold">Dashboard</h2>
          <nav className="flex flex-col space-y-4">
            {sidebarItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentPage(item.value as any)}
                className={`rounded px-3 py-2 text-left hover:bg-gray-100 ${
                  currentPage === item.value ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                {item.label}
              </button>
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
                  <button
                    key={item.value}
                    onClick={() => {
                      setCurrentPage(item.value as any);
                      setSidebarOpen(false);
                    }}
                    className={`rounded px-3 py-2 text-left hover:bg-gray-100 ${
                      currentPage === item.value ? "bg-gray-200 font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </aside>
          </>
        )}

        {/* Main content */}
        <main className="flex-1 bg-gray-50 overflow-auto">{renderContent()}</main>
        {/* {renderContent()} */}
      </div>

      {/* Details Modal */}
      

      {/* Custom styles for slide-in animation */}
      {/* <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.25s ease forwards;
        }
      `}</style> */}
    </>
  );
}
