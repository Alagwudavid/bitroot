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
} from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/components/ui/use-mobile";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [sectionCounts, setSectionCounts] = useState({
    Stories: 3,
    "Singalong Songs": 3,
    Podcasts: 3,
    "Tourism Blogs": 3,
    Culture: 3,
    History: 3,
    "Language Tips": 3,
    Music: 3,
    News: 3,
    Education: 3,
    Games: 3,
  });

  const categories = [
    "All",
    "Stories",
    "Singalong Songs",
    "Podcasts",
    "Tourism Blogs",
    "Culture",
    "History",
    "Language Tips",
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
        image: "/placeholder.jpg",
        type: "Ebook",
        description: "A captivating story to read.",
      })),
    "Singalong Songs": Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Song Title ${i + 1}`,
        artist: `Artist ${i + 1}`,
        image: "/placeholder.jpg",
        type: "Song",
        description: "A fun singalong song.",
      })),
    Podcasts: Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Podcast Title ${i + 1}`,
        host: `Host ${i + 1}`,
        image: "/placeholder.jpg",
        type: "Podcast",
        description: "An interesting podcast episode.",
      })),
    "Tourism Blogs": Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Tourism Blog ${i + 1}`,
        author: `Blogger ${i + 1}`,
        image: "/placeholder.jpg",
        type: "Blog",
        description: "Explore new places and cultures.",
      })),
    Culture: Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `Culture Piece ${i + 1}`,
        author: `Contributor ${i + 1}`,
        image: "/placeholder.jpg",
        type: "Culture",
        description: "Learn about cultural traditions.",
      })),
    History: Array(6)
      .fill(null)
      .map((_, i) => ({
        title: `History Article ${i + 1}`,
        author: `Historian ${i + 1}`,
        image: "/placeholder.jpg",
        type: "History",
        description: "Dive into historical events.",
      })),
    "Language Tips": Array(6)
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

  return (
    <div className="min-h-screen bg-[#18181b] text-white pb-16">
      {/* Search and Tabs */}
      <div className="sticky top-0 z-10 bg-[#18181b] pb-4 pt-4">
        <Input
          placeholder="Search stories, podcasts, music..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 bg-[#23263a] border-0 text-white placeholder:text-gray-400"
        />
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="overflow-x-auto flex gap-2 bg-[#23263a] rounded-xl p-2">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="rounded-xl px-4 py-2 text-base whitespace-nowrap data-[state=active]:bg-[#1e96fc] data-[state=active]:text-white"
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
                    <h2 className="text-2xl font-bold">{section}</h2>
                    <Link href={`/explore/${encodeURIComponent(section)}`}>
                      <Button
                        variant="ghost"
                        className="text-gray-400 hover:text-white rounded-xl"
                      >
                        View More
                      </Button>
                    </Link>
                  </div>
                  {loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                      {[...Array(3)].map((_, i) => (
                        <Skeleton key={i} className="h-48 w-full rounded-2xl" />
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                      {getFilteredSection(section).map(
                        (item: any, idx: number) => (
                          <Card
                            key={idx}
                            className="bg-[#23263a] border-0 rounded-2xl hover:bg-[#1e96fc]/10 transition-colors cursor-pointer group"
                          >
                            <CardContent className="p-4">
                              <div className="relative mb-3">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full aspect-square object-cover rounded-xl"
                                />
                              </div>
                              <h3 className="font-semibold text-sm mb-1 truncate text-white">
                                {item.title}
                              </h3>
                              <p className="text-gray-400 text-xs mb-1 truncate">
                                {item.author ||
                                  item.artist ||
                                  item.host ||
                                  item.source ||
                                  item.developer}
                              </p>
                              <div className="flex items-center justify-between">
                                <Badge className="bg-[#fcf300] text-[#072ac8] text-xs rounded-full">
                                  {item.type}
                                </Badge>
                                <span className="text-xs text-gray-500">
                                  {item.description}
                                </span>
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
