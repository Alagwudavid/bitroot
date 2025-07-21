"use client";
import { useParams, useRouter } from "next/navigation";
import { gamesData } from "../data";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function GamePreview() {
  const { slug } = useParams();
  const router = useRouter();
  const game = gamesData.find((g) => g.slug === slug);

  if (!game) return <div className="p-8">Game not found</div>;

  return (
    <div className="max-h-screen text-black dark:text-white pb-16 p-4 max-w-2xl mx-auto">
      <Button
        variant="ghost"
        className="flex items-center gap-2 mb-6"
        onClick={() => router.back()}
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </Button>
      <img
        src={game.image}
        alt={game.title}
        className="mb-6 rounded-xl w-full max-h-96 object-cover"
      />
      <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
      <p className="mb-2 text-lg text-gray-600 dark:text-gray-300">
        By {game.developer}
      </p>
      <p className="mb-4 text-base text-gray-700 dark:text-gray-200">
        {game.description}
      </p>
    </div>
  );
}
