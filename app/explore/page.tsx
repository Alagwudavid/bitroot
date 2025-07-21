"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Search,
  ChevronRight,
  AudioLines,
  Headphones,
  Library,
  Baby,
  Rss,
  Copy,
  Swords,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/components/ui/use-mobile";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import StoryCard from "./cards/StoryCard";
import AnimationCard from "./cards/AnimationCard";
import LifestyleCard from "./cards/LifestyleCard";
import ListenCard from "./cards/ListenCard";
import FlashCard from "./cards/FlashCard";
import GameCard from "./cards/GameCard";

// Section icon mapping
const sectionIcons: Record<string, React.ElementType> = {
  Stories: Library,
  Animations: Baby,
  Listen: Headphones,
  Lifestyle: Rss,
  "Flash cards": Copy,
  Games: Swords,
};

function toSectionSlug(section: string) {
  return encodeURIComponent(
    section
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-_]/g, "") // remove special chars except - and _
      .toLowerCase()
  );
}

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [sectionCounts, setSectionCounts] = useState({
    Stories: [2, 3, 5],
    Animations: [1, 3, 3],
    Listen: [2, 3, 5],
    Lifestyle: [1, 3, 3],
    "Flash cards": [1, 3, 4],
    Games: [2, 3, 5],
  });
  const categories = [
    "All",
    "Stories",
    "Animations",
    "Listen",
    "Lifestyle",
    // "Tourism",
    // "News",
    // "Lifestyle",
    "Flash cards",
    "Games",
  ];
  // Example data for each section (use placeholder images)
  const sectionData = {
    Stories: Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Story Title ${i + 1}`,
        author: `Author ${i + 1}`,
        image: `/free/story-${i + 1}.jpg`,
        type: "Ebook",
        icon: "Library",
        description: "A captivating story to read.",
      })),
    Animations: Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Animation Title ${i + 1}`,
        creator: `Creator ${i + 1}`,
        image: `/free/video-${i + 1}.jpg`,
        type: "Animation",
        icon: "Baby",
        description: "A fun cartoon for kids.",
      })),
    Listen: Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Podcast Title ${i + 1}`,
        host: `Host ${i + 1}`,
        image: `/free/podcast-${i + 1}.jpg`,
        type: "Podcast",
        icon: "Headphones",
        description: "An interesting podcast episode.",
      })),
    Lifestyle: Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Tourism Blog ${i + 1}`,
        author: `Blogger ${i + 1}`,
        image: `/free/blog-${i + 1}.jpg`,
        type: "Blog",
        icon: "Rss",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam adipisci placeat ad deserunt voluptas nobis temporibus minima ratione beatae molestias tempore laboriosam, expedita rerum a optio cupiditate officia possimus.",
      })),
    "Flash cards": Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Object name ${i + 1}`,
        artist: `User ${i + 1}`,
        image: `/free/flash-${i + 1}.jpg`,
        type: "Flash card",
        icon: "Copy",
        description: "Object translation.",
      })),
    Games: Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Game Title ${i + 1}`,
        developer: `Game Studio ${i + 1}`,
        image: `/free/game-${i + 1}.jpg`,
        type: "Game",
        icon: "Swords",
        description: "A fun and educational game.",
      })),
  };

  // Debounce search
  useEffect(() => {
    setLoading(true);
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setLoading(false);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  // Filtered data by tab and search
  const getFilteredSection = (section: string): any[] => {
    let items = sectionData[section as keyof typeof sectionData] as any[];
    if (debouncedSearch) {
      items = items.filter(
        (item: any) =>
          item.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          (item.author &&
            item.author
              .toLowerCase()
              .includes(debouncedSearch.toLowerCase())) ||
          (item.artist &&
            item.artist
              .toLowerCase()
              .includes(debouncedSearch.toLowerCase())) ||
          (item.host &&
            item.host.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
          (item.source &&
            item.source
              .toLowerCase()
              .includes(debouncedSearch.toLowerCase())) ||
          (item.developer &&
            item.developer
              .toLowerCase()
              .includes(debouncedSearch.toLowerCase()))
      );
    }
    const count = sectionCounts[section as keyof typeof sectionCounts];
    const itemCount = Array.isArray(count) ? count[2] : count || 6;
    return items.slice(0, itemCount);
  };

  // Style map for section card styles
  const sectionCardStyles: Record<string, string> = {
    Stories: "bg-[#f5e6e8] border-[#e75480] text-[#e75480]",
    Animations: "bg-[#e6f7ff] border-[#1e96fc] text-[#1e96fc]",
    Listen: "bg-[#fffbe6] border-[#f7b801] text-[#f7b801]",
    Lifestyle: "bg-[#e6ffe6] border-[#34c759] text-[#34c759]",
    "Flash cards": "bg-[#fff0f6] border-[#ff2d55] text-[#ff2d55]",
    Games: "bg-[#f3ffe6] border-[#00b894] text-[#00b894]",
  };

  return (
    <div className="text-white pb-16">
      {/* Search and Tabs */}
      <div className="relative pb-4 pt-4">
        <div className="relative w-full">
          <Input
            placeholder="Search stories, podcasts, songs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-12 pr-12 py-4 mb-4 rounded-xl bg-[#f5f6fa] dark:bg-[#101828] text-[#101828] dark:text-[#f5f6fa] border border-gray-300 dark:border-gray-700 text-lg shadow-sm focus:ring-2 focus:ring-[#7037e4]"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7037e4] w-6 h-6" />
        </div>
        <div className="relative">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
                  activeTab === cat
                    ? "bg-blue-100 border-blue-300 text-blue-700 shadow-sm"
                    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-10">
        {categories
          .filter((cat: string) => cat !== "All")
          .map(
            (section: string) =>
              (activeTab === "All" || activeTab === section) && (
                <section key={section}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {sectionIcons[section] && (
                        <span className="text-xl text-[#1e96fc] dark:text-[#8ddeed]">
                          {React.createElement(sectionIcons[section], {
                            className: "size-7",
                          })}
                        </span>
                      )}
                      <h2 className="text-2xl font-bold text-black dark:text-white">
                        {section}
                      </h2>
                    </div>
                    <Link
                      href={`/explore/${toSectionSlug(section)}`}
                      className="flex items-center gap-1 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-400"
                    >
                      More
                      <ChevronRight />
                    </Link>
                  </div>
                  {loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                      {[...Array(6)].map((_, i) => (
                        <Skeleton key={i} className="h-48 w-full rounded-2xl" />
                      ))}
                    </div>
                  ) : (
                    <div
                      className={`grid grid-cols-${
                        sectionCounts[
                          section as keyof typeof sectionCounts
                        ]?.[0] || 1
                      } md:grid-cols-${
                        sectionCounts[
                          section as keyof typeof sectionCounts
                        ]?.[1] || 3
                      } lg:grid-cols-${
                        sectionCounts[
                          section as keyof typeof sectionCounts
                        ]?.[2] || 6
                      } gap-4`}
                    >
                      {section === "Stories" &&
                        getFilteredSection(section).map((item, idx) => (
                          <StoryCard key={idx} data={item} />
                        ))}
                      {section === "Animations" &&
                        getFilteredSection(section).map((item, idx) => (
                          <AnimationCard key={idx} data={item} />
                        ))}
                      {section === "Lifestyle" &&
                        getFilteredSection(section).map((item, idx) => (
                          <LifestyleCard key={idx} data={item} />
                        ))}
                      {section === "Listen" &&
                        getFilteredSection(section).map((item, idx) => (
                          <ListenCard key={idx} data={item} />
                        ))}
                      {section === "Flash cards" &&
                        getFilteredSection(section).map((item, idx) => (
                          <FlashCard key={idx} data={item} />
                        ))}
                      {section === "Games" &&
                        getFilteredSection(section).map((item, idx) => (
                          <GameCard key={idx} data={item} />
                        ))}
                      {/* Default card for other sections */}
                      {[
                        "Stories",
                        "Animations",
                        "Lifestyle",
                        "Listen",
                        "Flash cards",
                        "Games",
                      ].indexOf(section) === -1 &&
                        getFilteredSection(section).map(
                          (item: any, idx: number) => (
                            <Card
                              key={idx}
                              className={`shadow-none border transition-colors cursor-pointer-custom group ${
                                sectionCardStyles[section] ||
                                "bg-transparent border-gray-300 dark:border-gray-700"
                              }`}
                            >
                              <CardContent className="p-0">
                                <div className="relative">
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full aspect-[4/5] object-cover rounded-t-xl"
                                  />
                                  <Badge className="absolute bottom-2 right-2 bg-[#fcf300] text-[#072ac8] text-xs rounded-full">
                                    {item.type}
                                  </Badge>
                                </div>
                                <div className="relative p-4">
                                  <h3 className="font-semibold text-sm mb-1 truncate text-black dark:text-white">
                                    {item.title}
                                  </h3>
                                  <p className="text-gray-400 text-xs mb-1 truncate">
                                    {item.author ||
                                      item.artist ||
                                      item.host ||
                                      item.source ||
                                      item.developer}
                                  </p>
                                </div>
                              </CardContent>
                            </Card>
                          )
                        )}
                    </div>
                  )}
                </section>
              )
          )}
      </div>
    </div>
  );
}
