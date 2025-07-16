"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BotMessageSquare, ChevronLeft, Eye, UsersRound } from "lucide-react";

const mascotUrl = "/images/mascot.png"; // Replace with your mascot image if available

const languageSectionsData: Record<string, Array<any>> = {
  yoruba: [
    {
      id: 22648559,
      title: "Section 1",
      level: "A1",
      status: "completed",
      progress: 26,
      totalUnit: 26,
      phrase: "Mo fẹ́ kọ́ ẹ̀dá Yorùbá.",
      locked: false,
    },
    {
      id: 22648560,
      title: "Section 2",
      level: "A2",
      status: "in-progress",
      progress: 20,
      totalUnit: 26,
      phrase: "Mo fẹ́ kọ́ ẹ̀dá Yorùbá.",
      locked: false,
    },
    {
      id: 22648561,
      title: "Section 3",
      level: "B1",
      status: "locked",
      progress: 0,
      totalUnit: 28,
      phrase: "Mo mọ̀ díẹ̀ nínú àwọn ọ̀rọ̀.",
      locked: true,
    },
    {
      id: 22648562,
      title: "Section 4",
      level: "B2",
      status: "locked",
      progress: 0,
      totalUnit: 28,
      phrase: "Mo mọ̀ díẹ̀ nínú àwọn ọ̀rọ̀.",
      locked: true,
    },
    {
      id: 22648563,
      title: "Exam 1 (Section 1-4)",
      level: "B2",
      status: "locked",
      progress: 0,
      totalUnit: 52,
      phrase: "",
      locked: true,
    },
    {
      id: 22648564,
      title: "Exam 2 (One on One)",
      level: "B2",
      status: "locked",
      progress: 0,
      totalUnit: 50,
      phrase: "",
      locked: true,
    },
    {
      id: 22648565,
      title: "Certification",
      level: "B2",
      status: "locked",
      progress: 0,
      totalUnit: 50,
      phrase: "",
      locked: true,
    },
  ],
  // Add more languages as needed
};

