// src/components/Hero.tsx

"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const slides = [
  {
    title: "Revolutionize Industrial Training",
    description: "Empower your workforce with cutting-edge industrial training solutions.",
    image: "/images/hero-1.jpg",
  },
  {
    title: "Seamless Learning Experience",
    description: "Access a wide range of courses tailored for businesses and individuals.",
    image: "/images/hero-2.jpg",
  },
  {
    title: "Empower Trainers",
    description: "Create, manage, and monetize your industrial training content with ease.",
    image: "/images/hero-3.jpg",
  },
]

const Hero = () => {
  const t = useTranslations();
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={t(slides[currentSlide].title)}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
      </AnimatePresence>
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{t(slides[currentSlide].title)}</h1>
            <p className="text-xl md:text-2xl mb-8 text-white">{t(slides[currentSlide].description)}</p>
          </motion.div>
        </AnimatePresence>
        <Button size="lg" className="bg-primary text-white hover:bg-primary-dark">
          {t("getStarted")}
        </Button>
      </div>
    </section>
  )
}

export default Hero

