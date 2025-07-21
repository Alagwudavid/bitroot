"use client";
import { courses } from "@/data/courses";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  CheckCircle,
  BookOpen,
  Headphones,
  Star,
} from "lucide-react";

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

  return (
    <div className="max-h-screen">
      <div className="mb-6">
        <Link href={`/learn/${params.language}/${params["section-title"]}`}>
          <Button className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            Back to {params["section-title"]}
          </Button>
        </Link>
      </div>
      <h2 className="text-xl font-bold mb-8 text-white">Unit: {unit.title}</h2>

      <div className="flex flex-col items-center gap-8">
        {mockSteps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Link
              href={step.done ? step.href : "#"}
              className="flex flex-col items-center group"
            >
              {stepIcon(step.type, step.done)}
              <span
                className={`mt-2 font-semibold text-lg ${
                  step.done ? "text-blue-500" : "text-gray-400"
                }`}
              >
                {step.title}
              </span>
            </Link>
            {idx < mockSteps.length - 1 && (
              <div className="w-1 h-10 bg-white mx-auto mt-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
