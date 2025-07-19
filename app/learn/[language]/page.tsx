"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BotMessageSquare,
  ChevronLeft,
  Eye,
  UsersRound,
  CheckCircle,
  Circle,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const mascotUrl = "/images/mascot.png"; // Replace with your mascot image if available

const languageSectionsData: Record<string, Array<any>> = {
  yoruba: [
    {
      id: 1,
      title: "Beginner",
      level: "A1",
      status: "completed",
      progress: 26,
      totalUnit: 26,
      phrase: "Mo fẹ́ kọ́ ẹ̀dá Yorùbá.",
      locked: false,
    },
    {
      id: 2,
      title: "Elementary",
      level: "A2",
      status: "in-progress",
      progress: 20,
      totalUnit: 26,
      phrase: "Mo fẹ́ kọ́ ẹ̀dá Yorùbá.",
      locked: false,
    },
    {
      id: 3,
      title: "Intermediate",
      level: "B1",
      status: "locked",
      progress: 0,
      totalUnit: 28,
      phrase: "Mo mọ̀ díẹ̀ nínú àwọn ọ̀rọ̀.",
      locked: true,
    },
    {
      id: 4,
      title: "Upper-Intermediate",
      level: "B2",
      status: "locked",
      progress: 0,
      totalUnit: 28,
      phrase: "Mo mọ̀ díẹ̀ nínú àwọn ọ̀rọ̀.",
      locked: true,
    },
    {
      id: 5,
      title: "Advanced",
      level: "C1",
      status: "locked",
      progress: 0,
      totalUnit: 52,
      phrase: "",
      locked: true,
    },
    {
      id: 6,
      title: "Proficiency",
      level: "C2",
      status: "locked",
      progress: 0,
      totalUnit: 50,
      phrase: "",
      locked: true,
    },
    {
      id: 7,
      title: "Certification",
      level: "EXAM",
      status: "locked",
      progress: 0,
      totalUnit: 50,
      phrase: "",
      locked: true,
    },
  ],
  // Add more languages as needed
};

// Mock units data for demonstration
// const units = [
//   {
//     id: 10,
//     title: "Basic Greetings",
//     sectionId: 1,
//     languageId: "yoruba",
//     status: "completed",
//     progress: 3,
//     totalLessons: 3,
//   },
//   {
//     id: 11,
//     title: "Polite Phrases",
//     placeholder: "/placeholder-user.jpg",
//     sectionId: 1,
//     languageId: "yoruba",
//     status: "progress",
//     progress: 1,
//     totalLessons: 9,
//   },
//   {
//     id: 12,
//     title: "Checkpoint",
//     placeholder: "/placeholder-user.jpg",
//     sectionId: 1,
//     languageId: "yoruba",
//     status: "locked",
//     progress: 0,
//     totalLessons: 6,
//   },
//   {
//     id: 13,
//     title: "At the Market",
//     placeholder: "/placeholder-user.jpg",
//     sectionId: 1,
//     languageId: "yoruba",
//     status: "locked",
//     progress: 0,
//     totalLessons: 6,
//   },
//   {
//     id: 14,
//     title: "Practice: Ordering",
//     placeholder: "/placeholder-user.jpg",
//     sectionId: 1,
//     languageId: "yoruba",
//     status: "locked",
//     progress: 0,
//     totalLessons: 6,
//   },
//   {
//     id: 14,
//     title: "Audio: Payment Dialogues",
//     placeholder: "/placeholder-user.jpg",
//     sectionId: 1,
//     languageId: "yoruba",
//     status: "locked",
//     progress: 0,
//     totalLessons: 6,
//   },
// ];

