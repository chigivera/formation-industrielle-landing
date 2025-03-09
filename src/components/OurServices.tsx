// src/components/OurServices.tsx

"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Building, User, UserPlus, BookOpen, Briefcase, Shield } from "lucide-react"
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
  {
    icon: BookOpen,
    title: "industrialTraining",
    description: "industrialTrainingDesc",
    image: "/images/industrial-training.jpg",
  },
  {
    icon: Briefcase,
    title: "softwareTraining",
    description: "softwareTrainingDesc",
    image: "/images/software-training.jpg",
  },
  {
    icon: Shield,
    title: "safetyTraining",
    description: "safetyTrainingDesc",
    image: "/images/safety-training.jpg",
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
          className="text-3xl md:text-4xl font-bold text-center mb-6"
        >
          {t("ourServices")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-center max-w-3xl mx-auto mb-12"
        >
          {t("servicesDescription")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={service.image || "/placeholder.svg?height=300&width=500"}
                  alt={t(service.title)}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="w-10 h-10 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">{t(service.title)}</h3>
                </div>
                <p className="text-gray-600 mb-4">{t(service.description)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
            {t("learnMore")}
          </Button>
        </motion.div> */}
      </div>
    </section>
  )
}

export default OurServices

