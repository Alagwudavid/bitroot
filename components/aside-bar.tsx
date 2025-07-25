"use client";

import { usePathname } from "next/navigation";
import { useIsTablet } from "@/components/ui/use-tablet";

export function AsideBar() {
  const isTablet = useIsTablet();
  const pathname = usePathname();
  const hideAsideBar = ["/beet", "/settings", "/home", "/"].includes(pathname);

  if (isTablet || hideAsideBar) {
    return null;
  }
  if (isTablet === undefined) return null;

  return (
    <aside className="sticky top-0 right-0 bg-transparent text-white flex flex-col justify-between h-full w-80 pt-16 pr-2 p-0 font-mono rounded-lg theme-aware">
      <div className="grid grid-cols-1 w-full gap-4">
        <div className="relative overflow-hidden bg-[#EEEDEC] dark:bg-[#0d1117] text-white flex flex-col justify-between h-52 w-full  p-5 font-mono rounded-lg theme-aware border border-gray-300 dark:border-gray-700">
          <p className="text-base uppercase font-bold text-gray-600 dark:text-[#fafafa]/70">
            Suggested follows
          </p>
        </div>
        <div className="relative overflow-hidden bg-[#EEEDEC] dark:bg-[#0d1117] text-white flex flex-col justify-between h-52 w-full p-5 font-mono rounded-lg theme-aware border border-gray-300 dark:border-gray-700">
          <p className="text-sm uppercase font-bold text-gray-600 dark:text-[#fafafa]/70">
            focus mode
          </p>
        </div>
      </div>
    </aside>
  );
}
