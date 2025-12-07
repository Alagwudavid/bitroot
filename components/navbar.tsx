'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ChevronDownCircle, Menu, X, ShoppingBag, GraduationCap, MessagesSquare, FileText, WalletCards, Vault, Puzzle, Brain, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
    const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-bold text-2xl font-mono text-primary">Bitroot</span>
                </Link>

                {/* Navigation Links - Desktop */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition">
                        How it Works
                    </Link>
                    <Link href="/pricing" className="text-sm font-medium hover:text-primary transition">
                        Pricing
                    </Link>
                    <div
                        className="relative"
                        onMouseEnter={() => setFeaturesDropdownOpen(true)}
                        onMouseLeave={() => setFeaturesDropdownOpen(false)}
                    >
                        <button
                            className="flex items-center gap-1 text-sm font-medium hover:text-primary transition cursor-pointer"
                            onClick={() => setFeaturesDropdownOpen(!featuresDropdownOpen)}
                        >
                            Features
                            <ChevronDownCircle className={`w-4 h-4 transition-transform ${featuresDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {featuresDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg overflow-hidden"
                                >
                                    <div className="py-2">
                                        <Link
                                            href="/marketplace"
                                            className="flex items-start gap-3 px-4 py-3 transition group"
                                            onClick={() => setFeaturesDropdownOpen(false)}
                                        >
                                            <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition">
                                                <ShoppingBag className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm mb-0.5 group-hover:text-primary">Marketplace</div>
                                                <div className="text-xs text-muted-foreground">courses and masterclass</div>
                                            </div>
                                        </Link>

                                        <Link
                                            href="/academy"
                                            className="flex items-start gap-3 px-4 py-3 transition group"
                                            onClick={() => setFeaturesDropdownOpen(false)}
                                        >
                                            <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition">
                                                <GraduationCap className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm mb-0.5 group-hover:text-primary">Classroom</div>
                                                <div className="text-xs text-muted-foreground">Learn from the best</div>
                                            </div>
                                        </Link>

                                        <Link
                                            href="/updates"
                                            className="flex items-start gap-3 px-4 py-3 transition group"
                                            onClick={() => setFeaturesDropdownOpen(false)}
                                        >
                                            <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition">
                                                <MessagesSquare className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm mb-0.5 group-hover:text-primary">Community</div>
                                                <div className="text-xs text-muted-foreground">Network with peers</div>
                                            </div>
                                        </Link>

                                        <Link
                                            href="/blog"
                                            className="flex items-start gap-3 px-4 py-3 transition group"
                                            onClick={() => setFeaturesDropdownOpen(false)}
                                        >
                                            <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition">
                                                <WalletCards className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm mb-0.5 group-hover:text-primary">Escrow</div>
                                                <div className="text-xs text-muted-foreground">Build trust with our escrow  vault</div>
                                            </div>
                                        </Link>
                                        <div className='p-2 w-full flex items-center justify-center'>
                                            <Link href={"/features"} className="flex items-center text-center hover:underline text-primary">
                                                View all
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div
                        className="relative"
                        onMouseEnter={() => setToolsDropdownOpen(true)}
                        onMouseLeave={() => setToolsDropdownOpen(false)}
                    >
                        <button
                            className="flex items-center gap-1 text-sm font-medium hover:text-primary transition cursor-pointer"
                            onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                        >
                            Tools
                            <ChevronDownCircle className={`w-4 h-4 transition-transform ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {toolsDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg overflow-hidden"
                                >
                                    <div className="py-2">
                                        <Link
                                            href="/marketplace"
                                            className="flex items-start gap-3 px-4 py-3 transition group"
                                            onClick={() => setToolsDropdownOpen(false)}
                                        >
                                            <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition">
                                                <Brain className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm mb-0.5 group-hover:text-primary">Beet Ai</div>
                                                <div className="text-xs text-muted-foreground">Personal ai assistant and chatbot</div>
                                            </div>
                                        </Link>

                                        <Link
                                            href="/bitquiz"
                                            className="flex items-start gap-3 px-4 py-3 transition group"
                                            onClick={() => setToolsDropdownOpen(false)}
                                        >
                                            <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition">
                                                <Puzzle className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm mb-0.5 group-hover:text-primary">BitQuiz</div>
                                                <div className="text-xs text-muted-foreground">Create quiz and gradable questionaires for your students</div>
                                            </div>
                                        </Link>

                                        <Link
                                            href="/vault"
                                            className="flex items-start gap-3 px-4 py-3 transition group"
                                            onClick={() => setToolsDropdownOpen(false)}
                                        >
                                            <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition">
                                                <Vault className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm mb-0.5 group-hover:text-primary">Escrow vault</div>
                                                <div className="text-xs text-muted-foreground">Lock items for sell with trust</div>
                                            </div>
                                        </Link>

                                        <Link
                                            href="/whiteboard"
                                            className="flex items-start gap-3 px-4 py-3 transition group"
                                            onClick={() => setToolsDropdownOpen(false)}
                                        >
                                            <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition">
                                                <FileText className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm mb-0.5 group-hover:text-primary">Whiteboard</div>
                                                <div className="text-xs text-muted-foreground">Your whiteboard for limitless illustrations</div>
                                            </div>
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    <Button className="hidden sm:flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition">
                        Join now!
                    </Button>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-md transition"
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
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden border-t border-border bg-background overflow-hidden"
                    >
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

                            <div className="space-y-2">
                                <div className="text-sm font-semibold text-muted-foreground px-2 py-1">Tools</div>

                                <Link
                                    href="/marketplace"
                                    className="flex items-start gap-3 px-2 py-2 rounded-md transition"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <div className="p-2 bg-primary/10 rounded-md">
                                        <ShoppingBag className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-sm mb-0.5 group-hover:text-primary">Marketplace</div>
                                        <div className="text-xs text-muted-foreground">Templates and plugins</div>
                                    </div>
                                </Link>

                                <Link
                                    href="/academy"
                                    className="flex items-start gap-3 px-2 py-2 rounded-md transition"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <div className="p-2 bg-primary/10 rounded-md">
                                        <GraduationCap className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-sm mb-0.5 group-hover:text-primary">Academy</div>
                                        <div className="text-xs text-muted-foreground">Learn the basics</div>
                                    </div>
                                </Link>

                                <Link
                                    href="/updates"
                                    className="flex items-start gap-3 px-2 py-2 rounded-md transition"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <div className="p-2 bg-primary/10 rounded-md">
                                        <MessagesSquare className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-sm mb-0.5 group-hover:text-primary">Updates</div>
                                        <div className="text-xs text-muted-foreground">See what's new</div>
                                    </div>
                                </Link>

                                <Link
                                    href="/blog"
                                    className="flex items-start gap-3 px-2 py-2 rounded-md transition"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <div className="p-2 bg-primary/10 rounded-md">
                                        <FileText className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-sm mb-0.5 group-hover:text-primary">Blog</div>
                                        <div className="text-xs text-muted-foreground">Tips and tutorials</div>
                                    </div>
                                </Link>
                            </div>

                            <div className="pt-4 border-t border-border">
                                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                    Join now!
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
