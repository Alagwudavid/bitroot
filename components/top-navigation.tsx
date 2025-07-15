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
  BotMessageSquare,
  Gamepad2,
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

  return (
    <>
      <header className="h-16 bg-[#EEEDEC] dark:bg-[#0d1117] flex items-center justify-between px-6 theme-aware shrink-0 sticky top-0 z-50 dark:border-b border-gray-300 dark:border-gray-700">
        <div className={"flex items-center"}>
          <img
            src={`/original_light.png`}
            alt={`Bitroot logo`}
            className={cn(
              "w-full h-10 object-cover rounded",
              isMobile ? "hidden dark:flex" : "hidden"
            )}
          />
          <img
            src={`/original.png`}
            alt={`Bitroot logo`}
            className={cn(
              "w-full h-10 object-cover rounded",
              isMobile ? "dark:hidden flex" : "hidden"
            )}
          />
        </div>
        <Link href={"/studio"} className="w-fit h-10 rounded-md bg-transparent shrink-0 flex items-center justify-center text-white">
          <SquareRadical className="!size-7 mr-2" />
          Studio
        </Link>
        <div className="flex items-center space-x-4">
          <Button className="w-10 h-10 rounded-md bg-transparent shrink-0 flex items-center justify-center text-white">
            <Swords className="!size-7" />
          </Button>
          <Button className="w-10 h-10 rounded-md bg-transparent shrink-0 flex items-center justify-center text-white">
            <Gamepad2 className="!size-7" />
          </Button>
          <Button className="w-10 h-10 rounded-md bg-transparent mr-2 shrink-0 flex items-center justify-center text-white">
            <BotMessageSquare className="!size-7" />
          </Button>
          <div className="flex items-center space-x-6">
            <DropdownMenu
              open={isLanguageOpen}
              onOpenChange={setIsLanguageOpen}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full !p-0 w-10 h-10 overflow-hidden border-1 border-[#1e96fc] text-[#072ac8] dark:text-[#a2d6f9] hover:bg-[#a2d6f9]/10 bg-transparent theme-aware"
                >
                    <img
                      src={`/flag/${currentLanguage}.png`}
                      alt={`${currentLanguage} flag`}
                      className="w-full h-full object-cover"
                    />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 rounded-xl theme-aware cursor-pointer">
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
                className="relative h-10 w-10 rounded-full"
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback className="bg-[#1e96fc] text-white">
                    U
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 rounded-xl theme-aware"
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
              <DropdownMenuItem
                onClick={() => setTheme("light")}
                className="rounded-lg theme-aware"
              >
                <Sun className="mr-2 h-4 w-4" />
                Light mode
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("dark")}
                className="rounded-lg theme-aware"
              >
                <Moon className="mr-2 h-4 w-4" />
                Dark mode
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("system")}
                className="rounded-lg theme-aware"
              >
                <Monitor className="mr-2 h-4 w-4" />
                System
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="rounded-lg text-red-600 theme-aware">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
}
