"use client"

import { useEffect, type RefObject } from "react"

export function useOptimizedCursor(cursorRef: RefObject<HTMLDivElement>) {
  useEffect(() => {
    if (!cursorRef.current) return

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

        // Smooth transition between current and target position (adjust the 0.2 value to change smoothness)
        lastX = lastX + (targetX - lastX) * 0.2
        lastY = lastY + (targetY - lastY) * 0.2

        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${lastX}px, ${lastY}px) translate(-50%, -50%)`
        }
      })
    }

    // Only add the event listener on desktop devices
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [cursorRef])
}

