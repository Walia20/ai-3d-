'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Play } from 'lucide-react'
import { Starfield } from "@/components/starfield"
import { GradientBackground } from "@/components/gradient-background"
import { Footer } from "@/components/footer"
import { Wand2, Eraser, ImageIcon, PenTool, Video, Type, ArrowUpCircle } from 'lucide-react'
import { WorkProcess } from "@/components/work-process"
import { ToolsShowcase } from "@/components/tools-showcase"
import { ToolFeatures } from "@/components/tool-features"

// App icons that will float around
const apps = [
  { name: 'AI Image Generation', icon: <Wand2 className="w-8 h-8 text-purple-400" />, position: { top: '15%', left: '10%' } },
  { name: 'Erase & Replace', icon: <Eraser className="w-8 h-8 text-purple-400" />, position: { top: '20%', right: '10%' } },
  { name: 'Outpainting', icon: <ImageIcon className="w-8 h-8 text-purple-400" />, position: { bottom: '25%', left: '5%' } },
  { name: 'Sketch', icon: <PenTool className="w-8 h-8 text-purple-400" />, position: { bottom: '20%', right: '5%' } },
  { name: 'Image to Video', icon: <Video className="w-8 h-8 text-purple-400" />, position: { top: '40%', left: '2%' } },
  { name: 'Text to Video', icon: <Type className="w-8 h-8 text-purple-400" />, position: { top: '35%', right: '2%' } },
  { name: 'HD Upscaler', icon: <ArrowUpCircle className="w-8 h-8 text-purple-400" />, position: { top: '60%', left: '15%' } },
]

const FloatingIcon = ({ app, index }: { app: typeof apps[0], index: number }) => {
  return (
    <motion.div
      className="absolute"
      style={app.position}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        ...generateFloatingAnimation()
      }}
      transition={{
        duration: 2,
        delay: index * 0.2,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <div className="bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 shadow-lg hover:border-purple-500/20 transition-colors">
        {React.cloneElement(app.icon, { className: "w-8 h-8 text-purple-400/60" })}
      </div>
    </motion.div>
  )
}

const generateFloatingAnimation = () => {
  const yOffset = Math.random() * 20 + 10 // Random offset between 10 and 30
  return {
    y: [0, -yOffset, 0],
    transition: {
      duration: 3 + Math.random() * 2, // Random duration between 3 and 5 seconds
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Starfield />
      <GradientBackground />

      <div className="relative z-10 flex flex-col flex-grow">
        {/* Header */}
        <header className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl z-50">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2 pl-4 md:pl-8">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
                Image to 3D
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-sm text-gray-200 hover:text-purple-400 transition-colors hover:glow">
                Home
              </a>
              <a href="/solutions" className="text-sm text-purple-400 transition-colors hover:glow">
                Solutions
              </a>
              <a href="/pricing" className="text-sm text-gray-200 hover:text-purple-400 transition-colors hover:glow">
                Pricing
              </a>
              <a href="/contact" className="text-sm text-gray-200 hover:text-purple-400 transition-colors hover:glow">
                Contact
              </a>
            </nav>
            <div className="pr-4 md:pr-8">
              <Button className="bg-purple-600 hover:bg-purple-700">Try for Free</Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 overflow-hidden">
            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
              {apps.map((app, index) => (
                <FloatingIcon key={index} app={app} index={index} />
              ))}
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  Transform your{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    images
                  </span>{' '}
                  into stunning{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    3D models
                  </span>{' '}
                  with AI
                </h1>

                <p className="max-w-2xl mx-auto text-xl text-gray-400">
                  Unleash your creativity with our AI-powered tools. From outpainting and upscaling to image-to-video conversion, bring your ideas to life in ways you never imagined.
                </p>

                <div className="pt-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg shadow-xl group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Watch Demo
                        <span className="text-sm opacity-60">3mins</span>
                      </span>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-700/20 rounded-full blur-3xl" />
          </section>

          {/* Work Process Section */}
          <WorkProcess />
          {/* Tools Showcase Section */}
          <ToolsShowcase />
          {/* Tools Features Section */}
          <ToolFeatures />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

