'use client'

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, Upload } from 'lucide-react'
import { Starfield } from "@/components/starfield"
import { GradientBackground } from "@/components/gradient-background"
import { motion } from "framer-motion"
import { ScrollingPanel } from "@/components/scrolling-panel"
import { StatsSection } from "@/components/stats-section"
import { FeaturesGrid } from "@/components/features-grid"
import { ProjectTypes } from "@/components/project-types"
import { TestimonialSection } from "@/components/testimonial-section"
import { UserReviews } from '@/components/user-reviews'
import { Footer } from "@/components/footer"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="mb-4">We're sorry for the inconvenience. Please try refreshing the page.</p>
        <p className="text-sm text-gray-400">Error: {error.message}</p>
      </div>
    </div>
  )
}

export default function Page() {
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Caught error:', event.error)
      setHasError(true)
      setError(event.error)
    }

    window.addEventListener('error', handleError)

    return () => {
      window.removeEventListener('error', handleError)
    }
  }, [])

  if (hasError && error) {
    return <ErrorFallback error={error} />
  }

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
              <a href="#" className="text-sm text-gray-200 hover:text-purple-400 transition-colors hover:glow">
                Home
              </a>
              <a href="/solutions" className="text-sm text-gray-200 hover:text-purple-400 transition-colors hover:glow">
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
        <main className="flex-grow pt-32 pb-20 px-4">
          <div className="container">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <motion.div variants={item}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent mb-6">
                  Transform Your 2D Images into Stunning 3D Models with AI Precision
                </h1>
              </motion.div>
              <motion.div variants={item}>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                  Experience next-gen image-to-model conversion with unmatched accuracy and speed.
                  Unlock the potential of your 2D designs and bring them to life in the
                  three-dimensional world with our cutting-edge AI technology.
                </p>
              </motion.div>
              <motion.div variants={item} className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Your Image
                </Button>
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600/10">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              {/* ScrollingPanel */}
              <motion.div variants={item} className="mt-16 -mx-8 md:-mx-16 lg:-mx-32">
                <ScrollingPanel />
              </motion.div>

              {/* StatsSection */}
              <motion.div variants={item} className="mt-16 -mx-8 md:-mx-16 lg:-mx-32">
                <StatsSection />
              </motion.div>

              {/* Project Types */}
              <motion.div variants={item} className="mt-16 -mx-8 md:-mx-16 lg:-mx-32">
                <ProjectTypes />
              </motion.div>

              {/* Features Grid */}
              <motion.div variants={item}>
                <FeaturesGrid />
              </motion.div>

              {/* Testimonial Section */}
              <motion.div variants={item} className="mt-16 -mx-8 md:-mx-16 lg:-mx-32">
                <TestimonialSection />
              </motion.div>

              {/* User Reviews */}
              <motion.div variants={item} className="mt-16 -mx-8 md:-mx-16 lg:-mx-32">
                <UserReviews />
              </motion.div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

