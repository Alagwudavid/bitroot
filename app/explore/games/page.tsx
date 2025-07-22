"use client";
import { useState } from "react";
import { gamesData } from "./data";
import GameCard from "../cards/GameCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function GamesPage() {
  const [search, setSearch] = useState("");
  const filtered = gamesData.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      (item.developer &&
        item.developer.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen text-black dark:text-white pb-16 p-4">
      <div className="mb-4">
        <Link href="/explore">
          <Button variant="ghost" className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            Back to Explore
          </Button>
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-6">Games</h1>
      <input
        className="mb-4 p-2 rounded border w-full text-black dark:text-white"
        placeholder="Search games..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filtered.map((item, idx) => (
          <Link key={item.slug} href={`/explore/games/${item.slug}`}>
            <GameCard data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
