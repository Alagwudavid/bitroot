"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Home, BookOpen, Bot, LayoutDashboard, HelpCircle, MessageCircleDashed, CircleEllipsis } from "lucide-react";

interface BrandMenuProps {
    className?: string;
}

interface Route {
    name: string;
    path: string;
}

export function BrandMenu({ className }: BrandMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const routes: Route[] = [
        { name: "Bitroot", path: "/home"},
        { name: "Learn", path: "/learn"},
        { name: "AI", path: "/beet"},
        { name: "Creator Dashboard", path: "/creator/" },
        { name: "My activity", path: "/settings/activity" },
    ];

    const getCurrentRoute = () => {
        const currentRoute = routes.find(route => pathname.startsWith(route.path));
        return currentRoute || routes[0];
    };

    const currentRoute = getCurrentRoute();

    return (
        <div className={`flex items-center ${className || ""}`}>
                <div>
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2 p-2 h-10 rounded-lg hover:bg-transparent dark:hover:bg-transparent border-0 border-none dark:border-none bg-transparent dark:bg-transparent"
                    >
                        {/* Brand Logo */}
                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 2.86 3.11"
                                className="!size-7 text-foreground"
                                style={{
                                    shapeRendering: "geometricPrecision",
                                    textRendering: "geometricPrecision",
                                    imageRendering: "optimizeQuality",
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                }}
                            >
                                <path
                                    fill="currentColor"
                                    d="M0.43 2.2l-0.06 0c0,-0.46 0.23,-0.79 0.68,-0.79l0 0.06c-0.39,0.01 -0.62,0.33 -0.62,0.73zm0.95 -2.2l0.09 0c0.12,0.03 0.22,0.19 0.22,0.47 0.01,0 0.59,-0.47 0.59,0 0,0.34 -0.44,0.51 -0.53,0.59 0.48,0 0.72,0.12 0.92,0.4 0.17,0.26 0.25,0.68 0.13,1.05 -0.25,0.74 -1.18,0.59 -1.78,0.58 -0.36,-0.01 -0.83,-0.14 -0.97,-0.6 -0.11,-0.37 -0.03,-0.79 0.15,-1.05 0.2,-0.27 0.44,-0.38 0.91,-0.38 -0.03,-0.03 0,-0.01 -0.05,-0.04l-0.14 -0.08c-0.13,-0.08 -0.34,-0.27 -0.34,-0.44 0,-0.51 0.55,-0.06 0.58,-0.03 0,-0.28 0.11,-0.44 0.22,-0.47zm-0.22 2.57c0.02,0 0.04,-0.02 0.06,-0.03 0.11,-0.04 0.24,-0.06 0.34,-0.02 0.03,0.01 0.04,0.02 0.06,0.03 0.02,0.01 0.04,0.02 0.05,0.03 -0.01,0.03 -0.06,0.06 -0.1,0.08 -0.1,0.04 -0.21,0.03 -0.3,-0.01 -0.03,-0.01 -0.04,-0.02 -0.06,-0.03 -0.02,-0.02 -0.04,-0.03 -0.05,-0.05zm-0.01 -0.29c-0.04,0 -0.14,0 -0.18,0.01 -0.07,0.01 0,0.23 0.13,0.34 0.29,0.24 0.73,0.07 0.79,-0.25 0.01,-0.05 0.02,-0.09 -0.04,-0.1 -0.11,-0.01 -0.24,0 -0.35,0 -0.12,0 -0.24,0 -0.35,0z"
                                />
                            </svg>
                            <span className="text-lg font-medium text-foreground hover:!text-foreground">
                                {currentRoute.name}
                            </span>
                        </div>
                    </Button>
                </div>
        </div>
    );
}
