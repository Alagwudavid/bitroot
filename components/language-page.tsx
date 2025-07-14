"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Crown, Star, Trophy, Flame, Zap, XCircle } from "lucide-react"

interface LanguagePageProps {
  language: string
  onBack: () => void
}

export function LanguagePage({ language, onBack }: LanguagePageProps) {
  const [currentLevel, setCurrentLevel] = useState(1)
  const [userXP, setUserXP] = useState(150)
  const [streak, setStreak] = useState(7)

  const levels = Array.from({ length: 10 }, (_, i) => ({
    level: i + 1,
    title: `Level ${i + 1}`,
    isCompleted: i < currentLevel - 1,
    isCurrent: i === currentLevel - 1,
    isLocked: i >= currentLevel,
    xpRequired: (i + 1) * 100,
    lessons: ["Basic Greetings", "Family Members", "Numbers 1-10", "Colors", "Food & Drinks"],
  }))

  const handleLevelClick = (level: number) => {
    if (level <= currentLevel) {
      // Navigate to level content
      console.log(`Starting level ${level}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] dark:from-[#030318] dark:to-[#0d1117] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" onClick={onBack} className="text-white hover:bg-white/10 rounded-xl">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Languages
          </Button>

          <div className="flex items-center space-x-4">
            <Button className="bg-gray-500 text-white font-semibold rounded-full px-6">
              <XCircle className="w-4 h-4 mr-2" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Level Path */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Level Path */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                {levels.map((level, index) => (
                  <div key={level.level} className="flex flex-col items-center">
                    <button
                      onClick={() => handleLevelClick(level.level)}
                      disabled={level.isLocked}
                      className={`relative w-20 h-20 rounded-full border-4 transition-all duration-200 ${
                        level.isCurrent
                          ? "bg-[#fcf300] border-[#ffc600] shadow-lg scale-110"
                          : level.isCompleted
                            ? "bg-[#10b981] border-[#059669] shadow-md"
                            : "bg-gray-300 dark:bg-gray-600 border-gray-400 dark:border-gray-500"
                      } ${!level.isLocked ? "hover:scale-105 cursor-pointer" : "cursor-not-allowed opacity-60"}`}
                    >
                      {level.isCurrent && (
                        <Crown className="w-8 h-8 text-[#072ac8] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      )}
                      {level.isCompleted && (
                        <Star className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-current" />
                      )}
                      {level.isLocked && (
                        <div className="w-8 h-8 bg-gray-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      )}

                      {/* Medal/Trophy at bottom */}
                      <div
                        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full ${
                          level.isCompleted ? "bg-[#ffc600]" : "bg-gray-400"
                        } flex items-center justify-center`}
                      >
                        <Trophy className="w-3 h-3 text-white" />
                      </div>
                    </button>

                    <span className="mt-4 text-white dark:text-[#fafafa] font-medium text-sm">{level.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Welcome Card */}
            <Card className="bg-[#6366f1] dark:bg-[#7037e4] text-white rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Welcome, User!</h3>
                <p className="text-sm opacity-90 mb-4">Joined on 12 March, 2024</p>

                <div className="bg-white/20 rounded-xl p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Your current standing is 01</span>
                    <Badge className="bg-[#fcf300] text-[#072ac8] hover:bg-[#ffc600]">01/100</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Try Super Card */}
            <Card className="bg-white dark:bg-[#0d1117] rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="text-2xl">🦸‍♂️</div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-[#fafafa] mb-1">Try Super for free</h4>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                      No ads, personalized practice test, and unlimited legendary!
                    </p>
                  </div>
                </div>
                <Button className="w-full bg-[#6366f1] hover:bg-[#5b5bd6] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] text-white rounded-xl">
                  TRY 2 WEEKS FREE
                </Button>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="bg-white dark:bg-[#0d1117] rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <span className="font-semibold text-gray-800 dark:text-[#fafafa]">{streak}</span>
                    <span className="text-sm text-gray-600 dark:text-[#fafafa]/70">day streak</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-gray-800 dark:text-[#fafafa]">{userXP} XP</span>
                </div>
                <Progress value={75} className="h-2" />
              </CardContent>
            </Card>

            {/* Congratulations Card */}
            <Card className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎉</div>
                  <h4 className="font-bold text-gray-800 dark:text-[#fafafa] mb-1">Congratulations!</h4>
                  <p className="text-sm text-gray-600 dark:text-[#fafafa]/70 mb-4">
                    You finished #9 and advanced to the sapphire League.
                  </p>
                  <Button className="w-full bg-[#6366f1] hover:bg-[#5b5bd6] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] text-white rounded-xl">
                    Go to Leaderboards
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
