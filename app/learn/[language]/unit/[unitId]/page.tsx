"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft } from "lucide-react";

const mascotUrl = "/placeholder-user.jpg"; // Replace with your mascot image if available
const superImg = "/placeholder-user.jpg"; // Replace with a super mascot image if available
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
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto py-8 gap-8">
      {/* Back Button */}
        <Button
          onClick={() => router.push(`/learn/${language}`)}
          className="mb-6 flex items-center"
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
        <Card className="rounded-2xl bg-blue-600 text-white">
          <CardContent className="p-6">
            <div className="font-bold text-lg mb-2">
              Welcome, Lindsey Carder
            </div>
            <div className="text-sm mb-2">Joined on 12 March, 2024</div>
            <div className="bg-white rounded-xl p-3 mb-2 flex items-center justify-between">
              <span className="text-xs text-blue-600 font-bold">
                Your current standing is 01
              </span>
              <span className="text-xs text-blue-600 font-bold">01 / 10</span>
            </div>
            <Progress value={10} className="h-2 bg-blue-200" />
          </CardContent>
        </Card>
        {/* Try Super Card */}
        <Card className="rounded-2xl">
          <CardContent className="p-6 flex flex-col items-center">
            <div className="font-bold text-gray-800 mb-1">
              Try Super for free
            </div>
            <div className="text-sm text-gray-600 mb-4 text-center">
              No ad, personalized practice test, and unlimited legendary!
            </div>
            <img
              src={superImg}
              alt="Super Mascot"
              className="w-16 h-16 mb-2 rounded-full bg-white"
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
