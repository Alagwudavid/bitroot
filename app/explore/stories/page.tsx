"use client";

import { useRouter } from "next/navigation";

export default function StoriesPage() {
  const router = useRouter();


  return (
    <div className="min-h-screen text-white pb-16">
      Stories
    </div>
  );
}
