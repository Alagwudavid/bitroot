import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function BlogCard({ data }: { data: any }) {
  return (
    <Card className="rounded-none shadow-none border-none transition-colors cursor-pointer group">
      <CardContent className="p-0">
        <div className="relative rounded-xl overflow-hidden border">
          <img
            src={data.image}
            alt={data.title}
            className="w-full aspect-[4/2] object-cover"
          />
        </div>
        <p className="text-gray-400 text-base line-clamp-1 mt-1 truncate">{data.description}</p>
        <div className="flex items-center gap-2 py-2">
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full"
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback className="bg-[#1e96fc] text-white">
                    U
                  </AvatarFallback>
                </Avatar>
              </Button>
              <div className="relative">
                <h3 className="font-semibold text-base mb-1 truncate text-black dark:text-[#e75480]">
                  {data.title}
                </h3>
                <p className="text-gray-400 text-xs mb-1 truncate">{data.author}</p>
              </div>
        </div>
      </CardContent>
    </Card>
  );
}
