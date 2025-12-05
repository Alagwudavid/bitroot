import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function FeaturesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full min-h-screen bg-background text-foreground">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
