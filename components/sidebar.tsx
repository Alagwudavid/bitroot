"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Users, Headphones, PlayCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/components/ui/use-mobile";

export function Sidebar() {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const menuItems = [
    { id: "learn", label: "Learn", icon: BookOpen, href: "/learn" },
    { id: "community", label: "Community", icon: Users, href: "/community" },
    { id: "courses", label: "Courses", icon: PlayCircle, href: "/courses" },
    { id: "podcast", label: "Podcast", icon: Headphones, href: "/podcast" },
    { id: "profile", label: "Profile", icon: User, href: "/profile" },
  ];

  return (
    <div
      className={cn(
        "bg-[#072ac8] dark:bg-[#0d1117] text-white flex theme-aware",
        isMobile
          ? "fixed bottom-0 left-0 right-0 h-20 flex-row justify-around items-center border-t border-[#7037e4]/30 z-50"
          : "w-28 px-4 flex-col items-center dark:border-r dark:border-[#7037e4]/30"
      )}
    >
      {!isMobile && (
        <div className="mt-4 mb-5 h-11 w-11 shrink-0 overflow-hidden">
          <img
            src={`/original_light.png`}
            alt={`Bitroot logo`}
            className="w-full h-full object-cover rounded"
          />
        </div>
      )}
      <nav className="flex-1 w-full">
        <ul
          className={cn(
            "space-y-2",
            isMobile
              ? "flex flex-row justify-around w-full h-full items-center space-x-2 px-3"
              : "flex flex-col"
          )}
        >
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href);
            return (
              <li key={item.id} className={"w-full"}>
                <Link href={item.href} legacyBehavior>
                  <a
                    className={cn(
                      "w-full flex items-center justify-center gap-1 rounded-xl transition-all duration-200 theme-aware",
                      isActive
                        ? "bg-[#1e96fc] dark:bg-[#7037e4] text-white shadow-lg"
                        : "text-gray-300 dark:text-[#fafafa]/70 hover:bg-[#1e96fc]/20 dark:hover:bg-[#7037e4]/20 hover:text-white",
                      isMobile ? "flex-col text-xs p-2" : "flex-col px-4 py-3"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className={"font-medium line-clamp-1 text-xs"}>
                      {item.label}
                    </span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
