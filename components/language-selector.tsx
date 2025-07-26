"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Language {
  id: number;
  label: string;
  flag: string;
}

interface LanguageSelectorProps {
  className?: string;
}

export function LanguageSelector({ className }: LanguageSelectorProps) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("us");

  const languages: Language[] = [
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

  return (
    <div className={`flex items-center space-x-6 ${className || ""}`}>
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
  );
}