"use client";
import { useParams, useRouter } from "next/navigation";
import { animationsData } from "../data";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function AnimationPreview() {
  const { slug } = useParams();
  const router = useRouter();
  const animation = animationsData.find((a) => a.slug === slug);

  if (!animation) return <div className="p-8">Animation not found</div>;

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
        src={animation.image}
        alt={animation.title}
        className="mb-6 rounded-xl w-full max-h-96 object-cover"
      />
      <h1 className="text-3xl font-bold mb-2">{animation.title}</h1>
      <p className="mb-2 text-lg text-gray-600 dark:text-gray-300">
        By {animation.creator}
      </p>
      <p className="mb-4 text-base text-gray-700 dark:text-gray-200">
        {animation.description}
      </p>
    </div>
  );
}
