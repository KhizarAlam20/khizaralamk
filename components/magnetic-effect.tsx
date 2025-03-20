"use client"

import { useEffect, type RefObject } from "react"
import { gsap } from "gsap"

export function useMagneticEffect(ref: RefObject<HTMLDivElement>, setIsHovering: (isHovering: boolean) => void) {
  useEffect(() => {
    if (!ref.current) return

    const icons = ref.current.querySelectorAll(".social-icon")
    const eventListeners: { element: Element; type: string; handler: EventListener }[] = []

    const addEvent = (element: Element, type: string, handler: EventListener) => {
      element.addEventListener(type, handler)
      eventListeners.push({ element, type, handler })
    }

    icons.forEach((icon) => {
      // Throttled mousemove handler
      let lastExecution = 0
      const throttleDelay = 10 // ms

      const handleMouseEnter = () => setIsHovering(true)
      const handleMouseLeave = () => {
        setIsHovering(false)
        gsap.to(icon, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        })
      }

      const handleMouseMove = (e: Event) => {
        const now = Date.now()
        if (now - lastExecution < throttleDelay) return
        lastExecution = now

        const mouseEvent = e as MouseEvent
        const rect = icon.getBoundingClientRect()
        const x = mouseEvent.clientX - rect.left - rect.width / 2
        const y = mouseEvent.clientY - rect.top - rect.height / 2

        gsap.to(icon, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.4,
          ease: "power2.out",
        })
      }

      addEvent(icon, "mouseenter", handleMouseEnter)
      addEvent(icon, "mouseleave", handleMouseLeave)
      addEvent(icon, "mousemove", handleMouseMove)
    })

    // Clean up all event listeners
    return () => {
      eventListeners.forEach(({ element, type, handler }) => {
        element.removeEventListener(type, handler)
      })
    }
  }, [ref, setIsHovering])
}

