// src/components/Functionalities.tsx

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { Users, BarChart, Calendar, DollarSign, Settings, Layers, PenTool, Video, Award } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    id: "content-creation",
    icon: PenTool,
    title: "contentCreation",
    description: "contentCreationDesc",
    color: "bg-yellow-100 text-yellow-700",
    iconColor: "text-yellow-500",
  },
  {
    id: "online-courses",
    icon: Video,
    title: "onlineCourses",
    description: "onlineCoursesDesc",
    color: "bg-orange-100 text-orange-700",
    iconColor: "text-orange-500",
  },
  {
    id: "in-person",
    icon: Users,
    title: "inPersonTraining",
    description: "inPersonTrainingDesc",
    color: "bg-amber-100 text-amber-700",
    iconColor: "text-amber-500",
  },
  {
    id: "performance",
    icon: BarChart,
    title: "performanceTracking",
    description: "performanceTrackingDesc",
    color: "bg-yellow-100 text-yellow-700",
    iconColor: "text-yellow-500",
  },
  {
    id: "session",
    icon: Calendar,
    title: "sessionManagement",
    description: "sessionManagementDesc",
    color: "bg-orange-100 text-orange-700",
    iconColor: "text-orange-500",
  },
  {
    id: "revenue",
    icon: DollarSign,
    title: "revenueManagement",
    description: "revenueManagementDesc",
    color: "bg-amber-100 text-amber-700",
    iconColor: "text-amber-500",
  },
  {
    id: "certification",
    icon: Award,
    title: "certification",
    description: "certificationDesc",
    color: "bg-yellow-100 text-yellow-700",
    iconColor: "text-yellow-500",
  },
  {
    id: "analytics",
    icon: Layers,
    title: "analytics",
    description: "analyticsDesc",
    color: "bg-orange-100 text-orange-700",
    iconColor: "text-orange-500",
  },
]

const Functionalities = () => {
  const t = useTranslations()
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  return (
    <section id="functionalities" className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("keyFunctionalities")}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("functionalitiesDescription")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Feature list */}
          <div className="md:col-span-1 space-y-2">
            {features.slice(0, 4).map((feature, index) => (
              <FeatureButton
                key={feature.id}
                feature={feature}
                index={index}
                isActive={activeFeature === feature.id}
                onClick={() => setActiveFeature(feature.id)}
                t={t}
              />
            ))}
          </div>

          {/* Middle column - 3D visualization */}
          <div className="md:col-span-1 flex items-center justify-center">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              <div className="absolute w-64 h-64 rounded-full border-4 border-dashed border-primary/30 animate-spin-slow"></div>
              <div className="absolute w-48 h-48 rounded-full border-4 border-dashed border-primary/50 animate-spin-reverse"></div>
              <div className="z-10 bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
                <Settings className="w-16 h-16 text-primary" />
              </div>

              <AnimatePresence>
                {activeFeature && (
                  <motion.div
                    key={activeFeature}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      {features
                        .find((f) => f.id === activeFeature)
                        ?.icon({
                          className: "w-20 h-20 text-primary z-20",
                        })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right column - Feature list */}
          <div className="md:col-span-1 space-y-2">
            {features.slice(4).map((feature, index) => (
              <FeatureButton
                key={feature.id}
                feature={feature}
                index={index + 4}
                isActive={activeFeature === feature.id}
                onClick={() => setActiveFeature(feature.id)}
                t={t}
              />
            ))}
          </div>
        </div>

        {/* Feature detail */}
        <AnimatePresence mode="wait">
          {activeFeature && (
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-12 bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-start">
                <div className={cn("p-3 rounded-full mr-4", features.find((f) => f.id === activeFeature)?.color)}>
                  {features
                    .find((f) => f.id === activeFeature)
                    ?.icon({
                      className: cn("w-6 h-6", features.find((f) => f.id === activeFeature)?.iconColor),
                    })}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {t(features.find((f) => f.id === activeFeature)?.title || "")}
                  </h3>
                  <p className="text-gray-600">{t(features.find((f) => f.id === activeFeature)?.description || "")}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

interface FeatureButtonProps {
  feature: (typeof features)[0]
  index: number
  isActive: boolean
  onClick: () => void
  t: any
}

const FeatureButton = ({ feature, index, isActive, onClick, t }: FeatureButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, x: index < 4 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={onClick}
      className={cn(
        "w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center",
        isActive ? "bg-primary text-primary-foreground shadow-md" : "bg-white hover:bg-gray-50 text-gray-800 shadow-sm",
      )}
    >
      <feature.icon className={cn("w-5 h-5 mr-3", isActive ? "text-primary-foreground" : feature.iconColor)} />
      <span className="font-medium">{t(feature.title)}</span>
    </motion.button>
  )
}

export default Functionalities

