"use client"

import type React from "react"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { FaGithub, FaTwitter, FaLinkedin, FaDribbble, FaReact, FaNodeJs, FaFigma, FaMouse } from "react-icons/fa"
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiAdobecreativecloud,
  SiFlutter,
} from "react-icons/si"
import { TbBrandNextjs, TbBrandFramerMotion } from "react-icons/tb"
import Image from "next/image"
import Link from "next/link"
import LoadingScreen from "@/components/loading-screen"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

export default function Portfolio() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const socialIconsRef = useRef<HTMLDivElement>(null)
  const aboutSectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Custom cursor effect - only on desktop
  useEffect(() => {
    if (isMobile) return

    let rafId: number
    let lastX = 0
    let lastY = 0

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }

      rafId = requestAnimationFrame(() => {
        const targetX = e.clientX
        const targetY = e.clientY

        // Smoother movement with linear interpolation
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
  }, [isMobile])

  // Enhanced magnetic effect for social icons
  useEffect(() => {
    if (isMobile || !socialIconsRef.current) return

    const icons = socialIconsRef.current.querySelectorAll(".social-icon")
    const eventListeners: { element: Element; type: string; handler: EventListener }[] = []

    const addEvent = (element: Element, type: string, handler: EventListener) => {
      element.addEventListener(type, handler)
      eventListeners.push({ element, type, handler })
    }

    icons.forEach((icon) => {
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
        const mouseEvent = e as MouseEvent
        const rect = icon.getBoundingClientRect()
        const x = mouseEvent.clientX - rect.left - rect.width / 2
        const y = mouseEvent.clientY - rect.top - rect.height / 2

        // Reduced strength of magnetic effect to prevent cursor hanging
        gsap.to(icon, {
          x: x * 0.3, // Reduced from 0.5 to 0.3
          y: y * 0.3, // Reduced from 0.5 to 0.3
          duration: 0.2, // Faster response
          ease: "power1.out", // Smoother easing
        })
      }

      addEvent(icon, "mouseenter", handleMouseEnter)
      addEvent(icon, "mouseleave", handleMouseLeave)
      addEvent(icon, "mousemove", handleMouseMove)
    })

    return () => {
      eventListeners.forEach(({ element, type, handler }) => {
        element.removeEventListener(type, handler)
      })
    }
  }, [isMobile])

  // Scroll to about section
  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      gsap.to(window, {
        duration: 2.5, // Increased for slower scrolling
        scrollTo: {
          y: aboutSectionRef.current,
          offsetY: 50,
        },
        ease: "power2.inOut", // Smoother easing
      })
    }
  }

  // GSAP animations for sections with slower scrolling and fade effects
  useEffect(() => {
    // Configure smooth scrolling
    gsap.config({
      nullTargetWarn: false,
    })

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

    // Set up scroll triggers with fade effects for elements leaving viewport
    ScrollTrigger.batch(".fade-section", {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
        })
      },
      onLeave: (elements) => {
        gsap.to(elements, {
          opacity: 0,
          y: -50,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        })
      },
      onEnterBack: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        })
      },
      onLeaveBack: (elements) => {
        gsap.to(elements, {
          opacity: 0,
          y: 50,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        })
      },
      start: "top 85%",
      end: "bottom 15%",
    })

    // About section animations
    ScrollTrigger.batch(".about-title", {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 50,
          duration: 1,
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
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
        })
      },
      start: "top 80%",
    })

    ScrollTrigger.batch(".design-project", {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 50,
          duration: 1,
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
          duration: 1,
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
          duration: 1,
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
          duration: 1,
          ease: "power3.out",
        })
      },
      start: "top 80%",
    })

    // Optimize smooth scroll animation with slower speed
    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 3, // Increased for even slower, smoother scrolling
        },
        y: 20,
        ease: "none",
      })
    })

    // Clean up all ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [isMobile])

  // Memoize event handlers to prevent unnecessary re-renders
  const handleMouseEnter = useCallback(() => setIsHovering(true), [])
  const handleMouseLeave = useCallback(() => setIsHovering(false), [])

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))

      // Clear error when user starts typing
      if (formErrors[name as keyof typeof formErrors]) {
        setFormErrors((prev) => ({ ...prev, [name]: "" }))
      }
    },
    [formErrors],
  )

  const validateForm = useCallback(() => {
    let valid = true
    const newErrors = { name: "", email: "", message: "" }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      valid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      valid = false
    }

    setFormErrors(newErrors)
    return valid
  }, [formData])

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()

      if (validateForm()) {
        setFormSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
          setFormSubmitting(false)
          setFormSubmitted(true)
          setFormData({ name: "", email: "", message: "" })

          // Reset form submitted status after 5 seconds
          setTimeout(() => {
            setFormSubmitted(false)
          }, 5000)
        }, 1500)
      }
    },
    [validateForm],
  )

  return (
    <main className="relative bg-white font-['Plus_Jakarta_Sans'] overflow-hidden max-w-[1920px] mx-auto">
      <LoadingScreen />

      {/* Custom cursor - only visible on desktop */}
      {!isMobile && (
        <div
          ref={cursorRef}
          className={`fixed w-6 h-6 rounded-full bg-black pointer-events-none z-50 transition-transform duration-100 ${isHovering ? "scale-[2]" : "scale-100"}`}
          style={{
            left: 0,
            top: 0,
            transform: "translate(0px, 0px) translate(-50%, -50%)",
          }}
        />
      )}

      {/* Hero Section */}
      <section className="fade-section min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 py-20 relative">
        <h1 className="hero-name text-5xl md:text-8xl lg:text-8xl tracking-tighter mb-5 font-hi">Khizar Alam</h1>
        <div ref={socialIconsRef} className="flex space-x-6 p-1">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon relative inline-block"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaGithub className="w-7 h-7" />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon relative inline-block"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaTwitter className="w-7 h-7" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon relative inline-block"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaLinkedin className="w-7 h-7" />
          </motion.a>
          <motion.a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon relative inline-block"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaDribbble className="w-7 h-7" />
          </motion.a>
        </div>

        {/* Static Mouse icon - outline version */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.1 }}
          >
            <FaMouse
              className="w-8 h-8 text-black"
              style={{ fill: "none", stroke: "currentColor", strokeWidth: "1px" }}
            />
          </motion.button>
        </div>
      </section>

      {/* About Section - Simplified */}
      <section ref={aboutSectionRef} className="fade-section about-section px-4 md:px-8 lg:px-16 min-h-screen flex items-center">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* About text on left */}
      <div>
        <h2 className="about-title text-5xl md:text-5xl font-jakarta tracking-tight mb-12">About</h2>
        <p className="text-lg leading-relaxed mb-6">
          I'm a creative developer specializing in crafting exceptional digital experiences. With expertise in
          both design and development, I create solutions that are visually compelling and technically robust.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          My approach combines aesthetic design with technical excellence, ensuring every project exceeds
          expectations and delivers measurable results for clients across various industries.
        </p>
      </div>

      {/* Skills on right */}
      <div>
        <h3 className="text-2xl font-bold mb-8">My Skills</h3>

        <div className="mb-8">
          <h4 className="text-xl font-medium mb-4">Frontend</h4>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <FaReact className="text-blue-500 w-6 h-6" />
              <span>React</span>
            </div>
            <div className="flex items-center gap-2">
              <TbBrandNextjs className="w-6 h-6" />
              <span>Next.js</span>
            </div>
            <div className="flex items-center gap-2">
              <SiJavascript className="text-yellow-400 w-6 h-6" />
              <span>JavaScript</span>
            </div>
            <div className="flex items-center gap-2">
              <SiTypescript className="text-blue-600 w-6 h-6" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <SiTailwindcss className="text-cyan-500 w-6 h-6" />
              <span>Tailwind</span>
            </div>
            <div className="flex items-center gap-2">
              <TbBrandFramerMotion className="w-6 h-6" />
              <span>Framer</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-medium mb-4">Backend</h4>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <FaNodeJs className="text-green-600 w-6 h-6" />
              <span>Node.js</span>
            </div>
            <div className="flex items-center gap-2">
              <SiExpress className="w-6 h-6" />
              <span>Express</span>
            </div>
            <div className="flex items-center gap-2">
              <SiMongodb className="text-green-500 w-6 h-6" />
              <span>MongoDB</span>
            </div>
            <div className="flex items-center gap-2">
              <SiPostgresql className="text-blue-700 w-6 h-6" />
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-medium mb-4">Design & Mobile</h4>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <FaFigma className="text-purple-500 w-6 h-6" />
              <span>Figma</span>
            </div>
            <div className="flex items-center gap-2">
              <SiAdobecreativecloud className="text-red-500 w-6 h-6" />
              <span>Adobe CC</span>
            </div>
            <div className="flex items-center gap-2">
              <SiFlutter className="text-blue-400 w-6 h-6" />
              <span>Flutter</span>
            </div>
            <div className="flex items-center gap-2">
              <FaReact className="text-blue-500 w-6 h-6" />
              <span>React Native</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Design Projects */}
      <section className="fade-section design-projects py-20 px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl md:text-6xl font-jakarata tracking-tight">Design</h2>
          <Link
            href="/all-designs"
            className="text-lg underline underline-offset-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="design-project aspect-square overflow-hidden">
            <Link href="/project/1">
              <motion.div
                className="w-full h-full relative"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Design Project 1"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 p-6 bg-white bg-opacity-90">
                  <h3 className="text-2xl font-semibold">Minimalist Branding</h3>
                  <p className="text-gray-700">Brand Identity, Typography</p>
                </div>
              </motion.div>
            </Link>
          </div>
          <div className="design-project aspect-square overflow-hidden">
            <Link href="/project/2">
              <motion.div
                className="w-full h-full relative"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src="https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Design Project 2"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 p-6 bg-white bg-opacity-90">
                  <h3 className="text-2xl font-semibold">Digital Art Series</h3>
                  <p className="text-gray-700">Digital Art, Illustration</p>
                </div>
              </motion.div>
            </Link>
          </div>
          <div className="design-project aspect-square overflow-hidden">
            <Link href="/project/3">
              <motion.div
                className="w-full h-full relative"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src="https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Design Project 3"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 p-6 bg-white bg-opacity-90">
                  <h3 className="text-2xl font-semibold">Editorial Design</h3>
                  <p className="text-gray-700">Print, Layout</p>
                </div>
              </motion.div>
            </Link>
          </div>
          <div className="design-project aspect-square overflow-hidden">
            <Link href="/project/4">
              <motion.div
                className="w-full h-full relative"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Design Project 4"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 p-6 bg-white bg-opacity-90">
                  <h3 className="text-2xl font-semibold">Packaging Design</h3>
                  <p className="text-gray-700">3D, Product Design</p>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile App Projects - 6 projects */}
      <section className="fade-section app-projects py-20 px-4 md:px-8 lg:px-16">
        <h2 className="text-5xl md:text-6xl font-jakarta tracking-tight mb-16">Mobile Apps</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="app-project md:col-span-8 aspect-video overflow-hidden">
            <motion.div
              className="w-full h-full relative"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src="https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="App Project 1"
                width={1200}
                height={600}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-white bg-opacity-90">
                <h3 className="text-2xl font-semibold">Fitness Tracker</h3>
                <p className="text-gray-700">iOS, Android, React Native</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium bg-black text-white px-2 py-1 rounded-full">
                    500K+ Downloads
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="app-project md:col-span-4 aspect-[3/4] overflow-hidden">
            <motion.div
              className="w-full h-full relative"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src="https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="App Project 2"
                width={600}
                height={800}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-white bg-opacity-90">
                <h3 className="text-2xl font-semibold">Finance App</h3>
                <p className="text-gray-700">iOS, Swift</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium bg-black text-white px-2 py-1 rounded-full">
                    250K+ Downloads
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="app-project aspect-square overflow-hidden">
            <motion.div
              className="w-full h-full relative"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="App Project 3"
                width={800}
                height={800}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-white bg-opacity-90">
                <h3 className="text-2xl font-semibold">Social Network</h3>
                <p className="text-gray-700">Android, Kotlin</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium bg-black text-white px-2 py-1 rounded-full">1M+ Downloads</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="app-project aspect-square overflow-hidden">
            <motion.div
              className="w-full h-full relative"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="App Project 4"
                width={800}
                height={800}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-white bg-opacity-90">
                <h3 className="text-2xl font-semibold">E-commerce Platform</h3>
                <p className="text-gray-700">Cross-platform, Flutter</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium bg-black text-white px-2 py-1 rounded-full">
                    750K+ Downloads
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="app-project aspect-square overflow-hidden">
            <motion.div
              className="w-full h-full relative"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="App Project 5"
                width={800}
                height={800}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-white bg-opacity-90">
                <h3 className="text-2xl font-semibold">Travel Companion</h3>
                <p className="text-gray-700">iOS, SwiftUI</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium bg-black text-white px-2 py-1 rounded-full">
                    300K+ Downloads
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="app-project md:col-span-4 aspect-[3/4] overflow-hidden">
            <motion.div
              className="w-full h-full relative"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="App Project 6"
                width={600}
                height={800}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-white bg-opacity-90">
                <h3 className="text-2xl font-semibold">Health Monitor</h3>
                <p className="text-gray-700">iOS, Android, React Native</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium bg-black text-white px-2 py-1 rounded-full">
                    450K+ Downloads
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="app-project md:col-span-8 aspect-video overflow-hidden">
            <motion.div
              className="w-full h-full relative"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src="https://images.pexels.com/photos/3943746/pexels-photo-3943746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="App Project 7"
                width={1200}
                height={600}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-white bg-opacity-90">
                <h3 className="text-2xl font-semibold">Educational Platform</h3>
                <p className="text-gray-700">Cross-platform, Flutter</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium bg-black text-white px-2 py-1 rounded-full">
                    850K+ Downloads
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="fade-section testimonials py-20 px-4 md:px-8 lg:px-16">
        <h2 className="text-5xl md:text-6xl font-jakarta tracking-tight mb-16">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="testimonial p-5 border border-gray-200">
            <p className="text-lg italic mb-6">
              "Khizar's attention to detail and creative approach transformed our brand identity. The design work was
              exceptional, and the implementation was flawless."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sarah Johnson"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-gray-600">CEO, Designify</p>
                <div className="flex items-center mt-1">
                  <Image
                    src="/placeholder.svg?height=20&width=80&text=Upwork"
                    alt="Upwork"
                    width={80}
                    height={20}
                    className="h-5 w-auto"
                  />
                  <span className="ml-2 text-xs text-gray-500">★★★★★ 5.0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial p- border border-gray-200">
            <p className="text-xl italic mb-6">
              "Working with Khizar was a game-changer for our mobile app. His technical skills combined with design
              sensibility resulted in a product that exceeded our expectations."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Michael Chen"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h4 className="font-semibold">Michael Chen</h4>
                <p className="text-gray-600">CTO, AppLabs</p>
                <div className="flex items-center mt-1">
                  <Image
                    src="/placeholder.svg?height=20&width=80&text=Fiverr"
                    alt="Fiverr"
                    width={80}
                    height={20}
                    className="h-5 w-auto"
                  />
                  <span className="ml-2 text-xs text-gray-500">★★★★★ 5.0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial p-8 border border-gray-200">
            <p className="text-xl italic mb-6">
              "Khizar delivered our website redesign on time and with exceptional quality. The user experience
              improvements led to a 40% increase in conversions."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Emma Rodriguez"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h4 className="font-semibold">Emma Rodriguez</h4>
                <p className="text-gray-600">Marketing Director, TechFlow</p>
                <div className="flex items-center mt-1">
                  <Image
                    src="/placeholder.svg?height=20&width=80&text=Upwork"
                    alt="Upwork"
                    width={80}
                    height={20}
                    className="h-5 w-auto"
                  />
                  <span className="ml-2 text-xs text-gray-500">★★★★★ 5.0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial p-8 border border-gray-200">
            <p className="text-xl italic mb-6">
              "The branding work Khizar created for our startup was instrumental in securing our funding round.
              Professional, creative, and highly recommended."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="David Park"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h4 className="font-semibold">David Park</h4>
                <p className="text-gray-600">Founder, Innovate</p>
                <div className="flex items-center mt-1">
                  <Image
                    src="/placeholder.svg?height=20&width=80&text=Freelancer"
                    alt="Freelancer"
                    width={80}
                    height={20}
                    className="h-5 w-auto"
                  />
                  <span className="ml-2 text-xs text-gray-500">★★★★★ 5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="fade-section contact py-20 px-4 md:px-8 lg:px-16">
       
        <div className="contact-content grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
          <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-jakarta tracking-tight">Contact</h2>
        </div>
            <p className="text-lg mb-8">
              Interested in working together? Let's discuss your project and bring your ideas to life.
            </p>
            <div className="space-y-4">
              <p className="text-lg">
                <span className="font-semibold">Email:</span> hello@khizaralam.com
              </p>
              <p className="text-lg">
                <span className="font-semibold">Location:</span> Working Remotely
              </p>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              {formErrors.name && <p className="mt-1 text-red-500">{formErrors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              {formErrors.email && <p className="mt-1 text-red-500">{formErrors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-lg mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              ></textarea>
              {formErrors.message && <p className="mt-1 text-red-500">{formErrors.message}</p>}
            </div>
            <motion.button
              type="submit"
              className="px-8 py-3 bg-black text-white text-lg relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              disabled={formSubmitting}
            >
              {formSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : formSubmitted ? (
                "Message Sent!"
              ) : (
                "Send Message"
              )}
            </motion.button>
            {formSubmitted && (
              <p className="text-green-600 mt-2">Thank you for your message! I'll get back to you soon.</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-16 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-lg mb-4 md:mb-0">© {new Date().getFullYear()} Khizar Alam. All rights reserved.</p>
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <FaDribbble className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

