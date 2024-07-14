"use client";

import { Settings2Icon } from "lucide-react";

import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white p-4 flex justify-center items-center shadow-lg rounded-b-lg">
        <div className="flex items-center justify-center">
          <Settings2Icon className="mr-1" width={30} height={30} />
          <span className="text-2xl font-bold text-center">
            EcomControl Panel
          </span>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-1 flex-col lg:flex-row p-4 lg:p-8">
        <section className="flex-1 bg-gradient-to-br from-gray-700 to-black text-white p-8 lg:p-16 rounded-lg shadow-lg flex flex-col justify-center items-start mb-4 lg:mb-0 lg:mr-4">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to EcomControl Panel
          </h1>
          <p className="text-xl mb-8">
            Sign Up or Sign In to start managing your online store
          </p>
        </section>
        <section className="flex-1 bg-transparent md:bg-white p-8 lg:p-16 rounded-lg shadow-none md:shadow-lg flex justify-center items-center">
          {children}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center rounded-t-lg shadow-lg">
        <p>&copy; 2024 EcomControl Panel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
