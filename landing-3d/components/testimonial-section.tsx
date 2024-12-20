'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils"

const cards = [
  {
    number: "01",
    title: "Service for Any Level of Expertise",
    description: "Our AI-powered 3D conversion tool caters to beginners and experts alike, providing intuitive interfaces and advanced features for all skill levels.",
  },
  {
    number: "02",
    title: "Industry Best Practices",
    description: "We implement cutting-edge AI algorithms and follow the latest industry standards to ensure top-quality 3D model generation.",
    hasLearnMore: true,
  },
  {
    number: "03",
    title: "Protected by Advanced Security",
    description: "Your designs and data are safeguarded with state-of-the-art encryption and secure cloud storage, ensuring your intellectual property remains protected.",
  },
  {
    number: "04",
    title: "Continuous Innovation",
    description: "Our team of AI researchers and 3D modeling experts constantly push the boundaries of what's possible in automated 3D conversion.",
  },
  {
    number: "05",
    title: "24/7 Expert Support",
    description: "Get round-the-clock assistance from our team of 3D modeling and AI specialists, ensuring you're never stuck in your creative process.",
  }
]

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const constraintsRef = useRef(null)

  const nextCard = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === cards.length ? 0 : prevIndex + 1
    )
  }

  const prevCard = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className="w-full bg-black/30 backdrop-blur-sm border-t border-b border-purple-500/10 py-32 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Your <span className="text-purple-400">trusted</span> partner in<br />
            AI-powered 3D conversion.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of image transformation with our<br />
            cutting-edge AI technology and unparalleled expertise.
          </p>
        </div>

        <div className="relative min-h-[400px]" ref={constraintsRef}>
          <AnimatePresence initial={false} custom={direction}>
            <div className="flex gap-6 overflow-visible px-4">
              {[-1, 0, 1].map((offset) => {
                const index = (currentIndex + offset + cards.length) % cards.length
                const card = cards[index]
                const isActive = offset === 0

                return (
                  <motion.div
                    key={card.number}
                    className={cn(
                      "w-full md:w-1/3 shrink-0",
                      "rounded-3xl p-8",
                      "backdrop-blur-xl border border-purple-500/20",
                      isActive ? "bg-purple-900/50 text-white" : "bg-black/30 text-gray-300",
                      "transition-all duration-500"
                    )}
                    initial={{ 
                      scale: 0.9, 
                      opacity: 0,
                      x: offset * 100 + (direction * 100)
                    }}
                    animate={{ 
                      scale: isActive ? 1 : 0.9,
                      opacity: isActive ? 1 : 0.6,
                      x: offset * 100
                    }}
                    exit={{ 
                      scale: 0.9,
                      opacity: 0,
                      x: offset * 100 - (direction * 100)
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                    drag="x"
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) * velocity.x

                      if (swipe < -1000) {
                        nextCard()
                      } else if (swipe > 1000) {
                        prevCard()
                      }
                    }}
                  >
                    <div className="flex flex-col h-full">
                      <span className={cn(
                        "text-xl font-mono mb-6",
                        isActive ? "text-purple-300" : "text-purple-400/60"
                      )}>
                        {card.number}.
                      </span>
                      <h3 className={cn(
                        "text-2xl font-bold mb-4",
                        isActive ? "text-white" : "text-gray-200"
                      )}>
                        {card.title}
                      </h3>
                      <p className={cn(
                        "text-base mb-8",
                        isActive ? "text-gray-200" : "text-gray-400"
                      )}>
                        {card.description}
                      </p>
                      {card.hasLearnMore && (
                        <div className="mt-auto">
                          <button className="group flex items-center gap-2 text-purple-400 font-semibold">
                            Learn More 
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-12 gap-3">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentIndex 
                  ? "bg-purple-500 w-8" 
                  : "bg-purple-500/20 hover:bg-purple-500/40"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

