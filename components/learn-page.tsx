"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LanguageCard } from "./language-card" // Import the new LanguageCard component

interface LearnPageProps {
  onLanguageSelect: (language: string) => void
}

export function LearnPage({ onLanguageSelect }: LearnPageProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("")

  const languages = [
    {
      name: "Swahili",
      flag: "Tazania",
      level: "Beginner",
      progress: 0,
      lessons: 24,
      description: "Learn the most widely spoken language in East Africa",
    },
    {
      name: "Yoruba",
      flag: "Nigeria",
      level: "Beginner",
      progress: 15,
      lessons: 32,
      description: "Discover the rich language of the Yoruba people",
    },
    {
      name: "Amharic",
      flag: "Ethiopia",
      level: "Beginner",
      progress: 0,
      lessons: 28,
      description: "Learn the official language of Ethiopia",
    },
    {
      name: "Hausa",
      flag: "Nigeria",
      level: "Beginner",
      progress: 0,
      lessons: 26,
      description: "Master the lingua franca of West Africa",
    },
    {
      name: "Igbo",
      flag: "Nigeria",
      level: "Beginner",
      progress: 0,
      lessons: 30,
      description: "Learn the language of the Igbo people",
    },
    {
      name: "Zulu",
      flag: "South-Africa",
      level: "Beginner",
      progress: 0,
      lessons: 25,
      description: "Discover South Africa's most spoken language",
    },
  ]

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-[#fafafa] mb-2">Select a language to proceed</h1>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {languages.map((language) => (
          <LanguageCard
            key={language.name}
            language={language}
            onLanguageSelect={onLanguageSelect}
            onCardClick={setSelectedLanguage}
          />
        ))}
      </div>

      {selectedLanguage && (
        <div className="mt-8 p-6 bg-[#a2d6f9]/10 dark:bg-[#7037e4]/20 rounded-2xl border border-[#1e96fc]/20 dark:border-[#7037e4]/30">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-[#fafafa] mb-2">
            Ready to learn {selectedLanguage}?
          </h2>
          <p className="text-gray-600 dark:text-[#fafafa]/70 mb-4">
            Start with basic greetings and common phrases to build your foundation.
          </p>
          <Button
            className="rounded-xl bg-[#fcf300] hover:bg-[#ffc600] dark:bg-[#8ddeed] dark:hover:bg-[#8ddeed]/80 text-[#072ac8] dark:text-[#030318] font-semibold"
            onClick={() => onLanguageSelect(selectedLanguage)}
          >
            Begin First Lesson
          </Button>
        </div>
      )}
    </div>
  )
}
