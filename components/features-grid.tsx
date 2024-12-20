'use client'

import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"
import React from 'react'

export function FeaturesGrid() {
  const cards = [
    {
      title: "AI-Powered Conversion",
      description: "Transform any 2D image into a detailed 3D model with our advanced AI technology.",
      metric: "99.9%",
      detail: "Accuracy",
    },
    {
      title: "Neural Processing",
      description: "Advanced neural networks analyze every pixel to ensure accurate 3D conversion.",
      metric: "100M+",
      detail: "Parameters",
    },
    {
      title: "Real-time Preview",
      description: "Watch your 2D images transform into 3D models in real-time with instant feedback.",
      metric: "0.1s",
      detail: "Latency",
    },
    {
      title: "Optimization Engine",
      description: "Automatically optimize 3D models for various platforms while maintaining quality.",
      metric: "70%",
      detail: "Faster",
    },
    {
      title: "Performance Metrics",
      description: "Real-time monitoring and optimization of processing performance.",
      metric: "99%",
      detail: "Efficiency",
    },
    {
      title: "Customization Options",
      description: "Tailor the 3D conversion process to meet your specific project requirements.",
      metric: "100+",
      detail: "Settings",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white/90">
            Transform Your Vision Into Digital Reality
          </h2>
          <p className="text-lg text-gray-400">
            Experience the next generation of AI-powered 3D conversion with unmatched precision and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative p-6 rounded-xl",
                "bg-purple-900/20 backdrop-blur-sm",
                "border border-purple-500/20 hover:border-purple-500/40",
                "transition-colors"
              )}
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="font-mono text-sm mb-2">
                  <span className="text-lg font-bold text-purple-400">{card.metric}</span>
                  <span className="text-gray-400 ml-2">{card.detail}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

