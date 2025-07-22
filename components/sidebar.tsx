"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Users, Earth, PlayCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/components/ui/use-mobile";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Sidebar() {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const menuItems = [
    { id: "learn",
      label: "Learn",
      icon: <svg className="shrink-0 size-8 group-hover/sidebar:scale-110 group-hover/sidebar:-rotate-12 duration-500 ease-in-out" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 16V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15H19.5C20.05 15 20.5 15.45 20.5 16Z" fill="currentColor"/>
            <path d="M15.5 2H8.5C4.5 2 3.5 3 3.5 7V14.58C4.26 13.91 5.26 13.5 6.35 13.5H19.5C20.05 13.5 20.5 13.05 20.5 12.5V7C20.5 3 19.5 2 15.5 2ZM13 10.75H8C7.59 10.75 7.25 10.41 7.25 10C7.25 9.59 7.59 9.25 8 9.25H13C13.41 9.25 13.75 9.59 13.75 10C13.75 10.41 13.41 10.75 13 10.75ZM16 7.25H8C7.59 7.25 7.25 6.91 7.25 6.5C7.25 6.09 7.59 5.75 8 5.75H16C16.41 5.75 16.75 6.09 16.75 6.5C16.75 6.91 16.41 7.25 16 7.25Z" fill="currentColor"/>
            </svg>,
      href: "/learn"
    },
    { id: "community",
      label: "Community",
      icon: <svg className="shrink-0 size-8 group-hover/sidebar:scale-110 group-hover/sidebar:-rotate-12 duration-500 ease-in-out" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="currentColor"/>
      <path d="M14.0809 14.1489C11.2909 12.2889 6.74094 12.2889 3.93094 14.1489C2.66094 14.9989 1.96094 16.1489 1.96094 17.3789C1.96094 18.6089 2.66094 19.7489 3.92094 20.5889C5.32094 21.5289 7.16094 21.9989 9.00094 21.9989C10.8409 21.9989 12.6809 21.5289 14.0809 20.5889C15.3409 19.7389 16.0409 18.5989 16.0409 17.3589C16.0309 16.1289 15.3409 14.9889 14.0809 14.1489Z" fill="currentColor"/>
      <path d="M19.9894 7.33815C20.1494 9.27815 18.7694 10.9781 16.8594 11.2081C16.8494 11.2081 16.8494 11.2081 16.8394 11.2081H16.8094C16.7494 11.2081 16.6894 11.2081 16.6394 11.2281C15.6694 11.2781 14.7794 10.9681 14.1094 10.3981C15.1394 9.47815 15.7294 8.09815 15.6094 6.59815C15.5394 5.78815 15.2594 5.04815 14.8394 4.41815C15.2194 4.22815 15.6594 4.10815 16.1094 4.06815C18.0694 3.89815 19.8194 5.35815 19.9894 7.33815Z" fill="currentColor"/>
      <path d="M21.9883 16.5904C21.9083 17.5604 21.2883 18.4004 20.2483 18.9704C19.2483 19.5204 17.9883 19.7804 16.7383 19.7504C17.4583 19.1004 17.8783 18.2904 17.9583 17.4304C18.0583 16.1904 17.4683 15.0004 16.2883 14.0504C15.6183 13.5204 14.8383 13.1004 13.9883 12.7904C16.1983 12.1504 18.9783 12.5804 20.6883 13.9604C21.6083 14.7004 22.0783 15.6304 21.9883 16.5904Z" fill="currentColor"/>
      </svg>,
      href: "/community" },
    { id: "courses", 
      label: "Courses", 
      icon: <svg className="shrink-0 size-8 group-hover/sidebar:scale-110 group-hover/sidebar:-rotate-12 duration-500 ease-in-out" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.15 6.17C20.74 5.95 19.88 5.72 18.71 6.54L17.24 7.58C17.13 4.47 15.78 3.25 12.5 3.25H6.5C3.08 3.25 1.75 4.58 1.75 8V16C1.75 18.3 3 20.75 6.5 20.75H12.5C15.78 20.75 17.13 19.53 17.24 16.42L18.71 17.46C19.33 17.9 19.87 18.04 20.3 18.04C20.67 18.04 20.96 17.93 21.15 17.83C21.56 17.62 22.25 17.05 22.25 15.62V8.38C22.25 6.95 21.56 6.38 21.15 6.17ZM11 11.38C9.97 11.38 9.12 10.54 9.12 9.5C9.12 8.46 9.97 7.62 11 7.62C12.03 7.62 12.88 8.46 12.88 9.5C12.88 10.54 12.03 11.38 11 11.38Z" fill="currentColor"/>
      </svg>, 
      href: "/courses" },
    { id: "explore", 
      label: "Explore", 
      icon: <svg className="shrink-0 size-8 group-hover/sidebar:scale-110 group-hover/sidebar:-rotate-12 duration-500 ease-in-out" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.9808 3.02084C20.1108 2.15084 18.8808 1.81084 17.6908 2.11084L7.89084 4.56084C6.24084 4.97084 4.97084 6.25084 4.56084 7.89084L2.11084 17.7008C1.81084 18.8908 2.15084 20.1208 3.02084 20.9908C3.68084 21.6408 4.55084 22.0008 5.45084 22.0008C5.73084 22.0008 6.02084 21.9708 6.30084 21.8908L16.1108 19.4408C17.7508 19.0308 19.0308 17.7608 19.4408 16.1108L21.8908 6.30084C22.1908 5.11084 21.8508 3.88084 20.9808 3.02084ZM12.0008 15.8808C9.86084 15.8808 8.12084 14.1408 8.12084 12.0008C8.12084 9.86084 9.86084 8.12084 12.0008 8.12084C14.1408 8.12084 15.8808 9.86084 15.8808 12.0008C15.8808 14.1408 14.1408 15.8808 12.0008 15.8808Z" fill="currentColor"/>
      </svg>, 
      href: "/explore" },
    { id: "profile", 
      label: "Profile", 
      icon: <Avatar className="h-10 w-10 rounded-md">
      <AvatarImage src="/placeholder-user1.png" alt="User" />
      <AvatarFallback className="bg-[#fbde84] text-black h-10 w-10 rounded-md">
        AJ
      </AvatarFallback>
    </Avatar>, 
      href: "/profile" },
  ];

  return (
    <div
      className={cn(
        "bg-[#EEEDEC] dark:bg-[#0d1117] text-white flex theme-aware border-gray-300 dark:border-gray-700",
        isMobile
          ? "fixed bottom-0 left-0 right-0 h-20 flex-row justify-around items-center border-t z-50"
          : "w-20 px-2 lg:w-52 lg:px-4 flex-col dark:border-r sticky top-0"
      )}
    >
      {!isMobile && (
        <div className="mt-4 mb-5 h-11 w-11 mx-auto shrink-0 overflow-hidden">
        </div>
      )}
      <nav className="flex-1 w-full">
        <ul
          className={cn(
            "",
            isMobile
              ? "flex flex-row justify-around w-full h-full items-center space-x-2 px-3"
              : "flex flex-col space-y-2"
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
                      "w-full flex items-center gap-1 rounded-xl transition-all duration-200 theme-aware group/sidebar",
                      isActive
                        ? "bg-[#C51E3A] dark:bg-[#1e96fc] text-white shadow-lg"
                        : "text-gray-600 dark:text-[#fafafa]/70 hover:bg-[#C51E3A]/70 dark:hover:bg-[#1e96fc]/20 hover:text-white",
                      isMobile ? "flex-col text-xs p-2 justify-center" : "flex-row gap-3 px-4 py-3"
                    )}
                  >
                    {Icon}
                    <span className={cn("font-medium line-clamp-1 font-mono ", isMobile ? "text-xs" : "text-lg")}>
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
