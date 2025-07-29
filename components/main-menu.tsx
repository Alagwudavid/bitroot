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
  Languages,
  Flame,
  Compass,
  UsersRound,
  Headphones,
  Trophy,
  Bell,
  HelpCircle,
  LayoutDashboard,
  Inbox,
  PencilRuler,
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
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/components/ui/use-mobile";
interface MainMenuProps {
  className?: string;
}

export function MainMenu({ className }: MainMenuProps) {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState("us");
  const isMobile = useIsMobile();
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

  const moreMenuOptions = [
    { label: "Study Groups", icon: <UsersRound className="h-4 w-4" />, value: "study-groups", href: "/study-groups" },
    { label: "Learning Paths", icon: <PencilRuler className="h-4 w-4" />, value: "learning-paths", href: "/learning-paths" },
    { label: "Mentorship", icon: <User className="h-4 w-4" />, value: "mentorship", href: "/mentorship" },
    { label: "Achievements", icon: <Trophy className="h-4 w-4" />, value: "achievements", href: "/achievements" },
    { label: "Leaderboard", icon: <Trophy className="h-4 w-4" />, value: "leaderboard", href: "/leaderboard" },
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
          className={`relative h-10 w-10 rounded-xl p-0 hover:bg-gray-100 dark:hover:bg-gray-800 ${className || ""}`}
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder-user1.png" alt="User Profile" />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm font-semibold">
              AJ
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80 rounded-lg border shadow-lg bg-white dark:bg-gray-900"
        align="end"
        sideOffset={8}
      >
        {/* User Profile Section */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-100 dark:border-gray-800">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-user1.png" alt="User Profile" />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
              AJ
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
              Alexander Johnson
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              alex.johnson@email.com
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        {/* <div className="p-2">
          <div className="grid grid-cols-2 gap-1">
            <DropdownMenuItem
              onClick={() => router.push("/profile")}
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
            >
              <User className="h-4 w-4 " />
              <span className="text-sm">Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/settings")}
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
            >
              <Settings className="h-4 w-4 " />
              <span className="text-sm">Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/notifications")}
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
            >
              <Bell className="h-4 w-4 " />
              <span className="text-sm">Notifications</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/support")}
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
            >
              <HelpCircle className="h-4 w-4 " />
              <span className="text-sm">Support</span>
            </DropdownMenuItem>
          </div>
        </div> */}

        {/* <DropdownMenuSeparator /> */}
        {/* For Business */}
        {/* <div className="p-2">
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 px-2">
            For Business
          </div>
          <div className="grid grid-cols-2 gap-1">
            <DropdownMenuItem
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
            >
              <LayoutDashboard className="h-4 w-4 " />
              <span className="text-sm">Dashboard</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/inbox")}
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
            >
              <Inbox className="h-4 w-4 " />
              <span className="text-sm">Inbox</span>
            </DropdownMenuItem>
          </div>
        </div> */}
        {!isMobile && (
          <>
            <DropdownMenuSeparator />
            {/* Language Section */}
            <div className="p-2">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 px-2">
                Language
              </div>
              <div className="max-h-32 overflow-y-auto space-y-1">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.id}
                    onClick={() => setCurrentLanguage(language.flag)}
                    className={cn(
                      "flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer",
                      currentLanguage === language.flag && "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    )}
                  >
                    <div className="w-5 h-5 rounded-sm overflow-hidden flex-shrink-0">
                      <img
                        src={`/flag/${language.flag}.png`}
                        alt={`${language.label} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm">{language.label}</span>
                    {currentLanguage === language.flag && (
                      <div className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    )}
                  </DropdownMenuItem>
                ))}
              </div>
            </div>
          </>
        )}

        <DropdownMenuSeparator />

        {/* Theme Selection */}
        <div className="p-2">
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 px-2">
            Appearance
          </div>
          <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-800 text-foreground rounded-lg">
            <Button
              variant={theme === "light" ? "default" : "ghost"}
              size="sm"
              onClick={() => setTheme("light")}
              className={cn(
                "flex-1 h-8 text-xs gap-1",
                theme === "light"
                  ? "bg-white dark:bg-gray-700 shadow-sm text-black dark:text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              <Sun className="h-3 w-3" />
              Light
            </Button>
            <Button
              variant={theme === "dark" ? "default" : "ghost"}
              size="sm"
              onClick={() => setTheme("dark")}
              className={cn(
                "flex-1 h-8 text-xs gap-1",
                theme === "dark"
                  ? "bg-white dark:bg-gray-700 shadow-sm text-black dark:text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              <Moon className="h-3 w-3" />
              Dark
            </Button>
            <Button
              variant={theme === "system" ? "default" : "ghost"}
              size="sm"
              onClick={() => setTheme("system")}
              className={cn(
                "flex-1 h-8 text-xs gap-1",
                theme === "system"
                  ? "bg-white dark:bg-gray-700 shadow-sm text-black dark:text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              <Monitor className="h-3 w-3" />
              Auto
            </Button>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Logout */}
        <div className="p-2">
          <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer">
            <LogOut className="h-4 w-4" />
            <span className="text-sm">Sign out</span>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}