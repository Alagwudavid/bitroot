import React from 'react';
import PricingSection from '@/components/pricing-section';

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Pricing Component */}
            <section className="max-w-7xl mx-auto px-4 pb-16">
                <PricingSection />
            </section>
        </div>
    );
}
