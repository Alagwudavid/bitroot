"use client";
import { useState } from "react";
import { animationsData } from "./data";
import AnimationCard from "../cards/AnimationCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function AnimationsPage() {
  const [search, setSearch] = useState("");
  const filtered = animationsData.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      (item.creator &&
        item.creator.toLowerCase().includes(search.toLowerCase()))
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
      <h1 className="text-2xl font-bold mb-6">Animations</h1>
      <input
        className="mb-4 p-2 rounded border w-full text-black"
        placeholder="Search animations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filtered.map((item, idx) => (
          <Link key={item.slug} href={`/explore/animations/${item.slug}`}>
            <AnimationCard data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
