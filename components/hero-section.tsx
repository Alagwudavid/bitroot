"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign } from "lucide-react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      console.log("Search query:", searchQuery);
    }
  };

  const popularSearches = ["dashboard", "landing page", "e-commerce", "logo", "card", "icons"];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Turn Your Expertise into a Global Business.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                The all-in-one platform for African experts to launch live cohorts. We handle the Escrow payments, scheduling, and student logistics - you just <span className="font-semibold italic">teach</span>.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-3 flex-wrap">
              <button className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
                Dashboard
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-full font-medium hover:bg-muted/80 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Community
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-full font-medium hover:bg-muted/80 transition">
                {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg> */}
                <DollarSign className="w-5 h-5"/>
                Marketplace
              </button>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Input your email address"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-14 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary hover:bg-primary/50 text-white flex items-center justify-center transition"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* Popular Searches */}
            <div className="flex items-center">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Join 500+ Instructors</span> waiting to launch
                </p>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden min-h-[400px] lg:min-h-[500px]">
              {/* Decorative circles */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-green-300"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border-2 border-green-300"></div>
              </div>

              {/* Main illustration elements */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="relative">
                  {/* Central document/card */}
                  <div className="bg-white rounded-2xl p-6 shadow-2xl transform rotate-2 w-64 h-80">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-4xl font-bold text-gray-800">+</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>

                  {/* Dollar signs */}
                  <div className="absolute -top-8 -right-8 bg-green-200 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-green-800">$</span>
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-green-200 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-green-800">$</span>
                  </div>

                  {/* Designer character */}
                  <div className="absolute -right-20 bottom-0">
                    <div className="relative">
                      <div className="w-32 h-40 bg-white rounded-t-full"></div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-100 rounded-full"></div>
                    </div>
                  </div>

                  {/* Design tools */}
                  <div className="absolute -bottom-10 left-0 flex gap-2">
                    <div className="w-8 h-8 bg-yellow-300 transform rotate-45"></div>
                    <div className="w-8 h-8 bg-green-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Wegrow badge */}
              <div className="absolute bottom-6 right-6 bg-green-900/80 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-800 rounded-full"></div>
                </div>
                <span className="text-white text-sm font-medium">Wegrow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
