"use client"

import { useEffect, useState, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Memoize the component to prevent unnecessary re-renders
const LoadingScreen = memo(function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if the page has already been loaded once in this session
    const hasLoaded = sessionStorage.getItem("hasLoaded")

    if (hasLoaded) {
      // Skip loading animation if page was already loaded
      setIsLoading(false)
      return
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
      // Mark that the page has been loaded in this session
      sessionStorage.setItem("hasLoaded", "true")
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Don't render anything if not loading
  if (!isLoading) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-24 h-24 mb-8 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </svg>
            </motion.div>
            <motion.p
              className="text-lg font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Loading...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
})

export default LoadingScreen

