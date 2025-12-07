"use client"

import type React from "react"

import { useState } from "react"
import { Shield, Wallet, Globe, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"

export default function BitrootLanding() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />

      {/* Features Grid */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-muted">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything you need to run a Live Academy.</h2>
          <p className="text-muted-foreground text-lg">The platform handles logistics so you can focus on teaching</p>
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
          <Link href={"/features"} className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg">See all features</Link>
          <Link href={"/features"} className="px-4 py-2.5 bg-muted border-2 border-foreground text-foreground rounded-lg">Request a feature</Link>
        </div>
      </section>

      {/* Product Overview */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center">Your Business in a Box.</h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Steps */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Create Your Course</h3>
                <p className="text-muted-foreground">
                  Set up your live cohort with topic, dates, and pricing in minutes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Students Enroll</h3>
                <p className="text-muted-foreground">
                  Funds are held securely in escrow while students join your cohort.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Teach & Get Paid</h3>
                <p className="text-muted-foreground">
                  Receive payments as you teach. All timezone logistics handled automatically.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Dashboard Mockup */}
          <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-lg border border-border p-8 sm:p-12">
            <div className="space-y-6">
              {/* Dashboard Header */}
              <div className="border-b border-border pb-4">
                <h3 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-4">Dashboard</h3>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">My Cohorts</p>
                  <p className="text-sm text-muted-foreground">Wallet</p>
                  <p className="text-sm text-muted-foreground">Students</p>
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Total Earnings</p>
                    <p className="text-3xl font-bold">$450.00</p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/50 dark:bg-white/5 rounded p-3">
                    <p className="text-xs text-muted-foreground mb-1">Active Cohorts</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <div className="bg-white/50 dark:bg-white/5 rounded p-3">
                    <p className="text-xs text-muted-foreground mb-1">Enrolled Students</p>
                    <p className="text-2xl font-bold">47</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-5xl mx-auto text-center">
        <div className="bg-muted border rounded-lg p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to launch your academy?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            we would be launching Q2 of 2026
          </p>
          {"show countdown timer here"}
        </div>
      </section>

      <Footer />
    </div>
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
      <Link href={"/#"} className="text-primary font-semibold">learn more</Link>
    </div>
  )
}
