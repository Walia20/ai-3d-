'use client'

import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

const projectTypes = [
  "Create photorealistic 3D models",
  "Convert architectural blueprints",
  "Generate product visualizations",
  "Transform concept art to 3D",
  "Build virtual showrooms",
  "Design interactive exhibitions",
  "Create gaming assets",
  "Develop AR experiences",
  "Make educational 3D content",
  "Build virtual prototypes"
]

export function ProjectTypes() {
  return (
    <section className="w-full bg-black/20 backdrop-blur-sm border-t border-b border-purple-500/10 py-16 mt-16">
      <div className="container px-4 max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
        >
          What can you create?
        </motion.h2>
        <p className="text-lg md:text-xl text-center mb-12 text-purple-300 max-w-3xl mx-auto">
          Explore the diverse applications of our AI-powered 3D conversion technology.
          From product design to virtual reality, the possibilities are endless.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {projectTypes.map((type, index) => (
            <motion.button
              key={type}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(168, 85, 247, 0.2)" 
              }}
              className={cn(
                "px-6 py-3 rounded-full text-sm md:text-base",
                "bg-black/40 backdrop-blur-sm",
                "border border-purple-500/20 hover:border-purple-500/40",
                "text-gray-300 hover:text-white",
                "transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-purple-500/20",
                "cursor-pointer"
              )}
            >
              {type}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

