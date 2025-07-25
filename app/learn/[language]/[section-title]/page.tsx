"use client";
import { courses } from "@/data/courses";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, X, CheckCircle, Circle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useIsTablet } from "@/components/ui/use-tablet"; // You must have this hook

export default function SectionPage({
  params: paramsPromise,
}: {
  params: Promise<{ language: string; "section-title": string }>;
}) {
  const params = React.use(paramsPromise);
  const course = courses[params.language as keyof typeof courses];
  const section = course.sections.find(
    (s) => s.title === params["section-title"]
  );
  const [selectedUnit, setSelectedUnit] = useState<null | typeof section.units[0]>(null);
  const isTablet = useIsTablet();

  if (!section) return <div>Section not found</div>;

  // Mock lesson completion: first lesson completed, rest not
  function getLessonStatus(idx: number) {
    return idx === 0 ? "completed" : "incomplete";
  }

  function LessonList({ unit, onClose }: { unit: typeof section.units[0]; onClose: () => void }) {
    return (
      <div className="w-full max-w-xs bg-white dark:bg-gray-900 rounded-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        <h3 className="text-lg font-bold mb-4">{unit.title} - Lessons</h3>
        <div className="flex flex-col gap-2">
          {unit.lessons.map((lesson, idx) => (
            <div
              key={lesson.id}
              className="flex items-center justify-between px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="font-medium">{lesson.id}</span>
              {getLessonStatus(idx) === "completed" ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <Circle className="w-5 h-5 text-gray-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row items-start gap-8">
      <div className="flex-1">
        <div className="mb-2 mt-4 px-4 flex items-center gap-2 w-full text-xl font-semibold">
          <Link href="/" className="hover:underline text-gray-500">Home</Link>
          <ChevronLeft className="rotate-180 w-5 h-5 text-gray-400" />
          <Link href="/learn" className="hover:underline text-gray-500">Learn</Link>
          <ChevronLeft className="rotate-180 w-5 h-5 text-gray-400" />
          <Link
            href={`/learn/${params.language}`}
            className="hover:underline text-gray-500"
          >
            {params["language"]}
          </Link>
          <ChevronLeft className="rotate-180 w-5 h-5 text-gray-400" />
          <span className="capitalize text-sky-400">{params["section-title"]}</span>
        </div>
        <div className="max-w-3xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {section.units.map((unit, idx) => (
              <Card
                key={unit.title}
                onClick={() => setSelectedUnit(unit)}
                className={`relative overflow-hidden flex flex-col justify-between mb-6 p-6 bg-gradient-to-br rounded-lg from-gray-900 to-gray-800 border-none hover:scale-105 duration-500 ease-in hover:shadow-lg cursor-pointer ${
                  selectedUnit?.title === unit.title ? "ring-2 ring-sky-400" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4 relative">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-blue-400 font-bold">
                      UNIT {idx + 1}
                    </span>
                    <div className="text-2xl font-bold text-white mt-1">
                      {unit.title}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm uppercase text-white font-bold font-mono">
                    {unit.lessons.length} Lessons
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {/* Side preview for large screens */}
      {!isTablet && selectedUnit && (
        <div className="flex-shrink-0 mt-8 mr-8 min-w-80 p-4">
          <LessonList unit={selectedUnit} onClose={() => setSelectedUnit(null)} />
        </div>
      )}
      {/* Modal for mobile/tablet */}
      {isTablet && selectedUnit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 w-11/12 max-w-xs relative">
            <LessonList unit={selectedUnit} onClose={() => setSelectedUnit(null)} />
          </div>
        </div>
      )}
    </div>
  );
}
