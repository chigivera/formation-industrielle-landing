// src/components/Metrics.tsx

"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

const metrics = [
  { value: 1000, label: "companies" },
  { value: 10000, label: "learners" },
  { value: 500, label: "trainers" },
  { value: 95, label: "satisfactionRate" },
]

const Metrics = () => {
  const t  = useTranslations()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter value={metric.value} inView={inView} />
              <p className="text-lg">{t(metric.label)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const AnimatedCounter = ({ value, inView }: { value: number; inView: boolean }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      const start = 0
      const end = value
      const duration = 2000
      let startTimestamp: number | null = null

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        setCount(Math.floor(progress * (end - start) + start))
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }

      window.requestAnimationFrame(step)
    }
  }, [inView, value])

  return <h3 className="text-4xl font-bold mb-2">{count.toLocaleString()}</h3>
}

export default Metrics

