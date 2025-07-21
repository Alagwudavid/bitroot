"use client";
import { useParams, useRouter } from "next/navigation";
import { flashCardsData } from "../data";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function FlashCardPreview() {
  const { slug } = useParams();
  const router = useRouter();
  const card = flashCardsData.find((c) => c.slug === slug);

  if (!card) return <div className="p-8">Flash card not found</div>;

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
        src={card.image}
        alt={card.title}
        className="mb-6 rounded-xl w-full max-h-96 object-cover"
      />
      <h1 className="text-3xl font-bold mb-2">{card.title}</h1>
      <p className="mb-4 text-base text-gray-700 dark:text-gray-200">
        {card.description}
      </p>
    </div>
  );
}
