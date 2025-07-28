import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Beet - AI Language Assistant - BitRoot",
    description:
        "Select your AI agent to enhance your language learning experience. Chat, translate, practice with flashcards, audio conversations, and personalized lessons.",
    openGraph: {
        title: "Beet - AI Language Assistant - BitRoot",
        description:
            "Select your AI agent to enhance your language learning experience. Chat, translate, practice with flashcards, audio conversations, and personalized lessons.",
        type: "website",
        siteName: "BitRoot",
        images: [
            {
                url: "/og/beet.png",
                width: 1200,
                height: 630,
                alt: "BitRoot Beet AI Assistant",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Beet - AI Language Assistant - BitRoot",
        description:
            "Select your AI agent to enhance your language learning experience. Chat, translate, practice with flashcards, audio conversations, and personalized lessons.",
        images: ["/og/beet.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function BeetLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
