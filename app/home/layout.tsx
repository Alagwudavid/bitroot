import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home Feed - Bitroot",
    description: "Share your language learning progress and connect with learners worldwide. Discover content from the community and track your learning journey.",
    keywords: ["language learning", "progress sharing", "community", "feed", "social learning"],
    openGraph: {
        title: "Home Feed - Bitroot",
        description: "Share your language learning progress and connect with learners worldwide",
        url: "https://bitroot-app.vercel.app/home",
        siteName: "Bitroot",
        images: [
            {
                url: "/og/home-preview.png",
                width: 1200,
                height: 630,
                alt: "Bitroot Home Feed - Language Learning Community",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Home Feed - Bitroot",
        description: "Share your language learning progress and connect with learners worldwide",
        images: ["/og/home-preview.png"],
        creator: "@LegendNGR",
    },
    robots: {
        index: true,
        follow: true,
    },
};

interface HomeLayoutProps {
    children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <>
            {children}
        </>
    );
}
