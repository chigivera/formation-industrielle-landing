// src/components/Functionalities.tsx

"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Book, Video, Users, BarChart, Calendar, DollarSign } from "lucide-react"

const features = [
  { icon: Book, orbit: 1, label: "books" },
  { icon: Video, orbit: 2, label: "videos" },
  { icon: Users, orbit: 3, label: "users" },
  { icon: BarChart, orbit: 1, label: "analytics" },
  { icon: Calendar, orbit: 2, label: "calendar" },
  { icon: DollarSign, orbit: 3, label: "finance" },
]

const FeatureOrbit = () => {
  return (
    <div className="h-screen w-full bg-white flex items-center justify-center overflow-hidden">
      <div className="relative w-[30vh] h-[30vh]">
        {/* Sun with "Key Features" text */}
        <div className="absolute inset-0 border-2 border-black rounded-full flex items-center justify-center">
          <div
            className="text-center text-lg font-bold"
          >
            Key
            <br />
            Features
          </div>
        </div>
        
        {/* Feature Icons */}
        {features.map((feature, index) => (
          <FeatureIcon
            key={index}
            Icon={feature.icon}
            label={feature.label}
            orbitSize={`${feature.orbit * 20 + 30}vh`}
            duration={10 + feature.orbit * 5}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

interface FeatureIconProps {
  Icon: React.ElementType
  label: string
  orbitSize: string
  duration: number
  index: number
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ Icon, label, orbitSize, duration, index }) => {
  return (
    <div className="absolute inset-0">
      <motion.div
        className="absolute top-1/2 left-1/2 rounded-full"
        style={{
          width: orbitSize,
          height: orbitSize,
          marginLeft: `calc(-${orbitSize} / 2)`,
          marginTop: `calc(-${orbitSize} / 2)`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <motion.div
          className="absolute bg-white rounded-full p-2 flex flex-col items-center justify-center"
          style={{
            width: "10vh",
            height: "10vh",
            top: "calc(-5vh)",
            left: `calc(${orbitSize} / 2 - 5vh)`,
          }}
          animate={{ rotate: -360 }}
          transition={{ duration, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Icon className="w-6 h-6" />
          <span className="text-xs mt-1">{label}</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default FeatureOrbit

