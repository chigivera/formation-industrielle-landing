// src/components/LearnMore.tsx

"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const features = [
  { title: "contentCreation", description: "contentCreationDesc" },
  { title: "onlineCourses", description: "onlineCoursesDesc" },
  { title: "inPersonTraining", description: "inPersonTrainingDesc" },
  { title: "performanceTracking", description: "performanceTrackingDesc" },
  { title: "sessionManagement", description: "sessionManagementDesc" },
  { title: "revenueManagement", description: "revenueManagementDesc" },
]

const LearnMore = () => {
const t = useTranslations();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {t("learnMoreTitle")}
        </motion.h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{t(feature.title)}</AccordionTrigger>
              <AccordionContent>{t(feature.description)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default LearnMore

