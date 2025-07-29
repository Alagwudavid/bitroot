import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Reels - Bitroot',
    description: 'Discover engaging language learning reels from our community. Watch short videos, interact with content, and learn new languages through entertaining and educational content.',
    keywords: 'reels, language learning videos, short videos, community content, interactive learning, language education',
    authors: [{ name: 'Bitroot Team' }],
    openGraph: {
        title: 'Reels - Bitroot',
        description: 'Discover engaging language learning reels from our community. Watch short videos, interact with content, and learn new languages through entertaining and educational content.',
        type: 'website',
        url: '/reels',
        siteName: 'Bitroot',
        images: [
            {
                url: '/og/reels-og.jpg',
                width: 1200,
                height: 630,
                alt: 'Bitroot Reels - Language Learning Videos',
            },
        ],
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Reels - Bitroot',
        description: 'Discover engaging language learning reels from our community. Watch short videos, interact with content, and learn new languages through entertaining and educational content.',
        images: ['/og/reels-og.jpg'],
        creator: '@bitroot',
        site: '@bitroot',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: '/reels',
    },
}

export default function ReelsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-background">
            {children}
        </div>
    )
}
