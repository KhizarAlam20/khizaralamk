"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { FaArrowLeft } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"

export default function AllDesigns() {
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  // Custom cursor effect
  useEffect(() => {
    let rafId: number
    let lastX = 0
    let lastY = 0

    const handleMouseMove = (e: MouseEvent) => {
      // Cancel any pending animation frame
      if (rafId) {
        cancelAnimationFrame(rafId)
      }

      // Use requestAnimationFrame for smoother updates
      rafId = requestAnimationFrame(() => {
        // Implement lerp (linear interpolation) for smoother movement
        const targetX = e.clientX
        const targetY = e.clientY

        // Smooth transition between current and target position
        lastX = lastX + (targetX - lastX) * 0.2
        lastY = lastY + (targetY - lastY) * 0.2

        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${lastX}px, ${lastY}px) translate(-50%, -50%)`
        }
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return (
    <main className="bg-white font-['Plus_Jakarta_Sans'] min-h-screen">
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className={`fixed w-4 h-4 rounded-full bg-black dark:bg-white pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ${isHovering ? "scale-[2.5]" : "scale-100"}`}
        style={{
          left: 0,
          top: 0,
          transform: "translate(0px, 0px) translate(-50%, -50%)",
        }}
      />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-12">
        <div className="flex items-center mb-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg hover:underline"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-16">All Design Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <motion.div
              key={item}
              className="design-project aspect-square overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item * 0.1 }}
            >
              <motion.div
                className="w-full h-full relative"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Image
                  src={`/placeholder.svg?height=800&width=800&text=Project ${item}`}
                  alt={`Design Project ${item}`}
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 p-6 bg-white bg-opacity-90">
                  <h3 className="text-2xl font-semibold">Design Project {item}</h3>
                  <p className="text-gray-700">Category, Subcategory</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

