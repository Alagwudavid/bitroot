"use client";

import { ChevronDown, AlignLeft, HeartHandshake, CircleDollarSign } from "lucide-react";
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
            icon: <svg className="shrink-0 size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9.44661 15.3975C9.11385 15.1508 8.64413 15.2206 8.39747 15.5534C8.15082 15.8862 8.22062 16.3559 8.55339 16.6025C9.5258 17.3233 10.715 17.75 12 17.75C13.285 17.75 14.4742 17.3233 15.4466 16.6025C15.7794 16.3559 15.8492 15.8862 15.6025 15.5534C15.3559 15.2206 14.8862 15.1508 14.5534 15.3975C13.825 15.9373 12.9459 16.25 12 16.25C11.0541 16.25 10.175 15.9373 9.44661 15.3975Z" fill="currentColor" />
            </svg>,
            href: "/home"
        },
    {
      id: "contact-us",
      label: "Contact Us",
      icon: <HeartHandshake className="shrink-0 size-6" />,
      href: "/contact-us"
    },
    {
      id: "status",
      label: "Status",
      icon: <svg className="shrink-0 size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.437 13C13.437 12 14.437 11.6046 14.437 10.5C14.437 9.39543 13.5416 8.5 12.437 8.5C11.5051 8.5 10.722 9.13739 10.5 10M12.437 16H12.447M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
      href: "/coming-soon"
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
