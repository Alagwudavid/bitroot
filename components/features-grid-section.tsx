import React from "react"
import { Shield, Wallet, Globe } from "lucide-react"
import Link from "next/link"

export function FeaturesGridSection() {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-muted">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3">Bitroot for every occasion.</h2>
                <p className="text-muted-foreground text-lg">Bitroot makes learning easy and interactive with peers and the community.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Feature 1: Escrow Payments */}
                <FeatureCard
                    icon={<Shield className="w-8 h-8 text-primary" />}
                    title="Escrow Payments"
                    description="We hold student funds securely and release them as you teach. No fraud, no fear."
                />

                {/* Feature 2: Global Payouts */}
                <FeatureCard
                    icon={<Wallet className="w-8 h-8 text-primary" />}
                    title="Global Payouts"
                    description="Never lose an international student again. Get paid in your local currency seamlessly."
                />

                {/* Feature 3: Timezone Sync */}
                <FeatureCard
                    icon={<Globe className="w-8 h-8 text-primary" />}
                    title="Timezone Sync"
                    description="Smart scheduling that automatically converts local time to international time seamlessly."
                />
            </div>

            <div className="w-full mt-12 flex justify-center flex-row gap-4 flex-wrap">
                <Link href={"/features"} className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg">
                    See all features
                </Link>
                <Link href={"/features"} className="px-4 py-2.5 bg-muted border-2 border-foreground text-foreground rounded-lg">
                    Request a feature
                </Link>
            </div>
        </section>
    )
}

function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode
    title: string
    description: string
}) {
    return (
        <div className="flex flex-col gap-4 p-6 rounded-lg cursor-pointer bg-white hover:bg-primary/5 transition-all">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
            <Link href={"/#"} className="text-primary font-semibold">
                learn more
            </Link>
        </div>
    )
}
