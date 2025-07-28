import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile - BitRoot",
    description:
        "View your language learning progress, achievements, and stats. Track your streaks, XP, and journey across multiple African languages.",
    openGraph: {
        title: "Profile - BitRoot",
        description:
            "View your language learning progress, achievements, and stats. Track your streaks, XP, and journey across multiple African languages.",
        type: "website",
        siteName: "BitRoot",
        images: [
            {
                url: "/og/profile.png",
                width: 1200,
                height: 630,
                alt: "BitRoot Profile",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Profile - BitRoot",
        description:
            "View your language learning progress, achievements, and stats. Track your streaks, XP, and journey across multiple African languages.",
        images: ["/og/profile.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
