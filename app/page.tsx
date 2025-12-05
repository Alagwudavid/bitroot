"use client"

import type React from "react"

import { useState } from "react"
import { Shield, Wallet, Globe, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function BitrootLanding() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log("[v0] Email submitted:", email)
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm font-medium text-secondary">Now accepting Instructors for Q1 2026</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Turn Your Expertise into a Global Business.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              The all-in-one platform for African experts to launch live cohorts. We handle the Escrow payments,
              scheduling, and student logistics—you just teach.
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleEmailSubmit} className="w-full max-w-md flex gap-2 sm:gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 whitespace-nowrap"
            >
              {submitted ? "Joined!" : "Join Waiting List"}
            </Button>
          </form>

          {/* Social Proof */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-primary to-secondary/50 flex items-center justify-center text-white text-sm font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Join 500+ Instructors</span> waiting to launch
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gray-50">
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
            description="Earn in USD/GBP from diaspora students and withdraw instantly to Naira/Mpesa."
          />

          {/* Feature 3: Timezone Sync */}
          <FeatureCard
            icon={<Globe className="w-8 h-8 text-primary" />}
            title="Timezone Sync"
            description="Smart scheduling that automatically converts Lagos time to London/New York time."
          />
        </div>

        <div className="w-full mt-12 flex justify-center">
          <Link href={"/features"} className="px-4 py-2.5 bg-primary text-primary-foreground rounded-xl mx-auto">see all features</Link>
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
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to launch your academy?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Join the growing community of African experts teaching the world.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg inline-flex items-center gap-2">
            Get Early Access <ArrowRight className="w-5 h-5" />
          </Button>
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
