"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"

const teamMembers = [
  {
    name: "Karim Hajji",
    role: "teamFounder",
    bio: "teamFounderBio",
    image: "/images/karim-hajji.jpeg",
  },
  {
    name: "Fatima Benali",
    role: "teamTrainer",
    bio: "teamTrainerBio",
    image: "/images/team-2.jpg",
  },
  {
    name: "Karim Tazi",
    role: "teamTechnical",
    bio: "teamTechnicalBio",
    image: "/images/team-3.jpg",
  },
  {
    name: "Nadia Chaoui",
    role: "teamCoordinator",
    bio: "teamCoordinatorBio",
    image: "/images/team-4.jpg",
  },
]

export default function TeamSection() {
  const t = useTranslations()

  return (
    <section id="team" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {t("ourTeam")}
        </motion.h2>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="team-member bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image || "/placeholder.svg?height=300&width=300"}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{t(member.role)}</p>
                <p className="text-gray-600">{t(member.bio)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

