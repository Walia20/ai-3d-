'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Wand2, Eraser, ImageIcon, PenTool, Video, ArrowUpCircle } from 'lucide-react'

const tools = [
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "AI Image Generation",
    description: "Create stunning images with AI from text descriptions.",
    action: "Generate Images"
  },
  {
    icon: <Eraser className="w-8 h-8" />,
    title: "Erase & Replace",
    description: "Seamlessly remove and replace objects in your images.",
    action: "Edit Image"
  },
  {
    icon: <ImageIcon className="w-8 h-8" />,
    title: "Outpainting",
    description: "Expand your canvas beyond original image boundaries.",
    action: "Expand Image"
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Sketch to Image",
    description: "Transform rough sketches into detailed artwork.",
    action: "Convert Sketch"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Image to Video",
    description: "Turn static images into short, engaging videos.",
    action: "Create Video"
  },
  {
    icon: <ArrowUpCircle className="w-8 h-8" />,
    title: "HD Upscaler",
    description: "Enhance image quality and resolution with AI.",
    action: "Upscale Image"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
}

export function ToolFeatures() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-black/10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-700/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Transform Your Images Like Never Before
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our AI-powered tools and take your creativity to the next level.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <Card className="h-full p-6 bg-purple-900/20 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-purple-800/50 flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.2)]">
                    <div className="text-purple-400 transition-all duration-300 group-hover:scale-110">
                      {tool.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-gray-400 mb-6 flex-grow">
                    {tool.description}
                  </p>
                  <Button 
                    className="w-full bg-purple-600/20 hover:bg-purple-600/40 text-purple-400 border border-purple-500/20"
                  >
                    {tool.action}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Start Your Image Editing Journey Today!
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Sign up now and explore the full potential of AI-powered tools.
            </p>
            <Button 
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:shadow-purple-500/25 hover:scale-105"
            >
              Get Started
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

