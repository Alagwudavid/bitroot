"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { House, AudioWaveform, Compass, Video, Trophy, Heart, Image, Podcast, Flame, Headphones, UsersRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/components/ui/use-mobile";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRouter } from "next/navigation";
import { SkeletonSide } from "@/components/ui/skeleton-side";


export function Sidebar() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const menuItems = [
    { id: "Home",
      label: "Home",
      icon: <svg className="shrink-0 size-8 group-hover/sidebar:scale-110 group-hover/sidebar:-rotate-12 duration-500 ease-in-out" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9.44661 15.3975C9.11385 15.1508 8.64413 15.2206 8.39747 15.5534C8.15082 15.8862 8.22062 16.3559 8.55339 16.6025C9.5258 17.3233 10.715 17.75 12 17.75C13.285 17.75 14.4742 17.3233 15.4466 16.6025C15.7794 16.3559 15.8492 15.8862 15.6025 15.5534C15.3559 15.2206 14.8862 15.1508 14.5534 15.3975C13.825 15.9373 12.9459 16.25 12 16.25C11.0541 16.25 10.175 15.9373 9.44661 15.3975Z" fill="currentColor"/>
            </svg>,
      href: "/home"
    },
    { id: "learn",
      label: "Learn",
      icon: <svg className="shrink-0 size-8 group-hover/sidebar:scale-110 group-hover/sidebar:-rotate-12 duration-500 ease-in-out" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 16V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15H19.5C20.05 15 20.5 15.45 20.5 16Z" fill="currentColor"/>
            <path d="M15.5 2H8.5C4.5 2 3.5 3 3.5 7V14.58C4.26 13.91 5.26 13.5 6.35 13.5H19.5C20.05 13.5 20.5 13.05 20.5 12.5V7C20.5 3 19.5 2 15.5 2ZM13 10.75H8C7.59 10.75 7.25 10.41 7.25 10C7.25 9.59 7.59 9.25 8 9.25H13C13.41 9.25 13.75 9.59 13.75 10C13.75 10.41 13.41 10.75 13 10.75ZM16 7.25H8C7.59 7.25 7.25 6.91 7.25 6.5C7.25 6.09 7.59 5.75 8 5.75H16C16.41 5.75 16.75 6.09 16.75 6.5C16.75 6.91 16.41 7.25 16 7.25Z" fill="currentColor"/>
            </svg>,
      href: "/learn"
    },
    { id: "challenges", 
      label: "Challenges",
      icon: <svg className="shrink-0 size-8 group-hover/sidebar:scale-110 group-hover/sidebar:-rotate-12 duration-500 ease-in-out" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.25 18.2509H9C7.9 18.2509 7 19.1509 7 20.2509V20.5009H6C5.59 20.5009 5.25 20.8409 5.25 21.2509C5.25 21.6609 5.59 22.0009 6 22.0009H18C18.41 22.0009 18.75 21.6609 18.75 21.2509C18.75 20.8409 18.41 20.5009 18 20.5009H17V20.2509C17 19.1509 16.1 18.2509 15 18.2509H12.75V15.9609C12.5 15.9909 12.25 16.0009 12 16.0009C11.75 16.0009 11.5 15.9909 11.25 15.9609V18.2509Z" fill="currentColor"/>
      <path d="M18.4793 11.64C19.1393 11.39 19.7193 10.98 20.1793 10.52C21.1093 9.49 21.7193 8.26 21.7193 6.82C21.7193 5.38 20.5893 4.25 19.1493 4.25H18.5893C17.9393 2.92 16.5793 2 14.9993 2H8.9993C7.4193 2 6.0593 2.92 5.4093 4.25H4.8493C3.4093 4.25 2.2793 5.38 2.2793 6.82C2.2793 8.26 2.8893 9.49 3.8193 10.52C4.2793 10.98 4.8593 11.39 5.5193 11.64C6.5593 14.2 9.0593 16 11.9993 16C14.9393 16 17.4393 14.2 18.4793 11.64ZM14.8393 8.45L14.2193 9.21C14.1193 9.32 14.0493 9.54 14.0593 9.69L14.1193 10.67C14.1593 11.27 13.7293 11.58 13.1693 11.36L12.2593 11C12.1193 10.95 11.8793 10.95 11.7393 11L10.8293 11.36C10.2693 11.58 9.8393 11.27 9.8793 10.67L9.9393 9.69C9.9493 9.54 9.8793 9.32 9.7793 9.21L9.1593 8.45C8.7693 7.99 8.9393 7.48 9.5193 7.33L10.4693 7.09C10.6193 7.05 10.7993 6.91 10.8793 6.78L11.4093 5.96C11.7393 5.45 12.2593 5.45 12.5893 5.96L13.1193 6.78C13.1993 6.91 13.3793 7.05 13.5293 7.09L14.4793 7.33C15.0593 7.48 15.2293 7.99 14.8393 8.45Z" fill="currentColor"/>
      </svg>,
      href: "/challenges" },
    { id: "courses", 
      label: "Courses", 
      icon: <svg className="shrink-0 size-8 group-hover/sidebar:scale-110 group-hover/sidebar:-rotate-12 duration-500 ease-in-out" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.15 6.17C20.74 5.95 19.88 5.72 18.71 6.54L17.24 7.58C17.13 4.47 15.78 3.25 12.5 3.25H6.5C3.08 3.25 1.75 4.58 1.75 8V16C1.75 18.3 3 20.75 6.5 20.75H12.5C15.78 20.75 17.13 19.53 17.24 16.42L18.71 17.46C19.33 17.9 19.87 18.04 20.3 18.04C20.67 18.04 20.96 17.93 21.15 17.83C21.56 17.62 22.25 17.05 22.25 15.62V8.38C22.25 6.95 21.56 6.38 21.15 6.17ZM11 11.38C9.97 11.38 9.12 10.54 9.12 9.5C9.12 8.46 9.97 7.62 11 7.62C12.03 7.62 12.88 8.46 12.88 9.5C12.88 10.54 12.03 11.38 11 11.38Z" fill="currentColor"/>
      </svg>, 
      href: "/courses" },
    { id: "profile", 
      label: "Profile", 
      icon: <Avatar className="h-10 w-10 rounded-md">
      <AvatarImage src="/placeholder-user1.png" alt="User" />
      <AvatarFallback className="bg-[#fbde84] text-black h-10 w-10 rounded-md">
        AJ
      </AvatarFallback>
    </Avatar>, 
      href: "/profile" },
    { id: "More", 
      label: "Menu", 
      icon: <svg className="shrink-0 size-8 group-hover/sidebar:scale-110 group-hover/sidebar:-rotate-12 duration-500 ease-in-out" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path
              d="M20.5 16.75H18.25V14.5C18.25 14.09 17.91 13.75 17.5 13.75C17.09 13.75 16.75 14.09 16.75 14.5V16.75H14.5C14.09 16.75 13.75 17.09 13.75 17.5C13.75 17.91 14.09 18.25 14.5 18.25H16.75V20.5C16.75 20.91 17.09 21.25 17.5 21.25C17.91 21.25 18.25 20.91 18.25 20.5V18.25H20.5C20.91 18.25 21.25 17.91 21.25 17.5C21.25 17.09 20.91 16.75 20.5 16.75Z"
              fill="currentColor"
            />
            <path
              d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
              fill="currentColor"
            />
            <path
              d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
              fill="currentColor"
            />
            <path
              d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
              fill="currentColor"
            />
          </svg>, },
  ];
  const MoreMenuOptions = [
    { label: "Reels", icon: <Flame />, value: "reels", href: "/reels" },
    { label: "Explore", icon: <Compass />, value: "explore", href: "/explore" },
    { label: "Community", icon: <UsersRound />, value: "community", href: "/community" },
    // { label: "Galleries", icon: <Image />, value: "gallery", href: "/explore/gallery" },
    { label: "Listen", icon: <Headphones />, value: "listen", href: "/explore/listen" },
    { label: "Leaderboard", icon: <Trophy />, value: "leaderboard", href: "/leaderboard" },
    // { label: "Favourite", icon: <Heart />, value: "favourite", href: "/b/user/favourite" },
  ];
  const [MoreMenuOpen, setMoreMenuOpen] = useState(false);
  // const [MoreSelected, setMoreSelected] = useState("Explore");
  const MoreBtnRef = useRef<HTMLButtonElement>(null);

  const MenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        MenuRef.current &&
        !MenuRef.current.contains(event.target as Node) &&
        MoreBtnRef.current &&
        !MoreBtnRef.current.contains(event.target as Node)
      ) {
        setMoreMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // if (isMobile === undefined) return null;
  
  // Hide sidebar on large screens since navigation is now in top bar
  if (!isMobile) return null;
  
  return (
    <>
    <div
      className={cn(
        "bg-[#EEEDEC] dark:bg-[#0d1117] text-white flex theme-aware border-gray-300 dark:border-gray-700 z-30",
        isMobile
          ? "fixed bottom-0 left-0 right-0 h-16 flex-row justify-around items-center border-t z-50"
          : "w-20 px-2 lg:w-52 lg:px-4 flex-col dark:border-r sticky top-0"
      )}
    >{isMobile === undefined ? (
        <SkeletonSide />
      ) : (
      <>
        {!isMobile && (
          <div className="mt-4 mb-5 h-11 w-11 mx-auto shrink-0 overflow-hidden">
          </div>
        )}
        {!isMobile && (
          <div className="mt-4 mb-5 w-full shrink-0 overflow-hidden">
            <Link href={"/beet"} id="beet-ai" legacyBehavior>
                    <a
                      className={cn(
                        "w-full flex items-center gap-1 rounded-xl transition-all duration-200 theme-aware group/sidebar",
                        pathname.startsWith("/beet")
                          ? "bg-[#C51E3A] dark:bg-[#1e96fc] text-white shadow-lg"
                          : "text-gray-600 dark:text-[#fafafa]/70 hover:bg-[#C51E3A]/70 dark:hover:bg-[#1e96fc]/20 hover:text-white",
                        isMobile ? "flex-col text-xs p-2 justify-center" : "flex-row gap-3 px-4 py-3"
                      )}
                    >
                      <AudioWaveform className="shrink-0 size-8" />
                      <span className={cn("font-medium line-clamp-1 font-mono ", isMobile ? "text-xs" : "text-lg")}>
                        Beet Ai
                      </span>
                    </a>
                  </Link>
          </div>
        )}
        <nav className="flex-1 w-full">
          <ul
            className={cn(
              "",
              isMobile
                ? "flex flex-row justify-around w-full h-full items-center space-x-2 px-3"
                : "flex flex-col space-y-2"
            )}
          >
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);
              const isMore = item.id === "More";
              return (
                <li key={item.id} className="w-full relative">
              {isMore ? (
                <>
                  <button
                    ref={MoreBtnRef}
                    onClick={() => setMoreMenuOpen((v) => !v)}
                    className={cn(
                      "w-full flex items-center gap-1 rounded-xl transition-all duration-200 theme-aware group/sidebar",
                      isActive
                        ? "bg-[#C51E3A] dark:bg-[#1e96fc] text-white shadow-lg"
                        : "text-gray-600 dark:text-[#fafafa]/70 hover:bg-[#C51E3A]/70 dark:hover:bg-[#1e96fc]/20 hover:text-white",
                      isMobile ? "flex-col text-xs p-2 justify-center" : "flex-row gap-3 px-4 py-3"
                    )}
                  >
                    {item.icon}
                    {!isMobile && (
                        <span className={"font-medium line-clamp-1 font-mono text-lg"}>
                          {item.label}
                        </span>
                      )}
                  </button>
                  {MoreMenuOpen && (
                    <div 
                    ref={MenuRef}
                    className={cn("absolute z-10 bg-white dark:bg-[#181c2a] rounded-2xl shadow-xl border p-2 w-56 ", isMobile ? "right-0 bottom-full" : "left-full top-0 mt-2 ml-2")}
                    >
                      {MoreMenuOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => {
                            setMoreMenuOpen(false);
                            router.push(opt.href);
                          }}
                          className={cn(
                            "flex items-center w-full px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#23263a] text-black dark:text-white transition",
                            isActive
                            ? "bg-[#C51E3A] dark:bg-[#1e96fc] text-white shadow-lg"
                            : "text-gray-600 dark:text-[#fafafa]/70 hover:bg-[#C51E3A]/70 dark:hover:bg-[#1e96fc]/20 hover:text-white",
                          )}
                        >
                          {opt.icon}
                          <span className="ml-3 flex-1 text-left">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                  <Link href={item.href} legacyBehavior>
                    <a className={cn(
                        "w-full flex items-center gap-1 rounded-xl transition-all duration-200 theme-aware group/sidebar",
                        isActive
                          ? "bg-[#C51E3A] dark:bg-[#1e96fc] text-white shadow-lg"
                          : "text-gray-600 dark:text-[#fafafa]/70 hover:bg-[#C51E3A]/70 dark:hover:bg-[#1e96fc]/20 hover:text-white",
                        isMobile ? "flex-col text-xs p-2 justify-center" : "flex-row gap-3 px-4 py-3"
                      )}
                    >
                      {Icon}
                      {!isMobile && (
                        <span className={"font-medium line-clamp-1 font-mono text-lg"}>
                          {item.label}
                        </span>
                      )}
                    </a>
                  </Link>)}
                </li>
            )})}
          </ul>
        </nav>
      </>
          )}
    </div>
    </>
  );
}