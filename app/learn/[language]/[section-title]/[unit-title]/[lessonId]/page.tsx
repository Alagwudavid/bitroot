"use client";
import { courses, Lesson } from "@/data/courses";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { X, Volume2, Timer, EllipsisVertical } from "lucide-react";
import React from "react";

interface LessonPageParams {
  params: Promise<{
    language: string;
    "section-title": string;
    "unit-title": string;
    lessonId: string;
  }>;
}

export default function LessonPage({
  params: paramsPromise,
}: LessonPageParams) {
  const params = React.use(paramsPromise);
  const course = courses[params.language as keyof typeof courses];
  const section = course?.sections.find(
    (s) => s.title === params["section-title"]
  );
  const unit = section?.units.find((u) => u.title === params["unit-title"]);
  const lesson: Lesson | undefined = unit?.lessons.find(
    (l) => l.id === params.lessonId
  );
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);
  const [timer] = useState(5);

  if (!lesson) return <div className="p-8">Lesson not found</div>;

  const handleWordClick = (word: string) => {
    if (!selected.includes(word)) setSelected([...selected, word]);
  };
  const handleRemove = (word: string) => {
    setSelected(selected.filter((w) => w !== word));
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#181c23] bg-opacity-95 flex flex-col items-center min-h-screen md:p-8">
      {/* Progress bar and close */}
      <div className="w-full flex items-center px-8 pt-6">
        <button
          onClick={() => router.back()}
          className="text-gray-400 hover:text-white"
        >
          <X size={28} />
        </button>
        <div className="flex-1 mx-4 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-[#22c55e] w-1/3" />
        </div>
        <div className="flex items-center gap-1">
          <Timer className="text-red-500" />
          <span className="text-red-500 font-bold">{timer}s</span>
        </div>
      </div>

      {/* Prompt */}
      <div className="mt-8 text-2xl font-bold text-white text-center">
        {lesson.prompt}
      </div>

      {/* Mascot and phrase */}
      <div className="flex items-center justify-center mt-6 mb-4">
        <img
          src="/images/mascot.png"
          alt="Mascot"
          className="w-20 h-20 rounded-full bg-[#23263a] mr-4"
        />
        <div className="flex items-center gap-2 bg-[#23263a] px-4 py-2 rounded-lg">
          <Volume2 className="text-[#22c55e]" />
          <span className="text-lg text-white font-mono">{lesson.phrase}</span>
        </div>
      </div>

      {/* Answer area */}
      <div className="flex flex-wrap min-h-[48px] items-center justify-center border-b border-gray-700 w-full max-w-xl mx-auto mb-6 pb-2">
        {selected.map((word) => (
          <button
            key={word}
            onClick={() => handleRemove(word)}
            className="bg-[#23263a] text-white px-4 py-2 rounded-lg m-1 border border-[#22c55e] font-semibold"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Word bank */}
      <div className="flex flex-wrap justify-center gap-2 w-full max-w-xl mb-10">
        {lesson.wordBank.map((word) => (
          <button
            key={word}
            onClick={() => handleWordClick(word)}
            disabled={selected.includes(word)}
            className={`px-4 py-2 rounded-lg border border-gray-600 font-semibold text-white transition ${
              selected.includes(word)
                ? "opacity-40 cursor-not-allowed"
                : "bg-[#23263a] hover:bg-[#22c55e] hover:text-black"
            }`}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Bottom buttons */}
      <div className="flex justify-between w-full max-w-xl px-4">
        <button
          className="bg-transparent border border-gray-600 text-gray-400 px-8 py-2 rounded-xl font-bold"
          disabled
        >
          SKIP
        </button>
        <button
          className="bg-[#22c55e] text-black px-8 py-2 rounded-xl font-bold"
          disabled
        >
          CHECK
        </button>
      </div>
    </div>
  );
}
