"use client";
import { useState } from "react";
import { lifestyleData } from "./data";
import LifestyleCard from "../cards/LifestyleCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function LifestylePage() {
  const [search, setSearch] = useState("");
  const filtered = lifestyleData.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      (item.author && item.author.toLowerCase().includes(search.toLowerCase()))
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
      <h1 className="text-2xl font-bold mb-6">Lifestyle</h1>
      <input
        className="mb-4 p-2 rounded border w-full text-black dark:text-white"
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filtered.map((item, idx) => (
          <Link key={item.slug} href={`/explore/lifestyle/${item.slug}`}>
            <LifestyleCard data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
