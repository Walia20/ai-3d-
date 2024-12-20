'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, Zap, PenTool, Replace, Maximize, Download, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const tools = [
  { name: 'HD Upscaler', icon: <Zap className="w-6 h-6" />, description: 'Enhance the resolution of your images to HD quality, bringing out intricate details and sharpness.' },
  { name: 'AI Image Generation', icon: <PenTool className="w-6 h-6" />, description: 'Generate stunning visuals from text prompts, unleashing unlimited creative possibilities.' },
  { name: 'Text-to-Image', icon: <PenTool className="w-6 h-6" />, description: 'Transform written descriptions into breathtaking artwork, bridging imagination and reality.' },
  { name: 'Replace', icon: <Replace className="w-6 h-6" />, description: 'Seamlessly replace objects or sections in images, maintaining perfect harmony and realism.' },
  { name: 'Outpainting', icon: <Maximize className="w-6 h-6" />, description: 'Expand image boundaries with AI-generated content, extending your visual narrative.' },
]

const ToolNode: React.FC<{ tool: typeof tools[0], index: number }> = ({ tool, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-20 h-20 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-500/50 shadow-lg"
        whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(168, 85, 247, 0.4)' }}
      >
        <div className="text-purple-400">
          {tool.icon}
        </div>
      </motion.div>
      <div className="mt-4 text-sm font-medium text-purple-300">{tool.name}</div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-full mt-2 p-4 bg-black/90 rounded-md text-sm text-white z-10 w-64 text-center shadow-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {tool.description}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export const WorkflowChart: React.FC = () => {
  return (
    <div className="w-[calc(100%+4rem)] md:w-[calc(100%+8rem)] lg:w-[calc(100%+16rem)] -mx-8 md:-mx-16 lg:-mx-32 py-12 bg-black/20 backdrop-blur-sm border-t border-b border-purple-500/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white/90">
          AI-Powered Image Editing Workflow
        </h2>
        <p className="text-lg text-center text-purple-300 mb-12 max-w-3xl mx-auto">
          Experience the future of image editing with our cutting-edge AI tools. Transform your visuals in just a few clicks.
        </p>
        <div className="relative flex flex-col items-center">
          {/* Input Box */}
          <motion.div
            className="w-80 h-40 bg-purple-900/30 rounded-lg border border-purple-500/50 p-6 flex flex-col items-center justify-center mb-16 shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}
          >
            <Upload className="w-12 h-12 mb-4 text-purple-400" />
            <div className="text-lg font-medium text-purple-300 mb-2">User Input</div>
            <div className="text-sm text-gray-400 text-center">
              Upload an Image or Enter a Prompt to begin your creative journey
            </div>
          </motion.div>

          {/* Tools Section */}
          <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl mx-auto mb-16">
            {tools.map((tool, index) => (
              <ToolNode key={tool.name} tool={tool} index={index} />
            ))}
          </div>

          {/* Output Box */}
          <motion.div
            className="w-80 h-40 bg-purple-900/30 rounded-lg border border-purple-500/50 p-6 flex flex-col items-center justify-center mb-16 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}
          >
            <Download className="w-12 h-12 mb-4 text-purple-400" />
            <div className="text-lg font-medium text-purple-300 mb-2">Final Output</div>
            <div className="text-sm text-gray-400 text-center">
              Download or Share Your Masterpiece with the World
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
              Get Started with AI Editing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            className="mt-16 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-purple-300 mb-8">Why Choose Our AI-Powered Workflow?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <ul className="text-gray-400 text-lg space-y-4">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Lightning-fast processing for instant edits
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Intuitive tools adapting to your creativity
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <ul className="text-gray-400 text-lg space-y-4">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Seamless integration with design software
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Regular updates with AI advancements
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

