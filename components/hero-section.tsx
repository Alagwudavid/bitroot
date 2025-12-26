"use client";

import React from "react";
import { DollarSign, Calendar, Video, CreditCard, Mail, Users, FileText, Rss } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";

export function HeroSection() {
  const integrationIcons = [
    { Icon: DollarSign, name: "Stripe", color: "#635BFF" },
    { Icon: Calendar, name: "Calendar", color: "#4285F4" },
    { Icon: Video, name: "Zoom", color: "#2D8CFF" },
    { Icon: CreditCard, name: "Payments", color: "#00457C" },
    { Icon: Mail, name: "Email", color: "#EA4335" },
    { Icon: Users, name: "Teams", color: "#6264A7" },
    { Icon: FileText, name: "Docs", color: "#0B8043" },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto relative overflow-visible">
        <div className="flex items-center justify-center">
          <div className="space-y-6 w-full mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted shadow-lg">
                <Rss className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-medium text-secondary">Join the waitlist for Q1 2026</span>
              </div>
              <div className="">
                <h2 className="text-2xl sm:text-6xl font-normal text-foreground mb-1.5">Teach, engage, and learn</h2>
                <h2 className="text-2xl sm:text-6xl font-normal text-secondary/50">all in one place</h2>
              </div>
              <p className="text-lg text-foreground">
                The all-in-one platform for African experts to launch live classes. We handle the Escrow payments, scheduling, and student logistics - you just <span className="font-semibold italic">teach</span>.
              </p>
              <div className="flex justify-center">
                <Button
                  className="px-12 py-6 bg-[#37322f] hover:bg-[#37322f]/90 text-white rounded-full font-medium text-base shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] cursor-pointer transition"
                  onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join the Wait!
                </Button>
              </div>
            </div> {/* Integration Icons Slideshow */}
            <div className="py-8 px-6 hidden">
              <p className="text-sm text-muted-foreground mb-6">Integrates seamlessly with</p>
              <div className="relative overflow-hidden h-24">
                <motion.div
                  className="flex gap-8 absolute"
                  animate={{
                    x: [0, -100 * integrationIcons.length],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    },
                  }}
                >
                  {[...integrationIcons, ...integrationIcons, ...integrationIcons].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center justify-center min-w-[100px] group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-muted group-hover:bg-muted group-hover:cursor-pointer transition-colors shadow-sm">
                        <item.Icon className="w-7 h-7" style={{ color: item.color }} />
                      </div>
                      <span className="text-xs text-muted-foreground mt-2">{item.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
          <Image src="/assets/puzzles.png" alt="Image of puzzles" width={32} height={32} className="w-32 h-32 absolute -translate-x-1/3 -translate-y-1/3 top-0 left-0 animate-bounce" />
          <Image src="/assets/multilingual.png" alt="Image of puzzles" width={32} height={32} className="w-32 h-32 absolute translate-x-1/3 -translate-y-1/3 top-0 right-0 animate-bounce" />
          <Image src="/assets/time-management.png" alt="Icon for time management" width={32} height={32} className="w-32 h-32 absolute -translate-x-1/3 translate-y-1/3 bottom-0 left-0 animate-bounce" />
          <Image src="/assets/multicurrency.png" alt="Image of multicurrency" width={32} height={32} className="w-32 h-32 absolute translate-x-1/3 translate-y-1/3 bottom-0 right-0 animate-bounce" />
      </div>
    </section>
  );
}