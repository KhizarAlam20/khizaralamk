"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useOptimizedGSAP() {
  const initialized = useRef(false)

  useEffect(() => {
    // Only initialize GSAP once
    if (initialized.current) return
    initialized.current = true

    // Hero section animation
    gsap.from(".hero-name", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    })

    gsap.from(".social-icon", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      delay: 0.6,
      ease: "power3.out",
    })

    // Set up scroll triggers with better performance settings
    ScrollTrigger.batch(".about-title", {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
        })
      },
      start: "top 80%",
    })

    ScrollTrigger.batch(".skill-item", {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
        })
      },
      start: "top 80%",
    })

    ScrollTrigger.batch(".design-project", {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        })
      },
      start: "top 80%",
    })

    ScrollTrigger.batch(".app-project", {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        })
      },
      start: "top 80%",
    })

    ScrollTrigger.batch(".testimonial", {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        })
      },
      start: "top 80%",
    })

    ScrollTrigger.batch(".contact-content", {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
        })
      },
      start: "top 80%",
    })

    // Optimize smooth scroll animation
    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
        y: 20,
        ease: "none",
      })
    })

    // Clean up all ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}

