import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Notifications - BitRoot",
    description:
        "Stay updated with your language learning progress. View reminders, community posts, podcasts, and premium notifications in one place.",
    openGraph: {
        title: "Notifications - BitRoot",
        description:
            "Stay updated with your language learning progress. View reminders, community posts, podcasts, and premium notifications in one place.",
        type: "website",
        siteName: "BitRoot",
        images: [
            {
                url: "/og/notifications.png",
                width: 1200,
                height: 630,
                alt: "BitRoot Notifications",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Notifications - BitRoot",
        description:
            "Stay updated with your language learning progress. View reminders, community posts, podcasts, and premium notifications in one place.",
        images: ["/og/notifications.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function NotificationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
