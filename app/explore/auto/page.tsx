"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

const sectionData = {
  Stories: Array(20)
    .fill(null)
    .map((_, i) => ({
      title: `Story Title ${i + 1}`,
      author: `Author ${i + 1}`,
      image: "/placeholder.jpg",
      type: "Ebook",
      description: "A captivating story to read.",
    })),
  "Singalong Songs": Array(20)
    .fill(null)
    .map((_, i) => ({
      title: `Song Title ${i + 1}`,
      artist: `Artist ${i + 1}`,
      image: "/placeholder.jpg",
      type: "Song",
      description: "A fun singalong song.",
    })),
  Podcasts: Array(20)
    .fill(null)
    .map((_, i) => ({
      title: `Podcast Title ${i + 1}`,
      host: `Host ${i + 1}`,
      image: "/placeholder.jpg",
      type: "Podcast",
      description: "An interesting podcast episode.",
    })),
  "Tourism Blogs": Array(20)
    .fill(null)
    .map((_, i) => ({
      title: `Tourism Blog ${i + 1}`,
      author: `Blogger ${i + 1}`,
      image: "/placeholder.jpg",
      type: "Blog",
      description: "Explore new places and cultures.",
    })),
  Culture: Array(20)
    .fill(null)
    .map((_, i) => ({
      title: `Culture Piece ${i + 1}`,
      author: `Contributor ${i + 1}`,
      image: "/placeholder.jpg",
      type: "Culture",
      description: "Learn about cultural traditions.",
    })),
  History: Array(20)
    .fill(null)
    .map((_, i) => ({
      title: `History Article ${i + 1}`,
      author: `Historian ${i + 1}`,
      image: "/placeholder.jpg",
      type: "History",
      description: "Dive into historical events.",
    })),
  "Language Tips": Array(20)
    .fill(null)
    .map((_, i) => ({
      title: `Language Tip ${i + 1}`,
      author: `Expert ${i + 1}`,
      image: "/placeholder.jpg",
      type: "Tip",
      description: "Improve your language skills.",
    })),
  Music: Array(20)
    .fill(null)
    .map((_, i) => ({
      title: `Music Track ${i + 1}`,
      artist: `Musician ${i + 1}`,
      image: "/placeholder.jpg",
      type: "Music",
      description: "Enjoy great music.",
    })),
  News: Array(20)
    .fill(null)
    .map((_, i) => ({
      title: `News Headline ${i + 1}`,
      source: `News Source ${i + 1}`,
      image: "/placeholder.jpg",
      type: "News",
      description: "Stay updated with the latest news.",
    })),
  Education: Array(20)
    .fill(null)
    .map((_, i) => ({
      title: `Education Resource ${i + 1}`,
      author: `Educator ${i + 1}`,
      image: "/placeholder.jpg",
      type: "Education",
      description: "Learn something new today.",
    })),
  Games: Array(20)
    .fill(null)
    .map((_, i) => ({
      title: `Game Title ${i + 1}`,
      developer: `Game Studio ${i + 1}`,
      image: "/placeholder.jpg",
      type: "Game",
      description: "A fun and educational game.",
    })),
};

export default function ExploreSectionPage({ params }) {
  const router = useRouter();
  // const searchParams = useSearchParams();
  const section = decodeURIComponent(params.pages);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setLoading(false);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  let items = sectionData[section] || [];
  if (debouncedSearch) {
    items = items.filter(
      (item) =>
        item.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        (item.author &&
          item.author.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
        (item.artist &&
          item.artist.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
        (item.host &&
          item.host.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
        (item.source &&
          item.source.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
        (item.developer &&
          item.developer.toLowerCase().includes(debouncedSearch.toLowerCase()))
    );
  }

  return (
    <div className="max-h-screen bg-[#18181b] text-white pb-16">
      <div className="sticky top-0 z-10 bg-[#18181b] pb-4 pt-4 flex items-center gap-4">
        <Button
          variant="ghost"
          className="rounded-xl"
          onClick={() => router.back()}
        >
          ← Back
        </Button>
        <h1 className="text-2xl font-bold capitalize">{section}</h1>
      </div>
      <div className="p-4">
        <Input
          placeholder={`Search in ${section}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 bg-[#23263a] border-0 text-white placeholder:text-gray-400"
        />
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-48 w-full rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {items.map((item, idx) => (
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
