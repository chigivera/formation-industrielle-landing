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

export const metadata: Metadata = {
  title: "Industrial Training Platform",
  description: "Comprehensive industrial training platform for businesses, individuals, and trainers",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <OurServices />
      <Metrics />
      <Functionalities />
      <LearnMore />
      <Contact />
      <Footer />
    </main>
  )
}

