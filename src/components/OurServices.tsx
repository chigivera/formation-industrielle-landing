// src/components/OurServices.tsx

"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Building, User, UserPlus } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Building,
    title: "businessSolution",
    description: "businessSolutionDesc",
    image: "/images/business-solution.jpg",
  },
  {
    icon: User,
    title: "individualLearning",
    description: "individualLearningDesc",
    image: "/images/individual-learning.jpg",
  },
  {
    icon: UserPlus,
    title: "trainerEmpowerment",
    description: "trainerEmpowermentDesc",
    image: "/images/trainer-empowerment.jpg",
  },
]

const OurServices = () => {
  const t = useTranslations()

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {t("ourServices")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={t(service.title)}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <service.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{t(service.title)}</h3>
                <p className="text-gray-600 mb-4">{t(service.description)}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg">{t("learnMore")}</Button>
        </motion.div>
      </div>
    </section>
  )
}

export default OurServices