export default function LanguageSectionsPage() {
  const { language } = useParams();
  const router = useRouter();
  const lang = (language as string)?.toLowerCase();
  const Sections = languageSectionsData[lang] || [];

  const handleSectionClick = (Section: any) => {
    if (!Section.locked) {
      router.push(`/learn/${lang}/section/${section.id}`);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between max-w-7xl mx-auto w-full px-4 md:px-8 pt-10 md:gap-5 gap-0 mb-10 md:mb-20">
        <div className="flex-1 flex flex-col items-start gap-2 max-w-xl w-full md:mt-10">
          <span className="flex items-center justify-center capitalize text-3xl font-bold">
            {lang}
          </span>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-gray-500 dark:text-[#fafafa]/60">
              <svg className="size-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.3697 4.89109L13.5097 2.28109C12.6497 1.90109 11.3497 1.90109 10.4897 2.28109L4.62969 4.89109C3.14969 5.55109 2.92969 6.45109 2.92969 6.93109C2.92969 7.41109 3.14969 8.31109 4.62969 8.97109L10.4897 11.5811C10.9197 11.7711 11.4597 11.8711 11.9997 11.8711C12.5397 11.8711 13.0797 11.7711 13.5097 11.5811L19.3697 8.97109C20.8497 8.31109 21.0697 7.41109 21.0697 6.93109C21.0697 6.45109 20.8597 5.55109 19.3697 4.89109Z" fill="currentColor"/>
              <path d="M12.0003 17.04C11.6203 17.04 11.2403 16.96 10.8903 16.81L4.15031 13.81C3.12031 13.35 2.32031 12.12 2.32031 10.99C2.32031 10.58 2.65031 10.25 3.06031 10.25C3.47031 10.25 3.80031 10.58 3.80031 10.99C3.80031 11.53 4.25031 12.23 4.75031 12.45L11.4903 15.45C11.8103 15.59 12.1803 15.59 12.5003 15.45L19.2403 12.45C19.7403 12.23 20.1903 11.54 20.1903 10.99C20.1903 10.58 20.5203 10.25 20.9303 10.25C21.3403 10.25 21.6703 10.58 21.6703 10.99C21.6703 12.11 20.8703 13.35 19.8403 13.81L13.1003 16.81C12.7603 16.96 12.3803 17.04 12.0003 17.04Z" fill="currentColor"/>
              <path d="M12.0003 22.0009C11.6203 22.0009 11.2403 21.9209 10.8903 21.7709L4.15031 18.7709C3.04031 18.2809 2.32031 17.1709 2.32031 15.9509C2.32031 15.5409 2.65031 15.2109 3.06031 15.2109C3.47031 15.2109 3.80031 15.5409 3.80031 15.9509C3.80031 16.5809 4.17031 17.1509 4.75031 17.4109L11.4903 20.4109C11.8103 20.5509 12.1803 20.5509 12.5003 20.4109L19.2403 17.4109C19.8103 17.1609 20.1903 16.5809 20.1903 15.9509C20.1903 15.5409 20.5203 15.2109 20.9303 15.2109C21.3403 15.2109 21.6703 15.5409 21.6703 15.9509C21.6703 17.1709 20.9503 18.2709 19.8403 18.7709L13.1003 21.7709C12.7603 21.9209 12.3803 22.0009 12.0003 22.0009Z" fill="currentColor"/>
              </svg>
              <span>23 Sections</span>
            </div>
            <span className="block mt-0.5 w-1 h-1 shrink-0 bg-gray-400 rounded-full"></span>
            <div className="flex items-center space-x-1 text-gray-500 dark:text-[#fafafa]/60">
              <span>103 Units</span>
            </div>
            <span className="block mt-0.5 w-1 h-1 shrink-0 bg-gray-400 rounded-full"></span>
            <div className="flex items-center gap-2 text-gray-500 dark:text-[#fafafa]/60">
              <svg className="size-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Ai agent</title>
                  <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Media" transform="translate(-960.000000, -96.000000)" fillRule="nonzero">
                          <g id="voice_line" transform="translate(960.000000, 96.000000)">
                              <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fillRule="nonzero"></path>
                              <path d="M12,3 C12.51285,3 12.9355092,3.38604429 12.9932725,3.88337975 L13,4 L13,20 C13,20.5523 12.5523,21 12,21 C11.48715,21 11.0644908,20.613973 11.0067275,20.1166239 L11,20 L11,4 C11,3.44772 11.4477,3 12,3 Z M8,6 C8.55228,6 9,6.44772 9,7 L9,17 C9,17.5523 8.55228,18 8,18 C7.44772,18 7,17.5523 7,17 L7,7 C7,6.44772 7.44772,6 8,6 Z M16,6 C16.5523,6 17,6.44772 17,7 L17,17 C17,17.5523 16.5523,18 16,18 C15.4477,18 15,17.5523 15,17 L15,7 C15,6.44772 15.4477,6 16,6 Z M4,9 C4.55228,9 5,9.44772 5,10 L5,14 C5,14.5523 4.55228,15 4,15 C3.44772,15 3,14.5523 3,14 L3,10 C3,9.44772 3.44772,9 4,9 Z M20,9 C20.51285,9 20.9355092,9.38604429 20.9932725,9.88337975 L21,10 L21,14 C21,14.5523 20.5523,15 20,15 C19.48715,15 19.0644908,14.613973 19.0067275,14.1166239 L19,14 L19,10 C19,9.44772 19.4477,9 20,9 Z" id="形状" fill="currentColor"></path>
                          </g>
                      </g>
                  </g>
              </svg>
              <span>AI assisted</span>
            </div>
          </div>
          <div className="mt-3 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cumque eligendi ipsa illum nesciunt animi, in placeat assumenda dolores inventore dolore nisi exercitationem quibusdam hic consectetur repellat nihil. Ducimus, id.
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
              className="flex items-center w-fit text-base dark:text-[#fafafa]/70 hover:bg-[#C51E3A]/70 dark:hover:bg-[#1e96fc]/20 hover:text-white bg-[#C51E3A] dark:bg-[#1e96fc] text-white"
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
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-[#101828]/90 px-4 py-2 rounded-full shadow text-sm font-semibold flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#7037e4] dark:text-[#8ddeed]" />{" "}
                    Alexa root
                  </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {Sections.map((Section, idx) => (
        <Card
          key={Section.id}
          className={`mb-6 p-6 bg-gradient-to-br rounded-lg ${
            Section.status === "completed"
              ? "from-gray-800 to-gray-900"
              : "from-gray-900 to-gray-800"
          } border-none relative cursor-pointer ${
            Section.locked ? "opacity-60 cursor-not-allowed" : "hover:shadow-lg"
          }`}
          onClick={() => handleSectionClick(Section)}
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-xs text-blue-400 font-bold">
                A{idx < 3 ? 1 : idx < 5 ? 2 : 3} • SEE DETAILS
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                {Section.title}
              </h2>
            </div>
            {Section.status === "completed" && (
              <Badge className="bg-green-600 text-white rounded">COMPLETED!</Badge>
            )}
            {Section.status === "in-progress" && (
              <Badge className="bg-blue-600 text-white">IN PROGRESS</Badge>
            )}
          </div>
          {Section.status !== "locked" && (
            <>
              <div className="flex items-center mb-4">
                <Progress
                  value={Math.round((Section.progress / Section.totalUnit) * 100)}
                  className="h-1.5 flex-1 mr-5 bg-white"
                />
                <span className="text-xs text-white font-bold">
                  {Section.progress} / {Section.totalUnit} Units
                </span>
              </div>
            {Section.status === "completed" && (
              <>
                <div className="flex mb-4 items-center space-x-4">
                  <img
                    src={mascotUrl}
                    alt="Mascot"
                    className="w-16 h-16 rounded-full bg-white"
                  />
                  <span className="bg-gray-800 text-white px-3 py-2 rounded-xl text-sm shadow">
                    Hooray!!, you completed this Section.<br />
                    You've an unclaimed gift
                  </span>
                </div>
                <Button
                  className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white text-base font-bold rounded-xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSectionClick(Section);
                  }}
                >
                  <svg className="!size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12V18C20 20.21 18.21 22 16 22H8C5.79 22 4 20.21 4 18V12C4 11.45 4.45 11 5 11H6.97C7.52 11 7.97 11.45 7.97 12V15.14C7.97 15.88 8.38 16.56 9.03 16.91C9.32 17.07 9.64 17.15 9.97 17.15C10.35 17.15 10.73 17.04 11.06 16.82L12.01 16.2L12.89 16.79C13.5 17.2 14.28 17.25 14.93 16.9C15.59 16.55 16 15.88 16 15.13V12C16 11.45 16.45 11 17 11H19C19.55 11 20 11.45 20 12Z" fill="currentColor"/>
                  <path d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z" fill="currentColor"/>
                  <path d="M11.6388 5.00141H6.11881C5.77881 4.63141 5.78881 4.06141 6.14881 3.70141L7.56881 2.28141C7.93881 1.91141 8.54881 1.91141 8.91881 2.28141L11.6388 5.00141Z" fill="currentColor"/>
                  <path d="M17.8716 5.00141H12.3516L15.0716 2.28141C15.4416 1.91141 16.0516 1.91141 16.4216 2.28141L17.8416 3.70141C18.2016 4.06141 18.2116 4.63141 17.8716 5.00141Z" fill="currentColor"/>
                  <path d="M13.9714 11C14.5214 11 14.9714 11.45 14.9714 12V15.13C14.9714 15.93 14.0814 16.41 13.4214 15.96L12.5214 15.36C12.1914 15.14 11.7614 15.14 11.4214 15.36L10.4814 15.98C9.82141 16.42 8.94141 15.94 8.94141 15.15V12C8.94141 11.45 9.39141 11 9.94141 11H13.9714Z" fill="currentColor"/>
                  </svg>
                  Claim sticker
                </Button>
              </>
              )}
            {Section.status === "in-progress" && (
              <>
                <div className="flex mb-4 items-center space-x-4">
                  <img
                    src={mascotUrl}
                    alt="Mascot"
                    className="w-16 h-16 rounded-full bg-white"
                  />
                  <span className="bg-gray-800 text-white px-3 py-2 rounded-xl text-sm shadow underline decoration-dotted underline-offset-4">
                    {Section.phrase}
                  </span>
                </div>
                <Button
                  className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSectionClick(Section);
                  }}
                >
                  Continue
                </Button>
              </>
              )}
            </>
          )}
          {Section.status === "locked" && (
            <>
              <div className="flex items-center mb-4 opacity-50">
                <span className="text-xs text-gray-400 font-bold">
                  {Section.totalUnit} Units
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
      {Sections.length === 0 && (
        <div className="text-center text-gray-400">
          No Sections available for this language yet.
        </div>
      )}
      </div>
    </div>
  );
}
