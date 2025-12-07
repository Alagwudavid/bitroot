"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Shield, Wallet, Globe, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import Image from "next/image"

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

      {/* How it works */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center">How it works.</h2>

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
            <div className="bg-muted rounded-3xl relative overflow-hidden border min-h-[400px] lg:min-h-[500px] m-auto">
              <Image src="/team-collaboration-interface-with-shared-workspace.jpg" width={1200} height={800} alt="Dashboard interface" className="object-contain" />
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-5xl mx-auto text-center">
        <div className="bg-muted border rounded-lg p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to launch your academy?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Launching Q2 of 2026
          </p>
          <CountdownTimer />
        </div>
      </section>

      {/* Event Types Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Effortlessly Host & Manage Any Event or Masterclass
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12">
            <EventTypeCard
              icon={<Globe className="w-8 h-8 text-purple-600" />}
              title="Online Events"
              bgColor="bg-purple-50 dark:bg-purple-950/20"
            />
            <EventTypeCard
              icon={<CheckCircle2 className="w-8 h-8 text-purple-600" />}
              title="Physical Events"
              bgColor="bg-purple-50 dark:bg-purple-950/20"
            />
            <EventTypeCard
              icon={<ArrowRight className="w-8 h-8 text-purple-600" />}
              title="Hybrid Events"
              bgColor="bg-purple-50 dark:bg-purple-950/20"
            />
            <EventTypeCard
              icon={<Shield className="w-8 h-8 text-purple-600" />}
              title="Masterclass"
              bgColor="bg-purple-50 dark:bg-purple-950/20"
            />
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              {["Concerts", "Hybrid", "Webinars", "Virtual Conferences", "Webinars", "Concerts", "Hybrid",
                "Masterclass", "Trade shows", "Festivals", "Webinars", "Concerts", "Hybrid", "Webinars",
                "Virtual Conferences", "Webinars"].map((item, idx) => (
                  <span key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                    {item}
                  </span>
                ))}
            </div>
          </div>
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

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2026-04-01T00:00:00")

    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const months = Math.floor(days / 30)
        const remainingDays = days % 30

        setTimeLeft({
          months,
          days: remainingDays,
          hours,
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000 * 60 * 60) // Update every hour

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center gap-4 sm:gap-8">
      <TimeUnit value={timeLeft.months} label="MONTHS" />
      <TimeUnit value={timeLeft.days} label="DAYS" />
      <TimeUnit value={timeLeft.hours} label="HOURS" />
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-background border-2 border-border rounded-lg px-6 py-4 sm:px-8 sm:py-6 min-w-[80px] sm:min-w-[100px]">
        <span className="text-3xl sm:text-5xl font-bold">{String(value).padStart(2, "0")}</span>
      </div>
      <span className="text-xs sm:text-sm text-muted-foreground mt-2 font-semibold tracking-wide">{label}</span>
    </div>
  )
}

function EventTypeCard({ icon, title, bgColor }: { icon: React.ReactNode; title: string; bgColor: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full ${bgColor}`}>
        {icon}
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-purple-900 dark:text-purple-100">{title}</h3>
    </div>
  )
}
