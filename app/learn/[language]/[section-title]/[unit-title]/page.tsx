"use client";
import { courses } from "@/data/courses";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  List,
  CheckCircle,
  BookOpen,
  Headphones,
  Star,
  X,
} from "lucide-react";
import { useIsTablet } from "@/components/ui/use-tablet"; // Make sure this exists

export default function UnitPage({
  params: paramsPromise,
}: {
  params: Promise<{
    language: string;
    "section-title": string;
    "unit-title": string;
  }>;
}) {
  const params = React.use(paramsPromise);
  const course = courses[params.language as keyof typeof courses];
  const section = course?.sections.find(
    (s) => s.title === params["section-title"]
  );
  const unit = section?.units.find((u) => u.title === params["unit-title"]);
  const isTablet = useIsTablet();
  const isLarge = !isTablet; // You can refine this if you have a useIsLarge hook

  if (!unit || !section) return <div>Unit not found</div>;

  // Mock progress logic - first 2 lessons completed, rest pending
  const mockSteps = unit.lessons.map((lesson, idx) => ({
    id: lesson.id,
    title: `Lesson ${idx + 1}: ${lesson.id}`,
    type:
      idx === 2
        ? "checkpoint"
        : idx === 3
        ? "practice"
        : idx === 4
        ? "audio"
        : "lesson",
    done: idx < 2, // First 2 lessons completed
    href: `/learn/${params.language}/${section.title}/${unit.title}/${lesson.id}`,
  }));

  // State for selected lesson and list visibility
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [showList, setShowList] = useState(isLarge);

  const selectedLesson = mockSteps[selectedIdx];

  function stepIcon(type: string, done: boolean) {
    if (done) return <CheckCircle className="text-blue-400 w-10 h-10" />;
    switch (type) {
      case "lesson":
        return <BookOpen className="text-blue-400 w-10 h-10" />;
      case "audio":
        return <Headphones className="text-pink-400 w-10 h-10" />;
      case "checkpoint":
        return <Star className="text-yellow-400 w-10 h-10" />;
      case "practice":
        return <BookOpen className="text-green-400 w-10 h-10" />;
      default:
        return <BookOpen className="text-blue-400 w-10 h-10" />;
    }
  }

  // Player component
  function LessonPlayer({ lesson }: { lesson: typeof mockSteps[0] }) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 min-h-[300px]">
        <div className="text-2xl font-bold mb-2 text-sky-600 dark:text-sky-300">
          {lesson.title}
        </div>
        <div className="text-gray-700 dark:text-gray-200 text-lg mb-4">
          Lesson content for <b>{lesson.id}</b> goes here.
        </div>
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-gray-400 text-xl">
          [Player Placeholder]
        </div>
      </div>
    );
  }

  // Lessons List
  function LessonList({
    onSelect,
    onClose,
  }: {
    onSelect: (idx: number) => void;
    onClose?: () => void;
  }) {
    return (
      <div className="w-72 max-w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 h-full flex flex-col relative">
        {onClose && (
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
        )}
        <h3 className="text-lg font-bold mb-4">Lessons</h3>
        <div className="flex flex-col gap-2 overflow-y-auto">
          {mockSteps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => {
                onSelect(idx);
                if (onClose) onClose();
              }}
              className={`flex items-center justify-between px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left ${
                selectedIdx === idx ? "bg-sky-100 dark:bg-sky-900" : ""
              }`}
            >
              <span className="font-medium">{step.title}</span>
              {stepIcon(step.type, step.done)}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Navigation actions
  function handlePrev() {
    setSelectedIdx((idx) => (idx > 0 ? idx - 1 : idx));
  }
  function handleNext() {
    setSelectedIdx((idx) => (idx < mockSteps.length - 1 ? idx + 1 : idx));
  }
  function handleToggleList() {
    setShowList((v) => !v);
  }

  return (
    <div className="min-h-screen flex flex-col px-2">
      <div className="mb-2 mt-4 px-4 flex items-center flex-wrap gap-2 w-full text-xl font-semibold">
        <Link href="/" className="hover:underline text-gray-500">
          Home
        </Link>
        <ChevronLeft className="rotate-180 w-5 h-5 text-gray-400" />
        <Link href="/learn" className="hover:underline text-gray-500">
          Learn
        </Link>
        <ChevronLeft className="rotate-180 w-5 h-5 text-gray-400" />
        <Link
          href={`/learn/${params.language}`}
          className="hover:underline text-gray-500"
        >
          {params["language"]}
        </Link>
        <ChevronLeft className="rotate-180 w-5 h-5 text-gray-400" />
        <Link
          href={`/learn/${params.language}/${params["section-title"]}`}
          className="hover:underline text-gray-500"
        >
          {params["section-title"]}
        </Link>
        <ChevronLeft className="rotate-180 w-5 h-5 text-gray-400" />
        <span className="capitalize text-sky-400">{params["unit-title"]}</span>
      </div>
      <div className="flex-1 flex w-full mt-4 relative">
        {/* Sidebar for large screens */}
        {isLarge && showList && (
          <div className="hidden lg:block h-full mr-6">
            <LessonList onSelect={setSelectedIdx} />
          </div>
        )}
        {/* Player */}
        <div className="flex-1 flex flex-col items-center">
          <LessonPlayer lesson={selectedLesson} />
          <div className="flex gap-4 mt-6">
            <Button
              onClick={handlePrev}
              disabled={selectedIdx === 0}
              variant="outline"
            >
              <ChevronLeft className="w-5 h-5" /> Previous
            </Button>
            <Button onClick={handleToggleList} variant="secondary">
              <List className="w-5 h-5 mr-2" />
              {showList ? "Hide List" : "Show List"}
            </Button>
            <Button
              onClick={handleNext}
              disabled={selectedIdx === mockSteps.length - 1}
              variant="outline"
            >
              Next <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        {/* Popup for small screens/tablet */}
        {!isLarge && showList && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <LessonList
              onSelect={setSelectedIdx}
              onClose={() => setShowList(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
