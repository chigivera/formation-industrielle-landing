// src/components/Hero.tsx

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Star } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    title: "industrialTrainingRevolution",
    description: "industrialTrainingDesc",
    image: "/images/hero-1.jpg",
  },
  {
    title: "seamlessLearning",
    description: "seamlessLearningDesc",
    image: "/images/hero-2.jpg",
  },
  {
    title: "empowerTrainers",
    description: "empowerTrainersDesc",
    image: "/images/hero-3.jpg",
  },
]

const reviews = [
  {
    text: "reviewText1",
    author: "reviewAuthor1",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
    position: { bottom: "10%", right: "5%" },
    rotation: "-3deg",
  },
  {
    text: "reviewText2",
    author: "reviewAuthor2",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
    position: { bottom: "25%", right: "15%" },
    rotation: "2deg",
  },
  {
    text: "reviewText3",
    author: "reviewAuthor3",
    avatar: "/images/avatar-3.jpg",
    rating: 4,
    position: { bottom: "15%", right: "25%" },
    rotation: "-5deg",
  },
]

const Hero = () => {
  const t = useTranslations()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
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
            src={slides[currentSlide].image || "/placeholder.svg?height=1080&width=1920"}
            alt={t(slides[currentSlide].title)}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/5 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
                {t(slides[currentSlide].title)}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl">{t(slides[currentSlide].description)}</p>
            </motion.div>
          </AnimatePresence>
          <Link href={"#contact"}>
          <Button size={"lg"} className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
            {t("getStarted")}
          </Button>
          </Link>
        </div>
      </div>

      {/* Scattered review cards */}
      {reviews.map((review, index) => (
        <motion.div
          key={index}
          className="review-card hidden md:block"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
          style={
            {
              ...review.position,
              "--rotation": review.rotation,
            } as React.CSSProperties
          }
        >
          <div className="flex items-center mb-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-primary">
              <Image
                src={review.avatar || `/placeholder.svg?height=100&width=100`}
                alt={t(review.author)}
                layout="fill"
                objectFit="cover"
                className="w-10 h-10"
              />
            </div>
            <div>
              <div className="flex mb-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xs font-bold">{t(review.author)}</p>
            </div>
          </div>
          <p className="text-sm mb-2 italic">&quot;{t(review.text)}&quot;</p>
        </motion.div>
      ))}
    </section>
  )
}

export default Hero

