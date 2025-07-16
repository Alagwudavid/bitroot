"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft } from "lucide-react";

const mascotUrl = "/placeholder-user.jpg"; // Replace with your mascot image if available
const premiumImg = "/images/gym_baby.png"; // Replace with a premium mascot image if available
const leaderboardImg = "/placeholder-user.jpg"; // Replace with a leaderboard image if available

const levels = Array.from({ length: 10 }, (_, i) => ({
  level: i + 1,
  isCurrent: i === 0,
  isCompleted: false,
  isLocked: i > 0,
}));

export default function UnitPage() {
  const { language, unitId } = useParams();
  const router = useRouter();

  return (
    <div className="relative flex flex-col lg:flex-row max-w-6xl mx-auto gap-8">
      <Button
        onClick={() => router.push(`/learn/${language}`)}
        className="mb-6 flex items-center absolute top-1 left-1"
      >
        <ChevronLeft className="mr-2" /> Retreat
      </Button>
      {/* Left: Levels grid */}
      <div className="flex-1 flex flex-col items-center">
        <div className="grid grid-cols-3 gap-8 mb-8">
          {levels.map((level, idx) => (
            <div key={level.level} className="flex flex-col items-center">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mb-2 border-4 ${
                  level.isCurrent
                    ? "bg-yellow-100 border-yellow-400 shadow-lg scale-110"
                    : level.isLocked
                    ? "bg-gray-100 border-gray-300 opacity-60"
                    : "bg-blue-100 border-blue-400"
                }`}
              >
                <span
                  className={`text-4xl ${
                    level.isCurrent ? "text-yellow-500" : "text-blue-400"
                  }`}
                >
                  🏅
                </span>
              </div>
              <span className="font-semibold text-gray-700">
                Level {level.level}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Cards */}
      <div className="w-full lg:w-96 flex flex-col gap-6">
        {/* Welcome Card */}
        <Card className="rounded-2xl shadow-md p-0 overflow-hidden relative">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-4">
              {/* Left: Text Content */}
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                  February 8
                </div>
                <div className="text-2xl font-bold mb-1 leading-tight">
                  I'm acing French lessons with
                </div>
                <div className="text-[3rem] font-extrabold text-[#6ee700] leading-none mb-1">
                  98%
                </div>
                <div className="text-lg font-semibold mb-4">accuracy!</div>
                <div className="font-bold text-xs text-gray-700 mb-2">
                  WORDS I LEARNED
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "chat",
                    "un",
                    "mange",
                    "cheval",
                    "orange",
                    "une",
                    "femme",
                    "es",
                  ].map((word) => (
                    <span
                      key={word}
                      className="bg-[#f3fcd6] text-[#6ee700] dark:bg-gray-300 dark:text-gray-600 font-semibold px-4 py-1 rounded-full text-sm"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
              {/* Right: Mascot */}
              <div className="flex-shrink-0 flex hidden items-end h-full">
                <img
                  src="/images/sideView_mascot.png"
                  alt="Mascot"
                  className="w-44 h-[60%] object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Try premium Card */}
        <Card className="rounded-2xl">
          <CardContent className="p-6 flex flex-col items-center">
            <div className="font-bold text-gray-800 mb-1">
              Try Premium for free
            </div>
            <div className="text-sm text-gray-600 mb-4 text-center">
              No ad, personalized practice test, and unlimited legendary!
            </div>
            <img
              src={premiumImg}
              alt="premium Mascot"
              className="w-20 h-20 mb-2 rounded"
            />
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl mt-2">
              TRY 2 WEEKS FREE
            </Button>
          </CardContent>
        </Card>
        {/* Leaderboard Card */}
        <Card className="rounded-2xl">
          <CardContent className="p-6 flex flex-col items-center">
            <img
              src={leaderboardImg}
              alt="Leaderboard"
              className="w-24 h-24 mb-2 rounded-full bg-white"
            />
            <div className="font-bold text-gray-800 mb-1">Congratulations!</div>
            <div className="text-sm text-gray-600 mb-4 text-center">
              You finished #9 and advanced to the sapphire League.
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl">
              Go to Leaderboards
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
