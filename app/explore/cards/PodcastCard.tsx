import { Card, CardContent } from "@/components/ui/card";

export default function PodcastCard({ data }: { data: any }) {
  return (
    <Card className="border-none rounded-none shadow-none cursor-pointer group">
      <CardContent className="p-0">
        <div className="relative rounded-lg border transition-colors text-[#f7b801] overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            className="w-full aspect-square object-cover rounded-t-xl"
          />
        </div>
        <div className="relative mt-2">
          <h3 className="font-semibold text-lg truncate text-black dark:text-[#f7b801]">
            {data.title}
          </h3>
          <p className="text-gray-400 text-base truncate">{data.host}</p>
        </div>
      </CardContent>
    </Card>
  );
}
