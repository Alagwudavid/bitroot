import { Card, CardContent } from "@/components/ui/card";

export default function PodcastCard({ data }: { data: any }) {
  return (
    <Card className="bg-transparent border-none rounded-none shadow-none cursor-pointer group">
      <CardContent className="p-0">
        <div className="relative rounded border transition-colors text-[#f7b801] overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            className="w-full aspect-square object-cover"
          />
        </div>
        <div className="relative mt-2">
          <h3 className="font-bold line-clamp-1 text-base truncate text-black dark:text-[#e75480]">
            {data.title}
          </h3>
          <p className="text-black dark:text-white text-base truncate hover:underline underline-offset-2">{data.developer}</p>
        </div>
      </CardContent>
    </Card>
  );
}
