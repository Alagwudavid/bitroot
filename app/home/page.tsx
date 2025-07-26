"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Ellipsis, TrendingUp, Globe, Heart, MessageCircleMore, Bookmark, ChevronUp, ChevronDown, Play, VolumeX, Smile, Frown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/components/ui/use-mobile";
import { useIsTablet } from "@/components/ui/use-tablet";
import styled from "@emotion/styled";

// export const metadata = {
//   title: "About Us – My App",
//   description: "Learn more about our team and mission.",
// };

export default function Home() {
  const [value, setValue] = useState(50);
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [isButtonScroll, setIsButtonScroll] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const reelContainerRef = useRef<HTMLElement | null>(null);
  const reelRefs = useRef<(HTMLElement | null)[]>([]);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  // Handle outside clicks for the menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    
    // Add event listener when menu is open
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const postMetas = [
    {
      user: "Amara K.",
      avatar: "/placeholder-user.jpg",
      community: "Swahili Learners",
      audio: "Daily Swahili Phrase: Hakuna Matata!",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur rerum error placeat blanditiis ipsa facere perspiciatis sed animi ducimus facilis natus veritatis eos doloribus velit inventore officia, recusandae laboriosam repellendus.",
      likes: 45,
      comments: 12,
      shares: 3,
      time: "2 hours ago",
      success: true,
    },
    {
      user: "Unknown",
      avatar: null,
      community: null,
      audio: null,
      content:
        null,
      likes: 0,
      comments: 0,
      shares: 0,
      time: null,
      success: false,
    },
    {
      user: "Desta M.",
      avatar: "/placeholder-user.jpg",
      community: "Amharic Study Group",
      audio: "Weekly Challenge: Describe Your Day",
      content:
        "This week's challenge is to describe your daily routine in Amharic...",
      likes: 28,
      comments: 15,
      shares: 9,
      time: "1 day ago",
      success: true,
    },
    {
      user: "Kwame A.",
      avatar: "/placeholder-user.jpg",
      community: "Yoruba Culture & Language",
      audio: "Understanding Yoruba Proverbs",
      content:
        'Today I learned a beautiful proverb: "Bi a ba n gun igi bi aja..."',
      likes: 32,
      comments: 8,
      shares: 6,
      time: "4 hours ago",
      success: true,
    },
  ];

  const Btd_ReelContainer = styled.section`
    display: flex;
    flex: 1;
    justify-content: center;
    width: 100%;
    height: calc(100vh - var(--btd-topheader, 0px));
    overflow: hidden scroll;
    scroll-snap-type: y mandatory;
    scroll-padding-top: 0;
    margin-top: var(--top-margin-free-scroll-override, 0px) !important;
    margin: 0 auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
    scroll-padding: 10px;
    overscroll-behavior: contain;
  `;

  const Btd_iSReel = styled.section`
    position: relative;
  `;

  const Btd_ReelNotFound = styled.section`
    position: relative;
  `;

  const Btd_ReelSequence = styled.section`
    position: relative;
    ${isTablet ?
      `
        width: 420px;
      ` : `
        width: fit-content;
      `}
    height: 100vh;
    // background: #fafafa;
    ${isMobile ?
      `
        min-width: 315px;
        min-height: 560px;
       `
      :
      `
        min-width: 354px;
        min-height: 629px;
        `
    }
    // min-width: 315px;
    // min-height: 560px;
    // max-width: 354px;
    // max-height: 629px;
    aspect-ratio: var(--btd-ratio);
    // margin-top: 6% !important;
    margin: 0 auto;
    contain: size layout;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Btd_ReelPlayer = styled.section`
    display: flex;
    background: #f87171;
    width: 100%;
    height: 100%;
    position: relative;
    ${isMobile ?
      `
        min-width: 315px;
        min-height: 560px;
       `
      :
      `
      min-width: 354px;
        min-height: 629px;
        `
    }
    // max-width: 354px;
    // max-height: 629px;
    // min-width: 315px;
    // min-height: 560px;
  `;

  const Btd_ReelPlayer_EngagementPanel = styled.div`
    align-items: center;
    display: flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
    pointer-events: auto;
    width: 62px;
    height: fit-content;
    margin: auto 0;
    padding: 0 12px 0 12px;
  `;

  const Btd_ReelAction_Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Btd_ReelAction_Btn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
  `;
    const Btd_ReelAction_Span = styled.span`
    font-size: 14px;
    line-height: 1.5;
  `;
  // Function to scroll to the next reel
  const scrollToNextReel = () => {
    console.log('scrollToNextReel called, current index:', currentReelIndex);
    if (currentReelIndex < postMetas.length - 1) {
      const nextIndex = currentReelIndex + 1;
      console.log('Scrolling to next reel:', nextIndex);
      if (reelContainerRef.current && reelRefs.current[nextIndex]) {
        // Set flag to indicate this is a button-initiated scroll
        setIsButtonScroll(true);
        
        // Immediately update the current index
        setCurrentReelIndex(nextIndex);
        
        const container = reelContainerRef.current;
        const targetReel = reelRefs.current[nextIndex];
        
        console.log('Target position:', targetReel.offsetTop);
        
        // Force scroll to the exact position with a slight delay to ensure state is updated
        setTimeout(() => {
          if (container && targetReel) {
            container.scrollTo({
              top: targetReel.offsetTop,
              behavior: 'smooth'
            });
          }
        }, 10);
      } else {
        console.log('Container or target reel not available');
      }
    } else {
      console.log('Already at last reel');
    }
  };

  // Function to scroll to the previous reel
  const scrollToPrevReel = () => {
    console.log('scrollToPrevReel called, current index:', currentReelIndex);
    if (currentReelIndex > 0) {
      const prevIndex = currentReelIndex - 1;
      console.log('Scrolling to previous reel:', prevIndex);
      if (reelContainerRef.current && reelRefs.current[prevIndex]) {
        // Set flag to indicate this is a button-initiated scroll
        setIsButtonScroll(true);
        
        // Immediately update the current index
        setCurrentReelIndex(prevIndex);
        
        const container = reelContainerRef.current;
        const targetReel = reelRefs.current[prevIndex];
        
        console.log('Target position:', targetReel.offsetTop);
        
        // Force scroll to the exact position with a slight delay to ensure state is updated
        setTimeout(() => {
          if (container && targetReel) {
            container.scrollTo({
              top: targetReel.offsetTop,
              behavior: 'smooth'
            });
          }
        }, 10);
      } else {
        console.log('Container or target reel not available');
      }
    } else {
      console.log('Already at first reel');
    }
  };

  // Initialize refs array when postMetas changes
  useEffect(() => {
    // Pre-initialize the refs array with the correct length
    reelRefs.current = new Array(postMetas.length).fill(null);
  }, [postMetas.length]);

  // Handle scroll events to update current reel index
  useEffect(() => {
    let isScrolling = false;
    
    const handleScroll = () => {
      if (!reelContainerRef.current || isButtonScroll) return;
      
      // Set a flag to indicate we're handling a user-initiated scroll
      isScrolling = true;
      
      const container = reelContainerRef.current;
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      
      // Find which reel is most visible in the viewport
      let maxVisibleIndex = 0;
      let maxVisibleArea = 0;
      
      reelRefs.current.forEach((reelRef, index) => {
        if (!reelRef) return;
        
        const reelTop = reelRef.offsetTop;
        const reelHeight = reelRef.clientHeight;
        const visibleTop = Math.max(reelTop, scrollTop);
        const visibleBottom = Math.min(reelTop + reelHeight, scrollTop + containerHeight);
        
        if (visibleBottom > visibleTop) {
          const visibleArea = visibleBottom - visibleTop;
          if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea;
            maxVisibleIndex = index;
          }
        }
      });
      
      // Only update the index if this is a user-initiated scroll and the index has changed
      if (!isButtonScroll && maxVisibleIndex !== currentReelIndex) {
        console.log('User scroll detected, updating to index:', maxVisibleIndex);
        setCurrentReelIndex(maxVisibleIndex);
      }
      
      // Clear the scrolling flag after a short delay
      setTimeout(() => {
        isScrolling = false;
      }, 50);
    };
    
    const container = reelContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [isButtonScroll, currentReelIndex]);  // Add dependencies to ensure proper behavior
  
  // Track whether scroll was initiated by button or user
  
  // Auto-snap to the nearest reel when scrolling stops (only for user-initiated scrolls)
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let snapTimeout: NodeJS.Timeout;
    
    const handleScrollEnd = () => {
      if (!reelContainerRef.current) return;
      
      // Clear any existing timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);
      
      // Mark that user is scrolling
      setIsUserScrolling(true);
      
      // Set a new timeout to detect when scrolling stops
      scrollTimeout = setTimeout(() => {
        // Only auto-snap if the scroll was NOT initiated by a button click
        if (!isButtonScroll && reelContainerRef.current && reelRefs.current[currentReelIndex]) {
          const container = reelContainerRef.current;
          const targetReel = reelRefs.current[currentReelIndex];
          
          console.log('Auto-snapping to reel:', currentReelIndex, 'at position:', targetReel.offsetTop);
          
          // Snap to the current reel with a slightly longer duration for smoother animation
          container.scrollTo({
            top: targetReel.offsetTop,
            behavior: 'smooth'
          });
        }
        
        // Reset the user scrolling flag after a delay
        snapTimeout = setTimeout(() => {
          setIsUserScrolling(false);
          
          // Reset the button scroll flag after the scroll completes
          setIsButtonScroll(false);
        }, 300);
      }, 200); // Increased to 200ms for better detection of scroll stop
    };
    
    const container = reelContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScrollEnd);
      return () => {
        container.removeEventListener('scroll', handleScrollEnd);
        if (scrollTimeout) clearTimeout(scrollTimeout);
        if (snapTimeout) clearTimeout(snapTimeout);
      };
    }
  }, [currentReelIndex, isButtonScroll]);

  // Add keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle keyboard navigation if user is not actively scrolling
      if (!isUserScrolling) {
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
          scrollToNextReel();
          e.preventDefault();
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          scrollToPrevReel();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isUserScrolling]); // Add isUserScrolling dependency to prevent keyboard navigation during scrolling
  
  // Initial scroll to first reel on component mount
  useEffect(() => {
    // Wait for refs to be populated
    const timer = setTimeout(() => {
      if (reelContainerRef.current && reelRefs.current[0]) {
        reelContainerRef.current.scrollTo({
          top: 0,
          behavior: 'auto'
        });
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  
  if (isMobile === undefined) return null;
  if (isTablet === undefined) return null;
  
  return (
    <div className={cn("max-w-7xl w-full h-full mx-auto flex gap-2", )}>
        <Btd_ReelContainer ref={reelContainerRef}>
          <div className={cn("flex flex-col space-y-3 relative w-full shrink-0")}>
            {postMetas.map((post, index) => (
              <Btd_ReelSequence 
                key={index} 
                id={`${index}`} 
                ref={(el) => reelRefs.current[index] = el}
              >
                {post.success ? (
                <Btd_iSReel className="flex items-center gap-2 h-full shrink-0 relative">
                  <div className="flex-1 flex w-fit h-full bg-black relative rounded-xl">
                    <Btd_ReelPlayer className="rounded-xl"></Btd_ReelPlayer>
                    <a className="absolute inset-0 z-10 group/Btd_ReelPlayer_ rounded-xl overflow-hidden">
                      <div className="relative w-full h-full">
                        <div className="absolute h-14 top-0 z-20 group-hover/Btd_ReelPlayer_:flex hidden items-center justify-between w-full px-4 !bg-transparent bg-gradient-to-b from-[#0d1117] to-transparent transition-all duration-500 ease-in">
                          <Btd_ReelAction_Btn className="!w-8 !h-8 items-center justify-center text-white hover:text-sky-300 rounded-full backdrop-blur-md bg-[#0d1117]/20 dark:bg-[#0d1117]/70 dark:hover:bg-[#0d1117]">
                            <VolumeX className="size-6" />
                          </Btd_ReelAction_Btn>
                          <div className="relative">
                            <Btd_ReelAction_Btn 
                              className="!w-8 !h-8 flex items-center justify-center text-white hover:text-sky-300 rounded-full backdrop-blur-md bg-[#0d1117]/20 dark:bg-[#0d1117]/70 dark:hover:bg-[#0d1117]"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsMenuOpen(!isMenuOpen);
                              }}
                            >
                              <Ellipsis className="size-6" />
                            </Btd_ReelAction_Btn>
                            <div 
                              ref={menuRef}
                              className={`absolute right-0 top-full mt-2 ${isMenuOpen ? 'block' : 'hidden'} z-50 bg-[#1a1a1a] rounded-lg shadow-lg w-64 overflow-hidden`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div 
                                className="p-3 flex items-center justify-between border-b border-gray-800 cursor-pointer hover:bg-[#2a2a2a] transition-colors duration-200"
                                onClick={() => {
                                  // Handle quality selection
                                  console.log('Quality selected');
                                  setIsMenuOpen(false);
                                }}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center justify-center w-6 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                                      <line x1="7" y1="2" x2="7" y2="22"></line>
                                      <line x1="17" y1="2" x2="17" y2="22"></line>
                                      <line x1="2" y1="12" x2="22" y2="12"></line>
                                      <line x1="2" y1="7" x2="7" y2="7"></line>
                                      <line x1="2" y1="17" x2="7" y2="17"></line>
                                      <line x1="17" y1="17" x2="22" y2="17"></line>
                                      <line x1="17" y1="7" x2="22" y2="7"></line>
                                    </svg>
                                  </div>
                                  <span className="text-white text-sm font-medium">Quality</span>
                                </div>
                                <span className="text-white text-sm">Auto</span>
                              </div>
                              <div className="p-3 flex items-center justify-between border-b border-gray-800">
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center justify-center w-6 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                                      <path d="M7 2v20"></path>
                                      <path d="M17 2v20"></path>
                                      <path d="M2 12h20"></path>
                                      <path d="M2 7h5"></path>
                                      <path d="M2 17h5"></path>
                                      <path d="M17 17h5"></path>
                                      <path d="M17 7h5"></path>
                                    </svg>
                                  </div>
                                  <span className="text-white text-sm font-medium">Captions</span>
                                </div>
                              </div>
                              <div className="p-3 flex items-center justify-between border-b border-gray-800 cursor-pointer hover:bg-[#2a2a2a] transition-colors duration-200">
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center justify-center w-6 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                      <path d="M12 19V5"></path>
                                      <path d="M5 12l7-7 7 7"></path>
                                    </svg>
                                  </div>
                                  <span className="text-white text-sm font-medium">Auto scroll</span>
                                </div>
                                <div 
                                  className={`w-12 h-6 ${isAutoScroll ? 'bg-blue-600' : 'bg-gray-700'} rounded-full flex items-center p-1 transition-colors duration-200`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsAutoScroll(!isAutoScroll);
                                  }}
                                >
                                  <div className={`w-4 h-4 ${isAutoScroll ? 'bg-white ml-6' : 'bg-gray-400 ml-0'} rounded-full transition-all duration-200`}></div>
                                </div>
                              </div>
                              <div className="p-3 flex items-center justify-between border-b border-gray-800">
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center justify-center w-6 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                      <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                                      <polyline points="17 2 12 7 7 2"></polyline>
                                    </svg>
                                  </div>
                                  <span className="text-white text-sm font-medium">Floating Player</span>
                                </div>
                              </div>
                              <div className="p-3 flex items-center justify-between border-b border-gray-800">
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center justify-center w-6 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                                    </svg>
                                  </div>
                                  <span className="text-white text-sm font-medium">Not interested</span>
                                </div>
                              </div>
                              <div 
                                className="p-3 flex items-center justify-between cursor-pointer hover:bg-[#2a2a2a] transition-colors duration-200"
                                onClick={() => {
                                  // Handle report action
                                  console.log('Report clicked');
                                  setIsMenuOpen(false);
                                }}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center justify-center w-6 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                                      <line x1="4" y1="22" x2="4" y2="15"></line>
                                    </svg>
                                  </div>
                                  <span className="text-white text-sm font-medium">Report</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                          <Btd_ReelAction_Btn className="group-hover/Btd_ReelPlayer_:!flex !hidden backdrop-blur-md bg-[#0d1117]/20 dark:bg-[#0d1117]/70 dark:hover:bg-[#0d1117] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hover:text-sky-300 transition-all duration-500 ease-in">
                            <Play className="size-8" />
                          </Btd_ReelAction_Btn>
                      </div>
                    </a>
                    <Card className="absolute bottom-0 z-30 w-full rounded-b-xl border-none !bg-transparent bg-gradient-to-t from-[#0d1117] to-transparent overflow-hidden">
                      <CardContent className="p-0 space-y-4">
                          <div className="">
                            <div className="flex flex-col items-start space-y-1">
                              <div className="flex items-start space-x-2 px-2 w-full">
                                <Btd_ReelAction_Btn className="!w-10 !h-10 rounded-full backdrop-blur-md bg-[#0d1117]/20 dark:bg-[#0d1117]/70 dark:hover:bg-[#0d1117]">
                                  <Avatar className="w-full h-full">
                                    <AvatarImage
                                      src={post.avatar || "/placeholder.svg"}
                                      alt={post.user}
                                    />
                                    <AvatarFallback className="bg-[#a2d6f9] text-[#072ac8] dark:bg-[#7037e4] dark:text-[#fafafa]">
                                      {post.user.charAt(0)}
                                    </AvatarFallback>
                                  </Avatar>
                                </Btd_ReelAction_Btn>
                                <div className="flex flex-col items-start">
                                  <div className="flex items-center space-x-2">
                                    <span className="font-medium text-sm text-white">
                                      {post.user}
                                    </span>
                                    <span className="text-xs text-white">
                                      in {post.community}
                                    </span>
                                  </div>
                                  <span className="text-xs text-white mb-1">{post.time}</span>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-base text-white mb-2 line-clamp-2 px-2">
                                  {post.content}
                                </p>
                                <div className="flex flex-col space-y-2 text-xs text-gray-500 dark:text-[#fafafa]/50">
                                  <div className="flex items-center space-x-3 px-2">
                                    <Btd_ReelAction_Div>
                                      <Btd_ReelAction_Btn className="!w-5 !h-5 rounded overflow-hidden backdrop-blur-md bg-[#0d1117]/20 dark:bg-[#0d1117]/70 dark:hover:bg-[#0d1117]">
                                        <img className="w-full h-full text-white" src="/images/happy_beet.jpg" alt="Follow" />
                                      </Btd_ReelAction_Btn>
                                    </Btd_ReelAction_Div>
                                    <span className="text-sm text-white hover:text-sky-300 mb-1 line-clamp-1">
                                      {post.audio}
                                    </span>
                                  </div>
                                  <input type="range" min={1} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full rounded-xl h-1.5" />
                                </div>
                              </div>
                            </div>
                          </div>
                      </CardContent>
                    </Card>
                  </div>
                  <Btd_ReelPlayer_EngagementPanel className={cn("", isMobile ? "absolute top-1/2 right-0 z-20 overflow-hidden" : "relative")}>
                    <div className="w-full flex flex-col gap-2 items-center justify-center">
                      <Btd_ReelAction_Div>
                        <Btd_ReelAction_Btn className="rounded-full backdrop-blur-md bg-[#0d1117]/20 dark:bg-[#0d1117]/70 dark:hover:bg-[#0d1117]">
                          <Heart className="size-6" />
                        </Btd_ReelAction_Btn>
                        <Btd_ReelAction_Span className="text-black dark:text-white">{post.likes}</Btd_ReelAction_Span>
                      </Btd_ReelAction_Div>
                      <Btd_ReelAction_Div>
                        <Btd_ReelAction_Btn 
                          className="rounded-full backdrop-blur-md bg-[#0d1117]/20 dark:bg-[#0d1117]/70 dark:hover:bg-[#0d1117]"
                          onClick={() => setShowComments(true)}
                        >
                          <MessageCircleMore className="size-6" />
                        </Btd_ReelAction_Btn>
                        <Btd_ReelAction_Span className="text-black dark:text-white">{post.comments}</Btd_ReelAction_Span>
                      </Btd_ReelAction_Div>
                      <Btd_ReelAction_Div>
                        <Btd_ReelAction_Btn className="rounded-full backdrop-blur-md bg-[#0d1117]/20 dark:bg-[#0d1117]/70 dark:hover:bg-[#0d1117]">
                          <Bookmark className="size-6" />
                        </Btd_ReelAction_Btn>
                        <Btd_ReelAction_Span className="text-black dark:text-white">{post.shares}</Btd_ReelAction_Span>
                      </Btd_ReelAction_Div>
                    </div>
                  </Btd_ReelPlayer_EngagementPanel>
                </Btd_iSReel>
                ) : (
                <Btd_ReelNotFound className="flex flex-col items-center justify-center gap-2 w-full h-full shrink-0 relative rounded-xl bg-black">
                  <Frown className="size-8 text-white" />
                  <span className="text-white font-semibold text-xl">Sorry,</span>
                  <span className="text-red-500 text-lg">This reel is not available.</span>
                </Btd_ReelNotFound>
                )}
              </Btd_ReelSequence>
            ))}
          </div>
        </Btd_ReelContainer>
        {showComments && (
          isTablet ? (
          <div className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4`}>
            <div className="bg-[#1a1a1a] rounded-lg shadow-lg w-full max-w-[480px] max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <h3 className="text-white font-semibold">Comments</h3>
                <span className="text-white/70 text-sm">3.6K</span>
                <button 
                   className="text-white/70 hover:text-white"
                   onClick={() => setShowComments(false)}
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <line x1="18" y1="6" x2="6" y2="18"></line>
                     <line x1="6" y1="6" x2="18" y2="18"></line>
                   </svg>
                 </button>
              </div>
              <div className="overflow-y-auto p-4 max-h-[calc(90vh-120px)]">
                <div className="flex gap-3 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold">P</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-medium">@PeterClark-ez2of</span>
                      <span className="text-white/50 text-sm">1 month ago</span>
                    </div>
                    <p className="text-white">All fun and games until they get caught with the flash drives.</p>
                    <div className="flex items-center gap-4 mt-2">
                      <button className="flex items-center gap-1 text-white/70 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <span>74K</span>
                      </button>
                      <button className="flex items-center gap-1 text-white/70 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                        </svg>
                      </button>
                      <button className="text-white/70 hover:text-white">Reply</button>
                    </div>
                    <button className="flex items-center gap-1 text-blue-400 mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 10 4 15 9 20"></polyline>
                        <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                      </svg>
                      <span>146 replies</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-3 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src="/placeholder-user.jpg" alt="User" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-medium">@flamixin</span>
                      <span className="text-white/50 text-sm">1 month ago</span>
                    </div>
                    <p className="text-white">North Koreans who found this: "wow look at those beautiful little boxes. I wish I know what are those for."</p>
                    <div className="flex items-center gap-4 mt-2">
                      <button className="flex items-center gap-1 text-white/70 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <span>28K</span>
                      </button>
                      <button className="flex items-center gap-1 text-white/70 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                        </svg>
                      </button>
                      <button className="text-white/70 hover:text-white">Reply</button>
                    </div>
                    <button className="flex items-center gap-1 text-blue-400 mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 10 4 15 9 20"></polyline>
                        <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                      </svg>
                      <span>57 replies</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-3 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src="/placeholder-user1.png" alt="User" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-medium">@him053</span>
                      <span className="text-white/50 text-sm">11 days ago</span>
                    </div>
                    <p className="text-white">"Give me your personal information and I promise I won't steal it man, scouts honour."</p>
                    <div className="flex items-center gap-4 mt-2">
                      <button className="flex items-center gap-1 text-white/70 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <span>12K</span>
                      </button>
                      <button className="flex items-center gap-1 text-white/70 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                        </svg>
                      </button>
                      <button className="text-white/70 hover:text-white">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-800">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src="/placeholder-user.jpg" alt="User" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <input type="text" placeholder="Add a comment..." className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`w-[clamp(280px,80vw,480px)] mr-2 bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden flex flex-col justify-between`}>
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <h3 className="text-white font-semibold">Comments</h3>
              <span className="text-white/70 text-sm">3.6K</span>
              <button 
                   className="text-white/70 hover:text-white"
                   onClick={() => setShowComments(false)}
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <line x1="18" y1="6" x2="6" y2="18"></line>
                     <line x1="6" y1="6" x2="18" y2="18"></line>
                   </svg>
              </button>
            </div>
            <div className="overflow-y-auto p-4 max-h-[calc(100vh-200px)]">
              <div className="flex gap-3 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold">P</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-medium">@PeterClark-ez2of</span>
                    <span className="text-white/50 text-sm">1 month ago</span>
                  </div>
                  <p className="text-white">All fun and games until they get caught with the flash drives.</p>
                  <div className="flex items-center gap-4 mt-2">
                    <button className="flex items-center gap-1 text-white/70 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <span>74K</span>
                    </button>
                    <button className="flex items-center gap-1 text-white/70 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                      </svg>
                    </button>
                    <button className="text-white/70 hover:text-white">Reply</button>
                  </div>
                  <button className="flex items-center gap-1 text-blue-400 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 10 4 15 9 20"></polyline>
                      <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                    </svg>
                    <span>146 replies</span>
                  </button>
                </div>
              </div>
              
              <div className="flex gap-3 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src="/placeholder-user.jpg" alt="User" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-medium">@flamixin</span>
                    <span className="text-white/50 text-sm">1 month ago</span>
                  </div>
                  <p className="text-white">North Koreans who found this: "wow look at those beautiful little boxes. I wish I know what are those for."</p>
                  <div className="flex items-center gap-4 mt-2">
                    <button className="flex items-center gap-1 text-white/70 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <span>28K</span>
                    </button>
                    <button className="flex items-center gap-1 text-white/70 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                      </svg>
                    </button>
                    <button className="text-white/70 hover:text-white">Reply</button>
                  </div>
                  <button className="flex items-center gap-1 text-blue-400 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 10 4 15 9 20"></polyline>
                      <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                    </svg>
                    <span>57 replies</span>
                  </button>
                </div>
              </div>
              
              <div className="flex gap-3 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src="/placeholder-user1.png" alt="User" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-medium">@him053</span>
                    <span className="text-white/50 text-sm">11 days ago</span>
                  </div>
                  <p className="text-white">"Give me your personal information and I promise I won't steal it man, scouts honour."</p>
                  <div className="flex items-center gap-4 mt-2">
                    <button className="flex items-center gap-1 text-white/70 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <span>12K</span>
                    </button>
                    <button className="flex items-center gap-1 text-white/70 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                      </svg>
                    </button>
                    <button className="text-white/70 hover:text-white">Reply</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-800">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src="/placeholder-user.jpg" alt="User" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex-grow">
                  <input type="text" placeholder="Add a comment..." className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500" />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
