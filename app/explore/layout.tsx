import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Explore Content - Bitroot",
    description: "Discover stories, animations, podcasts, games and interactive content for language learning. Explore a world of engaging educational materials.",
    keywords: ["language content", "stories", "animations", "podcasts", "games", "flash cards", "lifestyle", "explore"],
    openGraph: {
        title: "Explore Content - Bitroot",
        description: "Discover stories, animations, podcasts, games and interactive content for language learning",
        url: "https://bitroot-app.vercel.app/explore",
        siteName: "Bitroot",
        images: [
            {
                url: "/og/explore-preview.png",
                width: 1200,
                height: 630,
                alt: "Bitroot Explore - Language Learning Content",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Explore Content - Bitroot",
        description: "Discover stories, animations, podcasts, games and interactive content for language learning",
        images: ["/og/explore-preview.png"],
        creator: "@LegendNGR",
    },
    robots: {
        index: true,
        follow: true,
    },
};

interface ExploreLayoutProps {
    children: React.ReactNode;
}

export default function ExploreLayout({ children }: ExploreLayoutProps) {
    return (
        <>
            {children}
        </>
    );
}
