import React from 'react';
import { HowItWorksSection } from '@/components/how-it-works-section';

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Header Section */}
            <section className="py-16 px-4 text-center">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                    HOW IT WORKS
                </p>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                    Get Started in 3 Simple Steps
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Launch your online business in minutes. No technical skills required.
                </p>
            </section>

            {/* How It Works Component */}
            <section className="max-w-7xl mx-auto px-4 pb-16">
                <HowItWorksSection />
            </section>
        </div>
    );
}