// Grouped units by sectionId for demonstration
const unitsBySection: Record<number, Array<{
  id: number;
  title: string;
  sectionId: number;
  languageId: string;
  status: string;
  progress: number;
  totalLessons: number;
}>> = {
  1: [
    {
      id: 10,
      title: "Basic Greetings",
      sectionId: 1,
      languageId: "yoruba",
      status: "completed",
      progress: 2,
      totalLessons: 3,
    },
    {
      id: 11,
      title: "Polite Phrases",
      sectionId: 1,
      languageId: "yoruba",
      status: "locked",
      progress: 0,
      totalLessons: 9,
    },
    {
      id: 12,
      title: "Checkpoint",
      sectionId: 1,
      languageId: "yoruba",
      status: "locked",
      progress: 0,
      totalLessons: 6,
    },
    {
      id: 13,
      title: "At the Market",
      sectionId: 1,
      languageId: "yoruba",
      status: "locked",
      progress: 0,
      totalLessons: 6,
    },
    {
      id: 14,
      title: "Practice: Ordering",
      sectionId: 1,
      languageId: "yoruba",
      status: "locked",
      progress: 0,
      totalLessons: 6,
    },
    {
      id: 15,
      title: "Audio: Payment Dialogues",
      sectionId: 1,
      languageId: "yoruba",
      status: "locked",
      progress: 0,
      totalLessons: 6,
    },
  ],
  // Add more sections as needed
};

function UnitCarousel({ units, lang, section }: { units: any[]; lang: string; section: any }) {
  const [idx, setIdx] = useState(0);

  if (!units || units.length === 0) {
    return (
      <div className="flex w-full flex-row gap-2 items-center mb-4 justify-center text-gray-400">
        No units available for this section.
      </div>
    );
  }

  const unit = units[idx];
  return (
    <div className="flex w-full flex-row gap-2 items-center mb-4">
      <Button
        className="w-8 h-full rounded bg-transparent hover:!bg-transparent text-gray-500 hover:text-white"
        onClick={() => setIdx((idx - 1 + units.length) % units.length)}
        aria-label="Previous unit"
      >
        <ChevronLeft className="!size-6" />
      </Button>
      <Link
        href={`/learn/${lang}/${sanitizeUrl(section.title)}/${sanitizeUrl(unit.title)}`}
        className="flex w-full flex-col items-center rounded-lg p-2 hover:bg-slate-700 duration-500 cursor-pointer"
      >
        <div className="w-20 h-20 mx-auto mb-4">
          <img
            src={`/stickers/earlyBurner.png`}
            alt={`Bitroot logo`}
            className={`w-full h-full object-cover rounded ${
              unit.status !== "completed" && unit.status === "locked" && unit.status !== "progress"
                ? "grayscale"
                : ""
            }`}
          />
        </div>
        <span className="text-white text-center capitalize font-mono">{unit.title}</span>
        <span className="text-gray-300 capitalize font-mono text-sm">
          {unit.status === "completed"
            ? "completed"
            : `${unit.progress} of ${unit.totalLessons} lessons`}
        </span>
      </Link>
      <Button
        className="w-8 h-full rounded bg-transparent hover:!bg-transparent text-gray-500 hover:text-white"
        onClick={() => setIdx((idx + 1) % units.length)}
        aria-label="Next unit"
      >
        <ChevronRight className="!size-6" />
      </Button>
    </div>
  );
}

// Helper function to sanitize URLs
function sanitizeUrl(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim();
}

