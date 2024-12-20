'use client'

import { motion, useAnimation } from 'framer-motion'
import { Quote } from 'lucide-react'
import Image from 'next/image'
import { cn } from "@/lib/utils"

const reviews = [
  {
    text: "The AI-powered 3D conversion is revolutionary. It's transformed how we showcase products to our clients, saving us countless hours of manual modeling work.",
    author: "Sarah Chen",
    role: "Product Design Lead",
    avatar: "/placeholder.svg?height=48&width=48"
  },
  {
    text: "Incredible accuracy and detail in every conversion. What used to take days now happens in minutes. This tool has become indispensable for our design workflow.",
    author: "Marcus Rodriguez",
    role: "Creative Director",
    avatar: "/placeholder.svg?height=48&width=48"
  },
  {
    text: "The ease of use combined with the quality of output is outstanding. It's helped us scale our 3D content creation without compromising on quality.",
    author: "Emily Thompson",
    role: "3D Artist",
    avatar: "/placeholder.svg?height=48&width=48"
  }
]

export function UserReviews() {
  return (
    <section className="w-full bg-black/30 backdrop-blur-sm border-t border-b border-purple-500/10 py-32 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent" />
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              What people are saying about us
            </motion.h2>
          </div>
          <div>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400"
            >
              See how businesses are transforming their design workflows and achieving remarkable results with our AI-powered 3D conversion technology.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className={cn(
                  "h-full p-8 rounded-2xl",
                  "bg-purple-900/20 backdrop-blur-sm",
                  "border border-purple-500/20",
                  "transition-all duration-300"
                )}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(168, 85, 247, 0.15)",
                  transition: { duration: 0.2 }
                }}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div 
                  variants={{
                    rest: { rotate: 0 },
                    hover: { rotate: 10 }
                  }}
                  className="mb-6"
                >
                  <Quote className="w-12 h-12 text-purple-400 opacity-50" />
                </motion.div>
                <p className="text-gray-300 mb-8 flex-grow">
                  {review.text}
                </p>
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <Image
                      src={review.avatar}
                      alt={review.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-white">
                      {review.author}
                    </div>
                    <div className="text-sm text-purple-400">
                      {review.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

