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
      id: "sponsor",
      label: "Sponsor",
      icon: <HeartHandshake className="shrink-0 size-6" />,
      href: "/contact-us"
    },
    {
      id: "contact-us",
      label: "Contact Us",
      icon: <svg className="shrink-0 size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4C2.895 4 2 4.895 2 6V18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V6C22 4.895 21.105 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor" />
      </svg>,
      href: "/contact-us"
    },
    {
      id: "feedback",
      label: "Feedback",
      icon: <svg className="shrink-0 size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 1C17.6569 1 19 2.34315 19 4C19 4.55228 18.5523 5 18 5C17.4477 5 17 4.55228 17 4C17 3.44772 16.5523 3 16 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H16C16.5523 21 17 20.5523 17 20V19C17 18.4477 17.4477 18 18 18C18.5523 18 19 18.4477 19 19V20C19 21.6569 17.6569 23 16 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H16Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M20.7991 8.20087C20.4993 7.90104 20.0132 7.90104 19.7133 8.20087L11.9166 15.9977C11.7692 16.145 11.6715 16.3348 11.6373 16.5404L11.4728 17.5272L12.4596 17.3627C12.6652 17.3285 12.855 17.2308 13.0023 17.0835L20.7991 9.28666C21.099 8.98682 21.099 8.5007 20.7991 8.20087ZM18.2991 6.78666C19.38 5.70578 21.1325 5.70577 22.2134 6.78665C23.2942 7.86754 23.2942 9.61999 22.2134 10.7009L14.4166 18.4977C13.9744 18.9398 13.4052 19.2327 12.7884 19.3355L11.8016 19.5C10.448 19.7256 9.2744 18.5521 9.50001 17.1984L9.66448 16.2116C9.76728 15.5948 10.0602 15.0256 10.5023 14.5834L18.2991 6.78666Z" fill="currentColor" />
        <path d="M5 7C5 6.44772 5.44772 6 6 6H14C14.5523 6 15 6.44772 15 7C15 7.55228 14.5523 8 14 8H6C5.44772 8 5 7.55228 5 7Z" fill="currentColor" />
        <path d="M5 11C5 10.4477 5.44772 10 6 10H10C10.5523 10 11 10.4477 11 11C11 11.5523 10.5523 12 10 12H6C5.44772 12 5 11.5523 5 11Z" fill="currentColor" />
        <path d="M5 15C5 14.4477 5.44772 14 6 14H7C7.55228 14 8 14.4477 8 15C8 15.5523 7.55228 16 7 16H6C5.44772 16 5 15.5523 5 15Z" fill="currentColor" />
      </svg>,
      href: "/feedback",
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
