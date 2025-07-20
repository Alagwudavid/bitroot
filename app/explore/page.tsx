"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Heart,
  MoreHorizontal,
  Search,
  ArrowRight,
  ChevronRight,
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
import BlogCard from "./cards/BlogCard";
import PodcastCard from "./cards/PodcastCard";
import MusicCard from "./cards/MusicCard";

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [sectionCounts, setSectionCounts] = useState({
    Stories: 5,
    Animations: 3,
    "Podcasts & Songs": 5,
    "Tourism, News and Lifestyle": 3,
    "Flash cards": 4,
    Music: 5,
    News: 5,
    Education: 5,
    Games: 5,
  });
  const categories = [
    "All",
    "Stories",
    "Animations",
    "Podcasts & Songs",
    "Tourism, News and Lifestyle",
    // "Tourism",
    // "News",
    // "Lifestyle",
    "Flash cards",
    "Music",
    "News",
    "Education",
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
        description: "A captivating story to read.",
      })),
    Animations: Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Animation Title ${i + 1}`,
        creator: `Creator ${i + 1}`,
        image: `/free/video-${i + 1}.jpg`,
        type: "Animation",
        description: "A fun cartoon for kids.",
      })),
    "Podcasts & Songs": Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Podcast Title ${i + 1}`,
        host: `Host ${i + 1}`,
        image: `/free/podcast-${i + 1}.jpg`,
        type: "Podcast",
        description: "An interesting podcast episode.",
      })),
    "Tourism, News and Lifestyle": Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Tourism Blog ${i + 1}`,
        author: `Blogger ${i + 1}`,
        image: `/free/blog-${i + 1}.jpg`,
        type: "Blog",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam adipisci placeat ad deserunt voluptas nobis temporibus minima ratione beatae molestias tempore laboriosam, expedita rerum a optio cupiditate officia possimus.",
      })),
    "Flash cards": Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Language Tip ${i + 1}`,
        author: `Expert ${i + 1}`,
        image: "/placeholder.jpg",
        type: "Tip",
        description: "Improve your language skills.",
      })),
    Music: Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Music Track ${i + 1}`,
        artist: `Musician ${i + 1}`,
        image: "/placeholder.jpg",
        type: "Music",
        description: "Enjoy great music.",
      })),
    News: Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `News Headline ${i + 1}`,
        source: `News Source ${i + 1}`,
        image: "/placeholder.jpg",
        type: "News",
        description: "Stay updated with the latest news.",
      })),
    Education: Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Education Resource ${i + 1}`,
        author: `Educator ${i + 1}`,
        image: "/placeholder.jpg",
        type: "Education",
        description: "Learn something new today.",
      })),
    Games: Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Game Title ${i + 1}`,
        developer: `Game Studio ${i + 1}`,
        image: "/placeholder.jpg",
        type: "Game",
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
    return items.slice(0, sectionCounts[section as keyof typeof sectionCounts]);
  };

  // Style map for section card styles
  const sectionCardStyles: Record<string, string> = {
    Stories: "bg-[#f5e6e8] border-[#e75480] text-[#e75480]",
    Animations: "bg-[#e6f7ff] border-[#1e96fc] text-[#1e96fc]",
    "Podcasts & Songs": "bg-[#fffbe6] border-[#f7b801] text-[#f7b801]",
    "Tourism, News and Lifestyle": "bg-[#e6ffe6] border-[#34c759] text-[#34c759]",
    "Flash cards": "bg-[#e6f0ff] border-[#007bff] text-[#007bff]",
    Music: "bg-[#fff0f6] border-[#ff2d55] text-[#ff2d55]",
    News: "bg-[#e6faff] border-[#17a2b8] text-[#17a2b8]",
    Education: "bg-[#f9fbe7] border-[#cddc39] text-[#cddc39]",
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
            className="pl-12 pr-12 py-4 mb-4 rounded-xl bg-[#f5f6fa] dark:bg-[#101828] border border-gray-300 dark:border-gray-700 text-lg shadow-sm focus:ring-2 focus:ring-[#7037e4]"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7037e4] w-6 h-6" />
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="flex flex-wrap h-fit items-center bg-transparent text-muted-foreground">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="rounded-xl px-4 py-2 ml-2 text-base whitespace-nowrap data-[state=active]:bg-[#1e96fc] data-[state=active]:text-white"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <div className="p-4 space-y-10">
        {categories
          .filter((cat: string) => cat !== "All")
          .map(
            (section: string) =>
              (activeTab === "All" || activeTab === section) && (
                <section key={section}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      
                      <h2 className="text-2xl font-bold text-black dark:text-white">
                        {section}
                      </h2>
                    </div>
                    <Link href={`/explore/${encodeURIComponent(section).toLowerCase()}`} className="flex items-center gap-1 hover:text-gray-400">
                        View More
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
                    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-${sectionCounts[section]} gap-4`}>
                      {section === "Stories" &&
                        getFilteredSection(section).map((item, idx) => (
                          <StoryCard key={idx} data={item} />
                        ))}
                        {section === "Animations" &&
                        getFilteredSection(section).map((item, idx) => (
                          <AnimationCard key={idx} data={item} />
                        ))}
                      {section === "Tourism, News and Lifestyle" &&
                        getFilteredSection(section).map((item, idx) => (
                          <BlogCard key={idx} data={item} />
                        ))}
                      {section === "Podcasts & Songs" &&
                        getFilteredSection(section).map((item, idx) => (
                          <PodcastCard key={idx} data={item} />
                        ))}
                      {section === "Music" &&
                        getFilteredSection(section).map((item, idx) => (
                          <MusicCard key={idx} data={item} />
                        ))}
                      {/* Default card for other sections */}
                      {[
                        "Stories",
                        "Animations",
                        "Tourism, News and Lifestyle",
                        "Podcasts & Songs",
                        "Music",
                      ].indexOf(section) === -1 &&
                        getFilteredSection(section).map(
                          (item: any, idx: number) => (
                            <Card
                              key={idx}
                              className={`shadow-none border transition-colors cursor-pointer group ${
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
