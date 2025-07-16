"use client";
import { CheckCircle, BookOpen, Headphones, Star, Circle } from "lucide-react";

// Mock steps data for demonstration
const mockSteps = [
  { type: "lesson", label: "Lesson 1: Basic Greetings", done: true },
  { type: "lesson", label: "Lesson 2: Polite Phrases", done: true },
  { type: "checkpoint", label: "Checkpoint", done: true },
  { type: "lesson", label: "Lesson 3: At the Market", done: false },
  { type: "practice", label: "Practice: Ordering", done: false },
  { type: "audio", label: "Audio: Payment Dialogues", done: false },
];

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
      return <Circle className="text-gray-400 w-10 h-10" />;
  }
}

export default function UnitStepsPage() {
  return (
    <div className="max-w-md mx-auto py-10">
      <h2 className="text-2xl font-bold mb-8 text-center">Unit Steps</h2>
      <div className="flex flex-col items-center gap-8">
        {mockSteps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {stepIcon(step.type, step.done)}
            <span
              className={`mt-2 font-semibold text-lg ${
                step.done ? "text-blue-500" : "text-gray-700"
              }`}
            >
              {step.label}
            </span>
            {idx < mockSteps.length - 1 && (
              <div className="w-1 h-10 bg-gray-300 mx-auto" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
