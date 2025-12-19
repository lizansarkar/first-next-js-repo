import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({ href, children }) {
  const pathName = usePathname();

  return (
    <Link className={`${pathName.startsWith(href) && "bg-green-600 py-2 px-3 rounded-xl"}`} href={href}>
      {children}
    </Link>
  );
}
