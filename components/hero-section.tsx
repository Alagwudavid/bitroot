"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Circle, DollarSign } from "lucide-react";
import Image from "next/image";

// import { motion } from "framer-motion";


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
              <h1 className="text-primary text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                The future of online learning.
              </h1>
              <p className="text-lg sm:text-xl text-foreground">
                The all-in-one platform for African experts to launch live cohorts. We handle the Escrow payments, scheduling, and student logistics - you just <span className="font-semibold italic">teach</span>.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-3 flex-wrap">
              <button className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition">
                <Circle className="w-4 h-4" />
                Learner
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-full font-medium hover:bg-muted/80 transition">
                <Circle className="w-4 h-4" />
                Instructor/Creator
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
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 w-fit h-10 rounded-full bg-primary hover:bg-primary/50 text-white flex items-center justify-center transition"
              >
                Join
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* Popular Searches */}
            <div className="flex items-center">
              <p className="text-base text-muted-foreground">
                <span className="font-semibold text-foreground">Join 500+ Instructors</span> waiting to launch
              </p>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="relative">
            <div className="bg-muted rounded-3xl relative overflow-hidden border min-h-[400px] lg:min-h-[500px] m-auto">
              {/* <div className="relative z-10 h-full flex items-center justify-center">
              </div> */}
                  <Image src="/hero-bg.jpg" width={1200} height={800} alt="Dashboard interface" className="object-contain" />
              {/* control panel */}
              {/* <div className="absolute bottom-6 right-6 bg-green-900/80 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-800 rounded-full"></div>
                </div>
                <span className="text-white text-sm font-medium">Wegrow</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// const LETTER_DELAY = 0.025;
// const BOX_FADE_DURATION = 0.125;

// const FADE_DELAY = 5;
// const MAIN_FADE_DURATION = 0.25;

// const SWAP_DELAY_IN_MS = 5500;

// const Typewrite = ({ examples }) => {
//   const [exampleIndex, setExampleIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setExampleIndex((pv) => (pv + 1) % examples.length);
//     }, SWAP_DELAY_IN_MS);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <p className="mb-2.5 text-sm font-light uppercase">
//       <span className="inline-block size-2 bg-neutral-950" />
//       <span className="ml-3">
//         EXAMPLE:{" "}
//         {examples[exampleIndex].split("").map((l, i) => (
//           <motion.span
//             initial={{
//               opacity: 1,
//             }}
//             animate={{
//               opacity: 0,
//             }}
//             transition={{
//               delay: FADE_DELAY,
//               duration: MAIN_FADE_DURATION,
//               ease: "easeInOut",
//             }}
//             key={`${exampleIndex}-${i}`}
//             className="relative"
//           >
//             <motion.span
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               transition={{
//                 delay: i * LETTER_DELAY,
//                 duration: 0,
//               }}
//             >
//               {l}
//             </motion.span>
//             <motion.span
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 delay: i * LETTER_DELAY,
//                 times: [0, 0.1, 1],
//                 duration: BOX_FADE_DURATION,
//                 ease: "easeInOut",
//               }}
//               className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
//             />
//           </motion.span>
//         ))}
//       </span>
//     </p>
//   );
// };