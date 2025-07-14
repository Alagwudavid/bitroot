"use client"

import { BookOpen, Users, Headphones, PlayCircle, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/components/ui/use-mobile" // Import useIsMobile

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const isMobile = useIsMobile() // Use the hook to detect mobile
  const menuItems = [
    { id: "learn", label: "Learn", icon: BookOpen },
    { id: "community", label: "Community", icon: Users },
    { id: "courses", label: "Courses", icon: PlayCircle },
    { id: "podcast", label: "Podcast", icon: Headphones },
    { id: "profile", label: "Profile", icon: User }, // Add profile item
  ]

  return (
    <div
      className={cn(
        "bg-[#072ac8] dark:bg-[#0d1117] text-white flex theme-aware",
        isMobile
          ? "fixed bottom-0 left-0 right-0 h-16 flex-row justify-around items-center border-t border-[#7037e4]/30 z-50"
          : "w-28 px-4 flex-col items-center dark:border-r dark:border-[#7037e4]/30",
      )}
    >
      {!isMobile && (
        <div className="p-6 h-11 w-11 shrink-0">
          {/* <h1 className="text-2xl font-bold text-[#fcf300] dark:text-[#8ddeed] theme-aware">Bitroot</h1> */}
        </div>
      )}

      <nav className="flex-1 w-full">
        <ul
          className={cn(
            "space-y-2",
            isMobile ? "flex flex-row justify-around w-full h-full items-center space-y-0" : "flex flex-col",
          )}
        >
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id} className={cn(isMobile ? "flex-1" : "w-full")}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={cn(
                    "w-full flex items-center justify-center gap-1 px-4 py-3 rounded-xl transition-all duration-200 theme-aware",
                    currentPage === item.id
                      ? "bg-[#1e96fc] dark:bg-[#7037e4] text-white shadow-lg"
                      : "text-gray-300 dark:text-[#fafafa]/70 hover:bg-[#1e96fc]/20 dark:hover:bg-[#7037e4]/20 hover:text-white",
                    isMobile ? "flex-col text-xs" : "flex-row",
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className={cn("font-medium", isMobile ? "text-xs line-clamp-1" : "")}>{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
