"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";

const mascotUrl = "/placeholder-user.jpg"; // Replace with your mascot image if available

const languageunitsData: Record<string, Array<any>> = {
  yoruba: [
    {
      id: 22648559,
      title: "Unit 1",
      status: "completed",
      progress: 26,
      total: 26,
      phrase: "Mo fẹ́ kọ́ ẹ̀dá Yorùbá.",
      locked: false,
    },
    {
      id: 22648560,
      title: "Unit 2",
      status: "in-progress",
      progress: 20,
      total: 26,
      phrase: "Mo fẹ́ kọ́ ẹ̀dá Yorùbá.",
      locked: false,
    },
    {
      id: 22648561,
      title: "Unit 3",
      status: "locked",
      progress: 0,
      total: 28,
      phrase: "Mo mọ̀ díẹ̀ nínú àwọn ọ̀rọ̀.",
      locked: true,
    },
    {
      id: 22648562,
      title: "Unit 4",
      status: "locked",
      progress: 0,
      total: 28,
      phrase: "Mo mọ̀ díẹ̀ nínú àwọn ọ̀rọ̀.",
      locked: true,
    },
    {
      id: 22648563,
      title: "Exam 1 (Unit 1-4)",
      status: "locked",
      progress: 0,
      total: 52,
      phrase: "",
      locked: true,
    },
    {
      id: 22648564,
      title: "Exam 2 (One on One)",
      status: "locked",
      progress: 0,
      total: 50,
      phrase: "",
      locked: true,
    },
    {
      id: 22648565,
      title: "Certification",
      status: "locked",
      progress: 0,
      total: 50,
      phrase: "",
      locked: true,
    },
  ],
  // Add more languages as needed
};

export default function LanguageUnitsPage() {
  const { language } = useParams();
  const router = useRouter();
  const lang = (language as string)?.toLowerCase();
  const units = languageunitsData[lang] || [];

  const handleUnitClick = (Unit: any) => {
    if (!Unit.locked) {
      router.push(`/learn/${lang}/unit/${Unit.id}`);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto py-8">
      <Button
        variant="ghost"
        onClick={() => router.push("/learn")}
        className="mb-6 flex items-center"
      >
        <ChevronLeft className="mr-2" /> Back to Languages
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {units.map((Unit, idx) => (
        <Card
          key={Unit.id}
          className={`mb-6 p-6 bg-gradient-to-br ${
            Unit.status === "completed"
              ? "from-gray-800 to-gray-900"
              : "from-gray-900 to-gray-800"
          } border-none relative cursor-pointer ${
            Unit.locked ? "opacity-60 cursor-not-allowed" : "hover:shadow-lg"
          }`}
          onClick={() => handleUnitClick(Unit)}
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-xs text-blue-400 font-bold">
                A{idx < 3 ? 1 : idx < 5 ? 2 : 3} • SEE DETAILS
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                {Unit.title}
              </h2>
            </div>
            {Unit.status === "completed" && (
              <Badge className="bg-green-600 text-white">COMPLETED!</Badge>
            )}
            {Unit.status === "in-progress" && (
              <Badge className="bg-blue-600 text-white">IN PROGRESS</Badge>
            )}
          </div>
          {Unit.status !== "locked" && (
            <>
              <div className="flex items-center mb-4">
                <Progress
                  value={Math.round((Unit.progress / Unit.total) * 100)}
                  className="h-3 flex-1 mr-2"
                />
                <span className="text-xs text-white font-bold">
                  {Unit.progress} / {Unit.total}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src={mascotUrl}
                  alt="Mascot"
                  className="w-16 h-16 rounded-full bg-white"
                />
                <span className="bg-gray-800 text-white px-3 py-2 rounded-xl text-sm shadow">
                  {Unit.phrase}
                </span>
              </div>
              <Button
                className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  handleUnitClick(Unit);
                }}
              >
                {Unit.status === "in-progress" ? "Continue" : "Review"}
              </Button>
            </>
          )}
          {Unit.status === "locked" && (
            <>
              <div className="flex items-center mb-4 opacity-50">
                <span className="text-xs text-gray-400 font-bold">
                  {Unit.total} UNITS
                </span>
              </div>
              <Button
                className="w-full mt-2 bg-gray-700 text-gray-400 cursor-not-allowed"
                disabled
              >
                Locked
              </Button>
            </>
          )}
        </Card>
      ))}
      {units.length === 0 && (
        <div className="text-center text-gray-400">
          No units available for this language yet.
        </div>
      )}
      </div>
    </div>
  );
}
