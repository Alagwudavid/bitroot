"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LanguageCard } from "@/components/language-card";

export default function LearnPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const router = useRouter();

  const languages = [
    {
      name: "Swahili",
      flag: "tz",
      country: "Tanzania",
      level: "Beginner",
      progress: 0,
      lessons: 24,
      learned: 12,
      description: "Learn the most widely spoken language in East Africa",
    },
    {
      name: "Yoruba",
      flag: "ng",
      country: "Nigeria",
      level: "Beginner",
      progress: 15,
      lessons: 32,
      learned: 16,
      description: "Discover the rich language of the Yoruba people",
    },
    {
      name: "Amharic",
      flag: "et",
      country: "Ethiopia",
      level: "Beginner",
      progress: 0,
      lessons: 28,
      learned: 14,
      description: "Learn the official language of Ethiopia",
    },
    {
      name: "Hausa",
      flag: "ng",
      country: "Nigeria",
      level: "Beginner",
      progress: 0,
      lessons: 26,
      learned: 13,
      description: "Master the lingua franca of West Africa",
    },
    {
      name: "Igbo",
      flag: "ng",
      country: "Nigeria",
      level: "Beginner",
      progress: 0,
      lessons: 30,
      learned: 15,
      description: "Learn the language of the Igbo people",
    },
    {
      name: "Zulu",
      flag: "za",
      country: "South-Africa",
      level: "Beginner",
      progress: 0,
      lessons: 25,
      learned: 12,
      description: "Discover South Africa's most spoken language",
    },
  ];

  const continueLearningLanguages = languages.filter(
    (lang) => lang.progress > 0
  );
  const newLanguages = languages.filter((lang) => lang.progress === 0);

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    router.push(`/learn/${language.toLowerCase()}`);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {continueLearningLanguages.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-[#fafafa] mb-4">
            Continue Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {continueLearningLanguages.map((language) => (
              <LanguageCard
                key={language.name}
                language={language}
                onLanguageSelect={() => handleLanguageSelect(language.name)}
                onCardClick={setSelectedLanguage}
              />
            ))}
          </div>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-[#fafafa] mb-4">
          New Languages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {newLanguages.map((language) => (
            <LanguageCard
              key={language.name}
              language={language}
              onLanguageSelect={() => handleLanguageSelect(language.name)}
              onCardClick={setSelectedLanguage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
