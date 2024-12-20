'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Wand2, Eraser, ImageIcon, PenTool, Video, Type, ArrowUpCircle } from 'lucide-react'
import { cn } from "@/lib/utils"

interface Tool {
  id: string
  name: string
  icon: React.ReactNode
  title: string
  description: string
  images: string[]
}

const tools: Tool[] = [
  {
    id: 'ai-image-generation',
    name: 'AI Image Generation',
    icon: <Wand2 className="w-8 h-8" />,
    title: 'Create Stunning Images with AI',
    description: 'Generate unique, high-quality images from text descriptions. Our AI understands complex prompts and produces vivid, creative visuals for any concept.',
    images: [
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800'
    ]
  },
  {
    id: 'erase-replace',
    name: 'Erase & Replace',
    icon: <Eraser className="w-8 h-8" />,
    title: 'Seamless Object Removal and Replacement',
    description: 'Effortlessly remove unwanted elements from your images and replace them with AI-generated content that blends perfectly with the surrounding area.',
    images: [
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800'
    ]
  },
  {
    id: 'outpainting',
    name: 'Outpainting',
    icon: <ImageIcon className="w-8 h-8" />,
    title: 'Expand Your Canvas with AI',
    description: 'Extend your images beyond their original boundaries. Our AI intelligently adds content to expand your visuals while maintaining consistency and style.',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ]
  },
  {
    id: 'sketch',
    name: 'Sketch',
    icon: <PenTool className="w-8 h-8" />,
    title: 'Turn Sketches into Masterpieces',
    description: 'Transform rough sketches or doodles into detailed, polished artwork. Our AI interprets your lines and brings your concepts to life with stunning detail.',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ]
  },
  {
    id: 'image-to-video',
    name: 'Image to Video',
    icon: <Video className="w-8 h-8" />,
    title: 'Animate Your Still Images',
    description: 'Breathe life into your static images by converting them into short, engaging videos. Add subtle motion and effects to create eye-catching content.',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ]
  },
  {
    id: 'text-to-video',
    name: 'Text to Video',
    icon: <Type className="w-8 h-8" />,
    title: 'Create Videos from Text',
    description: 'Turn your written ideas into dynamic video content. Our AI generates visuals, animations, and even narration based on your text input.',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ]
  },
  {
    id: 'hd-upscaler',
    name: 'HD Upscaler',
    icon: <ArrowUpCircle className="w-8 h-8" />,
    title: 'Enhance Image Quality',
    description: 'Dramatically improve the resolution and clarity of your images. Our AI upscaler adds detail and sharpness, making low-res images look professionally shot.',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ]
  }
]

export function ToolsShowcase() {
  const [activeTool, setActiveTool] = useState(tools[0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const galleryRef = useRef<HTMLDivElement>(null)

  const nextImage = () => {
    setDirection(1)
    setCurrentImageIndex((prev) => 
      prev === activeTool.images.length - 1 ? 0 : prev + 1
    )
  }

  const previousImage = () => {
    setDirection(-1)
    setCurrentImageIndex((prev) => 
      prev === 0 ? activeTool.images.length - 1 : prev - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [activeTool])

  useEffect(() => {
    const gallery = galleryRef.current
    if (!gallery) return

    const handleScroll = () => {
      const scrollPosition = gallery.scrollLeft
      const imageWidth = gallery.clientWidth
      const newIndex = Math.round(scrollPosition / imageWidth)
      setCurrentImageIndex(newIndex)
    }

    gallery.addEventListener('scroll', handleScroll)
    return () => gallery.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-purple-900/20 to-black/20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our AI-Powered Tools</h2>
        
        {/* Tools Navigation */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool) => (
              <motion.button
                key={tool.id}
                onClick={() => {
                  setActiveTool(tool)
                  setCurrentImageIndex(0)
                }}
                className={cn(
                  "group flex flex-col items-center p-4 rounded-xl",
                  "bg-purple-900/50 backdrop-blur-sm",
                  "border border-purple-500/20",
                  "transition-all duration-200",
                  "hover:border-purple-500/40 hover:bg-purple-900/60",
                  tool.id === activeTool.id && "border-purple-500 bg-purple-900/70"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 rounded-full bg-purple-800/50 flex items-center justify-center mb-2 transition-all duration-300 group-hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.4)] relative">
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                  <div className="text-white transition-all duration-300 group-hover:scale-110">
                    {React.cloneElement(tool.icon, { className: "w-10 h-10" })}
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-300 text-center max-w-[100px]">
                  {tool.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Feature Display */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentImageIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeTool.images[currentImageIndex]}
                  alt={`${activeTool.name} example ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gallery Navigation */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={previousImage}
                className="w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {activeTool.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentImageIndex 
                      ? "bg-white w-8" 
                      : "bg-white/50 hover:bg-white/75"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Tool Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white">
                {activeTool.title}
              </h3>
              <p className="text-lg text-gray-300">
                {activeTool.description}
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white transition-colors"
                >
                  Try Now
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

