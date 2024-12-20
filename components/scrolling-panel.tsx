'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { CuboidIcon as Cube, ImageIcon, Video, Box, Shapes, Building2, Camera, Palette, Glasses, Smartphone, Laptop, Brush, Clapperboard, Gamepad, Car, Shirt } from 'lucide-react'

const items = [
  {
    icon: <Cube className="h-6 w-6 text-purple-400" />,
    title: "Product Visualization",
    description: "Convert product images into interactive 3D models"
  },
  {
    icon: <Building2 className="h-6 w-6 text-blue-400" />,
    title: "Architectural Rendering",
    description: "Transform building sketches into 3D visualizations"
  },
  {
    icon: <ImageIcon className="h-6 w-6 text-green-400" />,
    title: "Photo to 3D Scene",
    description: "Convert regular photos into immersive 3D environments"
  },
  {
    icon: <Video className="h-6 w-6 text-red-400" />,
    title: "Animation Ready",
    description: "Create animated 3D models from static images"
  },
  {
    icon: <Box className="h-6 w-6 text-yellow-400" />,
    title: "Package Design",
    description: "Transform packaging designs into 3D mockups"
  },
  {
    icon: <Shapes className="h-6 w-6 text-orange-400" />,
    title: "Custom Objects",
    description: "Convert custom designs into detailed 3D models"
  },
  {
    icon: <Camera className="h-6 w-6 text-indigo-400" />,
    title: "3D Photography",
    description: "Turn 2D photographs into 3D-like experiences"
  },
  {
    icon: <Palette className="h-6 w-6 text-pink-400" />,
    title: "Texture Mapping",
    description: "Apply high-quality textures to 3D models automatically"
  },
  {
    icon: <Glasses className="h-6 w-6 text-cyan-400" />,
    title: "VR Ready Models",
    description: "Create VR-compatible 3D models from 2D designs"
  },
  {
    icon: <Smartphone className="h-6 w-6 text-lime-400" />,
    title: "Mobile AR",
    description: "Generate mobile-friendly AR models from images"
  },
  {
    icon: <Laptop className="h-6 w-6 text-violet-400" />,
    title: "Web 3D Viewer",
    description: "Convert images to 3D models for web integration"
  },
  {
    icon: <Brush className="h-6 w-6 text-amber-400" />,
    title: "Artistic 3D",
    description: "Transform artwork into 3D sculptures"
  },
  {
    icon: <Clapperboard className="h-6 w-6 text-rose-400" />,
    title: "Film Set Design",
    description: "Convert set sketches into 3D environments"
  },
  {
    icon: <Gamepad className="h-6 w-6 text-emerald-400" />,
    title: "Game Asset Creation",
    description: "Turn concept art into 3D game assets"
  },
  {
    icon: <Car className="h-6 w-6 text-sky-400" />,
    title: "Automotive 3D",
    description: "Convert car designs into detailed 3D models"
  },
  {
    icon: <Shirt className="h-6 w-6 text-fuchsia-400" />,
    title: "Fashion 3D",
    description: "Transform fashion sketches into 3D garment models"
  }
]

export function ScrollingPanel() {
  const [duplicatedItems, setDuplicatedItems] = useState(items)

  useEffect(() => {
    // Duplicate items to create seamless scrolling
    setDuplicatedItems([...items, ...items])
  }, [])

  return (
    <div className="w-[calc(100%+4rem)] md:w-[calc(100%+8rem)] lg:w-[calc(100%+16rem)] -mx-8 md:-mx-16 lg:-mx-32 overflow-hidden bg-black/20 backdrop-blur-sm border-t border-b border-purple-500/10 py-8">
      <div className="relative">
        <motion.div
          animate={{
            x: [0, -50 * duplicatedItems.length],
          }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-6 whitespace-nowrap pl-8 md:pl-16 lg:pl-32"
        >
          {duplicatedItems.map((item, index) => (
            <Card
              key={index}
              className="inline-flex items-center gap-4 p-4 bg-purple-950/40 border-purple-500/20 hover:border-purple-500/40 transition-colors min-w-[320px] max-w-[320px]"
            >
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-purple-900/50 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex flex-col overflow-hidden">
                <h3 className="text-sm font-semibold text-white truncate">{item.title}</h3>
                <p className="text-xs text-gray-400 line-clamp-2">{item.description}</p>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

