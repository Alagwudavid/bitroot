"use client";

import React from "react";
import { Rss } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
      <div className="container mx-auto max-w-6xl relative overflow-visible">
        <div className="flex items-center justify-center min-h-[70vh]">
          <div className="w-full mx-auto text-center space-y-12">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-none border border-primary mx-auto">
                <Rss className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-medium text-secondary">Join the waitlist for Q1 2026</span>
              </div>
              <div className="space-y-3">
                <h2 className="text-4xl sm:text-6xl font-normal text-foreground leading-tight">Teach, engage, and learn</h2>
                <h2 className="text-4xl sm:text-6xl font-normal text-secondary/50 leading-tight">all in one place</h2>
              </div>
              <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
                The all-in-one platform for African experts to launch live classes. We handle the Escrow payments, scheduling, and student logistics - you just <span className="font-semibold italic">teach</span>.
              </p>
              <div className="flex justify-center pt-4">
                <Button
                  className="px-12 py-6 bg-[#37322f] hover:bg-[#37322f]/90 text-white rounded-full font-medium text-base shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] cursor-pointer transition"
                  onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join the Wait
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/puzzles.png" alt="Image of puzzles" width={32} height={32} className="w-32 h-32 absolute -translate-x-1/3 -translate-y-1/3 top-0 left-0 animate-float" />
        <Image src="/assets/multilingual.png" alt="Image of puzzles" width={32} height={32} className="w-32 h-32 absolute translate-x-1/3 -translate-y-1/3 top-0 right-0 animate-float-delay-1" />
        <Image src="/assets/time-management.png" alt="Icon for time management" width={32} height={32} className="w-32 h-32 absolute -translate-x-1/3 translate-y-1/3 bottom-0 left-0 animate-float-delay-2" />
        <Image src="/assets/multicurrency.png" alt="Image of multicurrency" width={32} height={32} className="w-32 h-32 md:w-40 md:h-40 absolute translate-x-1/3 translate-y-1/3 bottom-0 right-0 animate-float-delay-3" />
      </div>
    </section>
  );
}