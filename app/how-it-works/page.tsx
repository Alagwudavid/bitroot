import React from 'react';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { FeaturesGridSection } from '@/components/features-grid-section';

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Header Section */}
            <FeaturesGridSection />

            {/* How It Works Component */}
            <section className="max-w-7xl mx-auto px-4 pb-16">
                <HowItWorksSection />
            </section>
        </div>
    );
}
