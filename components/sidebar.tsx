"use client"

import { BookOpen, Users, Headphones, PlayCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const menuItems = [
    { id: "learn", label: "Learn", icon: BookOpen },
    { id: "community", label: "Community", icon: Users },
    { id: "courses", label: "Courses", icon: PlayCircle },
    { id: "podcast", label: "Podcast", icon: Headphones },
  ]

  return (
    <div className="w-28 px-4 bg-[#072ac8] dark:bg-[#0d1117] dark:border-r dark:border-[#7037e4]/30 text-white flex flex-col items-center theme-aware">
      <div className="p-6 h-11 w-11 shrink-0">
        {/* <h1 className="text-2xl font-bold text-[#fcf300] dark:text-[#8ddeed] theme-aware">Bitroot</h1> */}
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={cn(
                    "w-full flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-xl transition-all duration-200 theme-aware",
                    currentPage === item.id
                      ? "bg-[#1e96fc] dark:bg-[#7037e4] text-white shadow-lg"
                      : "text-gray-300 dark:text-[#fafafa]/70 hover:bg-[#1e96fc]/20 dark:hover:bg-[#7037e4]/20 hover:text-white",
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-xs line-clamp-1">{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
