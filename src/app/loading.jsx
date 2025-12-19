import Link from "next/link";
import React from "react";

export default function loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1>L <span className="animate-spin text-6xl">♻️⟳⚙️</span></h1>
      <h1>ADING</h1>
      <Link href={"/"} className="underline">
        Go To Home
      </Link>
    </div>
  );
}
