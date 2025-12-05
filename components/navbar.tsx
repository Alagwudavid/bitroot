import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ChevronDownCircle, Globe } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-bold text-2xl italic text-primary">Bitroot</span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition">
                        How it Works
                    </Link>
                    <Link href="/pricing" className="text-sm font-medium hover:text-primary transition">
                        Pricing
                    </Link>
                    <Link href="/features" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition">
                        Features
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition">
                        Tools
                        <ChevronDownCircle className="w-4 h-4" />
                    </button>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    {/* <Link href="/login" className="text-sm font-medium hover:text-primary transition hidden sm:inline">
                        Log In
                    </Link> */}
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Join now!
                    </Button>
                </div>
            </div>
        </nav>
    );
}
