'use client'

import { motion } from 'framer-motion'
import { Upload, Wand2, Paintbrush2, Share2 } from 'lucide-react'
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Upload Image",
    description: "Easily upload your image to begin editing.",
    icon: <Upload className="w-6 h-6" />,
  },
  {
    number: "02",
    title: "Choose Tool",
    description: "Select from our AI-powered tools like Object Removal, Image Upscaler, or Style Transfer.",
    icon: <Wand2 className="w-6 h-6" />,
  },
  {
    number: "03",
    title: "Edit Image",
    description: "Leverage AI to enhance, edit, or transform your image with precision.",
    icon: <Paintbrush2 className="w-6 h-6" />,
  },
  {
    number: "04",
    title: "Download & Share",
    description: "Download the edited image or share it directly to your platforms.",
    icon: <Share2 className="w-6 h-6" />,
  },
]

const tools = [
  "Object Removal",
  "Style Transfer",
  "Image Upscaler",
  "Background Blur",
]

const BeamOfLight = () => (
  <motion.div
    className="absolute top-[50px] left-[10%] w-[80%] h-px bg-purple-500/50 hidden md:block"
    initial={{ scaleX: 0, originX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 2, ease: "linear", repeat: Infinity }}
  />
)

export function WorkProcess() {
  return (
    <section className="pt-16 pb-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-wider text-purple-400 mb-2"
          >
            Our Work Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Harnessing AI for Image Editing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Streamlining your workflow with cutting-edge technology
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative isolate">
          {/* Connection Line */}
          <div className="absolute top-[50px] left-[10%] w-[80%] h-px bg-purple-500/20 hidden md:block" />
          <BeamOfLight />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="relative inline-block mb-6 mt-[60px]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={cn(
                      "w-20 h-20 rounded-full",
                      "bg-purple-900/50 backdrop-blur-sm",
                      "border-2 border-purple-400",
                      "flex items-center justify-center",
                      "relative z-10",
                      "mt-[-50px]",
                      "before:absolute before:top-[-8px] before:left-[-8px] before:right-[-8px] before:bottom-[-8px] before:bg-gradient-to-br before:from-purple-600 before:to-purple-900 before:rounded-full before:-z-10 before:opacity-30 before:blur-sm",
                      "after:absolute after:top-[-2px] after:left-[-2px] after:right-[-2px] after:bottom-[-2px] after:bg-purple-400 after:rounded-full after:-z-20 after:filter after:blur-sm after:opacity-20"
                    )}
                  >
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center text-sm font-mono text-white">
                      {step.number}
                    </div>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4 px-8 py-4 rounded-full bg-purple-900/20 backdrop-blur-sm border border-purple-500/20">
            {tools.map((tool, index) => (
              <span key={index} className="text-purple-400">
                {index > 0 && <span className="mr-4 text-purple-600">★</span>}
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

