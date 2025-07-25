"use client";
import { courses } from "@/data/courses";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import {
  BookOpen,
  Headphones,
  Star,
  CheckCircle,
  Circle,
  Lock,
  Flag,
} from "lucide-react";
import Image from "next/image";
import { Tooltip } from "@/components/ui/tooltip";

export default function SectionPage({
  params: paramsPromise,
}: {
  params: Promise<{ language: string; "section-title": string }>;
}) {
  const params = React.use(paramsPromise);
  const course = courses[params.language as keyof typeof courses];
  const currentNodeRef = useRef<HTMLDivElement>(null);

  // Flatten all sections and units into a single path
  let path: Array<any> = [];
  course.sections.forEach((section, sectionIdx) => {
    // Mock: section completion percent (0-3 stars)
    const sectionCompletion = sectionIdx === 0 ? 3 : sectionIdx === 1 ? 2 : 0;
    path.push({
      type: "section",
      label: section.title,
      sectionIdx,
      completion: sectionCompletion, // 0-3
      isSection: true,
    });
    section.units.forEach((unit, unitIdx) => {
      // Mock: current node is first unit of second section
      const current = sectionIdx === 1 && unitIdx === 0;
      path.push({
        type: "unit",
        label: unit.title,
        unitIdx: unitIdx + 1,
        sectionIdx,
        done: sectionIdx < 1 || (sectionIdx === 1 && unitIdx < 0),
        locked: sectionIdx > 1 || (sectionIdx === 1 && unitIdx > 0),
        current,
        href: `/learn/${params.language}/${section.title}/${unit.title}`,
      });
    });
  });
  // Add end node
  path.push({ type: "end", label: "Finish", isEnd: true });

  // Auto-scroll to current node on mount
  useEffect(() => {
    if (currentNodeRef.current) {
      setTimeout(() => {
        currentNodeRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }, 500); // Small delay to ensure rendering is complete
    }
  }, []);

  // Animation for mascot
  const activeAnim = "animate-bounce";
  const sectionAnim = "animate-fade-in-up";

  // Helper for section stars
  function sectionStars(completion: number) {
    return (
      <div className="flex gap-1 mt-1">
        {[0, 1, 2].map((i) =>
          i < completion ? (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ) : (
            <Star key={i} className="w-5 h-5 text-gray-300" />
          )
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${sectionAnim}`}>
      <div className="mb-2 mt-4 flex items-center justify-between gap-5 w-full">
        <Link href={`/learn/${params.language}/`}>
          <Button className="flex items-center gap-2 px-2 pr-3 py-1 capitalize">
            <ChevronLeft className="w-4 h-4" />
            {params["language"]}
          </Button>
        </Link>
        {/* <span className="text-lg text-gray-600 capitalize font-bold w-full">{params["section-title"]}</span> */}
      </div>
      <div className="relative flex flex-col items-center gap-4 min-h-[600px] w-full max-w-md mx-auto">
        {path.map((node, idx) => {
          // const offset = offsets[idx % offsets.length];
          if (node.type === "section") {
            return (
              <div
                key={idx}
                className="w-full flex flex-col items-center justify-center relative z-10"
                style={{ marginBottom: 32 }}
              >
                <div className="relative flex items-center justify-center w-full h-10 mb-4">
                  <span className="h-0.5 w-full rounded-lg absolute top-4 z-0 bg-gradient-to-br from-yellow-200 to-yellow-300 shrink-0"></span>
                  <div
                    id={node.label}
                    className={`absolute top-0 z-10 whitespace-nowrap text-sm font-bold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full border border-yellow-300 shadow-sm mb-4`}
                    style={{
                      maxWidth: "200px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {node.label}
                  </div>
                </div>
                <div
                  className="flex flex-col items-center justify-center group cursor-pointer-custom transition-transform duration-200 hover:scale-105 relative"
                  // style={{ transform: `translateX(${offset}px)` }}
                >
                  <div className="rounded-full w-24 h-24 flex items-center justify-center bg-gradient-to-br from-yellow-200 to-yellow-300 border-4 border-yellow-400 shadow-[0_8px_16px_rgba(251,191,36,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(251,191,36,0.2)] relative transition-all duration-300 hover:shadow-[0_12px_24px_rgba(251,191,36,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(251,191,36,0.3)] active:shadow-[0_4px_8px_rgba(251,191,36,0.2),inset_0_4px_8px_rgba(251,191,36,0.3)]">
                    {/* Placeholder icons for sections */}
                    {node.label.toLowerCase().includes("beginner") && (
                      <BookOpen className="w-12 h-12 text-yellow-700" />
                    )}
                    {node.label.toLowerCase().includes("order") && (
                      <Headphones className="w-12 h-12 text-yellow-700" />
                    )}
                    {node.label.toLowerCase().includes("debutant") && (
                      <Star className="w-12 h-12 text-yellow-700" />
                    )}
                    {!node.label.toLowerCase().includes("beginner") &&
                      !node.label.toLowerCase().includes("order") &&
                      !node.label.toLowerCase().includes("debutant") && (
                        <span className="text-lg line-clamp-1 font-bold text-yellow-700 capitalize">
                          {node.label}
                        </span>
                      )}
                  </div>
                  {sectionStars(node.completion)}
                </div>
              </div>
            );
          }
          // End node
          if (node.type === "end") {
            return (
              <div
                key={idx}
                className="w-full flex justify-center relative z-10"
                style={{ marginBottom: 32 }}
              >
                <div
                  className="flex flex-col items-center group cursor-pointer-custom transition-transform duration-200 hover:scale-105"
                  // style={{ transform: `translateX(${offset}px)` }}
                >
                  <div className="rounded-full w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-200 to-green-300 border-4 border-green-400 shadow-[0_8px_16px_rgba(34,197,94,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(34,197,94,0.2)] relative transition-all duration-300 hover:shadow-[0_12px_24px_rgba(34,197,94,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(34,197,94,0.3)] active:shadow-[0_4px_8px_rgba(34,197,94,0.2),inset_0_4px_8px_rgba(34,197,94,0.3)]">
                    <Flag className="w-10 h-10 text-green-600" />
                  </div>
                  <span className="mt-2 font-semibold text-lg text-green-700">
                    Finish
                  </span>
                </div>
              </div>
            );
          }
          // Unit node
          if (node.type === "unit") {
            return (
              <div
                key={idx}
                className="w-full flex justify-center relative z-10"
                style={{ marginBottom: 32 }}
              >
                <div
                  ref={node.current ? currentNodeRef : null}
                  className={`flex flex-col items-center relative group cursor-pointer-custom transition-transform duration-200 hover:scale-105`}
                  // style={{ transform: `translateX(${offset}px)` }}
                >
                  <Link
                    href={node.locked ? "#" : node.href}
                    className="flex flex-col items-center group"
                  >
                    <div
                      className={`rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-br ${
                        node.current
                          ? `${activeAnim} duration-700 from-yellow-200 to-yellow-300 border-yellow-400 shadow-[0_8px_16px_rgba(251,191,36,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(251,191,36,0.2)]`
                          : node.done
                          ? "from-blue-200 to-blue-300 border-blue-400 shadow-[0_8px_16px_rgba(59,130,246,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(59,130,246,0.2)]"
                          : node.locked
                          ? "from-gray-200 to-gray-300 border-gray-300 shadow-[0_8px_16px_rgba(156,163,175,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(156,163,175,0.2)]"
                          : "from-white to-gray-100 border-gray-200 shadow-[0_8px_16px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(0,0,0,0.1)]"
                      } border-4 relative transition-all duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.15)] active:shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_4px_8px_rgba(0,0,0,0.2)]`}
                    >
                      {node.locked ? (
                        <Lock className="text-gray-400 w-10 h-10" />
                      ) : (
                        <BookOpen className="text-blue-400 w-10 h-10" />
                      )}
                      {/* {node.current && (
                          <Image
                            src="/images/mascot.png"
                            alt="Mascot"
                            width={80}
                            height={80}
                            className={`absolute shrink-0 -top-10 left-1/2 -translate-x-1/2 ${mascotAnim}`}
                          />
                        )} */}
                    </div>
                    <span
                      className={`flex flex-row gap-2 items-center mt-2 font-semibold text-base ${
                        node.done
                          ? "text-blue-500"
                          : node.locked
                          ? "text-gray-400"
                          : "text-gray-700"
                      }`}
                    >
                      {`${node.label}`}
                      {node.locked && (
                        <Lock className="w-4 h-4 text-gray-400" />
                      )}
                    </span>
                  </Link>
                </div>
              </div>
            );
          }
          // fallback
          return null;
        })}
      </div>
    </div>
  );
}
