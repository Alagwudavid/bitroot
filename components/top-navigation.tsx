"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  User,
  Settings,
  LogOut,
  Sun,
  Moon,
  Monitor,
  BellDot,
  AlignRight,
  Swords,
  SquareRadical,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/components/ui/use-mobile";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SkeletonTopBar } from "@/components/ui/skeleton-topbar";


export function TopNavigation() {
  const { theme, setTheme } = useTheme();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("us");
  const isMobile = useIsMobile();
  const router = useRouter();
  

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        setTheme("system");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, setTheme]);


  const languages = [
    { id: 1, label: "English", flag: "us" },
    { id: 2, label: "Swahili", flag: "tz" },
    { id: 3, label: "Yoruba", flag: "ng" },
    { id: 4, label: "Amharic", flag: "et" },
    { id: 5, label: "Hausa", flag: "ng" },
    { id: 6, label: "Igbo", flag: "ng" },
    { id: 7, label: "Zulu", flag: "za" },
    { id: 8, label: "French", flag: "fr" },
  ];

  // if (isMobile === undefined) return null;
  
  return (
    <>
      {isMobile === undefined ? (
        <SkeletonTopBar />
      ) : (
      <header className={cn("fixed top-0 z-40 w-full h-14 pl-5 lg:pl-8 pr-8 grid grid-cols-[1fr_auto_1fr] gap-1 md:grid-cols-[minmax(100px,_1fr)_minmax(300px,_auto)_minmax(100px,_1fr)] md:gap-4 theme-aware", isMobile && "backdrop-blur-md bg-white/30 dark:bg-[#0d1117]/30")}>
        <div className={"flex items-center"}>
          <img
            src={`/images/placeholder.png`}
            alt={`Bitroot logo`}
            className={"w-10 h-10 object-cover rounded flex"}
          />
        </div>
        <div></div>
        <div className="flex items-center justify-end gap-4">
          <Link
            href={"/notifications"}
            className="relative h-10 w-10 rounded-full p-0 text-gray-600 dark:text-[#fafafa] backdrop-blur-md bg-white/30 dark:bg-[#0d1117]/30 shrink-0 text-lg flex items-center justify-center border theme-aware"
          >
            <BellDot className="size-6" />
          </Link>
          <div className="flex items-center space-x-6">
            <DropdownMenu
              open={isLanguageOpen}
              onOpenChange={setIsLanguageOpen}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="relative h-10 w-10 rounded-full p-1 text-gray-600 dark:text-[#fafafa] backdrop-blur-md bg-white/30 dark:bg-[#0d1117]/30 overflow-hidden border theme-aware"
                >
                  <img
                    src={`/flag/${currentLanguage}.png`}
                    alt={`${currentLanguage} flag`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 rounded-xl theme-aware cursor-pointer-custom">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.id}
                    onClick={() => setCurrentLanguage(language.flag)}
                    className="rounded-lg theme-aware"
                  >
                    <div className="w-8 h-8 rounded-full mr-2 overflow-hidden bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] text-white group-hover:bg-[#1e96fc] dark:group-hover:bg-[#8ddeed] dark:group-hover:text-[#030318] flex items-center justify-center">
                      <img
                        src={`/flag/${language.flag}.png`}
                        alt={`${language.label} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {language.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded p-1 text-gray-600 dark:text-[#fafafa] backdrop-blur-md bg-white/30 dark:bg-[#0d1117]/30 border theme-aware"
              >
                <AlignRight className="!size-8 shrink-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-72 rounded-xl theme-aware"
              align="end"
            >
              <DropdownMenuItem
                onClick={() => router.push("/profile")}
                className="rounded-lg theme-aware"
              >
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => router.push("/settings")}
                className="rounded-lg theme-aware"
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <div
                className="rounded-lg theme-aware !bg-transparent hover:!bg-transparent flex flex-col items-start px-2 py-1 gap-1"
              >
                <span className="font-medium">Theme</span>
                <div className="flex items-center justify-between p-1 rounded-md border gap-0 w-full">
                <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className={cn(
                    "p-1 px-3 rounded-md theme-aware",
                    theme === "light" && "bg-accent text-accent-foreground"
                  )}
                >
                  <Sun className="h-4 w-4" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className={cn(
                    "p-1 px-3 rounded-md theme-aware",
                    theme === "dark" && "bg-accent text-accent-foreground"
                  )}
                >
                  <Moon className="h-4 w-4" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className={cn(
                    "p-1 px-3 rounded-md theme-aware",
                    theme === "system" && "bg-accent text-accent-foreground"
                  )}
                >
                  <Monitor className="h-4 w-4" />
                  System
                </DropdownMenuItem>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="rounded-lg text-red-600 theme-aware">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      )}
    </>
  );
}