export default function LanguageSectionsPage() {
  const { language } = useParams();
  const router = useRouter();
  const lang = (language as string)?.toLowerCase();
  const Sections = languageSectionsData[lang] || [];

  const handleSectionClick = (Section: any) => {
    if (!Section.locked) {
      router.push(`/learn/${lang}/section/${Section.id}`);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between max-w-7xl mx-auto w-full md:gap-5 gap-0 mb-10 md:mb-20">
        <div className="flex-1 flex flex-col items-start gap-2 max-w-xl w-full md:mt-10">
          <span className="flex items-center justify-center capitalize text-3xl font-bold">
            {lang}
          </span>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-gray-500 dark:text-[#fafafa]/60">
              <svg
                className="size-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3697 4.89109L13.5097 2.28109C12.6497 1.90109 11.3497 1.90109 10.4897 2.28109L4.62969 4.89109C3.14969 5.55109 2.92969 6.45109 2.92969 6.93109C2.92969 7.41109 3.14969 8.31109 4.62969 8.97109L10.4897 11.5811C10.9197 11.7711 11.4597 11.8711 11.9997 11.8711C12.5397 11.8711 13.0797 11.7711 13.5097 11.5811L19.3697 8.97109C20.8497 8.31109 21.0697 7.41109 21.0697 6.93109C21.0697 6.45109 20.8597 5.55109 19.3697 4.89109Z"
                  fill="currentColor"
                />
                <path
                  d="M12.0003 17.04C11.6203 17.04 11.2403 16.96 10.8903 16.81L4.15031 13.81C3.12031 13.35 2.32031 12.12 2.32031 10.99C2.32031 10.58 2.65031 10.25 3.06031 10.25C3.47031 10.25 3.80031 10.58 3.80031 10.99C3.80031 11.53 4.25031 12.23 4.75031 12.45L11.4903 15.45C11.8103 15.59 12.1803 15.59 12.5003 15.45L19.2403 12.45C19.7403 12.23 20.1903 11.54 20.1903 10.99C20.1903 10.58 20.5203 10.25 20.9303 10.25C21.3403 10.25 21.6703 10.58 21.6703 10.99C21.6703 12.11 20.8703 13.35 19.8403 13.81L13.1003 16.81C12.7603 16.96 12.3803 17.04 12.0003 17.04Z"
                  fill="currentColor"
                />
                <path
                  d="M12.0003 22.0009C11.6203 22.0009 11.2403 21.9209 10.8903 21.7709L4.15031 18.7709C3.04031 18.2809 2.32031 17.1709 2.32031 15.9509C2.32031 15.5409 2.65031 15.2109 3.06031 15.2109C3.47031 15.2109 3.80031 15.5409 3.80031 15.9509C3.80031 16.5809 4.17031 17.1509 4.75031 17.4109L11.4903 20.4109C11.8103 20.5509 12.1803 20.5509 12.5003 20.4109L19.2403 17.4109C19.8103 17.1609 20.1903 16.5809 20.1903 15.9509C20.1903 15.5409 20.5203 15.2109 20.9303 15.2109C21.3403 15.2109 21.6703 15.5409 21.6703 15.9509C21.6703 17.1709 20.9503 18.2709 19.8403 18.7709L13.1003 21.7709C12.7603 21.9209 12.3803 22.0009 12.0003 22.0009Z"
                  fill="currentColor"
                />
              </svg>
              <span>23 Sections</span>
            </div>
            <span className="block mt-0.5 w-1 h-1 shrink-0 bg-gray-400 rounded-full"></span>
            <div className="flex items-center space-x-1 text-gray-500 dark:text-[#fafafa]/60">
              <span>103 Units</span>
            </div>
            <span className="block mt-0.5 w-1 h-1 shrink-0 bg-gray-400 rounded-full"></span>
            <div className="flex items-center gap-2 text-gray-500 dark:text-[#fafafa]/60">
              <svg
                className="size-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Ai agent</title>
                <g
                  id="页面-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Media"
                    transform="translate(-960.000000, -96.000000)"
                    fillRule="nonzero"
                  >
                    <g
                      id="voice_line"
                      transform="translate(960.000000, 96.000000)"
                    >
                      <path
                        d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                        id="MingCute"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M12,3 C12.51285,3 12.9355092,3.38604429 12.9932725,3.88337975 L13,4 L13,20 C13,20.5523 12.5523,21 12,21 C11.48715,21 11.0644908,20.613973 11.0067275,20.1166239 L11,20 L11,4 C11,3.44772 11.4477,3 12,3 Z M8,6 C8.55228,6 9,6.44772 9,7 L9,17 C9,17.5523 8.55228,18 8,18 C7.44772,18 7,17.5523 7,17 L7,7 C7,6.44772 7.44772,6 8,6 Z M16,6 C16.5523,6 17,6.44772 17,7 L17,17 C17,17.5523 16.5523,18 16,18 C15.4477,18 15,17.5523 15,17 L15,7 C15,6.44772 15.4477,6 16,6 Z M4,9 C4.55228,9 5,9.44772 5,10 L5,14 C5,14.5523 4.55228,15 4,15 C3.44772,15 3,14.5523 3,14 L3,10 C3,9.44772 3.44772,9 4,9 Z M20,9 C20.51285,9 20.9355092,9.38604429 20.9932725,9.88337975 L21,10 L21,14 C21,14.5523 20.5523,15 20,15 C19.48715,15 19.0644908,14.613973 19.0067275,14.1166239 L19,14 L19,10 C19,9.44772 19.4477,9 20,9 Z"
                        id="形状"
                        fill="currentColor"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <span>AI assisted</span>
            </div>
          </div>
          <div className="mt-3 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            cumque eligendi ipsa illum nesciunt animi, in placeat assumenda
            dolores inventore dolore nisi exercitationem quibusdam hic
            consectetur repellat nihil. Ducimus, id.
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-14 h-14">
              <img
                src={`/stickers/bookie.png`}
                alt={`Bitroot logo`}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="w-14 h-14">
              <img
                src={`/stickers/earlyBurner.png`}
                alt={`Bitroot logo`}
                className="w-full h-full object-cover rounded grayscale"
              />
            </div>
            <div className="w-14 h-14">
              <img
                src={`/stickers/fighter.png`}
                alt={`Bitroot logo`}
                className="w-full h-full object-cover rounded grayscale"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-6">
            <Button
              onClick={() => router.push("/learn")}
              className="flex items-center w-fit text-base dark:text-[#fafafa]/70 hover:bg-[#C51E3A]/70 dark:hover:bg-[#1e96fc]/20 hover:text-white bg-[#C51E3A] dark:bg-[#1e96fc]/50 text-white"
            >
              <ChevronLeft className="mr-1 !size-6" /> Back
            </Button>
          </div>
        </div>
        {/* Right: Dynamic Featured Card */}
        <div className="flex-1 hidden md:flex justify-center items-center w-full mb-10 md:mb-0">
          <div className="rounded-3xl bg-[#fdf6fa] dark:bg-[#23263a] flex items-center justify-center w-full max-w-md h-80 md:h-96 overflow-hidden relative">
            <img
              src={"/images/happy_beet.jpg"}
              alt="Most Viewed Playlist"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-[#101828]/90 px-4 py-2 rounded-full shadow text-sm font-semibold flex items-center gap-2 cursor-pointer">
              <Eye className="w-4 h-4 text-[#7037e4] dark:text-[#8ddeed]" />{" "}
              Alexa root
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Sections.map((Section, idx) => {
          // Find first unmarked unit
          return (
            <Card
              key={Section.id}
              className={`flex flex-col justify-between mb-6 p-6 bg-gradient-to-br rounded-lg ${
                Section.status === "completed"
                  ? "from-gray-800 to-gray-900"
                  : "from-gray-900 to-gray-800"
              } border-none relative hover:scale-105 duration-500 ease-in ${
                Section.locked
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:shadow-lg"
              }`}
            >
              <div className="flex items-center justify-between mb-4 relative">
                <div>
                  <span className="text-xs text-blue-400 font-bold">
                    {Section.level} • SECTION {Section.id}{" "}
                    {Section.status === "locked" && "• LOCKED"}
                  </span>
                  <h2 className="text-2xl font-bold text-white mt-1">
                    {Section.title} Level
                  </h2>
                </div>
              </div>
              {Section.status !== "locked" && (
                <>
                  <UnitCarousel units={unitsBySection[Section.id] || []} lang={lang} section={Section} />
                  <div className="flex flex-col items-center">
                    <div className="flex items-center w-full mb-4">
                      <Progress
                        value={Math.round(
                          (Section.progress / Section.totalUnit) * 100
                        )}
                        className="h-3 flex-1 mr-5 bg-white max-w-80 mx-auto"
                      />
                    </div>
                    <span className="text-sm uppercase text-white font-bold font-mono">
                      {Section.progress} / {Section.totalUnit} Units
                    </span>
                  </div>
                </>
              )}
              {Section.status === "locked" && (
                <>
                  <UnitCarousel units={unitsBySection[Section.id] || []} lang={lang} section={Section} />
                  <div className="flex flex-col items-center">
                    <div className="flex items-center w-full mb-4">
                      <Progress
                        value={Math.round(
                          (Section.progress / Section.totalUnit) * 100
                        )}
                        className="h-3 flex-1 mr-5 bg-white max-w-80 mx-auto"
                      />
                    </div>
                    <span className="text-sm uppercase text-gray-400 font-bold font-mono">
                      {Section.progress} / {Section.totalUnit} Units
                    </span>
                  </div>
                </>
              )}
            </Card>
          );
        })}
        {Sections.length === 0 && (
          <div className="text-center text-gray-400">
            No Sections available for this language yet.
          </div>
        )}
      </div>
    </div>
  );
}
