"use client";

import Link from "next/link";

interface AppLogoProps {
  className?: string;
}

export function AppLogo({ className }: AppLogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className || ""}`}>
      <img
        src="/images/placeholder.png"
        alt="Bitroot logo"
        className="w-10 h-10 object-cover rounded flex"
      />
    </Link>
  );
}