import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function LifestyleCard({ data }: { data: any }) {
  return (
    <Card className="bg-transparent rounded-none shadow-none border-none transition-colors cursor-pointer group">
      <CardContent className="p-0">
        <div className="relative rounded-xl overflow-hidden border">
          <img
            src={data.image}
            alt={data.title}
            className="w-full aspect-[4/2] object-cover"
          />
        </div>
        <div className="flex gap-2 my-4">
              <Button
                variant="ghost"
                className="relative h-10 w-10 shrink-0 rounded-full"
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback className="bg-[#1e96fc] text-white">
                    U
                  </AvatarFallback>
                </Avatar>
              </Button>
              <div className="relative w-full block overflow-hidden">
                <h3 className="font-semibold text-lg truncate text-black dark:text-[#e75480]">
                  {data.title}
                </h3>
                <p className="text-gray-400 text-base truncate">{data.author}</p>
              </div>
        </div>
      </CardContent>
    </Card>
  );
}
