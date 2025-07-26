"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Settings,
  LogOut,
  Sun,
  Moon,
  Monitor,
  AlignRight,
  Languages,
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
import { cn } from "@/lib/utils";

interface MainMenuProps {
  className?: string;
}

export function MainMenu({ className }: MainMenuProps) {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`relative h-10 w-10 rounded p-1 text-gray-600 dark:text-[#fafafa] backdrop-blur-md bg-white/30 dark:bg-[#0d1117]/30 border theme-aware ${className || ""}`}
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
        <div className="rounded-lg theme-aware !bg-transparent hover:!bg-transparent flex flex-col items-start px-2 py-1 gap-1">
          <span className="font-medium">Language</span>
          <div className="flex flex-col w-full max-h-48 overflow-y-auto">
            {languages.map((language) => (
              <DropdownMenuItem
                key={language.id}
                onClick={() => setCurrentLanguage(language.flag)}
                className={cn(
                  "rounded-lg theme-aware cursor-pointer flex items-center gap-3 px-3 py-2",
                  currentLanguage === language.flag && "bg-accent text-accent-foreground"
                )}
              >
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={`/flag/${language.flag}.png`}
                    alt={`${language.label} flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="flex-1">{language.label}</span>
              </DropdownMenuItem>
            ))}
          </div>
        </div>
        <DropdownMenuSeparator />
        <div className="rounded-lg theme-aware !bg-transparent hover:!bg-transparent flex flex-col items-start px-2 py-1 gap-1">
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
  );
}