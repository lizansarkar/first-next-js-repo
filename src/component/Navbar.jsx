"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

export default function Navbar() {
  const pathName = usePathname();

  // Dashboard e thakle navbar dekhabe na
  if (pathName?.startsWith("/dashboard")) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-gray-100 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            <img src="/logo.png" className="h-20 w-32"></img>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              href="/foods"
              className={
                pathName === "/about"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-blue-500 transition-colors"
              }
            >
              Foods
            </NavLink>
            <NavLink
              href="/about"
              className={
                pathName === "/about"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-blue-500 transition-colors"
              }
            >
              About
            </NavLink>
            <NavLink
              href="/stories"
              className={
                pathName === "/stories"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-blue-500 transition-colors"
              }
            >
              Stories
            </NavLink>
            <NavLink
              href="/tutorials"
              className={
                pathName === "/tutorials"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-blue-500 transition-colors"
              }
            >
              Tutorials
            </NavLink>
            <NavLink
              href="/reviews"
              className={
                pathName === "/tutorials"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-blue-500 transition-colors"
              }
            >
              Reviews
            </NavLink>
          </nav>

          {/* Action Buttons (Login/Register) */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
            >
              Register
            </Link>
          </div>
        </header>
      </div>
    </nav>
  );
}
