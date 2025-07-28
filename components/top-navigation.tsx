"use client";

import { ChevronDown, AlignLeft } from "lucide-react";
import { useIsMobile } from "@/components/ui/use-mobile";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SkeletonTopBar } from "@/components/ui/skeleton-topbar";
import { BrandMenu } from "@/components/brand-menu";
import { MainMenu } from "@/components/main-menu";
import { MobileSidebar } from "@/components/mobile-sidebar";
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      icon: <svg className="shrink-0 size-6 group-hover/sidebar:scale-110 group-hover/sidebar:-rotate-12 duration-500 ease-in-out" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9.44661 15.3975C9.11385 15.1508 8.64413 15.2206 8.39747 15.5534C8.15082 15.8862 8.22062 16.3559 8.55339 16.6025C9.5258 17.3233 10.715 17.75 12 17.75C13.285 17.75 14.4742 17.3233 15.4466 16.6025C15.7794 16.3559 15.8492 15.8862 15.6025 15.5534C15.3559 15.2206 14.8862 15.1508 14.5534 15.3975C13.825 15.9373 12.9459 16.25 12 16.25C11.0541 16.25 10.175 15.9373 9.44661 15.3975Z" fill="currentColor" />
      </svg>,
      href: "/home"
    },
    {
      id: "courses",
      label: "Courses",
      icon: <svg className="shrink-0 size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.15 6.17C20.74 5.95 19.88 5.72 18.71 6.54L17.24 7.58C17.13 4.47 15.78 3.25 12.5 3.25H6.5C3.08 3.25 1.75 4.58 1.75 8V16C1.75 18.3 3 20.75 6.5 20.75H12.5C15.78 20.75 17.13 19.53 17.24 16.42L18.71 17.46C19.33 17.9 19.87 18.04 20.3 18.04C20.67 18.04 20.96 17.93 21.15 17.83C21.56 17.62 22.25 17.05 22.25 15.62V8.38C22.25 6.95 21.56 6.38 21.15 6.17ZM11 11.38C9.97 11.38 9.12 10.54 9.12 9.5C9.12 8.46 9.97 7.62 11 7.62C12.03 7.62 12.88 8.46 12.88 9.5C12.88 10.54 12.03 11.38 11 11.38Z" fill="currentColor" />
      </svg>,
      href: "/courses"
    },
    {
      id: "community",
      label: "community",
      icon: <svg className="shrink-0 size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6C9 7.65685 10.3431 9 12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6Z" fill="currentColor"/>
            <path d="M2.5 18C2.5 19.6569 3.84315 21 5.5 21C7.15685 21 8.5 19.6569 8.5 18C8.5 16.3431 7.15685 15 5.5 15C3.84315 15 2.5 16.3431 2.5 18Z" fill="currentColor"/>
            <path d="M18.5 21C16.8431 21 15.5 19.6569 15.5 18C15.5 16.3431 16.8431 15 18.5 15C20.1569 15 21.5 16.3431 21.5 18C21.5 19.6569 20.1569 21 18.5 21Z" fill="currentColor"/>
            <path d="M7.20468 7.56231C7.51523 7.28821 7.54478 6.81426 7.27069 6.5037C6.99659 6.19315 6.52264 6.1636 6.21208 6.43769C4.39676 8.03991 3.25 10.3865 3.25 13C3.25 13.4142 3.58579 13.75 4 13.75C4.41421 13.75 4.75 13.4142 4.75 13C4.75 10.8347 5.69828 8.89187 7.20468 7.56231Z" fill="currentColor"/>
            <path d="M17.7879 6.43769C17.4774 6.1636 17.0034 6.19315 16.7293 6.5037C16.4552 6.81426 16.4848 7.28821 16.7953 7.56231C18.3017 8.89187 19.25 10.8347 19.25 13C19.25 13.4142 19.5858 13.75 20 13.75C20.4142 13.75 20.75 13.4142 20.75 13C20.75 10.3865 19.6032 8.03991 17.7879 6.43769Z" fill="currentColor"/>
            <path d="M10.1869 20.0217C9.7858 19.9184 9.37692 20.1599 9.27367 20.561C9.17043 20.9622 9.41192 21.3711 9.81306 21.4743C10.5129 21.6544 11.2458 21.75 12 21.75C12.7542 21.75 13.4871 21.6544 14.1869 21.4743C14.5881 21.3711 14.8296 20.9622 14.7263 20.561C14.6231 20.1599 14.2142 19.9184 13.8131 20.0217C13.2344 20.1706 12.627 20.25 12 20.25C11.373 20.25 10.7656 20.1706 10.1869 20.0217Z" fill="currentColor"/>
            </svg>,
            href: "/community",
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
      id: "spark",
      label: "Spark",
      icon: <svg className="shrink-0 size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.66953 9.91436L8.73167 5.77133C10.711 3.09327 11.7007 1.75425 12.6241 2.03721C13.5474 2.32018 13.5474 3.96249 13.5474 7.24712V7.55682C13.5474 8.74151 13.5474 9.33386 13.926 9.70541L13.946 9.72466C14.3327 10.0884 14.9492 10.0884 16.1822 10.0884C18.4011 10.0884 19.5106 10.0884 19.8855 10.7613C19.8917 10.7724 19.8977 10.7837 19.9036 10.795C20.2576 11.4784 19.6152 12.3475 18.3304 14.0857L15.2683 18.2287C13.2889 20.9067 12.2992 22.2458 11.3758 21.9628C10.4525 21.6798 10.4525 20.0375 10.4525 16.7528L10.4526 16.4433C10.4526 15.2585 10.4526 14.6662 10.074 14.2946L10.054 14.2754C9.6673 13.9117 9.05079 13.9117 7.81775 13.9117C5.59888 13.9117 4.48945 13.9117 4.1145 13.2387C4.10829 13.2276 4.10225 13.2164 4.09639 13.205C3.74244 12.5217 4.3848 11.6526 5.66953 9.91436Z" fill="currentColor" />
      </svg>,
      href: "/spark"
    },
  ];

  return (
    <>
      <MobileSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      {isMobile === undefined ? (
        <SkeletonTopBar />
      ) : isMobile ? (
        // Mobile layout - show top navigation with hamburger menu
        <header className="fixed top-0 z-40 w-full h-14 px-6 grid grid-cols-[auto_1fr_auto] gap-1 bg-background/80 backdrop-blur-sm border-b border-border theme-aware">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="text-gray-600 dark:text-[#fafafa] hover:bg-gray-100 dark:hover:bg-gray-800 px-2"
            >
              <AlignLeft className="shrink-0 !size-8" />
            </Button>
            <BrandMenu />
          </div>
          <div></div>
          <div className="flex items-center justify-end gap-4">
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
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="text-gray-600 dark:text-[#fafafa] hover:bg-gray-100 dark:hover:bg-gray-800 px-2"
            >
              <AlignLeft className="shrink-0 !size-8" />
            </Button>
            <BrandMenu />
          </div>

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
            <MainMenu />
          </div>
        </header>
      )}
    </>
  );
}
