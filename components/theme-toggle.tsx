"use client"

import { useTheme } from "@/components/theme-provider"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

interface ThemeToggleProps {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export function ThemeToggle({ onMouseEnter, onMouseLeave }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  return (
    <motion.button
      className="fixed z-40 bottom-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </motion.button>
  )
}

