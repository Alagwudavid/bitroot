import React from 'react';
import PricingSection from '@/components/pricing-section';

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Header Section */}
            <section className="py-16 px-4 text-center">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                    PRICING PLANS
                </p>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                    Choose the Perfect Plan for Your Business
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Simple, transparent pricing that grows with you. Start free, upgrade when you need.
                </p>
            </section>

            {/* Pricing Component */}
            <section className="max-w-7xl mx-auto px-4 pb-16">
                <PricingSection />
            </section>
        </div>
    );
}
