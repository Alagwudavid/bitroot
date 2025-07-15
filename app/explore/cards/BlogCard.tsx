import { Card, CardContent } from "@/components/ui/card";

export default function BlogCard({ data }: { data: any }) {
  return (
    <Card className="bg-[#e6ffe6] border-[#34c759] text-[#34c759] shadow-none border transition-colors cursor-pointer group">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={data.image}
            alt={data.title}
            className="w-full aspect-[4/5] object-cover rounded-t-xl"
          />
        </div>
        <div className="relative p-4">
          <h3 className="font-semibold text-sm mb-1 truncate text-black dark:text-[#34c759]">
            {data.title}
          </h3>
          <p className="text-gray-400 text-xs mb-1 truncate">{data.author}</p>
          <p className="text-xs text-[#34c759] mt-1 truncate">
            {data.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
