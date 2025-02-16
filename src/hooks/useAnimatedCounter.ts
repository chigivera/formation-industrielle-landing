"use client"

import { useState, useEffect } from "react"

export const useAnimatedCounter = (end: number, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
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

    return () => {
      // Cleanup function if needed
    }
  }, [end, duration, start])

  return count
}

