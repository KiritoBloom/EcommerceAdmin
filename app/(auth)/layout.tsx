"use client";

import { Settings2Icon } from "lucide-react";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-gray-100 to-blue-50">
      {/* Header */}
      <nav className="p-4 w-full">
        <div className="container mx-auto flex items-center justify-center text-gray-700">
          <Settings2Icon
            className="mr-2 text-blue-500"
            size={24}
            aria-hidden="true"
          />
          <span className="font-semibold text-lg">EcomControl</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 md:px-6 lg:px-8">
        <div className="w-full max-w-lg space-y-8">
          {/* Abstract Shapes */}
          <div className="relative w-full pointer-events-none">
            {/* Mobile-first: Visible on all screens, positioned differently on larger screens */}
            <div className="absolute w-2/3 -top-10 -left-16">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-blue-300 rounded-full blur-[60px] md:blur-[80px]"></div>
            </div>
            <div className="absolute w-2/3 -bottom-12 -right-10 md:hidden">
              <div className="w-28 h-28 bg-purple-300 rounded-full blur-[60px]"></div>
            </div>

            {/* Larger screens: Keep original positioning */}
            <div className="hidden md:block absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 bg-purple-300 rounded-full blur-[60px] absolute bottom-10 right-10"></div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="text-center relative z-10">
            <h1 className="text-4xl font-bold text-gray-800">
              EcomControl Panel
            </h1>
            <p className="mt-2 text-gray-600">Sign in to manage your store</p>
          </div>

          {/* Auth Form */}
          <div className="bg-white flex justify-center items-center rounded-2xl shadow-xl px-6 py-10 md:px-8 md:py-12 relative z-10">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-600 text-sm w-full">
        © {new Date().getFullYear()} EcomControl Panel. All rights reserved.
      </footer>
    </div>
  );
};

export default AuthLayout;
