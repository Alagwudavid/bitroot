import { Card, CardContent } from "@/components/ui/card";

export default function MusicCard({ data }: { data: any }) {
  return (
    <Card className="bg-[#fff0f6] border-[#ff2d55] text-[#ff2d55] shadow-none border transition-colors cursor-pointer group">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={data.image}
            alt={data.title}
            className="w-full aspect-[4/5] object-cover rounded-t-xl"
          />
        </div>
        <div className="relative p-4">
          <h3 className="font-semibold text-sm mb-1 truncate text-black dark:text-[#ff2d55]">
            {data.title}
          </h3>
          <p className="text-gray-400 text-xs mb-1 truncate">{data.artist}</p>
          <p className="text-xs text-[#ff2d55] mt-1 truncate">
            {data.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
