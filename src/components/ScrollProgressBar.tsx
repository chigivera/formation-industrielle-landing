"use client"

import { useEffect, useState } from "react"

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999]">
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-r-full transition-all duration-300 ease-out"
        style={{
          width: `${scrollProgress}%`,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  )
}

