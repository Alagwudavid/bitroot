"use client";

import { BellDot, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/components/ui/use-mobile";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SkeletonTopBar } from "@/components/ui/skeleton-topbar";
import { AppLogo } from "@/components/app-logo";
import { MainMenu } from "@/components/main-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function TopNavigation() {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState("us");

  const languages = [
    { id: 0, label: "Local", flag: "ea" },
    { id: 1, label: "English", flag: "us" },
    { id: 2, label: "Swahili", flag: "tz" },
    { id: 3, label: "Yoruba", flag: "ng" },
    { id: 4, label: "Amharic", flag: "et" },
    { id: 5, label: "Hausa", flag: "ng" },
    { id: 6, label: "Igbo", flag: "ng" },
    { id: 7, label: "Zulu", flag: "za" },
    { id: 8, label: "French", flag: "fr" },
  ];

  const menuItems = [
    { 
      id: "Home",
      label: "Home",
      icon: <svg className="shrink-0 size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9.44661 15.3975C9.11385 15.1508 8.64413 15.2206 8.39747 15.5534C8.15082 15.8862 8.22062 16.3559 8.55339 16.6025C9.5258 17.3233 10.715 17.75 12 17.75C13.285 17.75 14.4742 17.3233 15.4466 16.6025C15.7794 16.3559 15.8492 15.8862 15.6025 15.5534C15.3559 15.2206 14.8862 15.1508 14.5534 15.3975C13.825 15.9373 12.9459 16.25 12 16.25C11.0541 16.25 10.175 15.9373 9.44661 15.3975Z" fill="currentColor"/>
            </svg>,
      href: "/home"
    },
    { 
      id: "learn",
      label: "Learn",
      icon: <svg className="shrink-0 size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 16V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15H19.5C20.05 15 20.5 15.45 20.5 16Z" fill="currentColor"/>
            <path d="M15.5 2H8.5C4.5 2 3.5 3 3.5 7V14.58C4.26 13.91 5.26 13.5 6.35 13.5H19.5C20.05 13.5 20.5 13.05 20.5 12.5V7C20.5 3 19.5 2 15.5 2ZM13 10.75H8C7.59 10.75 7.25 10.41 7.25 10C7.25 9.59 7.59 9.25 8 9.25H13C13.41 9.25 13.75 9.59 13.75 10C13.75 10.41 13.41 10.75 13 10.75ZM16 7.25H8C7.59 7.25 7.25 6.91 7.25 6.5C7.25 6.09 7.59 5.75 8 5.75H16C16.41 5.75 16.75 6.09 16.75 6.5C16.75 6.91 16.41 7.25 16 7.25Z" fill="currentColor"/>
            </svg>,
      href: "/learn"
    },
    { 
      id: "challenges", 
      label: "Challenges",
      icon: <svg className="shrink-0 size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.25 18.2509H9C7.9 18.2509 7 19.1509 7 20.2509V20.5009H6C5.59 20.5009 5.25 20.8409 5.25 21.2509C5.25 21.6609 5.59 22.0009 6 22.0009H18C18.41 22.0009 18.75 21.6609 18.75 21.2509C18.75 20.8409 18.41 20.5009 18 20.5009H17V20.2509C17 19.1509 16.1 18.2509 15 18.2509H12.75V15.9609C12.5 15.9909 12.25 16.0009 12 16.0009C11.75 16.0009 11.5 15.9909 11.25 15.9609V18.2509Z" fill="currentColor"/>
      <path d="M18.4793 11.64C19.1393 11.39 19.7193 10.98 20.1793 10.52C21.1093 9.49 21.7193 8.26 21.7193 6.82C21.7193 5.38 20.5893 4.25 19.1493 4.25H18.5893C17.9393 2.92 16.5793 2 14.9993 2H8.9993C7.4193 2 6.0593 2.92 5.4093 4.25H4.8493C3.4093 4.25 2.2793 5.38 2.2793 6.82C2.2793 8.26 2.8893 9.49 3.8193 10.52C4.2793 10.98 4.8593 11.39 5.5193 11.64C6.5593 14.2 9.0593 16 11.9993 16C14.9393 16 17.4393 14.2 18.4793 11.64ZM14.8393 8.45L14.2193 9.21C14.1193 9.32 14.0493 9.54 14.0593 9.69L14.1193 10.67C14.1593 11.27 13.7293 11.58 13.1693 11.36L12.2593 11C12.1193 10.95 11.8793 10.95 11.7393 11L10.8293 11.36C10.2693 11.58 9.8393 11.27 9.8793 10.67L9.9393 9.69C9.9493 9.54 9.8793 9.32 9.7793 9.21L9.1593 8.45C8.7693 7.99 8.9393 7.48 9.5193 7.33L10.4693 7.09C10.6193 7.05 10.7993 6.91 10.8793 6.78L11.4093 5.96C11.7393 5.45 12.2593 5.45 12.5893 5.96L13.1193 6.78C13.1993 6.91 13.3793 7.05 13.5293 7.09L14.4793 7.33C15.0593 7.48 15.2293 7.99 14.8393 8.45Z" fill="currentColor"/>
      </svg>,
      href: "/challenges" 
    },
    { 
      id: "courses", 
      label: "Courses", 
      icon: <svg className="shrink-0 size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.15 6.17C20.74 5.95 19.88 5.72 18.71 6.54L17.24 7.58C17.13 4.47 15.78 3.25 12.5 3.25H6.5C3.08 3.25 1.75 4.58 1.75 8V16C1.75 18.3 3 20.75 6.5 20.75H12.5C15.78 20.75 17.13 19.53 17.24 16.42L18.71 17.46C19.33 17.9 19.87 18.04 20.3 18.04C20.67 18.04 20.96 17.93 21.15 17.83C21.56 17.62 22.25 17.05 22.25 15.62V8.38C22.25 6.95 21.56 6.38 21.15 6.17ZM11 11.38C9.97 11.38 9.12 10.54 9.12 9.5C9.12 8.46 9.97 7.62 11 7.62C12.03 7.62 12.88 8.46 12.88 9.5C12.88 10.54 12.03 11.38 11 11.38Z" fill="currentColor"/>
      </svg>, 
      href: "/courses" 
    },
    { 
      id: "profile", 
      label: "Profile", 
      icon: <Avatar className="h-6 w-6 rounded-md">
      <AvatarImage src="/placeholder-user1.png" alt="User" />
      <AvatarFallback className="bg-[#fbde84] text-black h-6 w-6 rounded-md text-xs">
        AJ
      </AvatarFallback>
    </Avatar>, 
      href: "/profile" 
    },
  ];

  return (
    <>
      {isMobile === undefined ? (
        <SkeletonTopBar />
      ) : isMobile ? ( 
        // Mobile layout - show top navigation
        <header className="fixed top-0 z-40 w-full h-14 pl-5 pr-8 grid grid-cols-[1fr_auto_1fr] gap-1 bg-background/80 backdrop-blur-sm border-b border-border theme-aware">
          <AppLogo />
          <div></div>
          <div className="flex items-center justify-end gap-4">
            <Link
              href="/notifications"
              className="relative h-10 w-10 rounded-full p-0 text-gray-600 dark:text-[#fafafa] backdrop-blur-md bg-white/30 dark:bg-[#0d1117]/30 shrink-0 text-lg flex items-center justify-center border theme-aware"
            >
              <BellDot className="size-6" />
            </Link>
            {/* Compact Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="relative h-10 px-3 text-gray-600 dark:text-[#fafafa] backdrop-blur-md bg-white/30 dark:bg-[#0d1117]/30 border theme-aware flex items-center gap-2"
                >
                  <img
                    src={`/flag/${currentLanguage}.png`}
                    alt={`${currentLanguage} flag`}
                    className="w-5 h-5 object-cover rounded-sm"
                  />
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 rounded-xl theme-aware">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.id}
                    onClick={() => setCurrentLanguage(language.flag)}
                    className="rounded-lg theme-aware cursor-pointer flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-sm overflow-hidden flex-shrink-0">
                      <img
                        src={`/flag/${language.flag}.png`}
                        alt={`${language.label} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="flex-1">{language.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <MainMenu />
          </div>
        </header>
      ) : (
        // Large screen layout - show app logo, sidebar menu items, and main menu with justify-between
        <header className="fixed top-0 z-40 w-full h-14 px-8 flex items-center justify-between theme-aware bg-background/80 backdrop-blur-sm border-b border-border">
          <AppLogo />
          
          {/* Center navigation menu items */}
          <nav className="flex items-center gap-3">
            {menuItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-[#C51E3A] dark:bg-[#1e96fc] text-white shadow-lg"
                      : "text-gray-600 dark:text-[#fafafa]/70 hover:bg-[#C51E3A]/10 dark:hover:bg-[#1e96fc]/10 hover:text-[#C51E3A] dark:hover:text-[#1e96fc]"
                  )}
                >
                  {item.icon}
                  <span className="font-medium text-sm">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/notifications"
              className="relative h-10 w-10 rounded-full p-0 text-gray-600 dark:text-[#fafafa] backdrop-blur-md bg-white/30 dark:bg-[#0d1117]/30 shrink-0 text-lg flex items-center justify-center border theme-aware"
            >
              <BellDot className="size-6" />
            </Link>
            <MainMenu />
          </div>
        </header>
      )}
    </>
  );
}
