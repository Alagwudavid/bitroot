"use client";
import { useParams, useRouter } from "next/navigation";
import { listenData } from "../data";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function ListenPreview() {
  const { slug } = useParams();
  const router = useRouter();
  const podcast = listenData.find((p) => p.slug === slug);

  if (!podcast) return <div className="p-8">Podcast not found</div>;

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
        src={podcast.image}
        alt={podcast.title}
        className="mb-6 rounded-xl w-full max-h-96 object-cover"
      />
      <h1 className="text-3xl font-bold mb-2">{podcast.title}</h1>
      <p className="mb-2 text-lg text-gray-600 dark:text-gray-300">
        Host: {podcast.host}
      </p>
      <p className="mb-4 text-base text-gray-700 dark:text-gray-200">
        {podcast.description}
      </p>
    </div>
  );
}
