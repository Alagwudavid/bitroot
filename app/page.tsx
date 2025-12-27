import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import PricingSection from "@/components/pricing-section"
import { FeaturesGridSection } from "@/components/features-grid-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { CountdownSection } from "@/components/countdown-section"

export default function BitrootLanding() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground overflow-x-clip">
      <HeroSection />
      <Navbar />
      {/* <PricingSection /> */}
      <FeaturesGridSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <WaitlistSection />
      {/* <CountdownSection /> */}
      <Footer />
    </div>
  )
}
