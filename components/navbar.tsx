'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ChevronDownCircle, Menu, X } from 'lucide-react';

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-bold text-2xl italic text-primary">Bitroot</span>
                </Link>

                {/* Navigation Links - Desktop */}
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
                    <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground">
                        Join now!
                    </Button>
                    
                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 hover:bg-accent rounded-md transition"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-border bg-background">
                    <div className="px-4 py-6 space-y-4">
                        <Link 
                            href="/how-it-works" 
                            className="block text-base font-medium hover:text-primary transition py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            How it Works
                        </Link>
                        <Link 
                            href="/pricing" 
                            className="block text-base font-medium hover:text-primary transition py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link 
                            href="/features" 
                            className="flex items-center gap-2 text-base font-medium hover:text-primary transition py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Features
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <button className="flex items-center gap-2 text-base font-medium hover:text-primary transition py-2 w-full text-left">
                            Tools
                            <ChevronDownCircle className="w-4 h-4" />
                        </button>
                        
                        <div className="pt-4 border-t border-border">
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                Join now!
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
