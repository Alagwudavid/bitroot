import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Settings - Bitroot',
    description: 'Manage your account settings, learning preferences, notifications, privacy settings, and more. Customize your Bitroot language learning experience.',
    keywords: 'settings, account settings, preferences, notifications, privacy, learning settings, profile settings',
    authors: [{ name: 'Bitroot Team' }],
    openGraph: {
        title: 'Settings - Bitroot',
        description: 'Manage your account settings, learning preferences, notifications, privacy settings, and more. Customize your Bitroot language learning experience.',
        type: 'website',
        url: '/settings',
        siteName: 'Bitroot',
        images: [
            {
                url: '/og/settings-og.jpg',
                width: 1200,
                height: 630,
                alt: 'Bitroot Settings - Customize Your Learning Experience',
            },
        ],
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Settings - Bitroot',
        description: 'Manage your account settings, learning preferences, notifications, privacy settings, and more. Customize your Bitroot language learning experience.',
        images: ['/og/settings-og.jpg'],
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
        canonical: '/settings',
    },
}

export default function SettingsLayout({
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
