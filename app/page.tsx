import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { FeaturesGridSection } from "@/components/features-grid-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CountdownSection } from "@/components/countdown-section"

export default function BitrootLanding() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <WhyChooseUsSection />
      <FeaturesGridSection />
      <HowItWorksSection />
      <CountdownSection />
      <Footer />
    </div>
  )
}
