"use client";

import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Circle, DollarSign, Calendar, Video, CreditCard, Mail, Users, FileText, Loader2, Rss } from "lucide-react";
import Image from "next/image";
import { SuccessModal } from "@/components/success-modal";
import { motion, AnimatePresence } from "framer-motion";

export function HeroSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalData, setModalData] = useState({
    position: 0,
    referralLink: "",
    statusLink: "",
  });
  const emailInputRef = useRef<HTMLInputElement>(null);

  // Sanitize email input
  const sanitizeEmail = (email: string): string => {
    return email.trim().toLowerCase();
  };

  // Validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const integrationIcons = [
    { Icon: DollarSign, name: "Stripe", color: "#635BFF" },
    { Icon: Calendar, name: "Calendar", color: "#4285F4" },
    { Icon: Video, name: "Zoom", color: "#2D8CFF" },
    { Icon: CreditCard, name: "Payments", color: "#00457C" },
    { Icon: Mail, name: "Email", color: "#EA4335" },
    { Icon: Users, name: "Teams", color: "#6264A7" },
    { Icon: FileText, name: "Docs", color: "#0B8043" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const sanitizedEmail = sanitizeEmail(email);
    const sanitizedName = fullName.trim();

    if (!sanitizedName) {
      alert('Please enter your full name');
      return;
    }

    if (!sanitizedEmail || !isValidEmail(sanitizedEmail)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName: sanitizedName, email: sanitizedEmail }),
      });

      const data = await response.json();

      if (data.alreadyExists) {
        // Redirect to existing waitlist status page
        window.location.href = `/waitlist/${data.id}`;
        return;
      }

      if (data.success) {
        const appUrl = typeof window !== 'undefined' ? window.location.origin : '';
        const referralLink = `${appUrl}?ref=${data.referralId}`;
        const statusLink = `${appUrl}/waitlist/${data.id}`;

        setModalData({
          position: data.position,
          referralLink,
          statusLink,
        });
        setShowSuccessModal(true);
        setFullName('');
        setEmail('');
      } else {
        const errorMessage = data.details
          ? `${data.error}: ${data.details}`
          : data.error || 'Failed to join waitlist. Please try again.';
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Focus input when hash is #waitlist-form
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#waitlist-form') {
        setTimeout(() => {
          emailInputRef.current?.focus();
        }, 100);
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="space-y-8 w-full mx-auto text-center">
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50">
                <Rss className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-medium text-secondary">Join the waitlist for Q1 2026</span>
              </div>
              <p className="text-lg sm:text-xl text-foreground">
                The all-in-one platform for African experts to launch live cohorts. We handle the Escrow payments, scheduling, and student logistics - you just <span className="font-semibold italic">teach</span>.
              </p>
            </div>
            {/* Waitlist Form */}
            <form id="waitlist-form" onSubmit={handleSubmit} className="max-w-3xl mx-auto">
              <div className="space-y-6 max-w-4xl mx-auto">
                <p className="text-base text-foreground mb-6 font-bold">
                  Sign up to get notified when we launch.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={isSubmitting}
                  required
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <input
                  ref={emailInputRef}
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  required
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed gap-2 whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Now
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Success Modal */}
            <SuccessModal
              isOpen={showSuccessModal}
              onClose={() => setShowSuccessModal(false)}
              position={modalData.position}
              referralLink={modalData.referralLink}
              statusLink={modalData.statusLink}
            />

            {/* Integration Icons Slideshow */}
            <div className="mt-12 pt-8 bg-sky-300/10 rounded-t-full border-t border-border px-6 py-4">
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