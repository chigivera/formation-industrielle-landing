// src/components/WhoWeAre.tsx

"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

const WhoWeAre = () => {
  const t  = useTranslations()

  return (
    <section id="who-we-are" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          {t("whoWeAreTitle")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center max-w-3xl mx-auto"
        >
          {t("whoWeAreDescription")}
        </motion.p>
      </div>
    </section>
  )
}

export default WhoWeAre

