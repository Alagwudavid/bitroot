import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function StoryCard({ data }: { data: any }) {
  return (
    <Card className="bg-none text-black dark:text-white border-0 rounded-none shadow-none transition-colors cursor-pointer group">
      <CardContent className="p-0">
        <div className="relative border rounded-lg overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            className="w-full aspect-[4/5] object-cover"
          />
          <Badge className="absolute bottom-2 right-2 bg-[#fcf300] text-[#072ac8] text-xs rounded-full">
            {data.type}
          </Badge>
        </div>
        
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
