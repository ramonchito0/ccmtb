import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ActionButtons } from "@/components/action-buttons"
import { TrailStatus } from "@/components/trail-status"
import { WelcomeSection } from "@/components/welcome-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { FooterBoxes } from "@/components/footer-boxes"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ActionButtons />
      <TrailStatus />
      <WelcomeSection />
      <SponsorsSection />
      <FAQSection />
      <FooterBoxes />
      <Footer />
    </main>
  )
}
