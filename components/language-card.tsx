"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Play, Star, Clock } from "lucide-react"

interface LanguageCardProps {
  language: {
    name: string
    flag: string
    level: string
    progress: number
    lessons: number
    description: string
  }
  onLanguageSelect: (language: string) => void
  onCardClick: (languageName: string) => void
}

export function LanguageCard({ language, onLanguageSelect, onCardClick }: LanguageCardProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  return (
    <Card
      className="rounded-3xl border-2 hover:border-[#1e96fc] dark:hover:border-[#7037e4] dark:bg-[#0d1117] dark:border-[#7037e4]/30 transition-all duration-200 cursor-pointer group hover:shadow-lg"
      onClick={() => onCardClick(language.name)}
    >
      <CardContent className="p-6">
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
          <PopoverTrigger asChild>
            <div className="flex flex-row">
              <div></div>
              <div
                className="flex flex-col items-start mb-2 cursor-pointer"
                onMouseEnter={() => setIsPopoverOpen(true)}
                onMouseLeave={() => setIsPopoverOpen(false)}
              >
                <span className="text-2xl">{language.name}</span>
                <div>
                  <h3 className="text-xm font-semibold text-gray-800 dark:text-[#fafafa]">{language.flag}</h3>
                </div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-4 rounded-xl theme-aware">
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-[#fafafa]/60">{language.level}</p>
              <p className="text-gray-600 dark:text-[#fafafa]/70 text-sm">{language.description}</p>
              <div className="flex items-center space-x-1 text-gray-500 dark:text-[#fafafa]/60">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{language.lessons} lessons</span>
              </div>
              {language.progress > 0 && (
                <>
                  <div className="flex items-center space-x-1 text-[#ffc600] dark:text-[#8ddeed]">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{language.progress}% progress</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-[#030318] rounded-full h-2">
                    <div
                      className="bg-[#1e96fc] dark:bg-[#7037e4] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${language.progress}%` }}
                    ></div>
                  </div>
                </>
              )}
            </div>
          </PopoverContent>
        </Popover>

        <Button
          className="w-full rounded-2xl bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] text-white group-hover:bg-[#1e96fc] dark:group-hover:bg-[#8ddeed] dark:group-hover:text-[#030318]"
          onClick={(e) => {
            e.stopPropagation() // Prevent card's onClick from firing
            onLanguageSelect(language.name)
          }}
        >
          <Play className="w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
