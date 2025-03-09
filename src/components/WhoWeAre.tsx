// src/components/WhoWeAre.tsx

"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"

const WhoWeAre = () => {
  const t = useTranslations()

  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6"
        >
          {t("whoWeAreTitle")}
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <p className="text-lg mb-6 leading-relaxed">{t("whoWeAreDescription")}</p>
            <p className="text-lg mb-6 leading-relaxed">{t("whoWeAreVision")}</p>
            <div className="bg-secondary/50 p-4 rounded-lg border-l-4 border-primary">
              <p className="italic text-gray-700">{t("whoWeAreQuote")}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-1/2"
          >
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-us.jpg"
                alt={t("whoWeAreTitle")}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre

