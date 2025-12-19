"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

export default function Navbar() {
    const pathName = usePathname();
    console.log(pathName)
    if(pathName.startsWith("/dashboard")) {
        return <></>
    }
  return (
    <div>
      <header className="p-5 flex justify-between items-center">
        <Link href='/' className="text-lg font-semibold">dev story</Link>

        <nav className="space-x-5">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/register">Register</NavLink>
            <NavLink href="/stories">Stories</NavLink>
            <NavLink href="/tutorials">Tutorials</NavLink>
        </nav>
      </header>
    </div>
  );
}
