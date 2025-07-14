"use client"

import { useState, useEffect } from "react"
import { ChevronDown, User, Settings, LogOut, Sun, Moon, Monitor, Crown } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useIsMobile } from "@/components/ui/use-mobile" // Import useIsMobile
import { cn } from "@/lib/utils"

interface TopNavigationProps {
  currentLanguage: string
  onLanguageChange: (language: string) => void
  onPageChange?: (page: string) => void
}

export function TopNavigation({ currentLanguage, onLanguageChange, onPageChange }: TopNavigationProps) {
  const { theme, setTheme } = useTheme()
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const isMobile = useIsMobile() // Use the hook to detect mobile

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = (e: MediaQueryListEvent) => {
      // Handle system theme changes with animation
      if (theme === "system") {
        setTheme("system")
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, setTheme])

  const languages = ["English", "Swahili", "Yoruba", "Amharic", "Hausa", "Igbo", "Zulu", "French"]

  return (
    <>
      <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 theme-aware">
        <div className={"flex items-center space-x-4"}>
            <img 
                  src={`/bitrootText.png`} 
                  alt={`Bitroot logo`}
                  className={
                        cn("w-full h-10 object-cover rounded",
                          isMobile
                          ? "flex"
                          : "hidden",
                        )}
                />
        </div>
        <div className="flex items-center space-x-4">
          <DropdownMenu open={isLanguageOpen} onOpenChange={setIsLanguageOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="rounded-xl border-[#1e96fc] text-[#072ac8] dark:text-[#a2d6f9] hover:bg-[#a2d6f9]/10 bg-transparent theme-aware"
              >
                {currentLanguage}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 rounded-xl theme-aware cursor-pointer">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language}
                  onClick={() => onLanguageChange(language)}
                  className="rounded-lg theme-aware"
                >
                  {language}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="bg-[#fcf300] hover:bg-[#ffc600] text-[#072ac8] font-semibold rounded-xl px-4">
            <Crown className="w-4 h-4 mr-2" />
            PREMIUM
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback className="bg-[#1e96fc] text-white">U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 rounded-xl theme-aware" align="end">
              <DropdownMenuItem onClick={() => onPageChange?.("profile")} className="rounded-lg theme-aware">
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onPageChange?.("settings")} className="rounded-lg theme-aware">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setTheme("light")} className="rounded-lg theme-aware">
                <Sun className="mr-2 h-4 w-4" />
                Light mode
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setTheme("dark")} className="rounded-lg theme-aware">
                <Moon className="mr-2 h-4 w-4" />
                Dark mode
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setTheme("system")} className="rounded-lg theme-aware">
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
  )
}
