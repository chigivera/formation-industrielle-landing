// src/components/LearnMore.tsx

"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

// Grouped services
const serviceGroups = [
  {
    title: "maintenanceTraining",
    services: [
      { title: "systemManagement", description: "systemManagementDesc" },
      { title: "performanceManagement", description: "performanceManagementDesc" },
      { title: "maintenanceKPI", description: "maintenanceKPIDesc" },
      { title: "autonomousMaintenance", description: "autonomousMaintenanceDesc" },
      { title: "professionalMaintenance", description: "professionalMaintenanceDesc" },
      { title: "reliabilityMaintenance", description: "reliabilityMaintenanceDesc" },
      { title: "totalProductiveMaintenance", description: "totalProductiveMaintenanceDesc" },
    ],
  },
  {
    title: "leanAndQualityTools",
    services: [
      { title: "fiveSMethodology", description: "fiveSMethodologyDesc" },
      { title: "kaizenTraining", description: "kaizenTrainingDesc" },
      { title: "leanTraining", description: "leanTrainingDesc" },
      { title: "qualityTools", description: "qualityToolsDesc" },
      { title: "standardizationTraining", description: "standardizationTrainingDesc" },
      { title: "valueStreamMapping", description: "valueStreamMappingDesc" },
    ],
  },
  {
    title: "healthAndSafety",
    services: [
      { title: "healthSafety", description: "healthSafetyDesc" },
      { title: "materialHandling", description: "materialHandlingDesc" },
    ],
  },
  {
    title: "costAndEfficiency",
    services: [{ title: "costDeployment", description: "costDeploymentDesc" }],
  },
]

const LearnMore = () => {
  const t = useTranslations()

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6"
        >
          {t("learnMoreTitle")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-center max-w-3xl mx-auto mb-12"
        >
          {t("learnMoreDescription")}
        </motion.p>

        {/* Grouped Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary border-b border-primary pb-2">{t(group.title)}</h3>
              <ul className="space-y-3">
                {group.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="text-gray-700">
                    <span className="font-medium text-gray-900">{t(service.title)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearnMore

