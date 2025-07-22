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

export function MdTopNavigation() {
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
    {isMobile && (
      <header className="shrink-0 w-full h-14 mt-2 pl-4 md:pl-8 pr-8 grid grid-cols-[1fr_auto_1fr] gap-1 md:grid-cols-[minmax(100px,_1fr)_minmax(300px,_auto)_minmax(100px,_1fr)] md:gap-4 theme-aware">
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
            href={"/ai-agent"}
            className="relative h-12 w-12 rounded-full p-0 text-gray-600 dark:text-[#fafafa] backdrop-blur-md bg-white/30 shrink-0 text-lg flex items-center justify-center"
          >
            <Sparkles className="size-6" />
          </Link>
          <div className="flex items-center space-x-6">
            <DropdownMenu
              open={isLanguageOpen}
              onOpenChange={setIsLanguageOpen}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="relative h-12 w-12 rounded-full p-0 text-gray-600 dark:text-[#fafafa] backdrop-blur-md bg-white/30 overflow-hidden theme-aware"
                >
                  <img
                    src={`/flag/${currentLanguage}.png`}
                    alt={`${currentLanguage} flag`}
                    className="w-full h-full object-cover"
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
                className="relative h-12 w-12 rounded p-0 text-gray-600 dark:text-[#fafafa] backdrop-blur-md bg-white/30"
              >
                <svg
                  className="!size-9 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
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
                </svg>
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
      )}
    </>
  );
}
