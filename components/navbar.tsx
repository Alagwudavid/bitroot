import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <Image src="/logo-b.svg" alt="Bitroot Logo" width={24} height={24} />
          </div> */}
          <span className="font-bold text-lg hidden sm:inline">Bitroot</span>
        </Link>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Early Access</Button>
      </div>
    </nav>
  );
}
