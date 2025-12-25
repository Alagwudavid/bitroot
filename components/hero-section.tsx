"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Circle, DollarSign, Calendar, Video, CreditCard, Mail, Users, FileText, Loader2 } from "lucide-react";
import Image from "next/image";
import { SuccessModal } from "@/components/success-modal";
import { motion, AnimatePresence } from "framer-motion";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalData, setModalData] = useState({
    position: 0,
    referralLink: "",
    statusLink: "",
  });

  // Sanitize email input
  const sanitizeEmail = (email: string): string => {
    return email.trim().toLowerCase();
  };

  // Validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const words = ["learning", "teaching", "exams", "quizzes", "memberships"];

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
        body: JSON.stringify({ email: sanitizedEmail }),
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

  // Typewriter effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 30;
    const word = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="space-y-8 w-full mx-auto text-center">
            <div className="space-y-6 max-w-4xl mx-auto">
              <h1 className="text-primary text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                The future of online{" "}
                <span className="inline-block min-w-[200px] text-left">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-foreground">
                The all-in-one platform for African experts to launch live cohorts. We handle the Escrow payments, scheduling, and student logistics - you just <span className="font-semibold italic">teach</span>.
              </p>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
                className="w-full px-6 py-4 pr-32 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 w-fit h-10 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Waitlist Count */}
            <div className="flex items-center justify-center">
              <p className="text-base text-muted-foreground">
                <span className="font-semibold text-foreground">Join 500+ Instructors</span> waiting to launch
              </p>
            </div>

            {/* Success Modal */}
            <SuccessModal
              isOpen={showSuccessModal}
              onClose={() => setShowSuccessModal(false)}
              position={modalData.position}
              referralLink={modalData.referralLink}
              statusLink={modalData.statusLink}
            />

            {/* Integration Icons Slideshow */}
            <div className="mt-12 pt-8 border-t border-border">
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