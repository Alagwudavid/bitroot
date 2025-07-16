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
      <header className="h-20 bg-transparent flex items-center justify-between px-6 md:px-12 theme-aware shrink-0 border-0">
        <div className={"flex items-center"}>
          <img
            src={`/images/placeholder.png`}
            alt={`Bitroot logo`}
            className={cn(
              "w-10 h-10 object-cover rounded",
              isMobile ? "flex" : "hidden"
            )}
          />
        </div>
        <div className="flex items-center space-x-4">
          <Link href={"/explore/games"} className="w-10 h-10 rounded-md bg-transparent shrink-0 flex items-center justify-center text-gray-600 dark:text-[#fafafa]/70">
            <svg className="size-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 16.75H18.25V14.5C18.25 14.09 17.91 13.75 17.5 13.75C17.09 13.75 16.75 14.09 16.75 14.5V16.75H14.5C14.09 16.75 13.75 17.09 13.75 17.5C13.75 17.91 14.09 18.25 14.5 18.25H16.75V20.5C16.75 20.91 17.09 21.25 17.5 21.25C17.91 21.25 18.25 20.91 18.25 20.5V18.25H20.5C20.91 18.25 21.25 17.91 21.25 17.5C21.25 17.09 20.91 16.75 20.5 16.75Z" fill="currentColor"/>
            <path d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z" fill="currentColor"/>
            <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" fill="currentColor"/>
            <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" fill="currentColor"/>
            </svg>
          </Link>
          <Link href={"/explore/games"} className="w-10 h-10 rounded-md bg-transparent shrink-0 flex items-center justify-center text-gray-600 dark:text-[#fafafa]/70">
            <svg className="size-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.85 3.95078V7.75078H13.35V3.95078C13.35 3.68078 13.11 3.55078 12.95 3.55078C12.9 3.55078 12.85 3.56078 12.8 3.58078L4.87 6.57078C4.34 6.77078 4 7.27078 4 7.84078V8.51078C3.09 9.19078 2.5 10.2808 2.5 11.5108V7.84078C2.5 6.65078 3.23 5.59078 4.34 5.17078L12.28 2.17078C12.5 2.09078 12.73 2.05078 12.95 2.05078C13.95 2.05078 14.85 2.86078 14.85 3.95078Z" fill="currentColor"/>
            <path d="M21.5007 14.5V15.5C21.5007 15.77 21.2907 15.99 21.0107 16H19.5507C19.0207 16 18.5407 15.61 18.5007 15.09C18.4707 14.78 18.5907 14.49 18.7907 14.29C18.9707 14.1 19.2207 14 19.4907 14H21.0007C21.2907 14.01 21.5007 14.23 21.5007 14.5Z" fill="currentColor"/>
            <path d="M19.48 12.95H20.5C21.05 12.95 21.5 12.5 21.5 11.95V11.51C21.5 9.44 19.81 7.75 17.74 7.75H6.26C5.41 7.75 4.63 8.03 4 8.51C3.09 9.19 2.5 10.28 2.5 11.51V18.24C2.5 20.31 4.19 22 6.26 22H17.74C19.81 22 21.5 20.31 21.5 18.24V18.05C21.5 17.5 21.05 17.05 20.5 17.05H19.63C18.67 17.05 17.75 16.46 17.5 15.53C17.29 14.77 17.54 14.04 18.04 13.55C18.41 13.17 18.92 12.95 19.48 12.95ZM14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z" fill="currentColor"/>
            </svg>
          </Link>
          <Link href={"/explore/games"} className="w-10 h-10 rounded-md bg-transparent shrink-0 flex items-center justify-center text-gray-600 dark:text-[#fafafa]/70">
            <svg className="size-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 18.2509H9C7.9 18.2509 7 19.1509 7 20.2509V20.5009H6C5.59 20.5009 5.25 20.8409 5.25 21.2509C5.25 21.6609 5.59 22.0009 6 22.0009H18C18.41 22.0009 18.75 21.6609 18.75 21.2509C18.75 20.8409 18.41 20.5009 18 20.5009H17V20.2509C17 19.1509 16.1 18.2509 15 18.2509H12.75V15.9609C12.5 15.9909 12.25 16.0009 12 16.0009C11.75 16.0009 11.5 15.9909 11.25 15.9609V18.2509Z" fill="currentColor"/>
            <path d="M18.4793 11.64C19.1393 11.39 19.7193 10.98 20.1793 10.52C21.1093 9.49 21.7193 8.26 21.7193 6.82C21.7193 5.38 20.5893 4.25 19.1493 4.25H18.5893C17.9393 2.92 16.5793 2 14.9993 2H8.9993C7.4193 2 6.0593 2.92 5.4093 4.25H4.8493C3.4093 4.25 2.2793 5.38 2.2793 6.82C2.2793 8.26 2.8893 9.49 3.8193 10.52C4.2793 10.98 4.8593 11.39 5.5193 11.64C6.5593 14.2 9.0593 16 11.9993 16C14.9393 16 17.4393 14.2 18.4793 11.64ZM14.8393 8.45L14.2193 9.21C14.1193 9.32 14.0493 9.54 14.0593 9.69L14.1193 10.67C14.1593 11.27 13.7293 11.58 13.1693 11.36L12.2593 11C12.1193 10.95 11.8793 10.95 11.7393 11L10.8293 11.36C10.2693 11.58 9.8393 11.27 9.8793 10.67L9.9393 9.69C9.9493 9.54 9.8793 9.32 9.7793 9.21L9.1593 8.45C8.7693 7.99 8.9393 7.48 9.5193 7.33L10.4693 7.09C10.6193 7.05 10.7993 6.91 10.8793 6.78L11.4093 5.96C11.7393 5.45 12.2593 5.45 12.5893 5.96L13.1193 6.78C13.1993 6.91 13.3793 7.05 13.5293 7.09L14.4793 7.33C15.0593 7.48 15.2293 7.99 14.8393 8.45Z" fill="currentColor"/>
            </svg>
          </Link>
          <Link href={"/ai"} className="w-10 h-10 rounded-md bg-transparent shrink-0 flex items-center justify-center text-gray-600 dark:text-[#fafafa]/70">
            <svg className="size-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Ai agent</title>
                <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Media" transform="translate(-960.000000, -96.000000)" fillRule="nonzero">
                        <g id="voice_line" transform="translate(960.000000, 96.000000)">
                            <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fillRule="nonzero"></path>
                            <path d="M12,3 C12.51285,3 12.9355092,3.38604429 12.9932725,3.88337975 L13,4 L13,20 C13,20.5523 12.5523,21 12,21 C11.48715,21 11.0644908,20.613973 11.0067275,20.1166239 L11,20 L11,4 C11,3.44772 11.4477,3 12,3 Z M8,6 C8.55228,6 9,6.44772 9,7 L9,17 C9,17.5523 8.55228,18 8,18 C7.44772,18 7,17.5523 7,17 L7,7 C7,6.44772 7.44772,6 8,6 Z M16,6 C16.5523,6 17,6.44772 17,7 L17,17 C17,17.5523 16.5523,18 16,18 C15.4477,18 15,17.5523 15,17 L15,7 C15,6.44772 15.4477,6 16,6 Z M4,9 C4.55228,9 5,9.44772 5,10 L5,14 C5,14.5523 4.55228,15 4,15 C3.44772,15 3,14.5523 3,14 L3,10 C3,9.44772 3.44772,9 4,9 Z M20,9 C20.51285,9 20.9355092,9.38604429 20.9932725,9.88337975 L21,10 L21,14 C21,14.5523 20.5523,15 20,15 C19.48715,15 19.0644908,14.613973 19.0067275,14.1166239 L19,14 L19,10 C19,9.44772 19.4477,9 20,9 Z" id="形状" fill="currentColor"></path>
                        </g>
                    </g>
                </g>
            </svg>
          </Link>
          <div className="flex items-center space-x-6">
            <DropdownMenu
              open={isLanguageOpen}
              onOpenChange={setIsLanguageOpen}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full !p-0 w-8 h-8 overflow-hidden border-1 border-[#1e96fc] text-[#072ac8] dark:text-[#a2d6f9] hover:bg-[#a2d6f9]/10 bg-transparent theme-aware"
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
