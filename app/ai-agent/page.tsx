"use client";
import { Bot, MessageCircle, BookOpen, Headphones, Languages } from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "Translator",
    description: "Instantly translate words, phrases, or sentences between languages.",
  },
  {
    icon: MessageCircle,
    title: "Chat",
    description: "Converse with the AI in your target language or practice conversations.",
  },
  {
    icon: BookOpen,
    title: "Flashcards",
    description: "Review vocabulary and concepts with AI-generated flashcards.",
  },
  {
    icon: Headphones,
    title: "Audio Chat",
    description: "Practice listening and speaking with voice-enabled AI chat.",
  },
  {
    icon: Bot,
    title: "Lessons",
    description: "Get personalized lessons and explanations from the AI tutor.",
  },
];

export default function AIAgentPage() {
  return (
    <div className="max-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">AI Language Lab</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl w-full justify-center">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col items-center bg-white dark:bg-[#181c2a] rounded-2xl shadow-md p-6 hover:shadow-xl transition-all border border-gray-200 dark:border-[#23263a]"
          >
            <f.icon className="w-12 h-12 mb-4 text-blue-500 dark:text-[#8ddeed]" />
            <h2 className="text-xl font-semibold mb-2 text-center">{f.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 