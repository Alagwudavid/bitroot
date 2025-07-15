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
import { useState } from "react";
import { useIsMobile } from "@/components/ui/use-mobile";
import { cn } from "@/lib/utils";

export default function PodcastPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const isMobile = useIsMobile();
  const categories = [
    "Podcasts",
    "Stories",
    "Culture",
    "History",
    "Language Tips",
    "Music",
    "News",
    "Education",
  ];

  const featuredPodcasts = [
    {
      title: "Swahili Stories",
      artist: "Mama Amina",
      image: "/placeholder.svg?height=200&width=200",
      duration: "25:30",
      category: "Stories",
    },
    {
      title: "Yoruba Wisdom",
      artist: "Baba Tunde",
      image: "/placeholder.svg?height=200&width=200",
      duration: "18:45",
      category: "Culture",
    },
    {
      title: "Amharic Conversations",
      artist: "Desta & Friends",
      image: "/placeholder.svg?height=200&width=200",
      duration: "32:15",
      category: "Language Tips",
    },
    {
      title: "Hausa Folk Tales",
      artist: "Mallam Ibrahim",
      image: "/placeholder.svg?height=200&width=200",
      duration: "22:10",
      category: "Stories",
    },
    {
      title: "Igbo Music & Culture",
      artist: "Nkem Okoro",
      image: "/placeholder.svg?height=200&width=200",
      duration: "28:55",
      category: "Music",
    },
    {
      title: "Zulu Heritage",
      artist: "Nomsa Mthembu",
      image: "/placeholder.svg?height=200&width=200",
      duration: "35:20",
      category: "History",
    },
  ];

  const recentlyPlayed = [
    {
      title: "Daily Swahili",
      artist: "Language Academy",
      image: "/placeholder.svg?height=150&width=150",
      duration: "15:30",
    },
    {
      title: "Yoruba Proverbs",
      artist: "Cultural Center",
      image: "/placeholder.svg?height=150&width=150",
      duration: "20:45",
    },
    {
      title: "Amharic News",
      artist: "Ethiopian Radio",
      image: "/placeholder.svg?height=150&width=150",
      duration: "12:15",
    },
  ];

  const popularSeries = [
    {
      title: "African Languages Uncovered",
      episodes: 24,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      title: "Cultural Conversations",
      episodes: 18,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      title: "Language Learning Tips",
      episodes: 32,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      title: "African Music Stories",
      episodes: 15,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      title: "Traditional Tales",
      episodes: 28,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      title: "Modern Africa",
      episodes: 12,
      image: "/placeholder.svg?height=120&width=120",
    },
  ];

  return (
    <div className="min-h-screen text-white pb-16">
      {/* Header */}
      <div className="pb-6">
        {/* Categories */}
        <div className="flex space-x-3 overflow-x-auto">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="whitespace-nowrap rounded-xl px-4 py-2 bg-gray-700 dark:bg-[#7037e4]/20 hover:bg-[#1e96fc] dark:hover:bg-[#7037e4] text-white text-base border-0 cursor-pointer transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
      <div className="p-2 space-y-8">
        {/* Listen Again Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Listen again</h2>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white rounded-xl"
            >
              More
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredPodcasts.map((podcast, index) => (
              <Card
                key={index}
                className="bg-gray-800 dark:bg-[#0d1117] border-gray-700 dark:border-[#7037e4]/30 rounded-2xl hover:bg-gray-700 dark:hover:bg-[#7037e4]/10 transition-colors cursor-pointer group"
              >
                <CardContent className="p-4">
                  <div className="relative mb-3">
                    <img
                      src={podcast.image || "/placeholder.svg"}
                      alt={podcast.title}
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                    <Button
                      size="icon"
                      className="absolute bottom-2 right-2 bg-[#1e96fc] dark:bg-[#7037e4] hover:bg-[#072ac8] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => {
                        setCurrentTrack(podcast);
                        setIsPlaying(!isPlaying);
                      }}
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                  <h3 className="font-semibold text-sm mb-1 truncate dark:text-[#fafafa]">
                    {podcast.title}
                  </h3>
                  <p className="text-gray-400 dark:text-[#fafafa]/60 text-xs mb-1 truncate">
                    {podcast.artist}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#fcf300] text-[#072ac8] dark:bg-[#8ddeed] dark:text-[#030318] text-xs rounded-full">
                      {podcast.category}
                    </Badge>
                    <span className="text-xs text-gray-500 dark:text-[#fafafa]/50">
                      {podcast.duration}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Popular Series Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular Series</h2>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white rounded-xl"
            >
              More
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularSeries.map((series, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 rounded-2xl hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <CardContent className="p-4">
                  <img
                    src={series.image || "/placeholder.svg"}
                    alt={series.title}
                    className="w-full aspect-square object-cover rounded-xl mb-3"
                  />
                  <h3 className="font-semibold text-sm mb-1 truncate">
                    {series.title}
                  </h3>
                  <p className="text-gray-400 text-xs">
                    {series.episodes} episodes
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      {/* Bottom Player */}
      {currentTrack && (
        <div className={cn(
            "fixed left-0 right-0 bg-gray-900 dark:bg-[#0d1117] border-t border-gray-700 dark:border-[#7037e4]/30 p-4",
            isMobile ? "bottom-20" : "bottom-0",
            )}>
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-4">
              <img
                src={currentTrack.image || "/placeholder.svg"}
                alt={currentTrack.title}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h4 className="font-medium text-sm dark:text-[#fafafa]">
                  {currentTrack.title}
                </h4>
                <p className="text-gray-400 dark:text-[#fafafa]/60 text-xs">
                  {currentTrack.artist}
                </p>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-400 dark:text-[#fafafa]/60 hover:text-white dark:hover:text-[#8ddeed]"
              >
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-400 dark:text-[#fafafa]/60 hover:text-white dark:hover:text-[#8ddeed]"
              >
                <SkipBack className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="bg-[#fcf300] text-[#072ac8] dark:bg-[#8ddeed] dark:text-[#030318] rounded-full"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-400 dark:text-[#fafafa]/60 hover:text-white dark:hover:text-[#8ddeed]"
              >
                <SkipForward className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-400 dark:text-[#fafafa]/60 hover:text-white dark:hover:text-[#8ddeed]"
              >
                <Volume2 className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-400 dark:text-[#fafafa]/60 hover:text-white dark:hover:text-[#8ddeed]"
              >
                <MoreHorizontal className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
