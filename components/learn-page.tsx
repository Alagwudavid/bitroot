"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Star, Clock } from "lucide-react"

interface LearnPageProps {
  onLanguageSelect: (language: string) => void
}

export function LearnPage({ onLanguageSelect }: LearnPageProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("")

  const languages = [
    {
      name: "Swahili",
      flag: "🇹🇿",
      level: "Beginner",
      progress: 0,
      lessons: 24,
      description: "Learn the most widely spoken language in East Africa",
    },
    {
      name: "Yoruba",
      flag: "🇳🇬",
      level: "Beginner",
      progress: 15,
      lessons: 32,
      description: "Discover the rich language of the Yoruba people",
    },
    {
      name: "Amharic",
      flag: "🇪🇹",
      level: "Beginner",
      progress: 0,
      lessons: 28,
      description: "Learn the official language of Ethiopia",
    },
    {
      name: "Hausa",
      flag: "🇳🇬",
      level: "Beginner",
      progress: 0,
      lessons: 26,
      description: "Master the lingua franca of West Africa",
    },
    {
      name: "Igbo",
      flag: "🇳🇬",
      level: "Beginner",
      progress: 0,
      lessons: 30,
      description: "Learn the language of the Igbo people",
    },
    {
      name: "Zulu",
      flag: "🇿🇦",
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
        <p className="text-gray-600 dark:text-[#fafafa]/70">
          Choose from our collection of African languages and start your learning journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {languages.map((language) => (
          <Card
            key={language.name}
            className="rounded-2xl border-2 hover:border-[#1e96fc] dark:hover:border-[#7037e4] dark:bg-[#0d1117] dark:border-[#7037e4]/30 transition-all duration-200 cursor-pointer group hover:shadow-lg"
            onClick={() => setSelectedLanguage(language.name)}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{language.flag}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-[#fafafa]">{language.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-[#fafafa]/60">{language.level}</p>
                  </div>
                </div>
                {language.progress > 0 && (
                  <div className="flex items-center space-x-1 text-[#ffc600] dark:text-[#8ddeed]">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{language.progress}%</span>
                  </div>
                )}
              </div>

              <p className="text-gray-600 dark:text-[#fafafa]/70 text-sm mb-4">{language.description}</p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1 text-gray-500 dark:text-[#fafafa]/60">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{language.lessons} lessons</span>
                </div>
              </div>

              {language.progress > 0 && (
                <div className="mb-4">
                  <div className="w-full bg-gray-200 dark:bg-[#030318] rounded-full h-2">
                    <div
                      className="bg-[#1e96fc] dark:bg-[#7037e4] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${language.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <Button
                className="w-full rounded-xl bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] text-white group-hover:bg-[#1e96fc] dark:group-hover:bg-[#8ddeed] dark:group-hover:text-[#030318]"
                onClick={(e) => {
                  e.stopPropagation()
                  onLanguageSelect(language.name)
                }}
              >
                <Play className="w-4 h-4 mr-2" />
                {language.progress > 0 ? "Continue" : "Start Learning"}
              </Button>
            </CardContent>
          </Card>
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
