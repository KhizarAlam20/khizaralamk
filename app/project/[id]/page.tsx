"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

// Mock project data - in a real app, this would come from a database or API
const projectsData = {
  "1": {
    title: "Minimalist Branding",
    category: "Brand Identity, Typography",
    description:
      "A comprehensive brand identity project for a modern tech startup. The goal was to create a clean, minimalist visual language that communicates innovation and reliability.",
    challenge:
      "The client needed a complete rebrand that would position them as a premium player in a competitive market while maintaining recognizability from their previous identity.",
    solution:
      "I developed a flexible design system centered around a distinctive monogram that works across digital and physical touchpoints. The color palette balances professionalism with approachability.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=Project%20Image%201",
      "/placeholder.svg?height=800&width=1200&text=Project%20Image%202",
      "/placeholder.svg?height=800&width=1200&text=Project%20Image%203",
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
  "2": {
    title: "Digital Art Series",
    category: "Digital Art, Illustration",
    description:
      "A series of digital illustrations exploring the intersection of technology and nature. This personal project allowed me to experiment with new techniques and visual storytelling.",
    challenge:
      "I wanted to create a cohesive series that maintained visual consistency while exploring diverse themes and subjects.",
    solution:
      "I developed a distinctive style using a limited color palette and consistent texturing techniques. Each piece stands alone but contributes to the larger narrative of the series.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=Project%20Image%201",
      "/placeholder.svg?height=800&width=1200&text=Project%20Image%202",
      "/placeholder.svg?height=800&width=1200&text=Project%20Image%203",
    ],
    technologies: ["Procreate", "Adobe Photoshop", "Blender"],
    links: {
      github: null,
      live: "https://example.com",
    },
  },
  "3": {
    title: "Editorial Design",
    category: "Print, Layout",
    description:
      "A magazine layout design for a cultural publication focusing on contemporary art and design. The project included cover design, layout system, and typographic guidelines.",
    challenge:
      "The publication needed a flexible system that could accommodate diverse content while maintaining a distinctive visual identity across issues.",
    solution:
      "I created a modular grid system and typographic hierarchy that allows for creative layouts while ensuring consistency. The design balances readability with visual impact.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=Project%20Image%201",
      "/placeholder.svg?height=800&width=1200&text=Project%20Image%202",
      "/placeholder.svg?height=800&width=1200&text=Project%20Image%203",
    ],
    technologies: ["Adobe InDesign", "Adobe Illustrator", "Typography"],
    links: {
      github: null,
      live: "https://example.com",
    },
  },
  "4": {
    title: "Packaging Design",
    category: "3D, Product Design",
    description:
      "A packaging design project for a premium skincare brand. The project included primary packaging, outer box design, and point-of-sale materials.",
    challenge:
      "The brand needed packaging that communicated luxury and sustainability while standing out in a crowded market.",
    solution:
      "I developed a minimalist design approach using sustainable materials and subtle embossing techniques. The packaging uses recyclable materials while maintaining a premium feel.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=Project%20Image%201",
      "/placeholder.svg?height=800&width=1200&text=Project%20Image%202",
      "/placeholder.svg?height=800&width=1200&text=Project%20Image%203",
    ],
    technologies: ["Adobe Dimension", "Adobe Illustrator", "Blender"],
    links: {
      github: null,
      live: "https://example.com",
    },
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectsData[projectId as keyof typeof projectsData];

  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [currentImage, setCurrentImage] = useState(0)

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

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Project not found</p>
      </div>
    )
  }

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

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-12">{project.category}</p>

          <div className="mb-16 relative aspect-video overflow-hidden">
            <Image
              src={project.images[currentImage] || "/placeholder.svg"}
              alt={project.title}
              width={1200}
              height={800}
              className="object-cover w-full h-full"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${currentImage === index ? "bg-white" : "bg-white/50"}`}
                  onClick={() => setCurrentImage(index)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-lg mb-8">{project.description}</p>

              <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
              <p className="text-lg mb-8">{project.challenge}</p>

              <h2 className="text-2xl font-semibold mb-4">Solution</h2>
              <p className="text-lg mb-8">{project.solution}</p>
            </div>

            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
                <ul className="space-y-2">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="text-lg">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Links</h2>
                <div className="space-y-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-lg hover:underline"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <FaGithub className="w-5 h-5" />
                      View Code
                    </a>
                  )}

                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-lg hover:underline"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                className="aspect-square overflow-hidden"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => setCurrentImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} thumbnail ${index + 1}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full cursor-pointer"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}

