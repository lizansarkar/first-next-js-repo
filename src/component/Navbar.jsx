import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <header className="p-5 flex justify-between items-center">
        <Link href='/' className="text-lg font-semibold">dev story</Link>

        <nav className="space-x-5">
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/about">Tutorials</Link>
        </nav>
      </header>
    </div>
  );
}
