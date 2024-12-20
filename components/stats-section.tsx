'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

interface StatItemProps {
  value: number
  label: string
  duration?: number
  isLargeNumber?: boolean
  index: number
}

function StatItem({ value, label, duration = 4, isLargeNumber = false, index }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    margin: "-100px",
    once: false // Allow re-running animation when scrolling back into view
  })

  useEffect(() => {
    if (isInView) {
      setCount(0) // Reset count when coming into view
      let start = 0
      const end = value
      const incrementTime = isLargeNumber ? 
        duration * 1000 / (end / 400) : 
        duration * 1000 / (end / 100)   
      
      const counter = setInterval(() => {
        const increment = isLargeNumber ? 
          Math.ceil(end / 400) : 
          Math.ceil(end / 200)   
        
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(counter)
        } else {
          setCount(start)
        }
      }, incrementTime)

      return () => clearInterval(counter)
    }
  }, [value, duration, isInView, isLargeNumber])

  const slideVariants = {
    hidden: { 
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50 // Alternate slide direction
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2
      }
    }
  }

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={slideVariants}
      className="text-center"
    >
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent mb-2 font-mono">
        {count.toLocaleString()}+
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  )
}

export function StatsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { 
    margin: "-100px",
    once: false
  })

  const companies = [
    { 
      name: "TechVision AI",
      logo: (
        <div className="font-light text-2xl tracking-tight text-neutral-300">
          vision
        </div>
      )
    },
    { 
      name: "Quantum Labs",
      logo: (
        <div className="font-serif text-2xl tracking-wide text-purple-300">
          quantum
        </div>
      )
    },
    { 
      name: "NeuraTech",
      logo: (
        <div className="font-mono text-xl uppercase tracking-widest text-neutral-400">
          NEURA
        </div>
      )
    },
    { 
      name: "FusionAI",
      logo: (
        <div className="font-sans text-2xl font-thin tracking-tight text-purple-200">
          fusion
        </div>
      )
    },
    { 
      name: "CoreLogic",
      logo: (
        <div className="font-serif italic text-2xl tracking-tight text-neutral-300">
          core
        </div>
      )
    },
    { 
      name: "SynthWave",
      logo: (
        <div className="font-mono text-xl uppercase tracking-[0.2em] text-purple-300">
          SYNTH
        </div>
      )
    },
  ]

  const stats = [
    { value: 2999289, label: "Images Processed", isLargeNumber: true },
    { value: 5999, label: "Active Users", isLargeNumber: false },
    { value: 1799573, label: "Models Created", isLargeNumber: true },
  ]

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const logoVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({ 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: i * 0.1
      }
    })
  }

  return (
    <div 
      ref={sectionRef}
      className="w-full bg-black/20 backdrop-blur-sm border-t border-b border-purple-500/10 py-16 mb-32"
    >
      <div className="container px-4">
        <motion.h2 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
        >
          Trusted by Industry Leaders
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-lg md:text-xl text-center mb-12 text-purple-300 max-w-3xl mx-auto"
        >
          Join thousands of satisfied users who have revolutionized their workflow
          with our AI-powered 3D conversion technology.
        </motion.p>
        
        {/* Company logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 mb-16">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={logoVariants}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              {company.logo}
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              duration={4}
              isLargeNumber={stat.isLargeNumber}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

