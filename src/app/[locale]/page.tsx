// src/app/[locale]/page.tsx

import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import WhoWeAre from "@/components/WhoWeAre"
import OurServices from "@/components/OurServices"
import Metrics from "@/components/Metrics"
import Functionalities from "@/components/Functionalities"
import LearnMore from "@/components/LearnMore"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import TeamSection from "@/components/TeamSection"
import ScrollProgressBar from "@/components/ScrollProgressBar"

export const metadata: Metadata = {
  title: "Formation Industrielle | Industrial Training Platform",
  description: "Comprehensive industrial training platform for businesses, individuals, and trainers",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <WhoWeAre />
      <OurServices />
      <TeamSection />
      <Metrics />
      <Functionalities />
      <LearnMore />
      <Contact />
      <Footer />
    </main>
  )
}

